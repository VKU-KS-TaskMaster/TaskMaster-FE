import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Divider } from 'antd'
import colors from '@constants/colors'

function Content({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row'>
      <div className='w-[226px]'>
        <Sidebar />
      </div>
      <Divider variant='solid' type='vertical' className='m-0 h-screen' style={{ borderColor: colors.DIVIDER_BG }} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default Content
