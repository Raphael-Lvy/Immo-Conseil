
import React from 'react';
import './Home.css';
import HomeHero from './HomeHero';
import HomeFI from './HomeFI';
import HomeChasse from './HomeChasse';
import HomeAchat from './HomeAchat';
import HomeVente from './HomeVente';
import ContactForm from '../ContactForm';
import Container from 'react-bootstrap/Container';

const Home = () => {


    return (
        <div className='homeFlex'>
            <HomeHero />
            <section className='homePresentation' name='presentation' >
                <div className='services'>
                    <div className='service'> <i class="fas fa-piggy-bank homeIcones blue"></i>  <h5> Conseil en <span className='blue'>financement </span>immobilier</h5></div>
                    <div className='service'> <i class="fas fa-house-user homeIcones green"></i>    <h5> <span className='green'>Acheter</span> votre bien</h5></div>
                </div>
                <div className='services'>
                    <div className='service'> <i class="fas fa-search-location homeIcones green"></i> <h5> Chasseur <span className='green'>d'appartements</span> ou de <span className='green'>maisons</span></h5></div>
                    <div className='service'><i class="fas fa-handshake homeIcones blue"></i> <h5> <span className='blue'>Vendre</span> votre bien</h5></div>
                </div>
            </section>
            <section className='skewedContainer'>
  <div className="skewed blueBG"></div>
</section>
            <HomeFI />
            <HomeChasse />
            <HomeAchat />
            <HomeVente />
            <section className='skewedContainer'>
  <div className="skewed greenBG"></div>
</section>
            <Container>
                <ContactForm />
            </Container>
        </div>

    );
};

export default Home;

