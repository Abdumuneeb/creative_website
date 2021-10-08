import React from 'react';
import style from './Hero.module.css';

const Hero = () => {
    return (
      <>
        <div className={style.section}>
          <div className="container">
            <div className={style.contentWrap}>
              <h1> IT´S TIME FOR HIKING</h1>
              <h3> LOREMIPSUM DOLOR</h3>
              <button>READ MORE </button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                iusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Hero;
