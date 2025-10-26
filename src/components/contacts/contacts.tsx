import classes from './contacts.module.scss';
import mailIcon from '@icons/maiWhite.png';
import telIcon from '@icons/telWhite.png';
import vkIcon from '@icons/vkWhite.png';
import { Link } from 'react-router';
import { YandexMap } from '@/components/map';

export const Contacts = () => {
    return (
        <div id={'contacts'} className={classes.contacts}>
            <div className={classes.row}>
                <div className={classes.info}>
                    <div className={classes.title}><h3>// Контакты</h3></div>
                    <div className={classes.subtitle}>Свяжитесь с нами</div>
                    <div className={classes.label}>
                        Мы всегда готовы ответить на ваши вопросы
                    </div>
                    <div className={classes.body}>
                        <div className={classes.contact}>
                            <div className={classes.contactImg}>
                                <img src={mailIcon} alt="mailIcon" />
                            </div>
                            <div className={classes.contactTitle}>Почта</div>
                            <div className={classes.contactSubtitle}>
                                Напишите нам для консультации
                            </div>
                            <Link
                                className={classes.contactLink}
                                to={'mailto:kriofire_tmn@mail.ru'}
                            >
                                kriofire_tmn@mail.ru
                            </Link>
                        </div>
                        <div className={classes.contact}>
                            <div className={classes.contactImg}>
                                <img src={telIcon} alt="telIcon" />
                            </div>
                            <div className={classes.contactTitle}>Телефон</div>
                            <div className={classes.contactSubtitle}>
                                Звоните для быстрой связи
                            </div>
                            <Link
                                className={classes.contactLink}
                                to={'tel:+79222600599'}
                            >
                                +7 (922) 260-05-99
                                <span> - Карина Владимировна</span>
                            </Link>
                            <Link
                                className={classes.contactLink}
                                to={'tel:+79220704423'}
                            >
                                +7 (922) 070-44-23
                                <span> - Радомир Федорович</span>
                            </Link>
                        </div>
                        <div className={classes.contact}>
                            <div className={classes.contactImg}>
                                <img src={vkIcon} alt="vkIcon" />
                            </div>
                            <div className={classes.contactTitle}>
                                Группа Вконтакте
                            </div>
                            <div className={classes.contactSubtitle}>
                                Так же вы можете посетить нашу группу
                            </div>
                            <Link
                                className={classes.contactLink}
                                to={'https://vk.com/kriofire'}
                            >
                                vk.com/kriofire
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.map}>
                    <YandexMap />
                </div>
            </div>
        </div>
    );
};
