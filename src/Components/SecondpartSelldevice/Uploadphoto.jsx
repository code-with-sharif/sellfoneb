import React, { useRef } from 'react';
import drapdrag from '../../Images/SecondpartSelldevice/Uploadphoto/dragdropImg.png';

const Uploadphoto = () => {
  const dropAreaRef = useRef(null);
  const fileElemRef = useRef(null);

  const highlight = () => {
    dropAreaRef.current.classList.add('highlight');
  };

  const unhighlight = () => {
    dropAreaRef.current.classList.remove('highlight');
  };

  const handleDrop = (e) => {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    [...files].forEach(uploadFile);
  };

  const uploadFile = (file) => {
    console.log('Uploading', file.name);
  };

  const handleClick = () => {
    fileElemRef.current.click();
  };

  return (
    <>
      <section style={{ paddingTop: '60px', paddingBottom: '60px', background: '#F4F9EC', }}>
        <div className="text-center">
          <h1 className="">
            Upload <span className="green px-1">Photos</span>
          </h1>
          <p className="p-lg-0 px-2 mx-auto" style={{ marginTop: '15px', maxWidth: '500px' }}>
            Upload at least 8 pictures improves the chances for a quick sale. Photos should be in 'jpeg, jpg, png, gif'
            format only.
          </p>
        </div>

        <div className="container mt-5">
          <div className="card" style={{ maxWidth: '700px', margin:'auto' }}> {/* Adjust the width here */}
            <div
              ref={dropAreaRef}
              id="drop-area"
              className="  rounded d-flex justify-content-center align-items-center position-relative"
              style={{
                height: '300px',
                cursor: 'pointer',
                border: '2px dashed #92C43E', // Add dashed border
                background: '#F4F9EC',
              }}
              onDragEnter={highlight}
              onDragOver={highlight}
              onDragLeave={unhighlight}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <div className="text-center">
                <div>
                  <img className="img-fluid" src={drapdrag} alt="" style={{ width: '50px', height: '40px' }} />
                </div>
                <i className="bi bi-cloud-arrow-up-fill text-primary" style={{ fontSize: '48px' }}></i>
                <p className="mt-3">Drag and drop your image here, or <span className='green'>browse</span></p>
                <p className='' style={{ color: "#A5A7A5" }}>Support JPEG, JPG, PNG, GIF format only.</p>
              </div>
            </div>
            <input
              type="file"
              id="fileElem"
              multiple
              accept="image/*"
              className="d-none"
              ref={fileElemRef}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Uploadphoto;
