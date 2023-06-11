import SectionTitle from "../../Components/SectionTitles/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './FeaturedMenu.css'


const FeatureMenu = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-10">
            <SectionTitle heading={"Features Item"} subHeading={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-16 px-36 pt-12">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 2069</p>
                    <p className="uppercase">Where can i get it?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sint deleniti voluptates excepturi, facilis nostrum?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureMenu;