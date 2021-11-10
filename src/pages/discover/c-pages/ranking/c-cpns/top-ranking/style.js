/*
 * @Author: your name
 * @Date: 2021-11-09 15:16:32
 * @LastEditTime: 2021-11-09 15:16:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/c-pages/ranking/c-cpns/top-ranking/style.js
 */
import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }

  .item {
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover, &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 10px;

      .name {
        color: #000;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`