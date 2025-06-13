import React, {useState}from 'react'
import Navbar2 from '../navbar/navbar2'
import Navbar1 from '../navbar/navbar1'
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg';
import Assam_rifel from '../../assets/images/Assam_rifel.jpg'
import SanjayGandhi_hospital from '../../assets/images/Sanjay_hospital.png';
import GTB from '../../assets/images/GTB.jpg'
import Burari from '../../assets/images/Burari_hospital.png';
import Maharishi from '../../assets/images/Maharishi_hospital.png';
import bannerImage from '../../assets/images/bannerImage.jpg'
import { cardsData } from '../../constants/HomepageData';
import Footer from '../footer/footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='home-screen'>
         <Navbar1/>
        <Navbar2/>
        <div className='carousel-container'>
 <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src={image1} alt='third image'  className='carousel-image-style'></img>
      </Carousel.Item>
      <Carousel.Item>
       <img src={image2} alt='third image'  className='carousel-image-style'></img>
      </Carousel.Item>
      <Carousel.Item>
       <img src={image3} alt='third image' className='carousel-image-style'></img>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='banner-container'> 
         <div className='left-banner'>
          <img src={bannerImage} alt='image2'></img>
         </div>
         <div className='right-banner'>
          <h2 className='bannerTitle'>Welocome to Novotronics...</h2>
          <p> <b>Novotronics Healthcare,</b> we are committed to transforming the future of healthcare through innovation, precision, and care. As a trusted name in medical technology and health solutions, we combine cutting-edge research with practical applications to improve patient outcomes and support healthcare professionals worldwide.  
          </p>
          </div>
        </div>
         <div className="appContainer">
      <h1 className="heading">
        Our Products
      </h1>
      <div className="gridContainer">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="cardItem"
          >
            <img
              src={card.imageUrl}
              alt={card.name}
              className="cardImage"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/150x150/AAAAAA/000000?text=Image+Error`;
              }}
            />
            <p className="cardName">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='Our-clients'>
  <div className="customer-logos">
      <Slider {...settings}>
        <div className='client-image'><img src={Assam_rifel} alt="Logo 1" /></div>
         <div className='client-image'><img src={SanjayGandhi_hospital} alt="Logo 1" /></div>
          <div className='client-image'><img src={GTB} alt="Logo 1" /></div>
            <div className='client-image'><img src={Burari} alt="Logo 1" /></div>
            <div className='client-image'><img src={Maharishi} alt="Logo 1" /></div>

      </Slider>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home;
