import {CustomHeader, DetailsCard} from '@components';
import {CommonStyles} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import {formatDate} from '@utils';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

const Details = ({navigation, route}: Props) => {
  const {t} = useTranslation();
  const {title, author, publishedAt, description, urlToImage} = route.params;
  console.log({title, author, publishedAt, description});

  return (
    <View style={CommonStyles.screensContainer}>
      <CustomHeader title={t('detailsScreen:newsDetails')} />
      <ScrollView style={CommonStyles.screensContainer}>
        <DetailsCard
          imageSource={urlToImage}
          firstParagraph={description}
          secondParagraph={''}
          date={formatDate(publishedAt)}
          title={title}
          author={author}
        />
      </ScrollView>
    </View>
  );
};

export {Details};
