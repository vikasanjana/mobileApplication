import React from 'react'
import { Container, Row } from 'react-bootstrap'

const ImageBannerHtml = () => {
  return (
   <Container fluid className='p-0'>
    <Row>
        <img src="./images/Image-Banner.webp" alt="" className='img-fluid' />
    </Row>
   </Container>
  )
}

export default ImageBannerHtml
