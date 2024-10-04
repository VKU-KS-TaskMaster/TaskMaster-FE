import ExpandSidebar from '@components/micro/Sidebar/ExpandSidebar'
import React from 'react'

// Main Component
const Sidebar: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed = false }) => {
  return (
    <div className='flex h-full w-56 flex-col overflow-hidden bg-navigation-headerBg text-text-weak'>
      {!isCollapsed ? <ExpandSidebar /> : <div>Collapsed</div>}
    </div>
  )
}

export default Sidebar
