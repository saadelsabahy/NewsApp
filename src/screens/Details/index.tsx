import {CustomHeader, DetailsCard} from '@components';
import {CommonStyles} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import {formatDate} from '@utils';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

const Details = ({navigation, route}: Props) => {
  const {t} = useTranslation();
  const {title, author, publishedAt, description, url, urlToImage} =
    route.params;

  return (
    <ScrollView style={CommonStyles.screensContainer}>
      <CustomHeader title={t('detailsScreen:newsDetails')} />
      <DetailsCard
        imageSource={urlToImage}
        firstParagraph={description}
        secondParagraph={''}
        date={formatDate(publishedAt)}
        title={title}
        author={author}
      />
    </ScrollView>
  );
};

export {Details};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  button: {
    borderRadius: 0,
    margin: calcFont(10),
  },
});