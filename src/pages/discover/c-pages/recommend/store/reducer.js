/*
 * @Author: your name
 * @Date: 2021-11-08 20:17:27
 * @LastEditTime: 2021-11-08 20:21:18
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/recommend/store/reducer.js
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},

  settleSings: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.recommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_UP_LIST:
      return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
};
