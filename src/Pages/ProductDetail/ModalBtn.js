import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import ReviewModal from "./ReviewModal";

const ModalBtn = () => {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  const [openReviewModal, setopenReviewModal] = useState(false);

  const onClickReviewBtn = () => {
    setopenReviewModal(!openReviewModal);
  };

  return (
    <>
      <ReviewBtn onClick={onClickReviewBtn}>리뷰 남기기</ReviewBtn>
      <ReactModal
        isOpen={openReviewModal}
        onRequestClose={onClickReviewBtn}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            width: "70%",
            height: "85%",
            padding: "0",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
          },
        }}
      >
        <ReviewModal modalClickHandelr={onClickReviewBtn} />
      </ReactModal>
    </>
  );
};

export default ModalBtn;

const ReviewBtn = styled.button`
  margin-left: 69%;
  padding: 10px 40px;
  border: 1px solid #444;
  font-size: 15px;
  color: #444;
  background-color: white;
  z-index: 100;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #4477be;
    color: white;
    background-color: #4477be;
    transition: all 0.2s ease-in-out;
  }
`;
