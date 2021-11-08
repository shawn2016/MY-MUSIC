/*
 * @Author: your name
 * @Date: 2021-11-08 19:31:10
 * @LastEditTime: 2021-11-08 20:33:54
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-music/src/App.js
 */
import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <HYMain/>
    </Provider>
  );
}

export default App;
