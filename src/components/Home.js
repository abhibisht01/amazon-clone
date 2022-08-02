import React from 'react'
import '../css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product id="10001" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' image='https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY175_.jpg' price={15.26} rating={5} />
                <Product id="20001" image="https://images-eu.ssl-images-amazon.com/images/I/41aKsKY5Q4L._SX300_SY300_QL70_FMwebp_.jpg" title="Good Vibes Rose Hip Radiant Glow Face Serum, 10 ml Light Weight Non Greasy Moisturizing Anti Ageing Formula For All Skin Types, Corrects Dark Spots, Natural, No Parabens & Sulphates, No Animal Testing" price={18.15} rating={4} />

                <Product id="30003" title='2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 2TB) - Space Grey (3rd Generation)' image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SX679_.jpg" price={650.37} rating={4} />

            </div>
            <div className="home__row">
                <Product id="40004" title="Casio Analog-Digital Black Dial Men's Watch-GG-B100-1A3DR (G973)" image="https://m.media-amazon.com/images/I/81U7yPJ30wL._UY500_.jpg" price={125.52} rating={5} />

                <Product title="Nike Air Jordan 1 Retro High OG Electro Ora.nge Men's Shoe White/Electro Orange-Black 555088-180 (Numeric_8_Point_5)" image="https://m.media-amazon.com/images/I/61XDYa1igqL._UX625_.jpg"
                    price={235.27} rating={2} />
            </div>
            <div className="home_row">
                <Product id="50005" title='Whirlpool 1.5 Ton 3 Star, Inverter Split AC (Copper, Convertible 4-in-1 Cooling Mode, 2021 Model, 1.5T MAGICOOL CONVERT 3S COPR INV, White' image="https://m.media-amazon.com/images/I/41uMPN7SoIL._SX679_.jpg" price={190.36} rating={4} />

            </div>

        </div>
    )
}

export default Home


