// import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./footer.module.css";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/logoX.jpg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div>
        <div className={classes.footer_logo}>
          <Link to="/">
            <img
              src={footerLogo}
              alt=" evangagadi logo"
            />
          </Link>
          <h3 className={classes.titles}> Abe Electronics </h3>
        </div>
        <hr />
        <div className={classes.footer_icons}>
          <a href="#" target="_blank">
            <FacebookOutlined style={{ fontSize: "35px" }} />
          </a>
          <a href="#" target="_blank">
            <InstagramIcon style={{ fontSize: "35px" }} />
          </a>
          <a href="#" target="_blank">
            <YouTubeIcon style={{ fontSize: "40px" }} />
          </a>
          <a href="#" target="_blank">
            <TelegramIcon style={{ fontSize: "40px" }} />
           </a>
        </div>
      </div>
      <div className={classes.footer_links}>
                 <h4 style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                 	
                 Get to Know Us
          </h4>
        <ul className={classes.footer_ul}>
          <li className={classes.term}>
            <Link
              to="/Careers"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
              Careers
            </Link>
          </li>
          <li className={classes.term}>
            <Link
              to="/About Abe Electronics"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
                About Abe Electronics
              
            </Link>
          </li>
          <li className={classes.privacy}>
            <Link
              to="/Abe Electronics Devices"
              style={{ textDecoration: "none", color: "#959CA4" }}
            >
              Abe Electronics Devices
            </Link>
          </li>
        </ul>
      </div>
            <div className={classes.footer_links}>
                 <h4 style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
                 	
                 Make Money with Us
          </h4>
        <ul className={classes.footer_ul}>
          <li className={classes.term}>
            <Link
              to="/Sell products on Abe Electronics"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
              Sell products on Abe Electronics
            </Link>
          </li>
          <li className={classes.term}>
            <Link
              to="/Sell on Abe Electronics Business/"
              style={{
                textDecoration: "none",
                color: "#959CA4",
                paddingLeft: "0",
              }}
            >
                Sell on Abe Electronics Business
              
            </Link>
          </li>
          <li className={classes.privacy}>
            <Link
              to="/Advertise Your Products"
              style={{ textDecoration: "none", color: "#959CA4" }}
            >
              Advertise Your Products
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.footer_contacts}>
          <h4 style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
            Contact Info
          </h4>
          <ul className={classes.footer_ul}>
          <li>Abe Electronics</li>
          <li>abeelectronics@gmail.com</li>
          <li>+251933531084</li>
        </ul>
           <h3>Address</h3>
            <ul>
                <li>Addis Abeba, Ethiopia</li>
            </ul>
        
      </div>
    </div>
  );
}

export default Footer;
