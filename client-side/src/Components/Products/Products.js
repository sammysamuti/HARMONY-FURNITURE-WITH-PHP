import React from 'react';
import './products.css'

const Products = () => {
  return (
    <>
      <section className="secondsection">
        <div className="title">
          <p>Sofas and chairs</p>
        </div>
        <hr />
        <div className="whole">
          <div id="l1" className="firstsec">
            <div className="contain">
              <div className="containhovers">
                <div className="underimg" style={{ backgroundImage: `url('../livingroom/livingroom_imgs/sofa12.jpg')` }}>
                </div>
                <div className="topimg" style={{ backgroundImage: `url('./livingroom_imgs/sofa11.jpg')` }}>
                </div>
              </div>
            </div>
            <div className="description">
              <div>
                <h3>PARUP</h3>
                <span>4-seat sofa</span>
              </div>
              <span>
                <h3><span className="price">35,000</span> <span>Birr</span></h3>
              </span>
              <div className="aligner">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i><span>(30)</span>
              </div>
              <div className="aligner">
                <span className="addbtn" onClick={() => promptForQuantity('l1')}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <i className="fa-sharp fa-regular fa-heart"></i><br />
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other items */}
        </div>
      </section>
    </>
  );
};

export default Products;
