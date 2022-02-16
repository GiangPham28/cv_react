import React from 'react'

function Block(props) {
    const { title, info, time, text, position, span } = props;
    return (
        <>
            
                <div className={`block_01 ${position}`}>
                    {
                        position == 'right' && 
                        <span className='block_01__span'>{span}</span>
                    }
                    <div className='block_01__content'>
                        <h3 className='block_01__tt'>{title}</h3>
                        <p className='block_01__info'>{info}</p>
                        <p className='block_01__time'>{time}</p>
                        <p className='block_01__text'>{text}</p>
                    </div>
                    {
                        position == 'left' && 
                        <span className='block_01__span'>{span}</span>
                    }
                </div>
        </>
    )
}

export default Block