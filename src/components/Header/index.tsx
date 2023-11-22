import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setHamburgerMenuStatus } from "../../redux/hamburgerMenuReducer";
import { AppDispatch, AppState } from "../../redux/store";
import classcat from "classcat";

import HamburgerMenu from "../HamburgerMenu";

import c from "./header.module.css";

import logoImg from "../../assets/images/logo/logo.png";
import basketGreenIcon from "../../assets/icons/cart/basketGreen.png";
import basketGreenFullIcon from "../../assets/icons/cart/basketGreenFull.png";
import hamburgerMenuIcon from "../../assets/icons/header/menu.png";
import hamburgerMenuCloseIcon from "../../assets/icons/header/close.png";
import { IModalState } from "../../types/Modal";
import { setModal } from "../../redux/modalReducer";
import { ICartValue } from "../../types/Cart";
import useIsMobile from "../../hooks/useIsMobile";

const Header: React.FC<PropsWithChildren<{}>> = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const isMobile: boolean = useIsMobile();

  const hamburgerMenuStatus: boolean = useAppSelector(
    (state: AppState) => state.hamburgerMenu.value
  );
  const modal: IModalState = useAppSelector((state: AppState) => state.modal);
  const cart: ICartValue = useAppSelector((state: AppState) => state.cart);

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

  const handleLogoClick = (): void => {
    navigate("/");
  };

  const handleCartIcon = (): void => {
    if (modal.value && modal.type === "cart" && !isMobile) {
      dispatch(setModal({ value: false }));
    } else if (!modal.value && !isMobile) {
      dispatch(setModal({ value: true, type: "cart" }));
    }
    else{
      navigate('/cart')
    }
  };

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
      <img
        src={cart.value.length > 0 ? basketGreenFullIcon : basketGreenIcon}
        alt="basket-icon"
        className={c.basketIcon}
        onClick={handleCartIcon}
      />

      <HamburgerMenu />
    </header>
  );
};

export default Header;
