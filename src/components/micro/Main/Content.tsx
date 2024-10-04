import Sidebar from '@components/micro/Sidebar'
import colors from '@constants/colors'
import { cn } from '@utils/base'
import { Divider } from 'antd'
import React, { ReactNode } from 'react'

interface ContentProps {
  isCollapsed?: boolean
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ isCollapsed = false, children }) => {
  return (
    <div className={cn('flex flex-row', `h-[calc(100vh-var(--header-height))]`)}>
      <Sidebar isCollapsed={isCollapsed} />
      <Divider variant='solid' type='vertical' className='m-0 h-full' style={{ borderColor: colors.BORDER_BOTTOM }} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default Content
