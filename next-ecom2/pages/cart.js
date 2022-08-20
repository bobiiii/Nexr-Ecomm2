import { useContext } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utilis/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
const cart = () => {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log(cart);
  return (
    <div>
      <Layout title="Shopping Cart">
        {cartItems.length === 5 ? (
          <div>
            <h3>Cart is Empty</h3>
            <NextLink href="/" passHref>
              Go Shopping
            </NextLink>
          </div>
        ) : (
          <div className="container">
            <h2>Shopping Cart</h2>
            <div className="row">
              <div className="col-9 col-md-9 col-sm-12 d-flex">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((items) => {
                        const imgurl = items.img;

                        console.log(items);
                        return (
                          <NextLink href={`/products/${items.slug}`} passHref>
                            <TableRow key={items._id}>
                              <TableCell>
                                <Image
                                  src={imgurl}
                                  width={50}
                                  height={50}
                                  Layout="responsive"
                                  alt={items.title}
                                />
                              </TableCell>
                              <TableCell>
                                <NextLink href={`/products/${items.slug}`}>
                                  {items.title}
                                </NextLink>
                              </TableCell>
                              <TableCell align="right">{items.price}</TableCell>
                              <TableCell align="right">
                                <Select value={items.quantity}>
                                  {[...Array(items.countInStock).keys()].map(
                                    (x) => {
                                      <MenuItem key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </MenuItem>;
                                    }
                                  )}
                                </Select>
                              </TableCell>
                              <TableCell align="right">
                                <Button variant="contained" color="secondary">
                                  x
                                </Button>
                              </TableCell>
                            </TableRow>
                          </NextLink>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="col-3 col-md-3 col-sm-12">
                <h5>total summary</h5>
                <h5>total summary</h5>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default cart;
