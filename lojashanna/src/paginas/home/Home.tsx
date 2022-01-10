import React from 'react'
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

function Home(){
    return(
        <><Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2361680/pexels-photo-2361680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="amor propio"
          />
          <Carousel.Caption>
            <h3>Conforto</h3>
            <p>Para um Dia a Dia agitado </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1405846/pexels-photo-1405846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Delicadeza</h3>
            <p>Para Aquelas que sabem Quem sao</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/8643413/pexels-photo-8643413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Sensualidade</h3>
            <p>A essencia de toda mulher</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
        </>

    );
}

export default Home;