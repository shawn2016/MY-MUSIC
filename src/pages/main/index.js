/*
 * @Author: your name
 * @Date: 2021-11-08 20:34:17
 * @LastEditTime: 2021-11-08 20:34:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/pages/main/index.js
 */
import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

// import HYAppHeader from '@/components/app-header';
// import HYAppFooter from '@/components/app-footer';
// import HYAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function HYMain() {
  return (
    <HashRouter>
      {/* <HYAppHeader /> */}
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      {/* <HYAppFooter />
      <HYAppPlayBar/> */}
    </HashRouter>
  )
})
