import {ArticlesType} from '../types';

export const removeDublicates = (data: ArticlesType[]) => {
  const Urls = [...new Set(data?.map(item => item.url))];
  const notRedundency = Urls.map(url => data?.find(news => news.url === url));

  return notRedundency;
};
export const formatDate = (value: string | Date) => {
  let date = new Date(value);
  const day = date.toLocaleString('default', {day: '2-digit'});
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.toLocaleString('default', {year: 'numeric'});
  return `${month} ${day}, ${year}`;
};

export const searchSuggestions = (
  articles: ArticlesType[],
  customerQuery: string,
) => {
  // Write your code here
  if (!customerQuery || customerQuery.length < 2) {
    return articles;
  } else {
    const firstFilteration = articles.filter(article =>
      article.title.toLowerCase().includes(customerQuery.toLowerCase()),
    );

    return firstFilteration;
  }
};
