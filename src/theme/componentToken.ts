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
    colorSplit: colors.DIVIDER_BG
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
  }
}
