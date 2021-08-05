import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Message from "../components/Messge";
import Loader from "../components/loader";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

const HomeScreens = () => {
  const Dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    Dispatch(listProducts());
  }, [Dispatch]);
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varaint='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((e) => {
            return (
              <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={e} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default HomeScreens;
