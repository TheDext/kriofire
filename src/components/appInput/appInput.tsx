import classes from './appInput.module.scss';
import type { ChangeEvent, FC } from 'react';
import classNames from '@/utils/classNames';

interface IAppInputProps {
    name: string;
    label?: string;
    placeholder: string;
    error?: string;
    type?: string;
    onChange: (name: string, value: string) => void;
    value?: string;
    onFocus?: (name: string) => void;
}

export const AppInput: FC<IAppInputProps> = ({
    placeholder,
    value,
    name,
    error,
    onChange,
}) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        onChange(name, value);
    };

    return (
        <div
            className={classNames(
                classes.appInput,
                { [classes._error]: error },
                []
            )}
        >
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleChange}
            />
        </div>
    );
};
