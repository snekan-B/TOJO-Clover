import React from "react";
import { Link } from "react-router-dom";

/*images*/
import image1 from "../Assets/Section 1 img 1.png";
import image2 from "../Assets/Section 1 img 2.png";
import image3 from "../Assets/Section 2 pic1.png";
import image4 from "../Assets/Section 2 pic2.png";
import prod1 from "../Assets/removedjellybean.png";
import prod2 from "../Assets/removedgummy.png";
import prod3 from "../Assets/removed peppermint.png";
import prod5 from "../Assets/removedhardcandy.png";
import prod6 from "../Assets/removedtoffee.png";
import prod7 from "../Assets/removedchocot.png";
import cloverLogo from "../Assets/cloverLogo.png";
import footerimg from "../Assets/Footerimg.png";
import instalogo from "../Assets/instagram logo.png";
import whatsapp from "../Assets/whatsapplogo.png";
import twitter from "../Assets/twitterlogo.png";
import delivery1 from "../Assets/footerdelivery1.png";
import delivery2 from "../Assets/footerdelivery2.png";
import cloverfooter from "../Assets/cloverlogonobg.png";

import "../css/style.css";
function Home() {
  return (
    <div>
      <section className="Home-section1">
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light clover-navbar">
            <img className="nav-logo" src={cloverLogo} alt="main-logo"></img>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="ms-auto nav-items">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://google.com">
                      Products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://google.com">
                      Personalised Gifts
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className="Home-section2">
        <div className="container section2">
          <div className="row section2-text">
            Indulge in a delightful candy experience at the <br></br> Snack Shop{" "}
            <br></br> where you can satisfy your sweet cravings and indulge in a
            world of candy delights.
          </div>
          <div className="row">
            <div className="col  ">
              <img
                className="section2-img1 img-fluid"
                src={image1}
                alt="candy"
              ></img>
            </div>
            <div className="col">
              <img
                className="section2-img2 img-fluid"
                src={image2}
                alt="candy"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row section3-image1">
                <div className="gradient-background-combo">
                  <img
                    className="section3-img1"
                    src={image3}
                    alt="candies"
                  ></img>
                </div>
              </div>
              <div className="row section3-image2">
                <div className="gradient-background-combo">
                  <img
                    className="section3-img2"
                    src={image4}
                    alt="candies"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col section3-text">
              <h1 className="section3-heading">Combo Gift Packs</h1>
              <p className="section3-para">
                Discover sweet bliss with our Candy Combo! Indulge in a mix of
                classic favorites and mouthwatering novelties. From gummy bears
                to sour bells. our handpicked selection satisfies every craving.
                Ideal for parties or gifting, it's a candy lover's dream. Order
                now and dive into our candy Wonderland!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="container">
          <div className="row">
            <div className="col section4-textbox">
              <h1 className="section4-heading">Our Specials</h1>
              <p className="section4-text">
                Discover a world of flavors with our Individual Candy
                Collection!<br></br>From sweet to tangy, we offer a divers range
                to specify your taste buds. Perfect for snaking , gifting, or
                simply indulging your cravings.<br></br> Drive into our candy
                wonderland today!
              </p>
            </div>
            <div className="col">
              <div className="image-container">
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod1}
                    alt="product1"
                  ></img>
                </div>
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod2}
                    alt="product2"
                  ></img>
                </div>
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod3}
                    alt="product3"
                  ></img>
                </div>
              </div>
              <div className=" image-container">
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod5}
                    alt="product5"
                  ></img>
                </div>
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod6}
                    alt="product6"
                  ></img>
                </div>
                <div className="gradient-background">
                  <img
                    className="section4-img"
                    src={prod7}
                    alt="product7"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-5 background-section">
        <div className="container">
          <div className="row">
            <div className="section5-TextBox">
              <h1 className="section5-heading">
                We are undertaking Events and Function <br></br> Orders
              </h1>
              <p className="section5-text">
                Elevate your event with our delightful candy delivery service!
                <br></br>
                we offer a wide selection of candies to sweeten any occasion.
                <br></br>
                From colorful gummies to sour treats our candies will add a
                <br></br>
                delicious touch to your event. Place your candy order today
                <br></br> and make your celebration sweeter.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer footer-section">
        <div className="container footer-c">
          <div className="row">
            <div className="col">
              <img
                className="footer-image"
                src={footerimg}
                alt="footerimage"
              ></img>
            </div>
            <div className="col footer-container">
              <img
                className="nav-logo"
                src={cloverfooter}
                alt="main-logo"
              ></img>
              <div>Shops | Accounts | Colloboration | Franchise | About</div>
              <div>Chennai, Tamilnadu</div>
              <div style={{ fontWeight: "600" }}>Contact Us:</div>
              <div>phone: 923974292</div>
              <div>email: crever123@gmail.com</div>

              <div className="footer-logo-c">
                <img
                  className="footer-logo"
                  src={instalogo}
                  alt="instagram"
                ></img>
                <img className="footer-logo" src={twitter} alt="twitter"></img>
                <img
                  className="footer-logo"
                  src={whatsapp}
                  alt="whatsapp"
                ></img>
              </div>

              <div className="deliverylogos">
                <img src={delivery1} alt="delivery-logo"></img>
                <img src={delivery2} alt="delivery-logo"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
