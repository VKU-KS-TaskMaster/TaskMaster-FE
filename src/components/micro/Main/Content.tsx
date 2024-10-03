import colors from '@constants/colors'
import Sidebar from '../Sidebar'
import { cn } from '@utils/base'
import { Divider } from 'antd'
import { ReactNode } from 'react'
import { useAppSelector } from '@features/hook'

function Content({ children }: { children: ReactNode }) {
  const themeMode = useAppSelector((state) => state.theme.mode)

  return (
    <div className={cn('flex flex-row', `h-[calc(100vh-var(--header-height))]`)}>
      <Sidebar />
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
