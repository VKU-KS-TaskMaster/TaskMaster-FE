import { Button } from 'antd'

import ProjectAPI from '@apis/project.api'

function Register() {
  const getProject = async (key: string) => {
    const res = await ProjectAPI.get(key)

    console.log(res.data)
  }

  return <Button onClick={() => getProject('PRJ_1726225499304.283829854')}>clicked</Button>
}

export default Register
