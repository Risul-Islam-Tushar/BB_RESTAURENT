import React from 'react';
import UseCart from '../../hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart, refetch] = UseCart();
    console.log(cart);

const handleDelete = item =>{
    fetch(`http://localhost:5000/carts/${item._id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            alert("data deleted")
        }
    })
}

    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className='w-full'>
            <div className='uppercase font-semibold flex justify-evenly h-10 items-center'>
                <h3 className='text-4xl'>total items: {cart.length}</h3>
                <h3 className='text-4xl'>total price: {total}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => 
                                <tr
                                key= {item._id}
                                >
                                  <td>
                                    {index + 1}
                                  </td>
                                    <td>
                                        
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost "><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default MyCart;