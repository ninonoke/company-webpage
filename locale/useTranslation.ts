import { useRouter } from 'next/router'
import en from 'locale/en'

const LANG_STRINGS = {
    en_GB: en,
    'ka-GE': {},
}

const LANG_DICTIONARY = {
    en_GB: 'en',
    'ka-GE': 'ka',
}

export default function useTranslation() {
    const { locale, defaultLocale } = useRouter()

    const t = (key: string) => {
        if (!LANG_STRINGS[locale]?.[key]) {
            console.warn(`No string '${key}' for locale '${locale}'`)
        }

        return (
            LANG_STRINGS[locale][key] || LANG_STRINGS[defaultLocale][key] || ''
        )
    }

    const tData = <T>(data: { en: object; ka?: object }): T => {
        if (!data) {
            return undefined
        }
        return (
            data[LANG_DICTIONARY[locale]] ||
            data[LANG_DICTIONARY[defaultLocale]]
        )
    }

    return { t, tData, locale }
}
