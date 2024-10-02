import colors from '@constants/colors'

export const componentToken = {
  Button: {
    borderRadius: 6,
    textTextColor: colors.TEXT
  },
  Tabs: {
    //Dark
    itemColor: colors.TEXT_WEAK,
    itemHoverColor: colors.TEXT,
    itemActiveColor: colors.TEXT,
    itemSelectedColor: colors.TEXT,
    inkBarColor: colors.TEXT
  },
  Dropdown: {
    colorText: colors.TEXT_WEAK,
    colorTextDescription: colors.TEXT,
    colorBgElevated: colors.BG.WEAK,
    controlItemBgHover: colors.BG.ACTIVE,
    colorSplit: colors.BG.DIVIDER
  },
  Menu: {
    //Light
    popupBg: colors.BG.WEAK,
    subMenuItemBg: colors.BG.WEAK,

    itemBg: colors.BG.WEAK,
    itemActiveBg: colors.BG.ACTIVE,
    itemColor: colors.TEXT_WEAK,
    itemHoverBg: colors.BG.ACTIVE,
    itemHoverColor: colors.TEXT,

    //Dark
    darkPopupBg: colors.BG.WEAK,
    darkSubMenuItemBg: colors.BG.WEAK,

    darkItemBg: colors.BG.WEAK,
    darkItemActiveBg: colors.BG.ACTIVE,
    darkItemColor: colors.TEXT_WEAK,
    darkItemHoverBg: colors.BG.ACTIVE,
    darkItemHoverColor: colors.TEXT
  },
  Modal: {
    //Dark
    headerBg: colors.NAVIGATION.SIDEBAR_BG,
    contentBg: colors.NAVIGATION.SIDEBAR_BG,
    footerBg: colors.BG.INPUT_MODAL,
    titleColor: colors.TEXT,
    colorText: colors.TEXT_WEAK
  },
  Notification: {
    //Dark
    colorBgElevated: colors.BG.WEAK,
    colorIcon: colors.ICON,
    colorIconHover: colors.ICON_ACTIVE,
    colorTextHeading: colors.TEXT,
    colorText: colors.TEXT_WEAK
  },
  Form: {
    labelColor: colors.TEXT_WEAK
  },
  Input: {
    //Dark
    colorIcon: colors.ICON,
    colorIconHover: colors.ICON_ACTIVE
  },
  Select: {
    selectorBg: colors.BG.INPUT_MODAL,
    optionActiveBg: colors.BG.ACTIVE,
    optionSelectedBg: colors.BG.ACTIVE,
    optionSelectedColor: colors.TEXT,
    colorText: colors.TEXT_WEAK,

    colorBorder: colors.BG.INPUT_MODAL,
    colorPrimary: colors.BG.INPUT_MODAL,
    colorPrimaryHover: colors.BG.INPUT_MODAL,
    colorTextPlaceholder: colors.TEXT_WEAK,
    colorTextQuaternary: colors.TEXT_WEAK,
    colorBgElevated: colors.BG.WEAK,
    borderRadius: 0,
    controlOutlineWidth: 0
  },
  DatePicker: {
    colorBorder: colors.BG.INPUT_MODAL,
    colorTextPlaceholder: colors.TEXT_WEAK,
    colorTextDisabled: colors.TEXT_WEAK,
    colorTextDescription: colors.ICON_ACTIVE,
    controlOutlineWidth: 0
  }
}
