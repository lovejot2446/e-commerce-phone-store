import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5  text-center text-slanted  text-blue">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                  <img src={img} className="img-fluid " />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by:<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">Price:{price}</h4>
                  <p className="text-muted-lead box ">Info About Product:</p>
                  <div className="w-50">{info}</div>

                  <Link to="/">
                    <ButtonContainer>Back To products</ButtonContainer>
                  </Link>

                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Detail;
