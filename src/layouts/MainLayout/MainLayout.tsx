import { Content, Header } from '@components/micro/Main'
import SpaceContainer from '@containers/SpaceContainer'
import { Outlet } from 'react-router-dom'

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
