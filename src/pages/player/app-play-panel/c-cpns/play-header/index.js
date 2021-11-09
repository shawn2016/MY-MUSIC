/*
 * @Author: your name
 * @Date: 2021-11-09 14:19:28
 * @LastEditTime: 2021-11-09 14:21:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/player/app-play-bar/app-play-panel/c-cpns/play-header/index.js
 */
import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function HYPlayHeader() {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
