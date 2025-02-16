import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"
import logoX from "../../assets/img/logoX.jpg"


const Header = () => {
  const [{user,basket}, dispatch] = useContext(DataContext)
  // console.log(basket.length)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount+amount
  }, 0)



  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src={logoX}
              alt="Abe Electroics"
            />
          </Link>
          <div className={classes.delivery}>
            <span>{<SlLocationPin />}</span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>{" "}
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          <BsSearch size={38} />
        </div>
        {/* Right side link */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
              alt="USA flags"
            />
            <section>
              <option value="">EN</option>
            </section>
          </Link>
          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => (user ? auth.signOut() : null)}>
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>return</p>
            <span>& orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            {<BiCart size={35} />}
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header
