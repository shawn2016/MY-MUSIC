/*
 * @Author: your name
 * @Date: 2021-11-09 14:19:31
 * @LastEditTime: 2021-11-09 14:21:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/player/app-play-bar/app-play-panel/c-cpns/lyric-panel/index.js
 */
import React, { memo, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { scrollTo } from "@/utils/ui-helper";

import { PannelWrapper } from './style';

export default memo(function HYLyricPanel() {
  const { currentLyrics, currentLyricIndex } = useSelector(state => ({
    currentLyrics: state.getIn(["player", "currentLyrics"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual);

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          currentLyrics.map((item, index) => {
            return (
              <div key={item.time}
                className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
