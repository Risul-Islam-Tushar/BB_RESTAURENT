import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../hooks/UseCart";


const FoodCart = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const[, refetch] = UseCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const orderItem = {foodId: _id, name, image, price, email:user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem )
            })
                .then(res => res.json())
                .then(data => {
                    if (data.InsertedId) {
                        refetch();
                        alert('data Inserted')
                    }
                })
        }
        else {
            "login please"
            navigate('/login', { state: { from: location } })
        }
    }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food" /></figure>

                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-3">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;