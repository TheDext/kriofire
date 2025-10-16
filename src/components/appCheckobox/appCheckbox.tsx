import classes from './appCheckbox.module.scss';
import type { ChangeEvent, FC } from 'react';
import classNames from '@/utils/classNames';

interface IAppCheckboxProps {
    id: string;
    name: string;
    label?: string;
    error?: string;
    type?: string;
    onChange: (name: string, value: boolean) => void;
    value?: boolean;
    onFocus?: (name: string) => void;
    required?: boolean;
}

export const AppCheckbox: FC<IAppCheckboxProps> = ({
    id,
    label,
    name,
    value,
    onChange,
}) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = target;
        onChange(name, checked);
    };

    return (
        <div
            className={classNames(
                classes.appCheckbox,
                { [classes._checked]: value },
                []
            )}
        >
            <label htmlFor={id}>{label}</label>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={value}
                onChange={handleChange}
            />
        </div>
    );
};
