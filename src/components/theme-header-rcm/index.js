import React, { memo } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { HeaderWrapper } from "./style";

import { changeCurrentCategoryAction } from "../../pages/discover/c-pages/songs/store/actionCreators";

const HYThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  const dispatch = useDispatch();
  function selectCategory(name) {
    dispatch(changeCurrentCategoryAction(name));
  }

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <NavLink
                  to="/discover/songs"
                  onClick={(e) => selectCategory(item)}
                >
                  {item}
                </NavLink>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

HYThemeHeaderRCM.defaultProps = {
  keywords: [],
};

HYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

export default HYThemeHeaderRCM;
