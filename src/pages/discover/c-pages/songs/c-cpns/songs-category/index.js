import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  changeCurrentCategoryAction,
  getSongList
} from "../../store/actionCreators";

import {
  CategoryWrapper
} from "./style";

export default memo(function HYSongsCategory() {
  // redux
  const { category } = useSelector(state => ({
    category: state.getIn(["songs", "category"])
  }), shallowEqual);
  const dispatch = useDispatch();

  function selectCategory(name) {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <a href="/#" onClick={e => selectCategory("全部")}>全部风格</a>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <a href={() => false} onClick={e => selectCategory(sItem.name)}>{sItem.name}</a>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
