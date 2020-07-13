import React from "react";
import "./ProductDetailGrid.scss";

class ProductDetailGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  // idChangeEvent = (e) => {
  //   this.setState({ id: e.target.value });
  //   console.log("id >>> ", this.state.id);
  // };

  // pwChangeEvent = (e) => {
  //   this.setState({ pw: e.target.value });
  //   console.log("pw >>> ", this.state.pw);
  // };

  // cfigureckHandler = () => {
  //   //e.prevent.Default();
  //   //POST
  //   fetch("http://10.58.0.88:8000/user/signin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //     }), //이 )소괄호는 아직 fetch에 소괄호니까 밑에 then 가능
  //   })
  //     .then((res) => res.json()) // 제이슨 바디로 온다...
  //     .then((res) => {
  //       if (res.token) {
  //         localStorage.setItem("access_token", res.token);
  //         this.props.history.push("/");
  //       }
  //     });
  // };

  render() {
    return (
      <section id="pattern" class="pattern">
        <div class="grid">
          <figure>
            <div>
              1sdasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdsssssssssssssssssssss
            </div>
          </figure>
          <figure>
            <div>
              2asdssssasdssssasddssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssssss
            </div>
          </figure>
          <figure>
            <div>
              3asdssssasdssssasdssssasdssdssssasdssssasdssdssssasdssssasdssssasdssssasdssssasdssssasdssss
            </div>
          </figure>
          <figure>
            <div>
              sasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssss
            </div>
          </figure>
          <figure>
            <div>
              sasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssss
            </div>
          </figure>
          <figure>
            <div>
              asdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdsssss
            </div>
          </figure>
          <figure>
            <div>saasdssssasdssssasdssssasdsssssdssssasdssssasdssss</div>
          </figure>
          <figure>
            <div>asdssssasdssssasdssssasdssssasdssssasdssssasdsssss</div>
          </figure>
          <figure>
            <div>
              asdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdssssasdsssss
            </div>
          </figure>
        </div>
      </section>
    );
  }
}
export default ProductDetailGrid;
