import React from 'react';
import style from './Gallery.module.css';


const Gallery = () => {
    return (
      <>
        <div className={style.secton}>
          <div className="container">
            <div className={style.contentWrapper}>
              <h1> LET'S GO </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
            <div className={style.flexWrapper}>
                <div className={style.cardWrapper}>
                    <div className={style.cardContent}>
                      <img src="../images/cardImg1.png" alt="cardphoto"/>
                      <div className={style.cardWrap}>
                          <h3>Lorem ipsum </h3>
                          <p> Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                    </div>
                </div>
                <div className={style.cardWrapper}>
                    <div className={style.cardContent}>
                      <img src="../images/cardImg2.png" alt="cardphoto"/>
                      <div className={style.cardWrap}>
                          <h3>Lorem ipsum </h3>
                          <p> Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                    </div>
                </div>
                <div className={style.cardWrapper}>
                    <div className={style.cardContent}>
                      <img src="../images/cardImg3.png" alt="cardphoto"/>
                      <div className={style.cardWrap}>
                          <h3>Lorem ipsum </h3>
                          <p> Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
                      </div>
                    </div>
                </div>
               
          </div>
          <div className={style.btnWrap}>
              <button className="action-btn"> Show more... </button>
          </div>
          </div>
        </div>
      </>
    );
}

export default Gallery;
