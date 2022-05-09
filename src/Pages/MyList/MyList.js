import React from 'react';
import useInventory from '../../hooks/useInventory';

const MyList = () => {
    const [inventories, setInventories] = useInventory();

    
    return (
        <div style={{marginBottom: "150px"}}  className='container'>
            <h2 style={{ color: "#4d1750d1" }} className='text-center mt-5'>Manage All Inventories</h2>
            
            <div className='row'>
                {
                    inventories.slice(9,13).map(item => <div className="card mb-3" key={item._id}>
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
                                    {/* <button  onClick={() => handleDelete(item._id)} style={{ border: "3px solid #942560", color: "#801b50" }} className='btn btn-light rounded'>Delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyList;