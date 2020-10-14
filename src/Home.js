import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
                <div className="home_row">
                    <Product
                    id="1"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={599.45}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    rating={5}/>
                     <Product 
                     id="2"
                     title="HP 63 | Ink Cartridge | Black | F6U62AN"
                     price={36.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/71-n%2B9VW%2BeL._AC_SL1500_.jpg"
                     rating={3}/>
                     <Product 
                     id="3"
                     title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                     price={109.50}
                     image="https://images-na.ssl-images-amazon.com/images/I/813T5unjeQL._AC_SL1500_.jpg"
                     rating={4}/>
                    
                </div>
                <div className="home_row">
                <Product
                    id="1"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={599.45}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    rating={5}/>
                     <Product 
                     id="2"
                     title="HP 63 | Ink Cartridge | Black | F6U62AN"
                     price={36.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/71-n%2B9VW%2BeL._AC_SL1500_.jpg"
                     rating={3}/>
                     <Product 
                     id="3"
                     title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                     price={109.50}
                     image="https://images-na.ssl-images-amazon.com/images/I/813T5unjeQL._AC_SL1500_.jpg"
                     rating={4}/>
                </div>
                <div className="home_row">
                <Product
                    id="1"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={599.45}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    rating={5}/>
                     <Product 
                     id="2"
                     title="HP 63 | Ink Cartridge | Black | F6U62AN"
                     price={36.00}
                     image="https://images-na.ssl-images-amazon.com/images/I/71-n%2B9VW%2BeL._AC_SL1500_.jpg"
                     rating={3}/>
                     <Product 
                     id="3"
                     title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
                     price={109.50}
                     image="https://images-na.ssl-images-amazon.com/images/I/813T5unjeQL._AC_SL1500_.jpg"
                     rating={4}/>
                </div>
            </div>
        </div>
    )

    }
export default Home;
