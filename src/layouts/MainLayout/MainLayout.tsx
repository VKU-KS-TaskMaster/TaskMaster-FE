import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import SpaceContainer from '@containers/SpaceContainer'
import { Content, Header } from '@components/micro/Main'

function MainLayout() {
  return (
    <SpaceContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </SpaceContainer>
  )
}

export default MainLayout
