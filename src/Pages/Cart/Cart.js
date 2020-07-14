import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchPutQuantity, fetchDeleteProduct } from "./CartFunction";
import { CART_API } from "config";

const Cart = () => {
  const [cartListData, setCartListData] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [shippingPrice, setShippingPrice] = useState(2500);

  const fetchCartData = () => {
    fetch(`${CART_API}/cartlist`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setCartListData(res.product_list));
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const sumTotalPrice = (cartListData) => {
    let total = 0;
    for (let i in cartListData) {
      total += cartListData[i].productPrice * cartListData[i].productQuantity;
    }
    setTotalPrice(total);
    if (total > 50000) {
      setShippingPrice(0);
    } else {
      setShippingPrice(2500);
    }
    return;
  };

  useEffect(() => {
    sumTotalPrice(cartListData);
  }, [cartListData]);

  return cartListData ? (
    <CartSection>
      <header>
        <h1>장바구니</h1>
      </header>
      <article className="cartTitleForm">
        <div className="cartTitle">
          <div>
            <input type="checkbox" />
          </div>
          <div>상품명</div>
          <div>수량</div>
          <div>상품가격</div>
          <div>삭제</div>
        </div>
      </article>
      {cartListData.map((cartItem, idx) => (
        <CartProductBoard key={idx}>
          <div className="cartListForm">
            <div>
              <input type="checkbox" />
            </div>
            <div>
              <img alt="cart_item" src={cartItem.productImg} />
              <div className="productName">
                <h2>{cartItem.productKoName}</h2>
                <h3 className="brandFont">{cartItem.productEnName}</h3>
                <p className="volumeFont">{cartItem.productVolumn}</p>
              </div>
            </div>
            <div>
              <p className="quantityText">{cartItem.productQuantity}</p>
              <button
                className="quantityBtn"
                type="button"
                onClick={() => fetchPutQuantity(cartItem, -1, fetchCartData)}
              >
                ﹣
              </button>
              <button
                className="quantityBtn"
                type="button"
                onClick={() => fetchPutQuantity(cartItem, +1, fetchCartData)}
              >
                ﹢
              </button>
            </div>
            <div>
              <p className="priceFont">
                {(
                  cartItem.productPrice * cartItem.productQuantity
                ).toLocaleString()}
                원
              </p>
            </div>
            <div>
              <DelBtn
                onClick={() => fetchDeleteProduct(cartItem, fetchCartData)}
              >
                삭제
              </DelBtn>
            </div>
          </div>
        </CartProductBoard>
      ))}
      <PriceForm>
        <div className="totalPrice">
          <p>*배송비 : 50,000원 이상 구매 시 무료배송</p>
          <p>
            총 상품금액{" "}
            <span className="point">{totalPrice.toLocaleString()}</span>원 +
            배송비{" "}
            <span className="point">{shippingPrice.toLocaleString()}</span>원
          </p>
          <p>
            결제 예상 금액{" "}
            <span className="pointTotal">
              {(totalPrice + shippingPrice).toLocaleString()}
            </span>
            원
          </p>
        </div>
        <SubmitBtn>
          <Link to="/">
            <button className="mainBtn mainFont">쇼핑 계속하기</button>
          </Link>
          <button className="submitBtn mainFont">결제하기</button>
        </SubmitBtn>
      </PriceForm>
    </CartSection>
  ) : (
    ""
  );
};

export default Cart;

const CartSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 45px 0 35px;
    font-size: 40px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  .cartTitleForm {
    background-color: #f7f7f7;
    border-bottom: 1px solid #ddd;

    .cartTitle {
      display: flex;
      justify-content: space-between;
      width: 1180px;
      margin: 15px auto;
      font-size: 18px;
      text-align: center;

      div:nth-of-type(2) {
        width: 370px;
      }

      div:nth-of-type(3) {
        width: 100px;
      }

      div:nth-of-type(4) {
        width: 100px;
      }

      div:nth-of-type(5) {
        width: 70px;
      }
    }
  }
`;

const CartProductBoard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #ddd;

  .cartListForm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1180px;
    margin: 0 auto;

    div {
      text-align: center;

      &:nth-of-type(2) {
        display: flex;
        align-items: center;
        width: 370px;
      }

      &:nth-of-type(3) {
        display: flex;
        align-items: center;
      }

      img {
        max-width: 80px;
        margin-right: 20px;
      }

      h2 {
        padding: 6px 0;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
      }

      h3 {
        font-size: 12px;
        text-align: left;
      }

      .volumeFont {
        padding-top: 8px;
        font-size: 14px;
        text-align: left;
      }

      p {
        font-size: 16px;
      }

      input[type="number"] {
        width: 40px;
      }

      .priceFont {
        width: 80px;
        font-size: 18px;
        color: #4477be;
      }

      button {
        font-size: 16px;
      }
    }

    .quantityText {
      padding-right: 16px;
      font-size: 20px;
      font-weight: bold;
    }

    .quantityBtn {
      margin: 0 2px;
      padding: 0 3px;
      border: 1px solid #2b2b2b;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      &:hover {
        border: 1px solid #4477be;
        color: #4477be;
      }
    }
  }
`;

const DelBtn = styled.button`
  width: 70px;
  height: 30px;
  font-size: 17px;
  text-align: center;
  border: 1px solid #444;
  color: #444;
  background-color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #4477be;
    color: white;
    background-color: #4477be;
  }
`;

const PriceForm = styled.div`
  background-color: #f7f7f7;

  .totalPrice {
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px 0;

    p {
      position: relative;
      padding: 10px 0;
      font-size: 18px;
      text-align: right;

      &:nth-of-type(1) {
        font-size: 14px;
        color: #666;
      }

      &:nth-of-type(3) {
        line-height: 36px;
      }
    }

    .point {
      font-weight: bold;
      color: #4477be;
    }

    .pointTotal {
      font-size: 32px;
      font-weight: bold;
      color: #4477be;
    }
  }
`;

const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding-top: 40px;

  .mainBtn {
    width: 230px;
    margin: 0 5px;
    padding: 13px;
    font-size: 17px;
    border: 1px solid #444;
    color: #444;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  .submitBtn {
    width: 230px;
    margin: 0 5px;
    padding: 13px;
    font-size: 17px;
    border: 1px solid #2b2b2b;
    color: white;
    background-color: #2b2b2b;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    border: 1px solid #4477be;
    color: white;
    background-color: #4477be;
  }
`;
