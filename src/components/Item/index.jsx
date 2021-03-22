import React from 'react'
import { NavLink } from 'react-router-dom'
import './Itemstyle.scss'

const ItemComponent = ({id,title,price,img}) => {
    return (
        <div>
            <div>
                <div>
                <img src={img} alt={`title`}/>
                </div>
                <div>
                    <hr></hr>
                    <span>{title}</span>
                    <hr></hr>
                    <p className="price">${price}</p>
                </div>
                <div className="itemDetalle">
                    <NavLink to={`/ITEM/${id}`}>Ver Detalle</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ItemComponent

