/*
 * @Author: your name
 * @Date: 2021-11-08 17:51:10
 * @LastEditTime: 2021-11-10 18:03:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/components/radio-ranking-cover/index.js
 */
import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils'

import {
  CoverWrapper
} from "./style"

export default memo(function HYRadioRankingCover(props) {
  const { radio } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getSizeImage(radio.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title">{radio.name}</h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          {radio?.dj?.nickname}
        </div>
        <div className="count">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  )
})
