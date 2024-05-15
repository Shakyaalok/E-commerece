import React,{useState} from 'react'
import CarouselImages from './CarouselImages'
import {Carousel} from 'react-bootstrap'
import './Carousel.css'

const CarouselBody = () => {
   
       const [index, setIndex] = useState(0);

       

const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};

return (
  <Carousel activeIndex={index} onSelect={handleSelect} className='container-fluid shadow p-2'>
    {
      CarouselImages.map((image)=>(
        <Carousel.Item key={image.id} className='carousel-image-dimension'>
            <img className='d-block w-100' 
            src={image.imageUrl}
            alt={image.text}
            />
        <Carousel.Caption>
          <h3 style={{background:'#2874f0'}}>{image.text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))
    }
  </Carousel>
);  
}

export default CarouselBody 
