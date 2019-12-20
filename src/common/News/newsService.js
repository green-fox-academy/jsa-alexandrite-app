import {
  NEWS_API_URL,
  NEWS_API_KEY,
} from 'react-native-dotenv';
// eslint-disable-next-line import/prefer-default-export
export const fetchStockNews = async (query) => {
  const newsUrl = new URL(`${NEWS_API_URL}/everything`);
  const parsedQuery = (typeof query.join) === 'function'
    ? query.join(' OR ')
    : query;
  newsUrl.searchParams.append('apiKey', NEWS_API_KEY);
  newsUrl.searchParams.append('q', parsedQuery);
  newsUrl.searchParams.append('pageSize', 2);
  newsUrl.searchParams.append('sortBy', 'publishedAt');
  newsUrl.searchParams.append('language', 'en');
  return fetch(newsUrl)
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`Cannot find any news about ${query}`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return res.json();
    })
    .then((res) => res.articles.map(({
      publishedAt, title, urlToImage, url,
    }) => ({
      datetime: publishedAt,
      headline: title,
      image: urlToImage,
      url,
    })));
};