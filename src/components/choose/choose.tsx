import { Subtitle } from '@/components/subtitle';
import classes from './choose.module.scss';
import chooseConfig from '@config/choose.config';
import classNames from '@/utils/classNames';
import { useInView } from 'react-intersection-observer';
import {Link} from "react-router";

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
                <Subtitle><h2>{subtitle}</h2></Subtitle>

                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        {[classes._inView]: inView},
                        []
                    )}
                >
                    За <span>качество, сроки</span> и
                    <span> умение решать сложные</span> задачи.
                </div>

                <Link
                    className={classNames(
                        classes.link,
                        {[classes._inView]: inView},
                        []
                    )}
                    ref={ref}
                    to="https://www.calameo.com/read/00486243629a49bde3277?page=27"
                >
                    Читайте о нас в журнале Экономическая стратегия, 2025
                </Link>
                <div
                    ref={ref}
                    className={classNames(
                        classes.row,
                        {[classes._inView]: inView},
                        []
                    )}
                >
                    {images.map((img, index) => (
                        <div key={index} className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img src={img} alt="img"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
