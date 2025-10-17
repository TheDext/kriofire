import navConfig from '@config/nav.config';
import { Link } from 'react-router';
import classes from './footer.module.scss';

export const Footer = () => {
    return (
        <footer>
            <div className={'_container-default'}>
                <ul className={classes.list}>
                    {navConfig.map(({ id, link, label }) => (
                        <li id={id}>
                            <Link to={link}>{label}</Link>
                        </li>
                    ))}
                </ul>

                <div className={classes.text}>
                    <p className={classes.base}>
                        Вся представленная на сайте информация носит
                        информационный характер и не является публичной офертой,
                        определяемой положениями статьи
                    </p>
                    <p className={classes.big}>
                        437 (2) ГК РФ. Все цены, указанные на данном сайте,
                        носят информационный характер. Опубликованная на данном
                        сайте информация может быть
                    </p>
                    <p className={classes.base}>
                        изменена в любое время без предварительного уведомления.
                    </p>
                </div>
            </div>
        </footer>
    );
};
