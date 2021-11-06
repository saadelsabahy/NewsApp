import {CustomHeader, EmptyList, LoaderAndRetry, NewsCard} from '@components';
import {endpoints} from '@constants/apiEndpoints.constants';
import {CommonStyles, Spaces} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import {useScrollToTop} from '@react-navigation/native';
import {ArticlesType} from '@types';
import {formatDate, removeDuplicate, searchSuggestions} from '@utils';
import axios from 'axios';
import React, {useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  I18nManager,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {ActivityIndicator, Searchbar, useTheme} from 'react-native-paper';
import {useInfiniteQuery} from 'react-query';
interface Props {
  navigation: any;
}

const Explore = ({navigation}: Props) => {
  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const {
    colors: {primary},
  } = useTheme();
  const {t} = useTranslation();
  const [Query, setQuery] = useState<string>('');
  const [currentPage, setcurrentPage] = React.useState(0);
  const onCardPressed = (params: Exclude<ArticlesType, 'url'>) => {
    navigation.navigate('Details', {...params});
  };
  const getNews = async ({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<ArticlesType[]> => {
    const {
      data: {articles},
    }: {data: {articles: ArticlesType[]}} = await axios.get(
      endpoints.firstNewsApi,
      {
        params: {
          country: I18nManager.isRTL ? 'ae' : 'us',
          apiKey: 'e0b694b4ce854bd49930640bbd97b3d3',
          pageSize: 10,
          page: pageParam,
        },
      },
    );
    setcurrentPage(pageParam + 1);
    return articles;
  };
  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('getNews', ({pageParam = 0}) => getNews({pageParam}), {
    getNextPageParam: lastPage => {
      if (lastPage?.length) {
        return currentPage;
      }
      return undefined;
    },
    // getPreviousPageParam: (firstPage) => firstPage.prevCursor,
    staleTime: 100,
    cacheTime: 100,
    select: data => ({...data, pages: data.pages.flatMap(page => page)}),
  });
  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const renderLoader = useCallback(() => {
    return hasNextPage ? (
      <ActivityIndicator animating={isFetchingNextPage} />
    ) : null;
  }, [isFetchingNextPage, hasNextPage]);
  return (
    <View style={[CommonStyles.screensContainer]}>
      <CustomHeader title={t('tabs:news')} hideBack />
      <Searchbar
        style={styles.searchBar}
        value={Query}
        onChangeText={(text: string) => setQuery(text)}
      />
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
            ref={scrollRef}
            data={searchSuggestions(removeDuplicate(data.pages), Query)}
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
                  title={title.replace('/[^أ-يA-Za-z !@#$%^&*()]/ui', '')}
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
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderLoader}
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
