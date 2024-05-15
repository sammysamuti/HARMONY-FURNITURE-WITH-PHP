import React from "react";
import sofa11 from "../../assests/aboutImage/sofa11.jpg";
import shortImage from "../../assests/aboutImage/short.jpeg";
import sofa09 from "../../assests/aboutImage/sofa09.jpg";
import sofa123 from "../../assests/aboutImage/sofa123.jpg";
import video from "../../assests/aboutImage/video.mp4";
import sofa from "../../assests/aboutImage/sofa3.jpg";
function About() {
  const firstSlideStyle = {
    backgroundImage: `url(${sofa})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1000px)": {
      ".firstslide": {
        height: "50vh",
      },
    },
  };

  const videoStyle = {
    width: window.innerWidth <= 1000 ? "368px" : "800px",
    height: window.innerWidth <= 1000 ? "200px" : "300px",
    objectFit: "cover",
  };
  return (
    <div>
      <section id="top">
        <div className="firstslide" style={firstSlideStyle}>
          <div className="firstText">
            <div className="house">
              <p>
                About
                <br />
                <span>Us</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="title">
          <p>
            <span>Welcome to</span>
            <br />
            Harmony Furniture
          </p>
        </div>
      </section>

      <section className="whole-1">
        <div className="video-container">
          <video autoPlay muted loop id="video-bg" style={videoStyle}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="items-1">
          <p>
            Harmony Furniture, ditching the secrecy, it's all about showcasing
            our exceptional designs online. It's curated a user-friendly website
            that's your passport to convenience. From vibrant sofas to elegant
            dining tables, we've got it all.
          </p>
        </div>
      </section>
      <section>
        <div className="title">
          <p>
            <span>We</span>
            <br />
            Provide
          </p>
        </div>
        <div className="whole">
          <div className="container">
            <div className="jpg">
              <a href="#">
                <img src={sofa11} alt="" />
                <p>
                  High quality
                  <br />
                  Products.
                </p>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="jpg">
              <a href="#">
                <img src={shortImage} alt="" />
                <p>
                  100% guarantee of
                  <br />
                  Warranty.
                </p>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="jpg">
              <a href="#">
                <img src={sofa09} alt="" />
                <p>
                  Any choice of
                  <br />
                  your wish.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="whole-1">
        <div className="items-1">
          <div>
            <h2>The Perfect Blend of Style and Comfort.</h2>

            <p>
              When it comes to furniture, people often prioritize either style
              or comfort. However, with Harmony Furniture, you don’t have to
              choose between the two. The brand offers a wide range of furniture
              that is not only stylish but also comfortable. Harmony Furniture’s
              products are designed to cater to the needs of modern-day living.
              The brand’s furniture pieces are made using high-quality materials
              that are both durable and aesthetically pleasing. Whether you’re
              looking for a comfortable sofa or a stylish coffee table, Harmony
              Furniture has got you covered. In addition to its quality
              products, Harmony Furniture also offers excellent customer
              service. The brand’s representatives are always ready to assist
              customers with their queries and concerns.
            </p>
          </div>
        </div>
        <img src={sofa123} alt="" className="img1" />
      </section>
    </div>
  );
}

export default About;
