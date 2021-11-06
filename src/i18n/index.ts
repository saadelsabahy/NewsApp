import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
// the translations
// (tip move them in a JSON file and import them)
let en = require('./languages/en.json');
let ar = require('./languages/ar.json');
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb: (lang: string) => void) => {
    const cachedLang = await AsyncStorage.getItem('@CACHED_LANG');
    //reactotron.log('detect', cachedLang);
    cb(cachedLang || 'en');
  },
  init: () => {},
  cacheUserLanguage: async (lng: string) => {
    await AsyncStorage.setItem('@CACHED_LANG', lng);
    //reactotron.log('cacheUserLanguage', lng)
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ar,
      en,
    },
    //lng: i18n.language || 'en',
    fallbackLng: 'en',
    debug: false,
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      useSuspense: false,
    },
  });
i18next.languages = ['en', 'ar'];
i18next.on('languageChanged', async (lng: string) => {
  if (lng === 'ar') {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  } else {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  }
});
export default i18next;
