import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import { ICart, ICartValue } from "../../types/Cart";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { AppDispatch, AppState } from "../../redux/store";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import {
  validateEmail,
  isNumericString,
  isCardExpireDate,
} from "../../helpers/validation";
import { setLoading } from "../../redux/loadingReducer";
import { setModal, setSuccessModal } from "../../redux/modalReducer";
import { clearCart } from "../../redux/cartReducer";

import c from "./checkout.module.css";

const Checkout: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const cart: ICartValue = useAppSelector((state: AppState) => state.cart);
  const [adress, setAdress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpireDate, setCardExpireDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<Array<string>>([]);

  // this func for checkout form validation
  const validation = (): Array<string> => {
    let validationError: Array<string> = [];
    if (adress.length === 0) {
      validationError.push("adress");
    }
    if (name.length === 0) {
      validationError.push("name");
    }
    if (surname.length === 0) {
      validationError.push("surname");
    }
    if (!validateEmail(mail)) {
      validationError.push("mail");
    }
    if (!isNumericString(phone) || phone.length !== 11) {
      validationError.push("phone");
    }
    if (
      !isNumericString(cardNumber.replaceAll(" ", "")) ||
      cardNumber.replaceAll(" ", "").length !== 16
    ) {
      validationError.push("cardNumber");
    }
    if (!isCardExpireDate(cardExpireDate)) {
      validationError.push("cardExpireDate");
    }
    if (!isNumericString(cvv) || cvv.length !== 3) {
      validationError.push("cvv");
    }
    if (!isChecked) {
      validationError.push("isChecked");
    }
    return validationError;
  };

  const handleCheckout = async (): Promise<void> => {
    try {
      dispatch(setLoading(true));
      const validationResultData: Array<string> = validation();
      setValidationError(validationResultData);
      if (validationResultData.length > 0) {
        throw "validation error";
      }
      dispatch(clearCart());
      dispatch(
        setSuccessModal({
          status: true,
          type: "success",
          value: {
            message: "Your purchase has been completed successfully.",
            onClose: () => {
              navigate("/");
              dispatch(setModal({ status: false, value: {} }));
            },
            buttons: [
              {
                text: "Okay",
                onClick: () => {
                  navigate("/");
                  dispatch(setModal({ status: false, value: {} }));
                },
              },
            ],
          },
        })
      );
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  // this func for when user enter 4 digits to credit card number input, this function add a space
  const cardNumberOnKeyUp = (key: number) => {
    if (key !== 8) {
      if (
        cardNumber.length === 4 ||
        cardNumber.length === 9 ||
        cardNumber.length === 14
      )
        setCardNumber(cardNumber + " ");
    }
  };
  // this function for when user enter 2 digits to credit card expire date input, this function add a '/'
  const cardExpireDateOnKeyUp = (key: number) => {
    if (key !== 8) {
      if (cardExpireDate.length === 2) setCardExpireDate(cardExpireDate + "/");
    }
  };

  return (
    <div className={c.container}>
      <Header />
      <div className={c.contentField}>
        {/* top Field */}
        <div className={c.title}>Checkout</div>
        <div className={c.seperator}></div>
        <div className={c.title}>Your Item</div>
        <div className={c.itemField}>
          {cart.value.map((data: ICart) => {
            return (
              <div className={c.item} key={data.isbn}>
                <img src={data.image} alt={data.title} className={c.image} />
                <div className={c.infoArea}>
                  <div className={c.itemTitle}>{data.title}</div>
                  <div className={c.isbn}>{data.isbn}</div>
                </div>
                <div className={c.priceArea}>
                  <div className={c.price}>{data.count} Units</div>
                  <div className={c.price}>
                    ${(data.price * data.count).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={c.totalPrice}>Total Price: ${cart.totalPrice}</div>

        <Button
          text="Go To Cart"
          onClick={() => navigate("/cart")}
          className={c.goToCartButton}
        />

        <div className={c.seperator}></div>

        {/* form */}
        <form>
          {/* form personal information */}
          <div className={c.title}>Personal Information</div>
          <div className={c.nameSurnameAndMailPhoneField}>
            <Input
              type="text"
              value={name}
              setValue={setName}
              label="Name"
              placeholder="Name"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={validationError.includes("name")}
            />
            <Input
              type="text"
              value={surname}
              setValue={setSurname}
              label="Surname"
              placeholder="Surname"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={validationError.includes("surname")}
            />
          </div>
          <div className={c.nameSurnameAndMailPhoneField}>
            <Input
              type="email"
              value={mail}
              setValue={setMail}
              label="Mail"
              placeholder="Mail"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={validationError.includes("mail")}
            />
            <Input
              type="number"
              value={phone}
              setValue={setPhone}
              label="Phone"
              placeholder="E.G. 05370339315"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={validationError.includes("phone")}
            />
          </div>
          <Input
            type="textarea"
            value={adress}
            setValue={setAdress}
            label="Adress"
            placeholder="Adress"
            error={validationError.includes("adress")}
          />

          <div className={c.seperator}></div>

          {/* form payment indormation */}
          <div className={c.title}>Payment Information</div>
          <div className={c.paymentField}>
            <Input
              type="text"
              value={cardNumber}
              setValue={setCardNumber}
              label="Card Number"
              placeholder="E.G. 5378 47** **** 1923"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={validationError.includes("cardNumber")}
              onKeyUp={cardNumberOnKeyUp}
            />
            <Input
              type="text"
              value={cardExpireDate}
              setValue={setCardExpireDate}
              label="Expire Date"
              placeholder="E.G. MM/YY"
              containerClassName={c.cardExpireDateAndCvv}
              error={validationError.includes("cardExpireDate")}
              onKeyUp={cardExpireDateOnKeyUp}
            />
            <Input
              type="number"
              value={cvv}
              setValue={setCvv}
              label="CVV"
              placeholder="E.G. 123"
              containerClassName={c.cardExpireDateAndCvv}
              error={validationError.includes("cvv")}
            />
          </div>
          <div className={c.checkAndButtonArea}></div>
          <Checkbox
            type="checkbox"
            label="I have read the preliminary information text and I approve the purchase."
            value={isChecked}
            setValue={setIsChecked}
            error={validationError.includes("isChecked")}
          />

          {validationError.length > 0 && (
            <div className={c.errorMessage}>
              Please complete the input fields correctly.
            </div>
          )}

          <Button
            text="Complete your purchase"
            onClick={handleCheckout}
            className={c.button}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
