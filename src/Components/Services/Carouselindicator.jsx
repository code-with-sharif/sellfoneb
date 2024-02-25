import Carousel from 'react-bootstrap/Carousel';
// import Phonesuccessstory from './Phonesuccessstory';
import '../../Styles/SellerProduct/Carouselindicator.css'; // Adjust the path to your external CSS file

function Carouselindicator() {
  return (
    <div className=" " style={{backgroundColor:"#F4F9EC", paddingBottom:"90px", paddingTop:"90px"}}>
      <Carousel controls={false} className=" ">
        <Carousel.Item className='carouselindicator'>
          {/* <Phonesuccessstory /> */}
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <Phonesuccessstory /> */}
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <Phonesuccessstory /> */}
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselindicator;
