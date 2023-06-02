import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoaderWrapper from './widgetLoader/LoaderWrapper'

const WidgetWrapper = () => {
  return (
    
    <Container fluid>
      <Row >
        <Col md={4} className='my-2'>
          <LoaderWrapper />
        </Col>
        
        <Col md={8}>
          
        </Col>
      </Row>

    </Container>
  )
}

export default WidgetWrapper
