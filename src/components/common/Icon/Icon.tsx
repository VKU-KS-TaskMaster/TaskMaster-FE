import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  ClusterOutlined,
  CommentOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FileProtectOutlined,
  FilterOutlined,
  GoogleOutlined,
  HomeOutlined,
  InboxOutlined,
  LikeFilled,
  LikeOutlined,
  LogoutOutlined,
  MutedOutlined,
  PaperClipOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ProductOutlined,
  ProjectOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
  SmileOutlined,
  SnippetsOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  StarFilled,
  StarOutlined,
  SubnodeOutlined,
  TeamOutlined,
  UpCircleOutlined,
  UpOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { cn } from '@utils/base'

type Icon = {
  width?: number
  height?: number
  className?: string
  color?: string
}

//Project
export const SpaceIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ClusterOutlined width={width} height={height} color={color} className={className} />
}

export const TaskIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CheckCircleOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectOverviewIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ProjectOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectBoardIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ProjectOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectGanttIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SubnodeOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectDashboardIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <BarChartOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectCalendarIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CalendarOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectWorkflowIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ApartmentOutlined width={width} height={height} color={color} className={className} />
}

export const ProjectFileIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <FileProtectOutlined width={width} height={height} color={color} className={className} />
}

//Common
export const AddIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <PlusOutlined width={width} height={height} color={color} className={className} />
}

export const CreateIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <PlusCircleOutlined width={width} height={height} color={color} className={className} />
}

export const SearchIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SearchOutlined width={width} height={height} color={color} className={className} />
}

export const UploadFileCompleteIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CheckOutlined width={width} height={height} color={color} className={className} />
}

export const MoreActionIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <EllipsisOutlined width={width} height={height} color={color} className={className} />
}

export const CloseIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CloseOutlined width={width} height={height} color={color} className={className} />
}

export const UserIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <UserOutlined width={width} height={height} color={color} className={className} />
}

export const GoogleIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <GoogleOutlined width={width} height={height} color={color} className={className} />
}

export const DueDateIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  const defaultClassName = 'border-2 border-dashed border-gray-500 p-2 rounded-full '

  return <CalendarOutlined width={width} height={height} color={color} className={defaultClassName + className} />
}

export const AssignMemberIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <UserAddOutlined width={width} height={height} color={color} className={className} />
}

export const EditIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <EditOutlined width={width} height={height} color={color} className={className} />
}

export const DeleteIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <DeleteOutlined width={width} height={height} color={color} className={className} />
}

export const InviteIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <UserAddOutlined width={width} height={height} color={color} className={className} />
}

export const TeamIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <TeamOutlined width={width} height={height} color={color} className={className} />
}

export const CommentIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CommentOutlined width={width} height={height} color={color} className={className} />
}

export const HelpIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <QuestionCircleOutlined width={width} height={height} color={color} className={className} />
}

export const ExpandIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <DownOutlined width={width} height={height} color={color} className={className} />
}

export const ClollapseIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <UpOutlined width={width} height={height} color={color} className={className} />
}

export const ViewAllIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ProductOutlined width={width} height={height} color={color} className={className} />
}

export const MarkedFavoriteIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <StarFilled width={width} height={height} color={color} className={className} />
}

export const UnmarkedFavoriteIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <StarOutlined width={width} height={height} color={color} className={className} />
}

export const ShareIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ShareAltOutlined width={width} height={height} color={color} className={className} />
}

export const SortAscendingIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SortAscendingOutlined width={width} height={height} color={color} className={className} />
}

export const SortDescendingIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SortDescendingOutlined width={width} height={height} color={color} className={className} />
}

export const FilterIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <FilterOutlined width={width} height={height} color={color} className={className} />
}

export const UnlikeIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <LikeOutlined width={width} height={height} color={color} className={className} />
}

export const LikeIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <LikeFilled width={width} height={height} color={color} className={className} />
}

export const ReactionIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SmileOutlined width={width} height={height} color={color} className={className} />
}

export const AttachFileIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <PaperClipOutlined width={width} height={height} color={color} className={className} />
}

//Sidebar
export const OpenSidebarIcon = ({ width = 16, height = 16, className = '', color = 'white' }: Icon) => {
  return (
    <svg
      className={cn('icon', className)}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      p-id={4502}
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width}
      height={height}
    >
      <path
        d='M141.074286 906.496h741.851428c89.581714 0 134.582857-44.562286 134.582857-132.845714V250.331429c0-88.283429-45.001143-132.845714-134.582857-132.845715H141.074286C51.931429 117.504 6.491429 161.645714 6.491429 250.331429V773.668571c0 88.704 45.44 132.845714 134.582857 132.845715z m1.28-68.992c-42.861714 0-66.852571-22.710857-66.852572-67.291429V253.805714c0-44.580571 23.990857-67.291429 66.852572-67.291428h482.139428v651.008z m739.291428-651.008c42.422857 0 66.852571 22.710857 66.852572 67.291429V770.194286c0 44.580571-24.429714 67.291429-66.852572 67.291428H691.785143V186.496z m-107.574857 159.012571h91.721143c13.275429 0 24.429714-11.574857 24.429714-24.009142 0-12.854857-11.154286-23.990857-24.429714-23.990858h-91.721143c-12.854857 0-24.429714 11.136-24.429714 23.990858 0 12.434286 11.574857 24.009143 24.429714 24.009142z m0 110.994286h91.721143c13.275429 0 24.429714-11.574857 24.429714-24.429714 0-12.854857-11.154286-23.588571-24.429714-23.588572h-91.721143c-12.854857 0-24.429714 10.733714-24.429714 23.588572 0 12.854857 11.574857 24.429714 24.429714 24.429714z m0 110.573714h91.721143c13.275429 0 24.429714-10.715429 24.429714-23.588571 0-12.836571-11.154286-23.990857-24.429714-23.990857h-91.721143c-12.854857 0-24.429714 11.154286-24.429714 24.009143s11.574857 23.570286 24.429714 23.570285z'
        p-id={4503}
        fill={color}
      />
    </svg>
  )
}

export const CloseSidebarIcon = ({ width = 16, height = 16, className = '', color = 'white' }: Icon) => {
  return (
    <svg
      className={cn('icon', className)}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      p-id={2704}
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width}
      height={height}
    >
      <path
        d='M141.074286 906.496h741.851428c89.581714 0 134.582857-44.562286 134.582857-132.845714V250.331429c0-88.283429-45.001143-132.845714-134.582857-132.845715H141.074286C51.931429 117.504 6.491429 161.645714 6.491429 250.331429V773.668571c0 88.704 45.44 132.845714 134.582857 132.845715z m1.28-68.992c-42.861714 0-66.852571-22.710857-66.852572-67.291429V253.805714c0-44.580571 23.990857-67.291429 66.852572-67.291428h190.72v651.008z m739.291428-651.008c42.422857 0 66.852571 22.710857 66.852572 67.291429V770.194286c0 44.580571-24.429714 67.291429-66.852572 67.291428h-481.28V186.496z m-630.857143 159.012571c12.854857 0 24.429714-11.574857 24.429715-24.009142 0-12.854857-11.574857-23.990857-24.429715-23.990858h-92.16c-12.836571 0-23.990857 11.136-23.990857 23.990858 0 12.434286 11.154286 24.009143 24.009143 24.009142z m0 110.994286c12.854857 0 24.429714-11.574857 24.429715-24.429714 0-12.854857-11.574857-23.588571-24.429715-23.588572h-92.16c-12.836571 0-23.990857 10.733714-23.990857 23.588572 0 12.854857 11.154286 24.429714 24.009143 24.429714z m0 110.573714c12.854857 0 24.429714-10.715429 24.429715-23.588571 0-12.836571-11.574857-23.990857-24.429715-23.990857h-92.16c-12.836571 0-23.990857 11.154286-23.990857 24.009143s11.154286 23.570286 24.009143 23.570285z'
        p-id={2705}
        fill={color}
      />
    </svg>
  )
}

export const HomeIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <HomeOutlined width={width} height={height} color={color} className={className} />
}

export const InboxIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <InboxOutlined width={width} height={height} color={color} className={className} />
}

export const DashboardIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <BarChartOutlined width={width} height={height} color={color} className={className} />
}

//Header
export const UpgradeIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <UpCircleOutlined width={width} height={height} color={color} className={className} />
}

export const OpenTaskIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <CheckCircleOutlined width={width} height={height} color={color} className={className} />
}

export const OpenNotepadIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SnippetsOutlined width={width} height={height} color={color} className={className} />
}

export const CreateRecordIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <VideoCameraOutlined width={width} height={height} color={color} className={className} />
}

export const CreateReminderIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <ClockCircleOutlined width={width} height={height} color={color} className={className} />
}

export const OpenQuickActionIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <AppstoreOutlined width={width} height={height} color={color} className={className} />
}

export const MuteNotificationIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <MutedOutlined width={width} height={height} color={color} className={className} />
}

export const SettingIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <SettingOutlined width={width} height={height} color={color} className={className} />
}

export const SignOutIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <LogoutOutlined width={width} height={height} color={color} className={className} />
}
