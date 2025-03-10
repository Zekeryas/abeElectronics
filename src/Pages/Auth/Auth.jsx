import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from './SignUp.module.css'
import { auth } from "../../Utility/firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type"; 
import logoX from "../../assets/img/logoX.jpg"




function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const [loading, setLoading] = useState({
      signIn: false,
      signUP: false,
    });
  // console.log(email,password)
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);
  // console.log(user)


  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    console.log(user)
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          // navigate("/");
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
        console.log(err)
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });

    } else {
      setLoading({ ...loading, signUP: true });
       createUserWithEmailAndPassword(auth, email, password)
         .then((userInfo) => {
          //  console.log(userInfo);
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
           setLoading({ ...loading, signUP: false });
          //  navigate("/");
           navigate(navStateData?.state?.redirect || "/");
         })
         .catch((err) => {         
           setError(err.message);
           setLoading({ ...loading, signUP: false });
         });

    }
  }
  return (
    <section className={classes.login}>
      {/* logo */}

      <Link to={"/"}>
        <img
        src={logoX} 
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold"
              }}
            >
              {navStateData?.state?.msg}
              
            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="signin"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the Abe Electronics Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/*  create account btn*/}

        <button
          type="signup"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUP ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Abe Electronics Account"
          )}         
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
