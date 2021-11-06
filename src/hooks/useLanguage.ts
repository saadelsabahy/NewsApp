/* eslint-disable react-hooks/exhaustive-deps */
import {ILanguagesName} from '@types';
import {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

interface Props {}

const useLanguage = () => {
  const {i18n} = useTranslation();

  const [selectedLanguage, setSelectedLanguage] =
    useState<ILanguagesName>('en');

  useEffect(() => {
    getCurrentLanguage();
    return () => {};
  }, []);

  const getCurrentLanguage = async () => {
    setSelectedLanguage(i18n.language);
  };
  const onChangeLanguage = useCallback(
    async (language: string) => {
      // const language_code = I18nManager.isRTL ? 'en' : 'ar';
      setSelectedLanguage(language);
      try {
        //await AsyncStorage.setItem(FIRST_INSTALL, language);
        i18n.changeLanguage(language);
      } catch (e) {
        console.log('switch lang error', e);
      }
    },
    [i18n],
  );

  return {onChangeLanguage, selectedLanguage};
};

export {useLanguage};
