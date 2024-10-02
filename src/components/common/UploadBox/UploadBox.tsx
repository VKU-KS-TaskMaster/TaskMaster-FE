import { UploadOutlined } from '@ant-design/icons'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { Upload } from 'antd'

function UploadBox() {
  return (
    <Upload action='https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload' listType='picture'>
      <Button type={ButtonType.PRIMARY} variant={ButtonVariant.GHOST} icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  )
}

export default UploadBox
