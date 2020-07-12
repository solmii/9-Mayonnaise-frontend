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

  // clickHandler = () => {
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
        <ul class="grid">
          <li>
            <div>
              <a href="#">
                1quires a valid value to be accessible. Provide a valid,
                navigable address as the href value. If you cannot provide a
                valid href, but still need the element to resemble a link, use a
                button and change it wquires a valid value to be accessible.
                Provide a valid, navigable address as the href value. If you
                cannot provide a valid href, but still need the element to
                resemble a link, use a button and change it wquires a valid
                value to be accessible. Provide a valid, navigable address as
                the href value. If you cannot provide a valid href, but still
                need the element to resemble a lquires a valid value to be
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide a valid href, but still need the
                element to resemble a link, use a button and change it wquires a
                valid value to be accessible. Provide a valid, navigable address
                as the href value. If you cannot provide a valid href, but still
                need the element to resemble a lquires a valid value to be
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide a valid href, but still need the
                element to resemble a link, use a button and change it wink, use
                a button and change it wink, use a button and change it w
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">2</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">3</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">4</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">5</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">6</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">7</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">8</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">9</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">10</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">11</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">12</a>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
export default ProductDetailGrid;
