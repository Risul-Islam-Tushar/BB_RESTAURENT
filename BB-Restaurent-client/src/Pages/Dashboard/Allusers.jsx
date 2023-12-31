import { useQuery } from '@tanstack/react-query';

import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const Allusers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    alert('admin granted')
                }
            })
    }

    const handleDelete = user => {
        // to do//
    }

    return (
        <div className=' text-center'>
            <h3 className='text-3xl font-semibold my-4'>Total Users:{users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-orange-600"><FaUserShield></FaUserShield></button>}
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 "><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;