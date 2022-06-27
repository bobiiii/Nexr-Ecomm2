import styles from '../styles/cardgroup.module.css';
import data from '../utilis/data';
import Card from './Card';
export default function Shirts() {
  const card = (shirts) => {
    return (
      <Card
        slug={shirts.slug}
        key={shirts.id}
        img={shirts.img}
        title={shirts.title}
        desc={shirts.desc}
        price={shirts.price}
      />
    );
  };
  return (
    <>
      <div className={`${styles.cgheading} container rounded mt-4`}>
        <h2> Shirts</h2>
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
        {data.shirts.map(card)}
      </div>
    </>
  );
}

/* <div className="col">
          <div className="card">
            <Image
              src="/images/shirt1.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />

            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt2.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt3.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt4.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt5.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt6.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <Image
              src="/images/shirt1.jpg"
              class="card-img-top"
              alt="Shirt Image"
              layout="responsive"
              width={50}
              height={40}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div> */
