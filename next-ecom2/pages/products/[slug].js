import Image from 'next/image';

import Layout from '../../components/Layout';

import styles from '../../styles/cardgroup.module.css';
import db from '../../utilis/db/db';
import Product from '../../model/Product';
import { useContext } from 'react';
import {Store} from "../../utilis/Store"
import axios from "axios"
import {Badge} from "@mui/material"

export default function Productslug(props) {
  const { state, dispatch} = useContext(Store)
  const {cart} = state
  const { product } = props;

  if (!product) {
    return <h1>Product not Found</h1>;
  }
  const addToCartHandler = async ()=>{
    const {data} = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock <= 0) {
      window.alert("sorry. Item is out of stock")
      return
      
    }
    dispatch({type:"CART_ADD_ITEM", payload:{...product, quantity: 1}})
  }
  
  return (
    <>
      <Layout title={product.title} description={product.desc}>
        <div className="container ">
          <h6> Back to Home</h6>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <Image
                src={product.img}
                alt="product img"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="col-12 col-md-3 ">
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <p>Desc: {product.desc}</p>
              <p>
                Rating: {product.rating} stars({product.numReviews}Reviews)
              </p>
            </div>
            <div className=" col-12 col-md-3 ">
              <div className="card ">
                <div className="card-body p-2 mx-1">
                  <div className="d-flex justify-content-between">
                    <h6>Price</h6>
                    <h6>{product.price}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Stock</h6>
                    <h6>
                      {product.countInStock > 0 ? 'In-Stock' : 'Out Of Stock'}
                    </h6>
                  </div>
                  <div className="d-grid gap-2 col-10 col-md-12 mx-auto">
                    <button
                      className={`btn btn-primary ${styles.cardbtn}`}
                      type="button"
                      onClick={addToCartHandler}
                    >Add To Cart
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
