import colors from '@constants/colors'

export const componentToken = {
  Button: {
    borderRadius: 6,
    textTextColor: colors.TEXT.LIGHT
  },
  Tabs: {
    //Dark
    itemColor: colors.TEXT.WEAK,
    itemHoverColor: colors.TEXT.LIGHT,
    itemActiveColor: colors.TEXT.LIGHT,
    itemSelectedColor: colors.TEXT.LIGHT,
    inkBarColor: colors.TEXT.LIGHT
  },
  Dropdown: {
    colorText: colors.TEXT.WEAK,
    colorTextDescription: colors.TEXT.LIGHT,
    colorBgElevated: colors.BG.WEAK,
    controlItemBgHover: colors.BG.ACTIVE,
    colorSplit: colors.BG.DIVIDER
  },
  Menu: {
    //Light
    popupBg: colors.BG.WEAK,
    subMenuItemBg: colors.BG.WEAK,
    iconMarginInlineEnd: 10,

    itemBg: colors.BG.WEAK,
    itemActiveBg: colors.BG.ACTIVE,
    itemColor: colors.TEXT.WEAK,
    itemHoverBg: colors.BG.ACTIVE,
    itemHoverColor: colors.TEXT.DARK,
    itemSelectedBg: colors.BG.DIVIDER,
    itemPaddingInline: 10,
    itemMarginBlock: 6,
    itemMarginInline: 0,
    itemHeight: 34,

    //Dark
    darkPopupBg: colors.BG.WEAK,
    darkSubMenuItemBg: colors.BG.WEAK,

    darkItemBg: colors.BG.WEAK,
    darkItemActiveBg: colors.BG.ACTIVE,
    darkItemColor: colors.TEXT.WEAK,
    darkItemHoverBg: colors.BG.ACTIVE,
    darkItemHoverColor: colors.TEXT.LIGHT
  },
  Modal: {
    //Dark
    headerBg: colors.NAVIGATION.SIDEBAR_BG,
    contentBg: colors.NAVIGATION.SIDEBAR_BG,
    footerBg: colors.BG.INPUT_MODAL,
    titleColor: colors.TEXT.LIGHT,
    colorText: colors.TEXT.WEAK
  },
  Notification: {
    //Dark
    colorBgElevated: colors.BG.WEAK,
    colorIcon: colors.ICON.WEAK,
    colorIconHover: colors.ICON.ACTIVE,
    colorTextHeading: colors.TEXT.LIGHT,
    colorText: colors.TEXT.WEAK
  },
  Form: {
    labelColor: colors.TEXT.WEAK
  },
  Input: {
    //Dark
    colorIcon: colors.ICON.WEAK,
    colorIconHover: colors.ICON.ACTIVE
  },
  Select: {
    selectorBg: colors.BG.INPUT_MODAL,
    optionActiveBg: colors.BG.ACTIVE,
    optionSelectedBg: colors.BG.ACTIVE,
    optionSelectedColor: colors.TEXT.LIGHT,
    colorText: colors.TEXT.WEAK,

    colorBorder: colors.BG.INPUT_MODAL,
    colorPrimary: colors.BG.INPUT_MODAL,
    colorPrimaryHover: colors.BG.INPUT_MODAL,
    colorTextPlaceholder: colors.TEXT.WEAK,
    colorTextQuaternary: colors.TEXT.WEAK,
    colorBgElevated: colors.BG.WEAK,
    borderRadius: 0,
    controlOutlineWidth: 0
  },
  DatePicker: {
    colorBorder: colors.BG.INPUT_MODAL,
    colorTextPlaceholder: colors.TEXT.WEAK,
    colorTextDisabled: colors.TEXT.WEAK,
    colorTextDescription: colors.ICON.ACTIVE,
    controlOutlineWidth: 0
  }
}
