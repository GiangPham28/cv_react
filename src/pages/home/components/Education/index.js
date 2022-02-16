import React from 'react'
import Title from '../Title'
import book from '../../../../images/Common/book.png';
import Nav from '../Nav';
import Block from './../Block/index';

function Education() {
    const mockData = [
        {
            position: 'left',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'P'
        },
        {
            position: 'right',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'H'
        },
        {
            position: 'left',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'P'
        },
        {
            position: 'right',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'C'
        },
        {
            position: 'left',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'A'
        },
        {
            position: 'right',
            title: 'Preparatory Education',
            info: 'Fedrick School',
            time: 'Jan 1997 - Mar 2000',
            text: 'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
            span: 'B'
        },
    ]
  return (
    <div id='Education'>
        <div className='container'>
            <Title images={book} text={'EDUCATION'} />
            <div className='nav_block_01'>
                {
                    mockData.map(val => 
                        <Block 
                        position={val.position}
                        title={val.title} 
                        info={val.info}
                        time={val.time} 
                        text={val.text}
                        span={val.span}/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Education