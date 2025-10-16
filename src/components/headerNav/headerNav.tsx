import classes from './headerNav.module.scss';
import navConfig from '@config/nav.config';
import { Link } from 'react-router';
import classNames from '@/utils/classNames';
import type { FC } from 'react';

type IHeaderNav = {
    showMenu?: boolean;
    setShowMenu?: (showMenu: boolean) => void;
    isScrolled?: boolean;
};
export const HeaderNav: FC<IHeaderNav> = ({
    showMenu,
    setShowMenu,
    isScrolled,
}) => (
    <div
        className={classNames(
            classes.nav,
            {
                [classes._isScrolled]: isScrolled,
            },
            []
        )}
    >
        {navConfig.map(({ label, link, id }) => {
            return (
                <Link
                    key={id}
                    to={link}
                    className={classes.navItem}
                    onClick={() => {
                        if (setShowMenu) {
                            setShowMenu(!showMenu);
                        }
                        const menu = document.getElementById('menu');
                        const body = document.querySelector('body');
                        if (menu && body) {
                            menu.classList.remove('_show');
                            body.style.overflow = '';
                        }
                    }}
                >
                    {label}
                </Link>
            );
        })}
    </div>
);
