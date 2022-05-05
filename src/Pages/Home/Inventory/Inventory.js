import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const {id, name, img, description, price, quantity, supplier } = inventory;
    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h3>${price}</h3>
                    <small className="card-text">{description}</small>
                    <p>Supplier Name: {supplier}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => navigateToDetail(id)} className="btn btn-primary">Update</button>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Inventory;