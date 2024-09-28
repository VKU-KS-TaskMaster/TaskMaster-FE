import { Form, FormProps, Input } from 'antd'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

function ProjectTaskForm() {
  return (
    <Form
      name='basic'
      layout='vertical'
      autoComplete='off'
      className='border-b-[1px] border-borderBottom p-6'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          placeholder=''
          className='rounded-sm border-0 border-b-[1px] border-borderBottom bg-bg-inputModal px-3 py-1 text-text outline-none focus:border-text focus:outline-0 focus:ring-0'
        />
      </Form.Item>

      {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
<Button type='primary' htmlType='submit'>
  Submit
</Button>
</Form.Item> */}
    </Form>
  )
}

export default ProjectTaskForm
