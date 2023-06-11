import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitles/SectionTitle';
import MenuCategory from './MenuCategory';
import desertimg from '../../assets/menu/dessert-bg.jpeg'
import menuImg from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'




const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    // const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>BB | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"> </Cover>

            {/* 1st menu */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* 2nd menu */}
            <MenuCategory items={dessert} title="dessert" img={desertimg} ></MenuCategory>
            {/* 3rd menu */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;