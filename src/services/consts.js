// @flow
export const LIST_CATEGORIES = {
  ESSENTIALS: "essentials",
  CLOTHES: "clothes",
  TOILETRIES: "toiletries",
  OTHER: "other",
}

export const LANGUAGES = {
  ENGLISH: "en",
  SLOVENIAN: "si",
  SPANISH: "es",
}

export const LANGUAGES_DATA = {
  [LANGUAGES.ENGLISH]: {
    value: LANGUAGES.ENGLISH,
    flagCode: "gb",
    title: "English",
  },
  [LANGUAGES.SPANISH]: {
    value: LANGUAGES.SPANISH,
    flagCode: "es",
    title: "Español",
  },
  [LANGUAGES.SLOVENIAN]: {
    value: LANGUAGES.SLOVENIAN,
    flagCode: "si",
    title: "Slovenščina",
  },
}

export const EDIT_MODE = {
  DEFAULT: "default",
  OPEN_SETTINGS: "openSettings",
  RESET_CARD: "resetCard",
  REMOVE_ITEMS: "removeItems",
  ADD_ITEM: "addItem",
}
