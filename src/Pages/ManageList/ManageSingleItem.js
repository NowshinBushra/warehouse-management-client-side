import React from 'react';

const ManageSingleItem = ({item}) => {

    const {id, name, img, description, price, quantity} = item;

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-4">
                    <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h5 className="card-title">$ {price}</h5>
                        <small className="card-text">{description}</small>
                        <p>Quantity: {quantity}</p>
                        <button style={{border: "3px solid #942560", color:"#801b50"}} className='btn btn-light rounded'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleItem;