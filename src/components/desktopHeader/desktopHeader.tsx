import classes from './desktopHeader.module.scss';
import { Logo } from '@/components/logo';
import { Link } from 'react-router';
import whiteTelIcon from '@icons/telWhite.png';
import { HeaderNav } from '@/components/headerNav';
import { HeaderContacts } from '@/components/headerContacts';
import classNames from '@/utils/classNames';

export const DesktopHeader = ({ isScrolled }: { isScrolled: boolean }) => (
    <div
        className={classNames(
            classes.row,
            { [classes._isScrolled]: isScrolled },
            []
        )}
    >
        <Logo isScrolled={isScrolled} />
        <div className={classes.body}>
            <HeaderNav isScrolled={isScrolled} />
            <HeaderContacts isScrolled={isScrolled} />
        </div>
        <Link to="#call" className={classes.btnLink}>
            <button
                className={classNames(
                    classes.btn,
                    { [classes._isScrolled]: isScrolled },
                    []
                )}
            >
                <img src={whiteTelIcon} alt="whiteTelIcon" />
                Обратный звонок
            </button>
        </Link>
    </div>
);
