import React from 'react';
import './HomeGreen.css';
import home2 from '../../Assets/home2.jpg';

const HomeVente = () => {

    return (
        <article className='homeServiceFlex'>

            <div className='HomeBlue'>
                

                    <section className='HomeBlue-text'>
                    
                        <h3 >Vendre facilement et rapidement</h3>
                        <span class="HomeBlue-divider-center "></span>
                        <i class="fas fa-handshake homeIcones blue"></i>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem natus quos ratione fugit  quo distinctio minus! Molestias exercitationem magnam asperiores!</p>
                        <button className='serviceButton blueBG'>En savoir plus</button>
                    </section>
                
                <section className='HomeBlue-img'>
                    <img src={home2} alt='Paris' className='homeImage' />
                </section>
            </div>
        </article>
    );
};


export default HomeVente;
