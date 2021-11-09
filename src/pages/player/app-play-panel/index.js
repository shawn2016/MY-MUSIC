/*
 * @Author: your name
 * @Date: 2021-11-09 14:18:07
 * @LastEditTime: 2021-11-09 14:22:13
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/player/app-play-bar/app-play-panel/index.js
 */
import React, { memo } from 'react';

import HYPlayHeader from './c-cpns/play-header';
import HYPlayList from './c-cpns/play-list';
import HYLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {
  return (
    <PanelWrapper>
      <HYPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <HYPlayList/>
        <HYLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
