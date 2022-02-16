import React from 'react'

function Title(props) {
    const {images, text} = props;
  return (
    <>
        <h2 className='title_01'><img src={images} />{text}</h2>
    </>
  )
}

export default Title