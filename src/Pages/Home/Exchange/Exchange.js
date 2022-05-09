import React from 'react';
import { Link } from 'react-router-dom';

const Exchange = () => {
    return (
        <div style={{ marginBottom: "150px" }} className="container">
            <h3 className='text-center mb-5' style={{color: "#4d1750d1"}}>CAR EXCHANGE!!</h3>
            <p className='text-center'>Interested in trading in your current vehicle? It would probably be good to have an estimate of what it's worth first. After all, trading in a vehicle is a lot less hassle than selling it yourself. And you can often lower your payments by trading in a vehicle as well.</p>
            <div className="row align-items-center">
                <div className="col">
                    <h5>Car Information</h5>
                    <input className='mb-2' type="text" placeholder='Model' /><br />
                    <input className='mb-2' type="text" placeholder='Transmission' /><br />
                    <input className='mb-2' type="text" placeholder='Year' /><br />
                    <input className='mb-2' type="text" placeholder='Mileage' /><br />
                    <input className='mb-2' type="text" placeholder='VIN' /><br />
                    <input className='mb-2' type="text" placeholder='Photo URL' />
                </div>
                <div className="col">
                    <h5>Vehicle Condition</h5>
                    <textarea placeholder='Exterior Condition' name="" id="" cols="30" rows="2"></textarea>
                    <textarea placeholder='Interior Condition' name="" id="" cols="30" rows="2"></textarea>
                    <textarea placeholder='Accidental damage' name="" id="" cols="30" rows="2"></textarea>
                </div>
                <div className="col">
                    <h5>Your Contact</h5>
                    <input className='mb-2' placeholder='Your Name' type="text" /><br />
                    <input className='mb-2' placeholder='Email' type="text" /><br />
                    <input className='mb-2' placeholder='Phone' type="text" /><br />
                    <textarea placeholder='Your Message' name="" id="" cols="24" rows="2"></textarea>
                </div>
                <div className='d-flex justify-content-center bd-highlight pe-auto'>
                    <button className='btn btn-light rounded border border-4'><Link className='fw-bold text-decoration-none' to='/manage' style={{color: "#4d1750d1"}}>Save and Finish</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Exchange;