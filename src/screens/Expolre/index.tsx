import {CustomHeader, EmptyList, LoaderAndRetry, NewsCard} from '@components';
import {CommonStyles, Spaces} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import {formatDate, getNews} from '@utils';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {Searchbar, useTheme} from 'react-native-paper';
import {useQuery} from 'react-query';

interface Props {
  navigation: any;
}

const Explore = ({navigation}: Props) => {
  const {
    colors: {primary},
  } = useTheme();
  const {t} = useTranslation();
  const onCardPressed = params => {
    navigation.navigate('Details', {...params});
  };
  const {data, isLoading, isError, refetch, isFetching} = useQuery(
    'getNews',
    getNews,
  );

  return (
    <View style={[CommonStyles.screensContainer]}>
      <CustomHeader title={t('tabs:news')} hideBack />
      <Searchbar style={styles.searchBar} />
      <View style={CommonStyles.screensContainer}>
        {(isLoading || isError) && (
          <LoaderAndRetry
            loading={isLoading}
            error={isError}
            onRetryPressed={() => refetch()}
          />
        )}

        {data && (
          <FlatList
            data={data}
            keyExtractor={({url}) => url}
            renderItem={({
              item: {title, author, publishedAt, description, url, urlToImage},
            }) => {
              return (
                <NewsCard
                  onCardPressed={() =>
                    onCardPressed({
                      title,
                      author,
                      publishedAt,
                      description,
                      url,
                      urlToImage,
                    })
                  }
                  title={title.replace(/[^a-zA-Z ]/g, '')}
                  author={author}
                  date={formatDate(publishedAt)}
                  imageSource={urlToImage}
                />
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={refetch}
                tintColor={primary}
                titleColor={primary}
                colors={[primary, primary]}
              />
            }
            contentContainerStyle={styles.flatlistContentContainer}
            ListEmptyComponent={<EmptyList />}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    margin: Spaces.medium,
    borderRadius: calcFont(7),
    paddingHorizontal: Spaces.tiny,
    elevation: 0,
  },
  flatlistContentContainer: {
    flexGrow: 1,
  },
});

export {Explore};
