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
              {/* <div className={cardsWrapper}>
                <div className={cardWrap}>

                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
}

export default Gallery;
