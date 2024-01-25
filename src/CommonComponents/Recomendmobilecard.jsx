import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../src/Styles/Recomendmobilecard.css'
function Recomendmobilecard({ imgSrc, title, price, buttonLabel }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
    <Card className='carddata' >
      <Card.Img variant="top" src= {imgSrc && imgSrc} />
      <Card.Body>
        <Card.Title className='thirdheading'>{title && title}</Card.Title>
        <Card.Text>
        {price && price}
        </Card.Text>
        <Button  className='w-100 btnstyle'>{buttonLabel && buttonLabel}</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Recomendmobilecard;