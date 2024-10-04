import React, { ReactNode } from 'react'
import { Divider } from 'antd'

import Sidebar from '@components/micro/Sidebar'
import colors from '@constants/colors'
import { useAppSelector } from '@features/hook'
import { cn } from '@utils/base'

interface ContentProps {
  isCollapsed?: boolean
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ isCollapsed = false, children }) => {
  const themeMode = useAppSelector((state) => state.theme.mode)
  return (
    <div className={cn('flex flex-row', `h-[calc(100vh-var(--header-height))]`)}>
      <Sidebar isCollapsed={isCollapsed} />
      <Divider
        variant='solid'
        type='vertical'
        className='m-0 h-full'
        style={{ borderColor: colors[themeMode].BORDER.BOTTOM }}
      />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default Content
