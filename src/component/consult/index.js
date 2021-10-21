import React from 'react';
import style from './consult.module.css';

const Consult = () => {
    return (
        <>
               <section className={style.consultSection}>
            <div className="container">
                        <div className={style.wrapper}>
                                <div className={style.imgWrap}> 
                                    <img className="img-fluid" src="./Images/headache-img.png" alt="headache-bg"/>
                                </div>
                                <div className={style.contentWrap}>
                                        <p> Leave the headache to us -book your consultation now! </p>
                                        <div className={style.actionBtn}>
                                            <h4 className="ab-text" > <a href="/">  BOOK A FREE CONSULTATION</a> </h4>
                                        </div>
                                </div>
                        </div>
                    
                   
            </div>
        </section>
        </>
    )
}

export default Consult;
