import classes from './mobileHeader.module.scss';
import telIcon from '@icons/telBlue.png';
import { Logo } from '@/components/logo';
import { BurgerMenu } from '@/components/burgerMenu';
import { useEffect, useState } from 'react';
import { HeaderNav } from '@/components/headerNav';
import { HeaderContacts } from '@/components/headerContacts';
import { Link } from 'react-router';

export const MobileHeader = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        const body = document.body;
        const menu = document.getElementById('menu');

        if (showMenu && menu) {
            body.style.overflow = 'hidden';
            menu.classList.add('_show');
            // body.style.paddingRight = '15px';
        } else {
            body.style.overflow = '';
            menu && menu.classList.remove('_show');
            // body.style.paddingRight = '';
        }

        return () => {
            body.style.overflow = '';
            // body.style.paddingRight = '';
        };
    }, [showMenu]);

    return (
        <div className={classes.row}>
            <Link to="#call" className={classes.call}>
                <img src={telIcon} alt="telIcon" />
            </Link>
            <Logo />
            <BurgerMenu setShowMenu={() => setShowMenu(!showMenu)} />
            <div id="menu" className={classes.menu}>
                <HeaderNav setShowMenu={setShowMenu} showMenu={showMenu} />
                <HeaderContacts />
            </div>
        </div>
    );
};
