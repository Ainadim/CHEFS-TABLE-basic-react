// import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import './Navbar.css' 



const Navbar = () => {
    return (
        <div className="flex justify-between items-center text-xl mx-3">
            <div>
                <h1 className="lexend-800"><a href="#">Recipe Calories</a></h1>
            </div>
            <div>
                <ul className="flex justify-between space-x-5 px-3">
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className="flex justify-center items-center text-gray-500">
                <div className="flex justify-center items-center p-2 pl-5 mr-5 bg-slate-200 rounded-full lexend-200">
                    <FaSearch />
                    <input className="bg-slate-200 ml-2" type="search" placeholder="search" />
                </div>
                <CgProfile className="text-3xl"/>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;