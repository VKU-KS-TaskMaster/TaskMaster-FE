import { Outlet } from 'react-router-dom'

import { Content, Header } from '@components/micro/Main'
import SpaceContainer from '@containers/SpaceContainer'

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
