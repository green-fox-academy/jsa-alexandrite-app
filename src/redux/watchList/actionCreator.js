import { FETCH_WATCHLIST_SUCCESS, POST_WATCHLIST_SUCCESS, ADD_STOCK_TO_WATCHLIST } from './actionType';


export const fetchWatchList = () => ({
  type: FETCH_WATCHLIST_SUCCESS,
});

export const postWatchList = (name) => ({
  type: POST_WATCHLIST_SUCCESS,
  payLoad: {
    name,
    stocks: [],
  },
});

export const addStockToWatchlist = (watchlistId, ticker) => ({
  type: ADD_STOCK_TO_WATCHLIST,
  payLoad: {
    watchlistId,
    stock: {
      ticker,
      // to suppress the warning, will be removed after watchlist data story
      currPrice: 0,
      dailyChange: 0,
      volumn: '0',
    },
  },
});
