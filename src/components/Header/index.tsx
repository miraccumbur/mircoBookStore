import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setHamburgerMenuStatus } from "../../redux/hamburgerMenuReducer";
import { AppDispatch, AppState } from "../../redux/store";
import classcat from "classcat";

import HamburgerMenu from "../HamburgerMenu";

import c from "./header.module.css";

import logoImg from "../../assets/images/logo/logo.png";
import basketGreenIcon from "../../assets/icons/basket/basketGreen.png";
import hamburgerMenuIcon from "../../assets/icons/header/menu.png";
import hamburgerMenuCloseIcon from "../../assets/icons/header/close.png";

const Header: React.FC<PropsWithChildren<{}>> = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const hamburgerMenuStatus: boolean = useAppSelector(
    (state: AppState) => state.hamburgerMenu.value
  );

  const [hamburgerMenuButtonActive, setHamburgerMenuButtonActive] =
    useState<boolean>(false);

  useEffect(() => {
    if (hamburgerMenuButtonActive) {
      setTimeout(() => {
        setHamburgerMenuButtonActive(false);
      }, 401);
    }
  }, [hamburgerMenuButtonActive]);

  const handleHamburgerMenuButtonClick = (): void => {
    dispatch(setHamburgerMenuStatus());
    setHamburgerMenuButtonActive(true);
  };

  const handleLogoClick = ():void => {
    navigate("/")
  }

  return (
    <header className={c.header}>
      <img
        src={hamburgerMenuStatus ? hamburgerMenuCloseIcon : hamburgerMenuIcon}
        alt="hamburger-menu-icon"
        className={classcat([
          c.hamburgerMenuIcon,
          hamburgerMenuButtonActive && c.hamburgerMenuIconAnimation,
        ])}
        onClick={handleHamburgerMenuButtonClick}
      />
      <img
        src={logoImg}
        alt="logo"
        className={c.logo}
        onClick={handleLogoClick}
      />
      <img src={basketGreenIcon} alt="basket-icon" className={c.basketIcon} />

      <HamburgerMenu />
    </header>
  );
};

export default Header;
