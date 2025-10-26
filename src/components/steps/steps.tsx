import classes from './steps.module.scss';
import stepsConfig from '@config/steps.config';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import arrowIcon from '@icons/arrow.svg';
import { useInView } from 'react-intersection-observer';
import classNames from '@/utils/classNames';
import useMatchMedia from '@/core/hooks/useMatchMedia';

export const Steps = () => {
    const { steps, title, label, subtitle } = stepsConfig;
    const { isDesktop } = useMatchMedia();
    const { ref, inView } = useInView({
        threshold: isDesktop ? 0.3 : 0,
        triggerOnce: true,
        delay: isDesktop ? 200 : 0,
        rootMargin: isDesktop ? '' : '300px',
    });
    return (
        <div className={classes.steps}>
            <div className={'_container-default'}>
                <Title>{title}</Title>
                <div className={classes.subtitle}>
                    <Subtitle><h2>{subtitle}</h2></Subtitle>
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.textLabel,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {label}
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.row,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {steps.map(({ id, label, img, description, title }) => (
                        <div key={id} className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.top}>
                                    <div className={classes.label}>{label}</div>
                                    <img src={arrowIcon} alt="arrowIcon" />
                                </div>
                                <div className={classes.title}>
                                    <img src={img} alt="stepImg" />
                                    <div className={classes.name}>{title}</div>
                                </div>
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
