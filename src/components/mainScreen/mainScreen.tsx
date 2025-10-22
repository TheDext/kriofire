import { Title } from '@/components/title';
import classes from './mainScreen.module.scss';
import { Subtitle } from '@/components/subtitle';
import chevrone from '@icons/chevroneRight.png';
import fileIcon from '@icons/file.png';
import newspaperImg from '@img/newspaper.png';
import classNames from '@/utils/classNames';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router';

export const MainScreen = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 200,
    });
    return (
        <div className={classes.mainScreen}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <Title>KRIOFIRE</Title>
                    <span>
                        «Мы рядом, когда нужно быстро, точно и без ошибок»
                    </span>
                </div>
                <div className={classes.subtitle}>
                    <Subtitle>
                        Разработка технической документации по промышленной
                        безопасности и предупреждению чрезвычайных ситуаций.
                    </Subtitle>
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    <p>
                        Разработаем и согласуем ПЛАРН, ПМЛА, Плана КУ, План действий при
                        ЧС.
                    </p>
                    <p>
                        <span>Полное сопровождение</span> «под ключ»{' '}
                        <span> с гарантией</span> прохождения проверок.
                    </p>
                </div>
                <div className={classes.actionButtons}>
                    <Link to={'#about'} className={classes.aboutBtn}>
                        О нас
                    </Link>
                    <Link to="#service" className={classes.moreBtn}>
                        Подробнее <img src={chevrone} alt="chevrone" />
                    </Link>
                </div>
                <div className={classes.bottom}>
                    <div
                        ref={ref}
                        className={classNames(
                            classes.about,
                            { [classes._inView]: inView },
                            []
                        )}
                    >
                        <div className={classes.aboutTitle}>ООО «КРИОФАЙР»</div>
                        <div className={classes.aboutText}>
                            <p>
                                Наша компания специализируется на разработке
                                технической документации, обеспечении
                                промышленной безопасности производственных
                                объектов и готовности к чрезвычайным ситуациям.
                            </p>
                            <p>
                                Мы предоставляем услуги по разработке Планов
                                ЛРН, ПМЛА, Планов КУ и Планов действий при ЧС
                                для предприятий по всей России, помогаем успешно
                                проходить проверку контрольно-надзорных органов,
                                а также соблюдать требования промышленной
                                безопасности.
                            </p>
                        </div>
                        <div className={classes.aboutFileIcon}>
                            <img src={fileIcon} alt="fileIcon" />
                        </div>
                    </div>
                    <div
                        ref={ref}
                        className={classNames(
                            classes.newspaper,
                            { [classes._inView]: inView },
                            []
                        )}
                    >
                        <img src={newspaperImg} alt="newspaperImg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
