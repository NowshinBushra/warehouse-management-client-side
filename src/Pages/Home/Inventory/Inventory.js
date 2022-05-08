import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const {_id, name, img, description, price, quantity, supplier } = inventory;
    const navigate = useNavigate();
    const navigateToDetail = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className="card bg-light shadow-lg p-3 mb-5 rounded">
                <img src={img} className="card-img-top w-100" alt="..." />
                <div style={{color: "#4d1750d1"}} className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h3>${price}</h3>
                    <small className="card-text">{description}</small><br /><br />
                    <p>Supplier: {supplier}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Quantity: {quantity}</p>
                        <button style={{border: "3px solid #942560", color:"#801b50"}} onClick={() => navigateToDetail(_id)} className="btn btn-light rounded">Update</button>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default Inventory;