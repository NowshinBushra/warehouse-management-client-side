import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/inventory/${inventoryId}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    
    return (
        <div className='text-center mt-5'>
            <h5>Inventory Detail</h5>
            <h3>Id: {inventoryId}</h3>
            <img src={inventory.img} alt="..." />
            <h4>{inventory.name}</h4>
            <h3>${inventory.price}</h3>
            <small>{inventory.description}</small>
            <p>Supplier Name: {inventory.supplier}</p>
            <p>Quantity: {inventory.quantity}</p>
            <button>Delivered</button>
        </div>
    );
};

export default InventoryDetail;