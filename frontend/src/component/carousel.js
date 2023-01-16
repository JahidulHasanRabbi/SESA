import Carousel from 'react-bootstrap/Carousel';

function Carousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
            src="./image/bkash.jpg" 
            class="d-block w-100" 
            alt="..." 
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="./image" class="d-block w-100" alt="..."/>
>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel