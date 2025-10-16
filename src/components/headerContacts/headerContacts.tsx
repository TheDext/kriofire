import classes from './headerContacts.module.scss';
import headerContact from '@config/headerContact.config';
import { Link } from 'react-router';
import classNames from '@/utils/classNames';

export const HeaderContacts = ({ isScrolled }: { isScrolled?: boolean }) => (
    <div
        className={classNames(
            classes.contacts,
            { [classes._isScrolled]: isScrolled },
            []
        )}
    >
        {headerContact.map(({ img, label, value, id }) => (
            <Link key={id} to={value} className={classes.contactsItem}>
                <div className={classes.contactsItemImg}>
                    <img src={img} alt="contactsItemImg" />
                </div>
                <div className={classes.contactsItemLabel}>{label}</div>
            </Link>
        ))}
    </div>
);
