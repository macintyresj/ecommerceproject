
import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Item.css'

const ItemComponent = ({id,title,price}) => {
    return (
        <div>
            <div>
                <div>
                    <hr></hr>
                    <span>{title}</span>
                    <hr></hr>
                    <p>${price}</p>
                </div>
                <div>
                    <NavLink to={`/ITEM/${id}`} >Ver Detalle</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ItemComponent

