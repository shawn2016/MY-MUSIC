/*
 * @Author: your name
 * @Date: 2021-11-09 15:12:39
 * @LastEditTime: 2021-11-09 15:17:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/ranking/index.js
 */
import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import HYTopRanking from "./c-cpns/top-ranking";
import HYRankingHeader from './c-cpns/ranking-header';
import HYRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function HYRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HYTopRanking/>
      </RankingLeft>
      <RankingRight>
        <HYRankingHeader/>
        <HYRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
