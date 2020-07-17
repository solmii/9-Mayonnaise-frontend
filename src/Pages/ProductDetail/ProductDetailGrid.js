import React from "react";
import "./ProductDetailGrid.scss";

class ProductDetailGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[],
      user_id: "",
      rate:"",
      create_at:"",
      comment:"",
      image:"",
      skin_type:"",
      reviewData: {},
      ptConditionShow: false,
      ptBtnOptionListShow: "피부타입",
      btConditionShow: false,
      btBtnOptionListShow: "작성일순",
    };
  }

  // componentDidMount() {
  //   fetch(`http://10.58.3.235:8000/review?product_id=${this.props.productId}`)
  //     .then((res) => res.json())
  //     // .then((res) => console.log(res));
  //     .then((res) => this.setState({ data: res.reviews }));
  // }

  render() {
    console.log("dddddd: ", this.props.reviewData);
    //  const { data } = this.state;
    return  (
     
      <section id="pattern" class="pattern">
        <div class="grid">
          {this.props.reviewData.map(data => {
            return(
          <figure>
            <div className="reviewCard">
              
              <div className="Card1">{data.rate}</div>
          <div className="CardTop">
              <div className="Card2">{data.user_id}</div>
              <div className="Card3">{data.skin_type}</div>
              <div className="Card4">{data.create_at}</div>
         </div>
              <div className="CardMid">
              <div className="Card5">{data.comment}</div>
           <section class="imgsec">
              <img
                    className="productImg33"
                    src={data.image
                    } width="70" height="70"
                    alt=""
                  /></section>
                  </div>
           
            </div>
          </figure>
            )
          })}
        </div>
      </section>
    );
  }
}
export default ProductDetailGrid;
