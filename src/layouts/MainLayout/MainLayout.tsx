import { Content, Header } from '@components/micro/Auth'
import SpaceContainer from '@containers/SpaceContainer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <div>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Content isCollapsed={isCollapsed}>
        <Outlet />
      </Content>
    </SpaceContainer>
  )
}

export default MainLayout
