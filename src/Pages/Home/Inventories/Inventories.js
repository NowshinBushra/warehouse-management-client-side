import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    // const navigate = useNavigate();
    // const navigateInventory = event => {
    //     navigate('/manage');
    // }

    return (
            <div className='container mb-5'>
                <h2 style={{color: "#4d1750d1"}} className='text-center'>Featured Listing</h2>
                <div className='row'>
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
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