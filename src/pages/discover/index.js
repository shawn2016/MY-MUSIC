/*
 * @Author: your name
 * @Date: 2021-11-08 20:37:19
 * @LastEditTime: 2021-11-08 20:37:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/discover/index.js
 */
import React, {memo} from 'react';
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { 
  dicoverMenu
} from "@/services/local-data";

import {
  DiscoverWrapper,
  TopMenu
} from "./style";

export default memo(function HYDiscover(props) {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
