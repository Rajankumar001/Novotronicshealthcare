import React, {useState}from 'react'
import Navbar2 from '../navbar/navbar2'
import Navbar1 from '../navbar/navbar1'
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import { cardsData } from '../../constants/HomepageData';

function Home() {
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
          <img src={image2} alt='image2'></img>
         </div>
         <div className='right-banner'>
          <h2>Why you Choose Us</h2>
          <p>Lab Technician, I am particularly drawn to your organization because of its commitment to maintaining high standards in scientific research, diagnostics, and laboratory practices. Your reputation for employing modern equipment and following rigorous quality control protocols reflects an environment where I can grow professionally and contribute meaningfully. I am eager to join a team where accuracy, efficiency, and safety are prioritized, and where continuous learning is encouraged.
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
    </div>
  )
}

export default Home;
