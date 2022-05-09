import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import ManageSingleItem from './ManageSingleItem';

const ManageList = () => {

    const [inventories, setInventories] = useInventory();

    const handleDelete = id =>{

        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed){
            const url = `https://glacial-temple-62836.herokuapp.com/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
                })
        }
        
    
    } 

    return (
        <div style={{marginBottom: "150px"}}  className='container'>
            <h2 style={{ color: "#4d1750d1" }} className='text-center mt-5'>Manage All Inventories</h2>
            <div className='d-flex flex-row-reverse bd-highlight pe-auto mb-4'>
                <button className='btn btn-light rounded-pill border border-4'><Link className='fw-bold' to='/add' style={{ color: "#4d1750d1" }}>Add Items</Link></button>
            </div>
            <div className='row'>
                {
                    inventories.map(item => <div className="card mb-3" key={item._id}>
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={item.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <h5 className="card-text">$ {item.price}</h5>
                                    <small className="card-text">{item.description}</small>
                                    <p>Quantity: {item.quantity}</p>
                                    <button  onClick={() => handleDelete(item._id)} style={{ border: "3px solid #942560", color: "#801b50" }} className='btn btn-light rounded'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageList;