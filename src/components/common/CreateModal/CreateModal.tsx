import { Modal, Tabs, TabsProps } from 'antd'

import ProjectTaskForm from './ProjectTaskForm'
import MenuLabelTranslItem from '../MenuLabelTranslItem'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { CloseIcon } from '@components/common/Icon'
import { setCreateModal } from '@features/slices/base'
import { useAppDispatch, useAppSelector } from '@features/hook'

export const TAB_KEYS = {
  PROJECT_TASK: 'projectTaskTab'
}

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'modal.create'
}

const TAB_ITEMS: TabsProps['items'] = [
  {
    key: TAB_KEYS.PROJECT_TASK,
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='projectTaskTab.title' />,
    children: <ProjectTaskForm />
  },
  {
    key: '2',
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='milestoneTab.title' />,
    children: <ProjectTaskForm />
  },
  {
    key: '3',
    label: <MenuLabelTranslItem ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='teamTab.title' />
  }
]

function CreateModal() {
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
      title={
        <Tabs
          tabPosition='top'
          activeKey={activeKey}
          items={TAB_ITEMS}
          tabBarStyle={{
            margin: 0,
            padding: '0 1.5rem'
          }}
          onChange={handleTabOnChange}
        />
      }
      classNames={{
        content: 'p-0',
        header: 'm-0',
        body: 'p-0',
        footer: 'm-0 px-4 py-2'
      }}
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={
        <Button
          className='mt-[-8px]'
          icon={<CloseIcon />}
          variant={ButtonVariant.SQUARE}
          type={ButtonType.DEFAULT}
          onClick={handleCancel}
        />
      }
    />
  )
}

export default CreateModal
