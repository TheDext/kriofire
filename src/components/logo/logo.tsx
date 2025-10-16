import desktopLogo from '@img/desktopLogo.png';
import mobileLogo from '@img/mobileLogo.png';
import classes from './logo.module.scss';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import classNames from '@/utils/classNames';
import { Link } from 'react-router';

export const Logo = ({ isScrolled }: { isScrolled?: boolean }) => {
    const { isDesktop } = useMatchMedia();

    return (
        <Link
            to="/"
            className={classNames(
                classes.logo,
                { [classes._isScrolled]: isScrolled },
                []
            )}
        >
            <img src={isDesktop ? desktopLogo : mobileLogo} alt={'logo'} />
        </Link>
    );
};
