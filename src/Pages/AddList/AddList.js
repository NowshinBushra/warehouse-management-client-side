import React from 'react';
import { Form } from 'react-bootstrap';

const AddList = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50 mt-5'>
                <h1 style={{color: "#4d1750d1"}} className='text-center'>Add New Item</h1>
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <Form.Control placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Supplier Name</Form.Label>
                <Form.Control placeholder="Supplier" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Add quantity</Form.Label>
                <Form.Control placeholder="Quantity" />
            </Form.Group>
            <div class="input-group">
                <span class="input-group-text">Description</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
        </div>
    );
};

export default AddList;