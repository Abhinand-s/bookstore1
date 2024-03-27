//nav.css import

import './Nav.css'

// import router
import { Link, NavLink } from 'react-router-dom'

// import logo ...
import Logo from '../../assets/logo.png'

//import navdata...

import { navLinks, navRight } from '../../Data/Data'

//import menu icons...

import { VscMenu } from "react-icons/vsc";
import { GrClose } from 'react-icons/gr';

//import use stata...
import { useState } from 'react';

export default function Nav() {

    //use state for navlinks show and hide....
    const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);
    // window scroll nav-links effects--
    if (innerWidth < 1024) {
        window.addEventListener('scroll', () => {
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false);
        })
    }
    window.addEventListener('scroll', () => {
        document.querySelector('.nav').classList.toggle('navShadow', window.scrollY > 0);

    })



    return (
        <nav>
            <div className="container nav-container">
                {/*....logo.......*/}
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>
                {/*....navlink.......*/}
                <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
                    {
                        navLinks.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) =>
                                        isActive ? 'active' : ''
                                    }>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                {/*....navRight.......*/}
                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => {
                            return (
                                <Link key={index}
                                    //target='_blank'
                                    className='management-icons' to={item.link}>
                                    <item.icon />
                                </Link>
                            )
                        })
                    }

                    <button className='menu-button' onClick={() => setIsNavLinkShowing(!isNavLinksShowing)} >
                        {
                            !isNavLinksShowing ? <VscMenu /> : <GrClose />
                        }
                    </button>

                </div>
            </div>

        </nav>
    )
}
