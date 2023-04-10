import React from 'react'

export const Event = (event) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            <Card.Text as='div'>
                <div className='h3'>
                    ${product.price}
                </div>
            </Card.Text>
            </Card.Title>
        </Card.Body>
        
    </Card>
  )
}
