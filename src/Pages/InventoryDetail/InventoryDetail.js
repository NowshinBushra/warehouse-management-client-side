import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    // const [carQuantity, setCarQuantity] = useState({});

    useEffect(() => {
        fetch(`https://glacial-temple-62836.herokuapp.com/car/${_id}`)
            .then(res => res.json())
            .then(data => setInventory(data)); 
    }, []);


    return (
        <div style={{ marginBottom: "150px" }} className='d-flex justify-content-center'>
            <div>
                <div className='text-center mt-5 mb-5'>
                    <h2>Inventory Detail</h2>
                    <h5>Id: {_id}</h5>

                    <Card style={{ maxwidth: "50%" }}>
                        <Card.Img variant="top" src={inventory.img} />
                        <Card.Body>
                            <Card.Title>{inventory.name}</Card.Title>
                            <Card.Text>Price: ${inventory.price}</Card.Text>
                            <Card.Text>{inventory.description}</Card.Text>
                            <Card.Text>Supplier: {inventory.supplier}</Card.Text>
                            <Card.Text>Quantity: {inventory.quantity}</Card.Text>
                            <Button variant="primary">Delivered</Button>
                            <div className='mt-2'><input type="text" value="add quantity"/>
                            <button className='btn btn-info'>Restock</button></div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='bd-highlight pe-auto mb-5'>
                    <button className='btn btn-light rounded-pill border border-4 text-decoration-none'><Link className='fw-bold' to='/manage' style={{ color: "#4d1750d1" }}>Manage Inventory</Link></button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;