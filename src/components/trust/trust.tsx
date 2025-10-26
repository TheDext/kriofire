import classes from './trust.module.scss';
import trustConfig from '@config/trust.config';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import { useInView } from 'react-intersection-observer';
import classNames from '@/utils/classNames';

export const Trust = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 200,
    });
    const { trustItems, subtitle, label, title } = trustConfig;
    return (
        <div id="advantages" className={classes.trust}>
            <div className={'_container-default'}>
                <Title>{title}</Title>
                <div className={classes.subtitle}>
                    <Subtitle><h2>{subtitle}</h2></Subtitle>
                </div>
                <div className={classes.label}>{label}</div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.row,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {trustItems.map(({ title, id, number, description }) => (
                        <div key={id} className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.number}>{number}</div>
                                <div className={classes.title}>{title}</div>
                                <div className={classes.description}>
                                    {description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
