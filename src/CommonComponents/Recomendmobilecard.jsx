import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../src/Styles/Home/Recomendmobilecard.css'
import { Link, useNavigate } from 'react-router-dom';
import SecondpartSelldevice from './../Components/SecondpartSelldevice/SecondpartSelldevice';
function Recomendmobilecard({ imgSrc, title, price, buttonLabel,recomendmobile }) {
  const navigate=useNavigate();
  const Handleclick = () => {
    navigate("/secondpartSelldevice");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    

    <Card className='card-data' >
                 

      {imgSrc &&<Card.Img variant="top" style={{cursor:"pointer"}} src= {imgSrc && imgSrc} onClick={Handleclick} />}
      
      <Card.Body>
       
       {title && <Card.Title   className=' recomendedcardtitle '  onClick={Handleclick} >{title && title}</Card.Title>}
     
      {price &&  <Card.Text>
        {price && price}
        </Card.Text>}
        {buttonLabel &&
        <Button  className='w-100 btnstyle'>{buttonLabel && buttonLabel}</Button>
        }
      </Card.Body>
  
    </Card>
  
  );

}

export default Recomendmobilecard;