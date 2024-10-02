import { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-grow justify-center px-5'>
      <div className='grid w-full grid-cols-12'>
        <div className='col-span-12 hidden items-end md:col-span-4 md:flex'>
          <div
            className='h-[300px] w-[450px] bg-cover bg-center'
            style={{
              backgroundImage: 'url(/images/auth_bg_2.png)'
            }}
          ></div>
        </div>

        <div className='col-span-12 flex h-full w-full items-center justify-center md:col-span-4'>{children}</div>

        <div className='col-span-12 hidden items-end justify-end md:col-span-4 md:flex'>
          <div
            className='h-[300px] w-[450px] bg-cover bg-center'
            style={{
              backgroundImage: 'url(/images/auth_bg_1.png)'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Content
