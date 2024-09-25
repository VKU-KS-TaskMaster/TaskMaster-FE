import { Content, Header } from '@components/micro/Main'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default MainLayout
