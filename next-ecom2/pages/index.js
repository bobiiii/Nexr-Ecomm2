import Layout from '../components/Layout';
import Shirts from '../components/Shirts';
import ProductCarousel from '../components/ProductCarousel';
import db from '../utilis/db/db';
import Product from '../model/Product';
export default function Home(props) {
  const { products } = props;

  return (
    <>
      <Layout>
        <ProductCarousel />
        <Shirts products={products} />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
