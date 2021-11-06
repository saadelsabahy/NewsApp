import axios from 'axios';
import {endpoints} from '../constants/apiEndpoints.constants';
import {ArticlesType} from '../types';

export const getNews = async (): Promise<ArticlesType> => {
  // const {
  //   data: {articles},
  // }: {data: {articles: ArticlesType}} = await axios.get(endpoints.firstNewsApi);
  // const {
  //   data: {articles: SecondArticles},
  // }: {data: {articles: ArticlesType}} = await axios.get(
  //   endpoints.secondNewsApi,
  // );
  return [
    /* ...SecondArticles, ...articles */
  ];
};
export const formatDate = (value: string | Date) => {
  let date = new Date(value);
  const day = date.toLocaleString('default', {day: '2-digit'});
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.toLocaleString('default', {year: 'numeric'});
  return `${month} ${day}, ${year}`;
};
