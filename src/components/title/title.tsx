import classes from './title.module.scss';
import { useIntersection } from 'react-use';
import { useRef } from 'react';
import classNames from '@/utils/classNames';
import { useInView } from 'react-intersection-observer';

export const Title = ({ children }: { children: string }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 200,
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.title,
                { [classes._isView]: inView },
                []
            )}
        >{`// ${children}`}</div>
    );
};
