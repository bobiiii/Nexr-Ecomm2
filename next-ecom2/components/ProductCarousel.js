import Image from 'next/dist/client/image';
import styles from '../styles/cardgroup.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ProductCarousel() {
  return (
    <div className={styles.cgheading}>
      <h2 style={{ textAlign: 'center ' }}>Top Products</h2>
      <Carousel
        autoPlay
        transitionTime={600}
        showStatus={false}
        infiniteLoop={true}
        interval={2500}
        showThumbs={false}
      >
        <div>
          <Image
            src="/images/shirt1.jpg"
            className="card-img-top "
            alt="Shirt Image"
            layout="responsive"
            width={80}
            height={30}
          />
        </div>
        <div>
          <Image
            src="/images/shirt2.jpg"
            className="card-img-top"
            alt="Shirt Image"
            layout="responsive"
            width={80}
            height={30}
          />
        </div>
        <div>
          <Image
            src="/images/shirt3.jpg"
            className="card-img-top"
            alt="Shirt Image"
            layout="responsive"
            width={80}
            height={30}
          />
        </div>
        <div>
          <Image
            src="/images/shirt4.jpg"
            className="card-img-top"
            alt="Shirt Image"
            layout="responsive"
            width={80}
            height={30}
          />
        </div>
        <div>
          <Image
            src="/images/shirt5.jpg"
            className="card-img-top"
            alt="Shirt Image"
            layout="responsive"
            width={80}
            height={30}
          />
        </div>
      </Carousel>
    </div>
  );
}
