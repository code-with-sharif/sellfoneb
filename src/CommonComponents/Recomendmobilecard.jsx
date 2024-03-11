import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Home/Recomendmobilecard.css'; 

function Recomendmobilecard({ id, imgSrc, Propty, title, price, buttonLabel, recomendmobile, buttonWidth, priceSize, Editpricebtn,}) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [checkLocation, setCheckLocation] = useState(location.pathname);
  const [editprice, setEditPrice] = useState(false);
  const [newPrice, setNewPrice] = useState(); 
  const [priceError, setPriceError] = useState(); 

  const handleClick = (id) => {
    if (checkLocation === '/sellphone') {
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

  const handleEditPrice = () => {
    setEditPrice(true);
  }

  const handleDone = (e) => {
    e.preventDefault();
    
    // Check if the newPrice is empty
    if (!newPrice) {
      setPriceError("Please enter price");
      return; // Stop execution if newPrice is empty
    }
    
    // Reset the editprice state and close the input field
    setEditPrice(false);
    setNewPrice("");
  }
  

  return (
    <Card className='card-data'>
      <div style={{ position: "relative" }}>
        {
          imgSrc &&
          <Card.Img
            variant="top"
            src={imgSrc}
            onClick={() => handleClick(id)}
            style={{ cursor: checkLocation === '/sellphone' ? 'pointer' : 'default' }}
          />
        }
        {Propty &&
          <div className="featuretitle" style={{ position: "absolute", top: "15px", left: "8px" }}>{Propty}</div>
        }
      </div>
      <Card.Body className='cardbody'>
        {title &&
          <Card.Title
            className='recomendedcardtitle'
            onClick={() => handleClick(id)}
            style={{ cursor: checkLocation === '/sellphone' ? 'pointer' : 'default' }}
          >
            {title} {recomendmobile && recomendmobile.title}
          </Card.Title>
        }

        <div className='d-flex justify-content-between'>
          {editprice ? (
            <form>
              <div className="">
                <input
                  type="tel"
                  className="form-control"
                  placeholder='Enter Price'
                  value={newPrice} // Value bound to state
                  onChange={(e) => setNewPrice(e.target.value)} // Handle input change
                  style={{ border: "1px solid #92C43E" }}
                  onKeyPress={(e) => {
      // Allow only numeric input
      const pattern = /^[0-9\b]+$/;
      if (!pattern.test(e.key)) {
        e.preventDefault();
      }
    }}
                />
        <span style={{color:" red"}}>{priceError}</span>

              </div>

            </form>
          ) : (
            price &&
            <Card.Text style={{ marginBottom: "15px" }} className={priceSize ? "recomendedcardprice" : ""}>
  {price} {recomendmobile && recomendmobile.price}
</Card.Text>

          )}

          {editprice ?
          
            (
            <Button
              onClick={handleDone}
              className='btn btn-color'
              style={{ ...(buttonWidth ? { width: "20%" } : { width: "100%" }) }}
            >
              Done
            </Button>
          ): (
            Editpricebtn &&
            <Button
              onClick={handleEditPrice}
              className='btn btn-color'
              style={{ ...(buttonWidth ? { width: "25%" } : { width: "100%" }) }}
            >
              {Editpricebtn}
            </Button>
          )}
        </div>

        {buttonLabel &&
          <Button
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
