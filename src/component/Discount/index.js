import React from 'react'
import style from './Discount.module.css';

const Discount = () => {
    return (
      <>
        <div className="container">
          <div className={style.Wrapper}>
            <div className={style.contentWrap}>
              <img src="../images/cardImgBg.png" alt="background" />
            </div>
            <div className={style.contentWrap}>
              <h1>Discount up to 50% All Excursions </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <button className={`${style.bgColor} action-btn`} > read more..</button>
            </div>
            
          </div>
        </div>
      </>
    );
}

export default Discount;
