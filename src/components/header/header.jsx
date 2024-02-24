import React from 'react';

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <div className={'header__logo'}>
                    <a href="#" className={'header__logo__link'}>
                        <span>new</span>
                        <span>movie</span>
                    </a>
                </div>
                <nav className={'header__nav'}>
                    <ul className={'header__menu'}>
                        <li className={'header__menu__item'}>
                            <a href="#" className={'header__menu__link'}>New Movie</a>
                        </li>
                        <li className={'header__menu__item'}>
                            <a href="#" className={'header__menu__link'}>Genre</a>
                        </li>
                        <li className={'header__menu__item'}>
                            <a href="#" className={'header__menu__link'}>Country</a>
                        </li>
                        <li className={'header__menu__item'}>
                            <a href="#" className={'header__menu__link'}>Movie</a>
                        </li>
                        <li className={'header__menu__item'}>
                            <a href="#" className={'header__menu__link'}>TV Series</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;