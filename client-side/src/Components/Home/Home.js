import React from "react";
import "../Home/Home.css";
import tvStandImage from "../Home/homeImage/tvStand.jpg";
import kitchenImage from "../Home/homeImage/kitchen6.jpeg";
import bedImage from "../Home/homeImage/bed4.jpg";
import outdoorImage from "../Home/homeImage/outdoor.jpg";
import sofaImage from "../Home/homeImage/sofa.jpg";
import sofa3Image from "../Home/homeImage/sofa3.jpg";
import tableImage from "../Home/homeImage/table4.jpg";
import tvImage from "../Home/homeImage/tv.jpg";
import user9Image from "../Home/homeImage/user9.webp";
import user4Image from "../Home/homeImage/user4.png";
import user7Image from "../Home/homeImage/user7.png";

function Home() {
  return (
    <>
      <section id="top">
        <div class="firstslide">
          <div class="firstText">
            <div class="house">
              <p>
                Households <br />
                <span>Outstadings</span>
              </p>
            </div>

            <div class="text">
              <p>
                Explore our wide range of household items with high quality at
                reasonable prices. If you’re looking for household items that
                are both high quality and environmentally friendly, there are
                plenty of options available.
              </p>
              <a href="../login/login.html">
                <button type="submit" class="view">
                  SHOP NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href="#top" class="scroll">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
      <section>
        <div class="title">
          <p>
            <span>Navigate to our categories</span>
            <br />
            To build your base
          </p>
        </div>

        <div class="whole">
          <div class="container">
            <div class="images">
              <img src={tvStandImage} alt="" />
            </div>
            <div class="number">
              <p>01</p>
            </div>

            <div>
              <h2>living room furniture</h2>
            </div>
            <div class="para">
              <p>
                This is a place where you should feel comfortable ,so it’s
                important to have the right furniture and accessories to make it
                comfortable and functional.
              </p>
            </div>
            <div>
              <a href="../livingroom/living.html">VIEW MORE</a>
            </div>
          </div>

          <div class="container">
            <div class="images">
              <img src={kitchenImage} alt="" />
            </div>
            <div class="number">
              <p>02</p>
            </div>
            <div>
              <h2>Kitchen essentials</h2>
            </div>
            <div class="para">
              <p>
                This is a place where you should feel comfortable ,so it’s
                important to have the right furniture and accessories to make it
                comfortable and functional.
              </p>
            </div>
            <div>
              <a href="../Kitchen/kitchen.html">VIEW MORE</a>
            </div>
          </div>
          <div class="container">
            <div class="images">
              <img src={bedImage} alt="" />
            </div>
            <div class="number">
              <p>03</p>
            </div>
            <div>
              <h2>Bedroom Furnitures</h2>
            </div>
            <div class="para">
              <p>
                This is a place where you should feel comfortable ,so it’s
                important to have the right furniture and accessories to make it
                comfortable and functional.
              </p>
            </div>
            <div>
              <a href="../Bedroom/bedroom.html">VIEW MORE</a>
            </div>
          </div>
          <div class="container">
            <div class="images">
              <img src={outdoorImage} alt="" />
            </div>
            <div class="number">
              <p>04</p>
            </div>
            <div>
              <h2>Out door essentials</h2>
            </div>
            <div class="para">
              <p>
                This is a place where you should feel comfortable ,so it’s
                important to have the right furniture and accessories to make it
                comfortable and functional.
              </p>
            </div>
            <div>
              <a href="../outdoor/outdoor.html">VIEW MORE</a>
            </div>
          </div>
        </div>
      </section>
      <section class="whole-1">
        <img src={sofaImage} alt="" />

        <div class="items-1">
          <div>
            <h2>
              <span class="p-1">Explore our different </span>
              <br />
              item categories
            </h2>

            <p>
              We offer a wide range of furniture items that cater to your needs
              and preferences. Our collection includes furniture for your living
              room, bedroom, dining room, home office, and outdoor spaces.
            </p>
            <a href="../about/about.html">
              <button type="submit" class="explore">
                EXPLORE
              </button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="title">
          <p>
            <span>New</span>
            <br />
            Arrivals
          </p>
        </div>
        <div class="whole">
          <div class="container">
            <div class="jpg">
              <a href="#">
                <img src={sofa3Image} alt="" />
                <p>
                  Blueblack Sofa <br />
                  <span>Price: 44,999 birr </span>
                  <i class="fa fa-link"></i>
                </p>
              </a>
            </div>
          </div>
          <div class="container">
            <div class="jpg">
              <a href="#">
                <img src={tableImage} alt="" />

                <p>
                  Table <br />
                  <span>Price: 4,999 birr </span>
                  <i class="fa fa-link"></i>
                </p>
              </a>
            </div>
          </div>
          <div class="container">
            <div class="jpg">
              <a href="#">
                <img src={tvImage} alt="" />

                <p>
                  Full living Room furnitures
                  <br />
                  <span>Price: 59,999 birr</span>
                  <i class="fa fa-link"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="title">
          <p>
            <span>Testimonals</span>
            <br />
            Hear what our clients say
          </p>
        </div>
        <div class="whole">
          <div class="container">
            <div class="png1">
              <img src={user9Image} alt="" />
            </div>
            <div class="name">
              <p>John.</p>
              <br />
              <i class="fa fa-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <div class="paragraph">
              <p>
                Hi, I’m John, and I recently visited this ecommerce furniture
                website. I found the website to be decent, but there were some
                areas where it could improve. The website has a good selection
                of furniture, but I found that the checkout process to be a bit
                confusing.
              </p>
            </div>
          </div>
          <div class="container">
            <div class="png">
              <img src={user4Image} alt="" />
            </div>
            <div class="name">
              <p>Elisabeth.</p>
              <br />
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>

            <div class="paragraph">
              <p>
                Hi, I’m Elisabeth. I recently purchased some furniture from this
                ecommerce website, and I was very impressed with the selection
                and quality of the products. I would definitely recommend this
                website to anyone looking for high-quality furniture.
              </p>
            </div>
          </div>
          <div class="container">
            <div class="png">
              <img src={user7Image} alt="" />
            </div>
            <div class="name">
              <p>Lily.</p>
              <br />
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>

            <div class="paragraph">
              <p>
                Hi, I’m Lily. I recently purchased a sofa from this ecommerce
                furniture website, and I have to say, I was blown away by the
                quality of the product. The website was easy to navigate, and I
                was able to find exactly what I was looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
