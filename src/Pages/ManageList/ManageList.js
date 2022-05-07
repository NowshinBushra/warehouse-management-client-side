import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleItem from './ManageSingleItem';

const ManageList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='container mb-5'>
            <h2 style={{ color: "#4d1750d1" }} className='text-center mt-5'>Manage All Inventories</h2>
            <div className='d-flex flex-row-reverse bd-highlight pe-auto mb-4'>
                <button className='btn btn-light rounded-pill border border-4'><Link className='fw-bold' to='/add' style={{ color: "#4d1750d1" }}>Add Items</Link></button>
            </div>
            <div className='row'>
                {
                    items.map(item => <ManageSingleItem

                        key={item.id}
                        item={item}
                    >
                    </ManageSingleItem>)
                }
            </div>
        </div>
    );
};

export default ManageList;