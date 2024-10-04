import React, { useCallback, useRef, useState } from 'react'

import ExpandedSidebar from '@components/micro/Sidebar/ExpandedSidebar'
import CollapsedSidebar from './CollapsedSidebar'

// Main Component
const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback(() => {
    if (isExpanded) return
    hoverTimerRef.current = setTimeout(() => {
      setIsExpanded(true)
    }, 300)
  }, [isExpanded])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
    }

    if (!isExpanded) return
    setIsExpanded(false)
  }, [isExpanded])

  const handleCollapse = useCallback(() => {
    setIsExpanded(false)
    setIsCollapsed((prev) => !prev)
  }, [])

  return (
    <div className='flex h-full flex-col overflow-hidden bg-light-bg-navigationSidebar text-light-text-weak dark:bg-bg-navigationSidebar dark:text-text-weak'>
      {!isCollapsed ? (
        <ExpandedSidebar isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
      ) : (
        <CollapsedSidebar
          isExpanded={isExpanded}
          setIsCollapsed={setIsCollapsed}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  )
}

export default Sidebar
