import '../styles/navbar.module.css';
import NextLink from 'next/link';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import {Badge} from "@mui/material"
import {Store} from "../utilis/Store"
import { useContext } from 'react';


export default function Navbar() {
  const {state} = useContext(Store)
  const {cart} = state
  return (
    <nav className={`${styles.navbar} navbar sticky navbar-expand-lg bg-light`}>
      <div className="container-fluid">
        <NextLink href="/aaa" passHref>
          <a className={`${styles.logo} navbar-brand ms-3`}>Next-Ecom2</a>
        </NextLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
           
            <NextLink
              href="/cart"
              passHref
              className={`${styles.navItem} nav-item`}
            >
              <a className={`${styles.linkColor} nav-link `}>
              {cart.cartItems.length > 0 ? <Badge
                    color="primary"
                     badgeContent={cart.cartItems.length}>
                      CART
                    </Badge> : "CART"}
                
                </a>
            </NextLink>
            <NextLink
              href="/login"
              passHref
              className={`${styles.navItem} nav-item`}
            >
              <a className={`${styles.linkColor} nav-link `}>Login</a>
            </NextLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
