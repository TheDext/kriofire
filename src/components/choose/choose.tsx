import { Subtitle } from '@/components/subtitle';
import classes from './choose.module.scss';
import chooseConfig from '@config/choose.config';
import classNames from '@/utils/classNames';
import { useInView } from 'react-intersection-observer';

export const Choose = () => {
    const { images, subtitle } = chooseConfig;
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 200,
    });
    return (
        <div className={classes.choose}>
            <div className="_container-default">
                <Subtitle>{subtitle}</Subtitle>

                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    За <span>качество, сроки</span> и
                    <span> умение решать сложные</span> задачи.
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.row,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    {images.map((img, index) => (
                        <div key={index} className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img src={img} alt="img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
