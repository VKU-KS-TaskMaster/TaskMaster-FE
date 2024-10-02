import { Modal, Tabs, TabsProps } from 'antd'

import ProjectForm from './ProjectForm'
import MenuLabelTranslItem from '../MenuLabelTranslItem'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { CloseIcon } from '@components/common/Icon'
import { setCreateModal } from '@features/slices/base'
import { EllipsisOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@features/hook'

export const TAB_KEYS = {
  PROJECT: 'projectTab',
  TASK: 'taskTab',
  MILESTONE: 'milestoneTab',
  TEAM: 'teamTab'
}

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'modal.create'
}

const TAB_ITEMS: TabsProps['items'] = [
  {
    key: TAB_KEYS.PROJECT,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='projectTab.title' />,
    children: <ProjectForm />
  },
  {
    key: TAB_KEYS.TASK,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='taskTab.title' />,
    children: <ProjectForm />
  },
  {
    key: TAB_KEYS.MILESTONE,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='milestoneTab.title' />,
    children: <ProjectForm />
  },
  {
    key: TAB_KEYS.TEAM,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='teamTab.title' />
  }
]

function CreateModal() {
  const [modal, contextHolder] = Modal.useModal()
  const activeKey = useAppSelector((state) => state.base.createModal.key)
  const show = useAppSelector((state) => state.base.createModal.show)
  const dispatch = useAppDispatch()

  const handleOk = () => {
    dispatch(setCreateModal({ show: false }))
  }

  const handleCancel = () => {
    dispatch(setCreateModal({ show: false }))
  }

  const handleTabOnChange = (activeKey: string) => {
    dispatch(setCreateModal({ key: activeKey, show }))
  }

  return (
    <Modal
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
      classNames={{
        content: 'p-0',
        header: 'm-0',
        body: 'p-0'
      }}
      title={
        <Tabs
          tabPosition='top'
          activeKey={activeKey}
          items={TAB_ITEMS}
          onChange={handleTabOnChange}
          tabBarStyle={{
            margin: 0,
            padding: '0 1.5rem'
          }}
          more={{
            icon: <EllipsisOutlined className='text-textWeak hover:text-text' />
          }}
        />
      }
      closeIcon={
        <Button
          className='mt-[-8px]'
          icon={<CloseIcon />}
          variant={ButtonVariant.SQUARE}
          type={ButtonType.DEFAULT}
          onClick={handleCancel}
        />
      }
      footer={<></>}
    />
  )
}

export default CreateModal
