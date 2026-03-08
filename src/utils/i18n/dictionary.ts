import 'server-only';

import { SupportedLanguages } from '@/utils/i18n';
import { I18N } from '@/utils/interface/i18n';

const defaultLocale = SupportedLanguages[1].code; // en-US

const dynamicDictionaries = SupportedLanguages.reduce((acc, { code }) => {
    acc[code] = () => import(`@/utils/i18n/${code}.json`).then(module => module.default);
    return acc;
}, {} as { [key: string]: () => Promise<I18N> });

export const getDictionary = async (locale: string) => {
    const loader = dynamicDictionaries[locale] ?? dynamicDictionaries[defaultLocale];
    return loader();
};