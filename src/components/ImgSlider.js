import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};
return (
    <Carousel {...settings}>
        <Wrap>
        <a href ="/home">
            <img src="/images/slider-badging.jpg" alt="1" />
        </a>
        </Wrap>

        <Wrap>
        <a href ="/home">
            <img src="/images/slider-scale.jpg" alt="2" />
        </a>
        </Wrap>

        <Wrap>
        <a href ="/home">
            <img src="/images/slider-badag.jpg" alt="3" />
        </a>
        </Wrap>

        <Wrap>
        <a href ="/home">
            <img src="/images/slider-scales.jpg" alt="4" />
        </a>
        </Wrap>
    </Carousel>
    );
};

const Carousel = styled(Slider)`
margin-top: 20px;
& > button {
    /*este boton es en forma de flecha actibale al hover o visible mas bn */
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
    }
}
ul li button {
    /*recordar estas listas y botones lo forman los puntitos que son visibles al pasar cada imagen */
    &:before {
    font-size: 10px;/*tamaño de las esferas o puntos */
    color: rgb(150, 158, 171);/*color que adquieren al no mostar la img que contienen */
    }
}
li.slick-active button:before {
    color: white;/*color que tendranal estar presentando la img que contienen */
}
.slick-list {
    overflow: initial;/*se colocan las flechas en ambas puntas y se posicionas la de izq=prev y la de derch=next */
}
.slick-prev {
    left: -75px;
}
.slick-next {
    right: -75px;
}
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
    width: 100%;
    height: 100%;
    }
    &:hover {
    padding: 0;/*jugando con el padding a la hora de hacer hover da la sensacion de que el borde crece y no es instantaneo ynto con transition duration */
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;