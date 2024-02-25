import React from 'react';
import './styles.scss'
import {CiMenuBurger} from "react-icons/ci";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container header__wrapper'}>
                <div className={'header__logo'}>
                    <Link to={'/'} className={'header__logo__link'}>
                        <span>new</span>
                        <span>movie</span>
                    </Link>
                </div>
                <nav className={'header__nav'}>
                    <ul className={'header__menu'}>
                        <li className={'header__menu__item'}>
                            <Link to={'/'} className={'header__menu__link'}>New Movie</Link>
                        </li>
                        <li className={'header__menu__item'}>
                            <Link to={'/'} className={'header__menu__link'}>Genre</Link>
                        </li>
                        <li className={'header__menu__item'}>
                            <Link to={'/'} className={'header__menu__link'}>Country</Link>
                        </li>
                        <li className={'header__menu__item'}>
                            <Link to={'/'} className={'header__menu__link'}>Movie</Link>
                        </li>
                        <li className={'header__menu__item'}>
                            <Link to={'/'} className={'header__menu__link'}>TV Series</Link>
                        </li>
                    </ul>
                </nav>
                <CiMenuBurger className={'header__burger'} size={30} color={'white'} />
            </div>
        </header>
    );
};

export default Header;