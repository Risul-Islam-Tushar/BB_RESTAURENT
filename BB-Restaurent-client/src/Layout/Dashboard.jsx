import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import UseAdmin from "../hooks/UseAdmin";



const Dashboard = () => {

// const isAdmin = true;
const [isAdmin] =UseAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">hello</label>
            </div>

            <div className='drawer-side bg-[#D1A054]'>
                <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
                <ul className="menu p-4 w-80  ">

                    {
                        isAdmin? <>

                    <li><Link to='/dashboard/home'><FaHome></FaHome>Admin Home</Link></li>
                    <li><Link to='/dashboard/reservation'><FaUtensils></FaUtensils> Add Items</Link></li>
                    <li><Link to='/dashboard/history'><FaWallet></FaWallet> Manage Items</Link></li>
                    <li><Link to='/dashboard/history'><FaBook></FaBook> Manage Bookings</Link></li>
                    <li><Link to='/dashboard/allusers'><FaUsers></FaUsers>All Users</Link></li>
                    
                        

                        </> : <>

                        <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                    <li><Link to='/dashboard/home'><FaHome></FaHome>User Home</Link></li>
                    <li><Link to='/dashboard/history'><FaWallet></FaWallet>Payment History</Link></li>
                    <li><Link to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservations</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order/salad">Order Food</Link></li>
                        </>
                    }
                   
                    
                </ul>
            </div>

        </div>
           
    );
};

export default Dashboard;