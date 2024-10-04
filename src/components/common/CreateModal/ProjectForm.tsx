import { Fragment, useCallback, useState } from 'react'
import dayjs from 'dayjs'
import { RuleObject } from 'antd/es/form'
import { PaperClipOutlined } from '@ant-design/icons'
import { Trans, useTranslation } from 'react-i18next'
import { DatePicker, Form, Input, notification, Select } from 'antd'

import paths from '@constants/paths'
import UploadBox from '@components/common/UploadBox'
import SpaceAPI from '@apis/space.api'
import ProjectAPI from '@apis/project.api'
import DebounceSelect from '@components/common/Select'
import Button, { ButtonType, ButtonVariant } from '@components/base/Button'
import { useAppDispatch } from '@features/hook'
import ProjectStatusEnumTransl, {
  PROJECT_STATUS_CANCELLED,
  PROJECT_STATUS_COMPLETED,
  PROJECT_STATUS_DELETED,
  PROJECT_STATUS_INPROGRESS,
  PROJECT_STATUS_ONLEAVE,
  PROJECT_STATUS_PENDING,
  PROJECT_STATUS_REVIEW
} from '@constants/enums/project/ProjectStatusEnum'
import ProjectCurrencyEnumTransl, {
  PROJECT_CURRENCY_EN,
  PROJECT_CURRENCY_KR,
  PROJECT_CURRENCY_VI
} from '@constants/enums/project/ProjectCurrencyEnum'
import { setCreateModal } from '@features/slices/base'
import { Link, useParams } from 'react-router-dom'

type FieldType = Record<FORM_ITEM_KEYS, string>

type FORM_ITEM_TYPE = {
  label: string
  type?: string
  placeholder: string
  default?: string | []
  rules?: RuleObject[]
  props?: { [key in string]: any }
}

enum FORM_ITEM_KEYS {
  NAME = 'name',
  DESC = 'description',
  STATUS = 'status',
  CURRENCY = 'currency',
  BEGIN_DATE = 'begin_date',
  DUE_DATE = 'due_date',
  MEMBER = 'members',
  TEAM = 'teams'
}

const TRANSL_CONFIG = {
  ns: 'cms',
  prefix: 'modal.create'
}

const PROJECT_STATUS_OPTIONS = [
  { value: PROJECT_STATUS_PENDING, label: ProjectStatusEnumTransl[PROJECT_STATUS_PENDING] },
  { value: PROJECT_STATUS_INPROGRESS, label: ProjectStatusEnumTransl[PROJECT_STATUS_INPROGRESS] },
  { value: PROJECT_STATUS_REVIEW, label: ProjectStatusEnumTransl[PROJECT_STATUS_REVIEW] },
  { value: PROJECT_STATUS_COMPLETED, label: ProjectStatusEnumTransl[PROJECT_STATUS_COMPLETED] },
  { value: PROJECT_STATUS_ONLEAVE, label: ProjectStatusEnumTransl[PROJECT_STATUS_ONLEAVE] },
  { value: PROJECT_STATUS_CANCELLED, label: ProjectStatusEnumTransl[PROJECT_STATUS_CANCELLED] },
  { value: PROJECT_STATUS_DELETED, label: ProjectStatusEnumTransl[PROJECT_STATUS_DELETED] }
]

const PROJECT_CURRENCY_OPTIONS = [
  { value: PROJECT_CURRENCY_VI, label: ProjectCurrencyEnumTransl[PROJECT_CURRENCY_VI] },
  { value: PROJECT_CURRENCY_EN, label: ProjectCurrencyEnumTransl[PROJECT_CURRENCY_EN] },
  { value: PROJECT_CURRENCY_KR, label: ProjectCurrencyEnumTransl[PROJECT_CURRENCY_KR] }
]

const FORM_ITEMS: Record<FORM_ITEM_KEYS, FORM_ITEM_TYPE> = {
  [FORM_ITEM_KEYS.NAME]: {
    label: 'projectTab.nameTitle',
    placeholder: 'projectTab.namePlaceholder',
    rules: [
      {
        required: true,
        message: <Trans ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='projectTab.nameRequired' />
      }
    ],
    props: {
      required: true,
      name: FORM_ITEM_KEYS.NAME
    }
  },
  [FORM_ITEM_KEYS.DESC]: {
    label: 'descTitle',
    placeholder: 'descPlaceholder',
    rules: [
      {
        required: true,
        message: <Trans ns={TRANSL_CONFIG.ns} prefix={TRANSL_CONFIG.prefix} i18nKey='descRequired' />
      }
    ],
    props: {
      required: true,
      name: FORM_ITEM_KEYS.DESC
    }
  },
  [FORM_ITEM_KEYS.STATUS]: {
    label: 'statusTitle',
    placeholder: '',
    default: PROJECT_STATUS_PENDING,
    props: {
      name: FORM_ITEM_KEYS.STATUS
    }
  },
  [FORM_ITEM_KEYS.CURRENCY]: {
    label: 'projectTab.currencyTitle',
    placeholder: '',
    default: PROJECT_CURRENCY_VI,
    props: {
      name: FORM_ITEM_KEYS.CURRENCY
    }
  },
  [FORM_ITEM_KEYS.BEGIN_DATE]: {
    label: 'beginDateTitle',
    placeholder: '',
    type: 'date',
    props: {
      name: FORM_ITEM_KEYS.BEGIN_DATE
    }
  },
  [FORM_ITEM_KEYS.DUE_DATE]: {
    label: 'dueDateTitle',
    placeholder: '',
    type: 'date',
    props: {
      name: FORM_ITEM_KEYS.DUE_DATE
    }
  },
  [FORM_ITEM_KEYS.MEMBER]: {
    label: 'memberTitle',
    placeholder: 'memberPlaceholder',
    default: [],
    props: {
      name: FORM_ITEM_KEYS.MEMBER
    }
  },
  [FORM_ITEM_KEYS.TEAM]: {
    label: 'teamTitle',
    placeholder: 'teamPlaceholder',
    default: [],
    props: {
      name: FORM_ITEM_KEYS.TEAM
    }
  }
}

const dateFormat = 'YYYY-MM-DD'

type OptionValue = { label: string; value: string }

async function handleGetMembers(search: string): Promise<OptionValue[]> {
  const res = await SpaceAPI.searchMembers('SPA_1726046775277.908218801', { q: search })
  const data = res.data.data

  if (!data) return []

  return data.map((user: { code: string }) => ({
    label: user.code,
    value: user.code
  }))
}

async function handleGetTeams(search: string): Promise<OptionValue[]> {
  const res = await SpaceAPI.searchMembers('SPA_1726046775277.908218801', { q: search })
  const data = res.data.data

  if (!data) return []

  return data.map((user: { code: string }) => ({
    label: user.code,
    value: user.code
  }))
}

function ProjectForm() {
  const [api, contextHolder] = notification.useNotification()
  const { spaceCode } = useParams()
  const [form] = Form.useForm()
  const [uploadBoxShowed, setUploadBoxShowed] = useState<boolean>(false)
  const [memberOptions, setMemberOptions] = useState<OptionValue[]>([])
  const [teamOptions, setTeamOptions] = useState<OptionValue[]>([])
  const dispatch = useAppDispatch()

  const { t: tCms } = useTranslation('cms')
  const { t: tModal } = useTranslation(TRANSL_CONFIG.ns, {
    keyPrefix: TRANSL_CONFIG.prefix
  })

  const handleSubmit = useCallback(async () => {
    form.validateFields().then(async () => {
      const body = {
        ...form.getFieldsValue(),
        status: form.getFieldValue(FORM_ITEM_KEYS.STATUS) || FORM_ITEMS.status.default,
        currency: form.getFieldValue(FORM_ITEM_KEYS.CURRENCY) || FORM_ITEMS.currency.default,
        begin_date: dayjs(form.getFieldValue(FORM_ITEM_KEYS.BEGIN_DATE) || new Date()).format(dateFormat),
        due_date: dayjs(form.getFieldValue(FORM_ITEM_KEYS.DUE_DATE) || new Date()).format(dateFormat),
        members: form.getFieldValue(FORM_ITEM_KEYS.MEMBER).map((m: OptionValue & { key: string }) => m.key),
        space_code: spaceCode,
        user_code: 'CWysqmgzN3cfAdnVdClR3Bwl7X23'
      }

      const res = await ProjectAPI.store(body)
      const data = res.data.data

      if (res.status === 200 && data) {
        api['success']({
          message: tCms('notificationToast.createTitle', { entityName: tModal('projectTab.title') }),
          description: (
            <Trans
              ns='cms'
              i18nKey='notificationToast.createSuccessDescription'
              values={{ entityCode: data.code, entityName: tModal('projectTab.title') }}
              components={{
                entityLink: (
                  <Link
                    className='text-text-active underline'
                    to={paths.PROJECT_DETAIL.replace(':projectCode', data.code)}
                  />
                )
              }}
            ></Trans>
          )
        })

        form.resetFields()

        dispatch(setCreateModal({ show: false }))
      }
    })
  }, [form])

  const handleCancel = () => {
    dispatch(setCreateModal({ show: false }))
  }

  const handleShowUploadBox = () => {
    setUploadBoxShowed(true)
  }

  return (
    <Fragment>
      <Form name='basic' layout='vertical' autoComplete='off' initialValues={{ remember: true }} form={form}>
        <div className='border-border-bottom border-b-[1px] p-6'>
          <Form.Item<FieldType>
            label={tModal(FORM_ITEMS.name.label)}
            rules={FORM_ITEMS.name.rules}
            {...FORM_ITEMS.name.props}
          >
            <Input
              placeholder={tModal(FORM_ITEMS.name?.placeholder)}
              className='border-border-bottom focus:border-text text-text-active rounded-sm border-0 border-b-[1px] bg-bg-inputModal px-3 py-1 outline-none placeholder:text-text-weak focus:outline-0 focus:ring-0'
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={tModal(FORM_ITEMS.description.label)}
            rules={FORM_ITEMS.description.rules}
            {...FORM_ITEMS.description.props}
          >
            <Input.TextArea
              rows={3}
              placeholder={tModal(FORM_ITEMS.description?.placeholder)}
              className='border-border-bottom focus:border-text text-text-active rounded-sm border-0 border-b-[1px] bg-bg-inputModal px-3 py-1 outline-none placeholder:text-text-weak focus:outline-0 focus:ring-0'
            />
          </Form.Item>
          <div className='flex gap-3'>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.status.label)}
              rules={FORM_ITEMS.status.rules}
              className='flex-1'
              {...FORM_ITEMS.status.props}
            >
              <Select
                options={PROJECT_STATUS_OPTIONS.map((option) => {
                  return {
                    ...option,
                    label: tCms(option.label)
                  }
                })}
                defaultValue={FORM_ITEMS.status.default}
                rootClassName='bg-bg-weak'
                className='border-border-bottom rounded-sm border-0 border-b-[1px]'
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.currency.label)}
              rules={FORM_ITEMS.currency.rules}
              className='flex-1'
              {...FORM_ITEMS.currency.props}
            >
              <Select
                options={PROJECT_CURRENCY_OPTIONS.map((option) => {
                  return {
                    ...option,
                    label: tCms(option.label)
                  }
                })}
                defaultValue={FORM_ITEMS.currency.default}
                rootClassName='bg-bg-weak'
                className='border-border-bottom rounded-sm border-0 border-b-[1px]'
              />
            </Form.Item>
          </div>
          <div className='flex gap-3'>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.begin_date.label)}
              rules={FORM_ITEMS.begin_date.rules}
              className='flex-1'
              {...FORM_ITEMS.begin_date.props}
            >
              <DatePicker
                format={dateFormat}
                type={FORM_ITEMS.begin_date.type}
                defaultValue={dayjs(new Date())}
                className='border-border-bottom hover:text-text-active w-full rounded-sm border-0 border-b-[1px] bg-bg-inputModal px-3 py-1 text-text-weak'
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.due_date.label)}
              rules={FORM_ITEMS.due_date.rules}
              className='flex-1'
              {...FORM_ITEMS.due_date.props}
            >
              <DatePicker
                format={dateFormat}
                type={FORM_ITEMS.due_date.type}
                defaultValue={dayjs(new Date())}
                className='border-border-bottom hover:text-text-active w-full rounded-sm border-0 border-b-[1px] bg-bg-inputModal px-3 py-1 text-text-weak'
              />
            </Form.Item>
          </div>
          <div className='flex gap-3'>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.members.label)}
              rules={FORM_ITEMS.members.rules}
              className='flex-1'
              {...FORM_ITEMS.members.props}
            >
              {/* <Select
                showSearch
                options={memberOptions}
                onSearch={handleSearchMembers}
                rootClassName='bg-bg-weak'
                className='rounded-sm border-0 border-b-[1px] border-border-bottom'
              /> */}
              <DebounceSelect
                mode='multiple'
                value={memberOptions}
                placeholder={tModal(FORM_ITEMS.members.placeholder)}
                fetchOptions={handleGetMembers}
                onChange={(newValue) => {
                  setMemberOptions(newValue as OptionValue[])
                }}
                className='border-border-bottom rounded-sm border-0 border-b-[1px]'
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={tModal(FORM_ITEMS.teams.label)}
              rules={FORM_ITEMS.teams.rules}
              className='flex-1'
              {...FORM_ITEMS.teams.props}
            >
              <DebounceSelect
                mode='multiple'
                value={memberOptions}
                placeholder={tModal(FORM_ITEMS.teams.placeholder)}
                fetchOptions={handleGetTeams}
                onChange={(newValue) => {
                  setMemberOptions(newValue as OptionValue[])
                }}
                className='border-border-bottom rounded-sm border-0 border-b-[1px]'
              />
            </Form.Item>
          </div>
          {uploadBoxShowed && <UploadBox />}
        </div>

        <div className='m-0 flex w-full justify-end gap-2 bg-bg-inputModal px-4 py-2'>
          <Button
            variant={ButtonVariant.SQUARE}
            disabled={uploadBoxShowed}
            type={ButtonType.DEFAULT}
            icon={<PaperClipOutlined />}
            onClick={handleShowUploadBox}
          />
          <Button variant={ButtonVariant.GHOST} type={ButtonType.DEFAULT} onClick={handleCancel}>
            {tCms('button.cancel')}
          </Button>
          <Button variant={ButtonVariant.GHOST} type={ButtonType.DEFAULT} onClick={handleSubmit}>
            {tCms('button.submit')}
          </Button>
        </div>
      </Form>
      {contextHolder}
    </Fragment>
  )
}

export default ProjectForm
