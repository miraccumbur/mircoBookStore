import React, { PropsWithChildren } from "react";
import classcat from "classcat";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { AppDispatch, AppState } from "../../redux/store";
import { NavigateFunction, useNavigate } from "react-router-dom";

import c from "./hamburgerMenu.module.css";

import newMenuItemIcon from "../../assets/icons/hamburgerMenu/new.png";
import { setHamburgerMenuStatus } from "../../redux/hamburgerMenuReducer";

const HamburgerMenu: React.FC<PropsWithChildren<{}>> = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const hamburgerMenuStatus = useAppSelector(
    (state: AppState) => state.hamburgerMenu.value
  );

  const handleClick = (path: string): void => {
    dispatch(setHamburgerMenuStatus());
    navigate(path);
  };
  return (
    <div
      className={classcat([
        c.hamburgerMenu,
        hamburgerMenuStatus ? c.hamburgerMenuOpened : c.hamburgerMenuClosed,
      ])}
    >
      <div onClick={() => handleClick('/')} className={c.menuItem}>
        <img
          src={newMenuItemIcon}
          alt="menu-item-new"
          className={c.menuItemIcon}
        />
        New Feature
      </div>
    </div>
  );
};

export default HamburgerMenu;
