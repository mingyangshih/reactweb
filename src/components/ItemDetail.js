import React, { Fragment } from 'react'

const ItemDetail = (props) => {
  return (
    
    <Fragment>
      <div className="card m-3" style={{"width": "18rem"}}>
        <img src={props.ItemImage} className="card-img-top" alt="pokemon go"/>
        <div className="card-body">
          <h5 className="card-title">{props.ItemTitle}</h5>
          <p className="card-text">{props.ItemContent}</p>
          <a href={props.ItemLink} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </Fragment>
  )
}

export default ItemDetail