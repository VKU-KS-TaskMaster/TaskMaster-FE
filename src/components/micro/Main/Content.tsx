import colors from '@constants/colors'
import { cn } from '@utils/base'
import { Divider } from 'antd'
import { ReactNode } from 'react'
import Sidebar from '../Sidebar/Sidebar'

function Content({ children }: { children: ReactNode }) {
  return (
    <div className={cn('flex flex-row', `h-[calc(100vh-var(--header-height))]`)}>
      <Sidebar />
      <Divider variant='solid' type='vertical' className='m-0 h-full' style={{ borderColor: colors.BORDER_BOTTOM }} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default Content
