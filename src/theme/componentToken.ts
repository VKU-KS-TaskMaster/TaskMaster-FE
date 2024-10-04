import colors from '@constants/colors'

export const componentToken = (mode: 'dark' | 'light') => {
  return {
    Button: {
      borderRadius: 6,
      textTextColor: colors[mode].TEXT.ACTIVE
    },
    Tabs: {
      //Dark
      itemColor: colors[mode].TEXT.WEAK,
      itemHoverColor: colors[mode].TEXT.ACTIVE,
      itemActiveColor: colors[mode].TEXT.ACTIVE,
      itemSelectedColor: colors[mode].TEXT.ACTIVE,
      inkBarColor: colors[mode].TEXT.ACTIVE
    },
    Dropdown: {
      colorText: colors[mode].TEXT.WEAK,
      colorTextDescription: colors[mode].TEXT.ACTIVE,
      colorBgElevated: colors[mode].BG.WEAK,
      controlItemBgHover: colors[mode].BG.ACTIVE,
      colorSplit: colors[mode].BG.DIVIDER
    },
    Menu: {
      popupBg: colors[mode].BG.WEAK,
      subMenuItemBg: colors[mode].BG.WEAK,

      itemBg: colors[mode].BG.WEAK,
      itemActiveBg: colors[mode].BG.BTN_ACTIVE,
      itemColor: colors[mode].TEXT.WEAK,
      itemHoverColor: colors[mode].TEXT.ACTIVE,
      itemSelectedColor: colors[mode].TEXT.ACTIVE,
      itemHoverBg: colors[mode].BG.BTN_HOVER,
      itemSelectedBg: colors[mode].BG.BTN_ACTIVE,
      itemPaddingInline: 0,
      iconMarginInlineEnd: 0,
      itemMarginBlock: 6,
      itemMarginInline: 0,
      itemHeight: 32
    },
    Modal: {
      //Dark
      headerBg: colors[mode].BG.NAVIGATION_SIDEBAR,
      contentBg: colors[mode].BG.NAVIGATION_SIDEBAR,
      footerBg: colors[mode].BG.INPUT_MODAL,
      titleColor: colors[mode].TEXT.ACTIVE,
      colorText: colors[mode].TEXT.WEAK
    },
    Notification: {
      //Dark
      colorBgElevated: colors[mode].BG.WEAK,
      colorIcon: colors[mode].ICON.WEAK,
      colorIconHover: colors[mode].ICON.ACTIVE,
      colorTextHeading: colors[mode].TEXT.ACTIVE,
      colorText: colors[mode].TEXT.WEAK
    },
    Form: {
      labelColor: colors[mode].TEXT.WEAK
    },
    Input: {
      //Dark
      colorIcon: colors[mode].ICON.WEAK,
      colorIconHover: colors[mode].ICON.ACTIVE
    },
    Select: {
      selectorBg: colors[mode].BG.INPUT_MODAL,
      optionActiveBg: colors[mode].BG.ACTIVE,
      optionSelectedBg: colors[mode].BG.ACTIVE,
      optionSelectedColor: colors[mode].TEXT.ACTIVE,
      colorText: colors[mode].TEXT.WEAK,

      colorBorder: colors[mode].BG.INPUT_MODAL,
      colorPrimary: colors[mode].BG.INPUT_MODAL,
      colorPrimaryHover: colors[mode].BG.INPUT_MODAL,
      colorTextPlaceholder: colors[mode].TEXT.WEAK,
      colorTextQuaternary: colors[mode].TEXT.WEAK,
      colorBgElevated: colors[mode].BG.WEAK,
      borderRadius: 0,
      controlOutlineWidth: 0
    },
    DatePicker: {
      colorBorder: colors[mode].BG.INPUT_MODAL,
      colorTextPlaceholder: colors[mode].TEXT.WEAK,
      colorTextDisabled: colors[mode].TEXT.WEAK,
      colorTextDescription: colors[mode].ICON.ACTIVE,
      controlOutlineWidth: 0
    }
  }
}
