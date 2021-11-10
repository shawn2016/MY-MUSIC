/*
 * @Author: your name
 * @Date: 2021-11-09 15:18:42
 * @LastEditTime: 2021-11-09 15:18:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/ranking/store/reducer.js
 */
import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  playList: {}
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    default:
      return state;
  }
}