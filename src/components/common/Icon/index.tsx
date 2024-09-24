import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
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
  PicLeftOutlined,
  PicRightOutlined,
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

type Icon = {
  width?: number
  height?: number
  className?: string
  color?: string
}

//Project
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
export const OpenSidebarIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <PicLeftOutlined width={width} height={height} color={color} className={className} />
}

export const CloseSidebarIcon = ({ width = 16, height = 16, className = '', color }: Icon) => {
  return <PicRightOutlined width={width} height={height} color={color} className={className} />
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
