/*
 * @Author: your name
 * @Date: 2021-11-09 15:18:17
 * @LastEditTime: 2021-11-09 15:18:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/ranking/store/actionCreators.js
 */
import * as actionTypes from "./constants";

import { 
  getTopList,
  getRankingList
} from "@/services/ranking";
 

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const changeCurrentIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
}) 

export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
}

export const getRanking = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
}

