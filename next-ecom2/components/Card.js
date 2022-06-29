import Image from 'next/dist/client/image';
import Link from 'next/link';
import styles from '../styles/cardgroup.module.css';
export default function Card(shirts) {
  const { title, desc, price, img, slug } = shirts;

  return (
    <div className="col">
      <Link href={`products/${slug}`} passHref>
        <div className="card rounded shadow">
          <Image
            src={img}
            className="card-img-top"
            alt="Shirt Image"
            layout="responsive"
            width={30}
            height={25}
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
          <div className=" container d-flex justify-content-between ">
            <h6>Price </h6>
            <h6>PKR : {price}</h6>
          </div>

          <div className="d-grid gap-2">
            <button
              className={`${styles.cardbtn} btn btn-primary`}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
