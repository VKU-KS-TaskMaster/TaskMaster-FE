import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import SpaceContainer from '@containers/SpaceContainer'
import { Content, Header } from '@components/micro/Main'

function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <SpaceContainer>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Content isCollapsed={isCollapsed}>
        <Outlet />
      </Content>
    </SpaceContainer>
  )
}

export default MainLayout
