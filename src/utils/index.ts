import {ArticlesType} from '../types';

export const removeDuplicate = (data: ArticlesType[]): ArticlesType[] => {
  const Urls = [...new Set(data?.map(item => item.url))];
  const notRedundancy = Urls.map(url => data?.find(news => news.url === url)!);

  return notRedundancy;
};
export const formatDate = (value: string | Date) => {
  let date = new Date(value);
  const day = date.toLocaleString('default', {day: '2-digit'});
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.toLocaleString('default', {year: 'numeric'});
  return `${month} ${day}, ${year}`;
};

export const searchSuggestions = (
  articles: ArticlesType[] | undefined,
  customerQuery: string,
) => {
  if (!articles) {
    return [];
  }
  if (!customerQuery || customerQuery.length < 2) {
    return articles;
  } else {
    const firstFilteration = articles.filter(article =>
      article.title.toLowerCase().includes(customerQuery.toLowerCase()),
    );

    return firstFilteration;
  }
};
