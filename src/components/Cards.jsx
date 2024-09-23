import React from 'react'

const Card = ({key, item}) => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={item.img} alt="Broken" />
            </div>
            <div>
                <h3><span className='name'>{item.title}</span><span className='price-tag'>${item.price}</span></h3>
                <hr />
                <p>{item.desc}</p>
            </div>
        </div>
    )
}

export default Card