

const MenuItem = ({ item }) => {
    const { price, recipe, image, name } = item;
    console.log(image);
    return (
        <div className="flex space-x-4">
            <img style={{borderRadious:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="img" />
            <div>
                <h3>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>



    );
};

export default MenuItem;

