import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Home/Recomendmobilecard.css'; // Import your CSS file here

function Recomendmobilecard({ id,imgSrc, title, price, buttonLabel, recomendmobile, buttonWidth,priceSize }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkLocation, setCheckLocation] = useState(location.pathname);

  const handleClick = (id) => {
    if (checkLocation == '/sellphone') {
      navigate("/secondpartSelldevice");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleButtonClick = () => {
    if (checkLocation === '/secondpartSelldevice') {
      navigate("/editphoneprice");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Card className='card-data'
    >
    
      {
        imgSrc &&
        <Card.Img
          variant="top"
          src={imgSrc}
          onClick={()=>handleClick(id)}
          style={{ cursor: checkLocation === '/sellphone' ? 'pointer' : 'default' }}
        />
      }

      <Card.Body className='cardbody' style={{}}>
        {title &&
          <Card.Title
            className='recomendedcardtitle'
            onClick={()=>handleClick(id)}
            style={{ cursor: checkLocation === '/sellphone' ? 'pointer' : 'default' }}
          >
            {title} {recomendmobile && recomendmobile.title}
          </Card.Title>
        }

        {price &&
          <Card.Text className={priceSize ? "recomendedcardprice" : ""}>
            {price} {recomendmobile && recomendmobile.price}
          </Card.Text>
        }

        {buttonLabel &&
          <Button
            style={{ border: "none" }}
            onClick={handleButtonClick}
            className='btn btn-color'
            style={{ ...(buttonWidth ? { width: "35%" } : { width: "100%" }) }}  

          >
            {buttonLabel}
          </Button>
        }
      </Card.Body>
    </Card>
  );
}

export default Recomendmobilecard;
