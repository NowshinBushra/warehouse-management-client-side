import React from 'react';
import { useForm } from "react-hook-form";

const AddList = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/car/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (

        <div className='w-50 mt-5 mx-auto'>
            <h1 style={{color: "#4d1750d1"}} className='text-center'>Add New Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 p-1' placeholder='Product Name' {...register("Name")} />
            <input className='mb-2 p-1' type="text" placeholder='Photo URL' {...register("img")} />
            <input className='mb-2 p-1' type="number" placeholder='Price' {...register("price")} />
            <textarea className='mb-2 p-1' placeholder='Description' {...register("description")} />
            <input className='mb-2 p-1' placeholder='Supplier' {...register("supplier")} />
            <input className='mb-2 p-1' type="number" placeholder='Add quantity' {...register("quantity")} />
            <input type="submit" />
        </form>
        </div>
        

        // <div className='d-flex justify-content-center'>
        //     <div className='w-50 mt-5'>
        //         <h1 style={{color: "#4d1750d1"}} className='text-center'>Add New Item</h1>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Product Name</Form.Label>
        //         <Form.Control placeholder="Name" />
        //     </Form.Group>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Product Price</Form.Label>
        //         <Form.Control placeholder="Price" />
        //     </Form.Group>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Supplier Name</Form.Label>
        //         <Form.Control placeholder="Supplier" />
        //     </Form.Group>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Add quantity</Form.Label>
        //         <Form.Control placeholder="Quantity" />
        //     </Form.Group>
        //     <div class="input-group">
        //         <span class="input-group-text">Description</span>
        //         <textarea class="form-control" aria-label="With textarea"></textarea>
        //     </div>
        // </div>
        // </div>
    );
};

export default AddList;