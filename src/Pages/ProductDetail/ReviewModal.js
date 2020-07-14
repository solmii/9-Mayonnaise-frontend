import React, { useState } from "react";
import styled from "styled-components";
import Rating from "react-rating";
import { REVIEW_API, STAR_EMPTY, STAR_FILL } from "config";

const ReviewModal = () => {
  const [reviewImg, setReviewImg] = useState({
    reviewImgURL: null,
    reviewImgNameURL: null,
    previewImgURL: "",
  });

  const { reviewImgURL, reviewImgNameURL, previewImgURL } = reviewImg;

  const [reviewInfo, setReviewInfo] = useState({
    productNum: 1,
    skinType: "모든피부",
    rating: 5,
    reviewContent: "",
  });

  const { productNum, skinType, rating, reviewContent } = reviewInfo;

  const skinTypeArr = [
    "민감성",
    "건성",
    "지성",
    "중성",
    "복합성",
    "모든피부",
    "악건성",
    "트러블성",
  ];

  const handleUploadReviewImg = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setReviewImg({
        reviewImgURL: file,
        reviewImgNameURL: file.name,
        previewImgURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleReviewInfo = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setReviewInfo({
      ...reviewInfo,
      [name]: value,
    });
  };

  const handleClickRating = (rate) => {
    setReviewInfo({
      ...reviewInfo,
      rating: rate,
    });
  };

  const handleReviewSubmit = () => {
    const formData = new FormData();
    formData.append("review_image", reviewImgURL);
    formData.append("filename", reviewImgNameURL);
    formData.append("product_id", productNum);
    formData.append("skin_type_id", skinType);
    formData.append("comment", reviewContent);
    formData.append("rate", rating);

    fetch(`${REVIEW_API}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: formData,
    })
      .then(alert("리뷰가 작성되었습니다!"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ReviewSection>
      <h2 className="brand-font">ARITAUM REVIEWS</h2>
      <h1>소중한 리뷰를 남겨주세요.</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <p>상품명</p>
                <span>Product Name</span>
              </th>
              <td>클리어 C 어드밴스드 이펙터</td>
            </tr>

            <tr>
              <th>
                <p>평점</p>
                <span>Rating</span>
              </th>
              <td className="ratingForm">
                <Rating
                  emptySymbol={
                    <img alt="star_empty" src={STAR_EMPTY} className="icon" />
                  }
                  fullSymbol={
                    <img alt="star_fill" src={STAR_FILL} className="icon" />
                  }
                  initialRating={rating}
                  onChange={(rate) => handleClickRating(rate)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <p>피부 타입</p>
                <span>Skin Type</span>
              </th>
              <td>
                <SelectBox onChange={handleReviewInfo}>
                  {skinTypeArr.map((skinType, idx) => (
                    <option name="skinType" value={skinType} key={idx}>
                      {skinType}
                    </option>
                  ))}
                </SelectBox>
              </td>
            </tr>

            <tr>
              <th>
                <p>리뷰</p>
                <span>Product Review</span>
              </th>
              <td>
                <ReviewTextarea
                  name="reviewContent"
                  onChange={handleReviewInfo}
                ></ReviewTextarea>
              </td>
            </tr>

            <tr>
              <th>
                <p>이미지</p>
                <span>Review Image</span>
              </th>
              <td>
                <ImgUploadInput>
                  <label htmlFor="reviewImg">업로드</label>
                  <input
                    type="file"
                    accept="image/jpg,impge/png,image/jpeg"
                    id="reviewImg"
                    onChange={handleUploadReviewImg}
                  />
                  {previewImgURL !== "" && (
                    <img alt="preview_review_img" src={previewImgURL} />
                  )}
                </ImgUploadInput>
              </td>
            </tr>
          </tbody>
        </table>
        <SubmitBtn className="main-font" onClick={handleReviewSubmit}>
          리뷰 남기기
        </SubmitBtn>
      </div>
    </ReviewSection>
  );
};

export default ReviewModal;

const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.06em;
    color: #2b2b2b;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 29px;
  }

  table {
    min-width: 700px;
    margin: 35px 0;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #ccc;
    border-spacing: unset;
    text-align: left;
    vertical-align: top;
    background-color: white;

    tbody {
      th {
        width: 200px;
        padding: 20px 30px;
        border-bottom: 1px solid #ccc;
        vertical-align: top;
        color: #2b2b2b;
        background-color: #f7f7f7;

        p {
          margin-bottom: 6px;
        }
      }

      td {
        padding: 30px;
        border-bottom: 1px solid #ccc;
        vertical-align: top;
      }

      textarea {
        width: 500px;
        min-height: 160px;
        resize: none;
        outline: none;
      }
    }
  }
`;

const ImgUploadInput = styled.div`
  display: flex;

  label {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #444;
    font-size: 15px;
    border: 1px solid #ccc;
    color: #444;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover,
    &:active {
      border: 1px solid black;
      transition: all 0.2s ease-in-out;
    }
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  img {
    margin-left: 20px;
    width: auto;
    height: 37px;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      cursor: none;
    }
  }
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 12px;
  font-family: inherit;
  font-size: 15px;
  color: #444;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid black;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const ReviewTextarea = styled.textarea`
  font-family: inherit;
  line-height: 1.25;
  border: 1px solid #ccc;
  color: #444;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid black;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const SubmitBtn = styled.button`
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 13px 100px;
  font-size: 17px;
  color: white;
  background-color: #2b2b2b;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: #4477be;
    transition: all 0.2s ease-in-out;
  }
`;
