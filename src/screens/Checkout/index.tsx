import React, { PropsWithChildren, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import { ICart, ICartValue } from "../../types/Cart";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { AppDispatch, AppState } from "../../redux/store";

import c from "./checkout.module.css";
import Button from "../../components/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";

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
  const [cardExpireData, setCardExpireData] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className={c.container}>
      <Header />
      <div className={c.contentField}>
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

        <Button text="Go To Cart" onClick={() => navigate("/cart")} />

        <div className={c.seperator}></div>

        <form>
          <div className={c.title}>Personal Information</div>
          <div className={c.nameSurnameAndMailPhoneField}>
            <Input
              type="text"
              value={name}
              setValue={setName}
              label="Name"
              placeholder="Name"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={false}
            />
            <Input
              type="text"
              value={surname}
              setValue={setSurname}
              label="Surname"
              placeholder="Surname"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={false}
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
              error={true}
            />
            <Input
              type="number"
              value={phone}
              setValue={setPhone}
              label="Phone"
              placeholder="Phone"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={false}
            />
          </div>
          <Input
            type="textarea"
            value={adress}
            setValue={setAdress}
            label="Adress"
            placeholder="Adress"
            error={true}
          />

          <div className={c.seperator}></div>

          <div className={c.title}>Payment Information</div>
          <div className={c.paymentField}>
            <Input
              type="number"
              value={cardNumber}
              setValue={setCardNumber}
              label="Card Number"
              placeholder="E.G. 5378 47** **** 1923"
              containerClassName={c.nameSurnameMailPhoneInputContainer}
              error={false}
            />
            <Input
              type="text"
              value={cardExpireData}
              setValue={setCardExpireData}
              label="Card Expire Date"
              placeholder="E.G. MM/YY"
              containerClassName={c.cardExpireDateAndCvv}
              error={true}
            />
            <Input
              type="number"
              value={cvv}
              setValue={setCvv}
              label="CVV"
              placeholder="E.G. 123"
              containerClassName={c.cardExpireDateAndCvv}
              error={false}
            />
          </div>
          <div className={c.checkAndButtonArea}></div>
          <Checkbox
            error={true}
            type="checkbox"
            label="I have read the preliminary information text and I approve the purchase."
            value={isChecked}
            setValue={setIsChecked}
          />

          <div className={c.errorMessage}>Please complete the input fields correctly.</div>
          <Button
            text="Complete your purchase"
            onClick={() => {}}
            className={c.button}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
