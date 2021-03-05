import React from 'react';
import './HomeBlue.css';
import home1 from '../../Assets/home1.jpg';

const HomeFI = () => {

    return (
        <article className='homeServiceFlex'>

            <div className='HomeGreen'>
                

                    <section className='HomeGreen-text'>
                    
                        <h3 >Conseil en financement immobilier</h3>
                        <span class="divider-center"></span>
                        <i class="fas fa-piggy-bank homeIcones blue"></i>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem natus quos ratione fugit  quo distinctio minus! Molestias exercitationem magnam asperiores!</p>
                        <button className='serviceButtonG greenBG'>En savoir plus</button>
                    </section>
                
                <section className='HomeGreen-img'>
                    <img src={home1} alt='Paris' className='homeImage' />
                </section>
            </div>
        </article>
    );
};


export default HomeFI;

