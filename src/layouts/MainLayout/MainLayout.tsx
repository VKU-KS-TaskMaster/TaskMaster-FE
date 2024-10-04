import Content from '@components/micro/Main/Content'
import Header from '@components/micro/Main/Header'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <div>
      <Header isCollapsed setIsCollapsed={setIsCollapsed} />
      <Content isCollapsed={isCollapsed}>
        <Outlet />
      </Content>
    </div>
  )
}

export default MainLayout
