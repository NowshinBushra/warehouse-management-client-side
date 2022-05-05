import React from 'react';

const Inventory = ({ inventory }) => {
    const { name, img, description, price, quantity, supplier } = inventory;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h3>${price}</h3>
                    <p className="card-text">{description}</p>
                    <p>Supplier Name: {supplier}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Quantity: {quantity}</p>
                        <button className="btn btn-primary">Update</button>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Inventory;