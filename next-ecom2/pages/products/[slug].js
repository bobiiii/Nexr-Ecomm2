import Image from 'next/image';

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utilis/data';
import styles from '../../styles/cardgroup.module.css';

export default function Productslug() {
  const router = useRouter();
  const slug = router.query.slug;
  const product = data.shirts.find((a) => a.slug === slug);
  if (!product) {
    return <h1>Product not Found</h1>;
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
                    >
                      Add To Cart
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
