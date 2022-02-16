import React from 'react'
import Block from './../Block/index';

function Nav() {
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
            span: 'P'
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
            span: 'P'
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
            span: 'P'
        },
    ]
  return (
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
  )
}

export default Nav