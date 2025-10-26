import classes from './services.module.scss';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import servicesConfig from '@config/services.config';
import smallFileIcon from '@icons/fileSmall.png';
import { useInView } from 'react-intersection-observer';
import classNames from '@/utils/classNames';
import { Link } from 'react-router';
import useMatchMedia from '@/core/hooks/useMatchMedia';

export const Services = () => {
    const { isDesktop } = useMatchMedia();
    const { ref, inView } = useInView({
        threshold: isDesktop ? 0.3 : 0,
        triggerOnce: true,
        delay: 200,
        rootMargin: isDesktop ? '' : '300px',
    });

    return (
        <div id="service" className={classes.services}>
            <div className="_container-default">
                <Title>Профессиональный подход</Title>
                <div className={classes.subtitle}>
                    <Subtitle><h2>Наши услуги</h2></Subtitle>
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._isView]: inView },
                        []
                    )}
                >
                    Осуществляем полное сопровождение включая разработку Плана
                    действий по предупреждению и ликвидации ЧС, Плана по
                    предупреждению и ликвидации разливов нефти и нефтепродуктов,
                    Плана мероприятий по локализации и ликвидации последствий
                    аварий на ОПО, Плана комплексных учений.
                </div>

                <div
                    ref={ref}
                    className={classNames(
                        classes.row,
                        { [classes._isView]: inView },
                        []
                    )}
                >
                    {servicesConfig.map(
                        ({ id, name, price, img, description }) => (
                            <div key={id} className={classes.column}>
                                <div className={classes.item}>
                                    <div className={classes.img}>
                                        <img src={img} alt="serviceImg" />
                                    </div>
                                    <div className={classes.body}>
                                        <div className={classes.name}>
                                            <img
                                                src={smallFileIcon}
                                                alt="smallFileIcon"
                                            />
                                            <span><h3>{name}</h3></span>
                                        </div>
                                        <div className={classes.description}>
                                            {description}
                                        </div>
                                        {!Array.isArray(price) ? (
                                            <div className={classes.price}>
                                                {price}
                                            </div>
                                        ) : (
                                            <div className={classes.priceBlock}>
                                                {price.map(
                                                    ({ price, title, id }) => (
                                                        <div
                                                            key={id}
                                                            className={
                                                                classes.priceItem
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    classes.priceTitle
                                                                }
                                                            >
                                                                {title}
                                                            </div>
                                                            <div
                                                                className={
                                                                    classes.price
                                                                }
                                                            >
                                                                {price}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <Link to="#call" className={classes.btn}>
                                        <button>
                                            <span>Отправить заявку</span>
                                            <svg
                                                fill="#103561"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
