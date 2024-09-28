import colors from '@constants/colors'

export const componentToken = {
  Button: {
    borderRadius: 6,
    textTextColor: colors.TEXT
  },
  Select: {},
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
    titleColor: colors.TEXT
  },
  Form: {
    labelColor: colors.TEXT_WEAK
  },
  Input: {
    //Dark
    colorIcon: colors.ICON,
    colorIconHover: colors.ICON_ACTIVE
  },
  Tabs: {
    //Dark
    itemColor: colors.TEXT_WEAK,
    itemHoverColor: colors.TEXT,
    itemActiveColor: colors.TEXT,
    itemSelectedColor: colors.TEXT,
    inkBarColor: colors.TEXT
  }
}
