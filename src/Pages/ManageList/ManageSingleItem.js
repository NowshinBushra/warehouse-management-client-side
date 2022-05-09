// import React from 'react';
// import useInventory from '../../hooks/useInventory';

// const ManageSingleItem = ({item}) => {
//     const [inventories, setInventories] = useInventory();

//     const {_id, name, img, description, price, quantity} = item;
    
//     const handleDelete = id =>{

//     const proceed = window.confirm('Are you sure you want to delete?');
//     if (proceed){
//         const url = `https://glacial-temple-62836.herokuapp.com/car/${id}`;
//         fetch(url, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(result => {setInventories(inventories.filter(inventory => inventory._id !== id));
            
//             const remaining = inventories.filter(inventory => inventory._id !== id);
            
//             setInventories(remaining);
//         })
//     }
    

// }   
//     return (
//         <div className="card mb-3">
//             <div className="row g-0">
//                 <div className="col-4">
//                     <img src={img} className="img-fluid rounded-start" alt="..."/>
//                 </div>
//                 <div className="col-8">
//                     <div className="card-body">
//                         <h4 className="card-title">{name}</h4>
//                         <h5 className="card-title">$ {price}</h5>
//                         <small className="card-text">{description}</small>
//                         <p>Quantity: {quantity}</p>
//                         <button onClick={() => handleDelete(_id)} style={{border: "3px solid #942560", color:"#801b50"}} className='btn btn-light rounded'>Delete</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageSingleItem;