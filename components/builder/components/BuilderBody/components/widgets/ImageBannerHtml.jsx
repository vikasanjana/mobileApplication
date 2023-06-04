import React, { useState, useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const ImageBannerHtml = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  });

  return (
    <Container fluid className='p-0'>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className='img-fluid' />
          ) : (
            <div className='p-3 m-2 border-dashed border-4 h-40 flex justify-center items-center'>
              <p className='mb-0 text-center'>Drag and drop an image here, or click to select a file</p>
            </div>
          )}
        </div>
    </Container>
  );
};

export default ImageBannerHtml;
