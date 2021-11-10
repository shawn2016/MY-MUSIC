/*
 * @Author: your name
 * @Date: 2021-11-08 20:10:06
 * @LastEditTime: 2021-11-10 16:32:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/store/reducer.js
 */
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store";
import { reducer as djradioReducer } from "../pages/discover/c-pages/djradio/store";
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";
import { reducer as playerReducer } from "../pages/player/store";

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  album: albumReducer,
  artist: artistReducer,
  player: playerReducer
})
