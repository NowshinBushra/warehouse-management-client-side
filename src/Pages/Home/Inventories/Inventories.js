import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {

    const [inventories, setInventories] = useInventory();

    
    // const navigate = useNavigate();
    // const navigateInventory = event => {
    //     navigate('/manage');
    // }

    return (
            <div className='container mb-5'>
                <h2 style={{color: "#4d1750d1"}} className='text-center'>Featured Listing</h2>
                <div className='row'>
                    {
                        inventories.slice(0,6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className='d-flex flex-row-reverse bd-highlight pe-auto'>
                    <button className='btn btn-light rounded-pill border border-4'><Link className='fw-bold' to='/manage' style={{color: "#4d1750d1"}}>Manage Inventory</Link></button>
                </div>
                
            </div>

    );
};

export default Inventories;