import classes from './subtitle.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from '@/utils/classNames';
import type {ReactNode} from "react";

export const Subtitle = ({ children }: { children: string | ReactNode }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 200,
    });
    return (
        <div
            ref={ref}
            className={classNames(
                classes.subtitle,
                { [classes._isView]: inView },
                []
            )}
        >
            {children}
        </div>
    );
};
