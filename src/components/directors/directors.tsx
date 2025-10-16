import classes from './directors.module.scss';
import { Subtitle } from '@/components/subtitle';
import directorsConfig from '@config/directors.config';
import classNames from '@/utils/classNames';
import { useInView } from 'react-intersection-observer';
import useMatchMedia from '@/core/hooks/useMatchMedia';

export const Directors = () => {
    const { directors, label, subtitle } = directorsConfig;
    const { isDesktop } = useMatchMedia();
    const { ref, inView } = useInView({
        threshold: isDesktop ? 0.3 : 0,
        triggerOnce: true,
        delay: isDesktop ? 200 : 0,
        rootMargin: isDesktop ? '' : '500px',
    });
    return (
        <div className={classes.directors}>
            <div className={'_container-default'}>
                <Subtitle>{subtitle}</Subtitle>
                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {label}
                </div>
                <div className={classes.row}>
                    {directors.map(
                        ({
                            id,
                            img,
                            description,
                            name,
                            role,
                            note,
                            surname,
                            icon,
                        }) => (
                            <div
                                key={id}
                                ref={ref}
                                className={classNames(
                                    classes.column,
                                    { [classes._inView]: inView },
                                    []
                                )}
                            >
                                <div className={classes.item}>
                                    <div className={classes.img}>
                                        <img src={img} alt="directorPhoto" />
                                    </div>
                                    <div className={classes.body}>
                                        <div className={classes.surname}>
                                            {surname}
                                        </div>
                                        <div className={classes.name}>
                                            {name}
                                        </div>
                                        <div className={classes.role}>
                                            {role}
                                        </div>
                                        <div className={classes.description}>
                                            {description}
                                        </div>
                                        <div className={classes.note}>
                                            <div className={classes.noteIcon}>
                                                <img src={icon} alt="" />
                                            </div>
                                            <div className={classes.noteText}>
                                                {note}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
