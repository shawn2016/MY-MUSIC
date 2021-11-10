/*
 * @Author: your name
 * @Date: 2021-11-09 15:15:00
 * @LastEditTime: 2021-11-09 15:15:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/ranking/c-cpns/ranking-header/index.js
 */
import React, {memo} from 'react';
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format-utils";

import HYSongOperationBar from '@/components/song-operation-bar';
import {
  RankingHeaderWrapper
} from './style';

export default memo(function HYRankingHeader() {
  // redux
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);
  const topInfo = state.playList;

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <HYSongOperationBar favorTitle={`(${topInfo.subscribedCount})`}
                            shareTitle={`(${topInfo.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${topInfo.commentCount})`}/>
      </div>
    </RankingHeaderWrapper>
  )
})
