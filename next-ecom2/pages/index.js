import Layout from '../components/Layout';
import Shirts from '../components/Shirts';
import ProductCarousel from '../components/ProductCarousel';
export default function Home() {
  return (
    <>
      <Layout>
        <ProductCarousel />
        <Shirts />
      </Layout>
    </>
  );
}
