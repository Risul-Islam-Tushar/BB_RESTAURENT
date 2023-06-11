import PopularMenu from "../PopularMenu";
import Banner from "./Banner";
import Category from "./Category/Category";
import FeatureMenu from "./FeatureMenu";
import Testimonial from "./Testimonial";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureMenu></FeatureMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;