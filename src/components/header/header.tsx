import useMatchMedia from '@/core/hooks/useMatchMedia';
import { DesktopHeader } from '@/components/desktopHeader';
import { MobileHeader } from '@/components/mobileHeader';
import classes from './header.module.scss';
import { useEffect, useState } from 'react';
import classNames from '@/utils/classNames';

export const Header = () => {
    const { isDesktop } = useMatchMedia();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header
            className={classNames(
                classes.header,
                { [classes._isScrolled]: isScrolled },
                []
            )}
        >
            {isDesktop ? (
                <DesktopHeader isScrolled={isScrolled} />
            ) : (
                <MobileHeader />
            )}
        </header>
    );
};
