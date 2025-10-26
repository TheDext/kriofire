import classes from './form.module.scss';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import { AppInput } from '@/components/appInput';
import { type FormEvent, useState } from 'react';
import { AppCheckbox } from '@/components/appCheckobox';
import { httpService } from '@/services/http.service';
import { useInView } from 'react-intersection-observer';
import classNames from '@/utils/classNames';
import { formValidateSchemaConfig } from '@config/formValidateSchema.config';

export const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
        planlrn: false,
        pmla: false,
        planku: false,
        planchs: false,
        agreement: false,
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
        planlrn: '',
        pmla: '',
        planku: '',
        planchs: '',
        agreement: '',
    });

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        delay: 200,
    });

    const handleChange = (name: string, value: string | boolean) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // Очищаем ошибку при изменении поля
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = async () => {
        try {
            // Валидируем основные поля по схеме
            await formValidateSchemaConfig.validate(data, {
                abortEarly: false,
            });

            // Дополнительная валидация чекбоксов
            const newErrors = {
                name: '',
                email: '',
                tel: '',
                message: '',
                planlrn: '',
                pmla: '',
                planku: '',
                planchs: '',
                agreement: '',
            };

            // Проверяем согласие на обработку данных
            if (!data.agreement) {
                newErrors.agreement = 'Необходимо согласие на обработку данных';
            }

            setErrors(newErrors);

            // Если есть ошибки в чекбоксах, форма не валидна
            return !newErrors.planchs && !newErrors.agreement;
        } catch (validationErrors: any) {
            // Обрабатываем ошибки yup
            const newErrors = {
                name: '',
                email: '',
                tel: '',
                message: '',
                planlrn: '',
                pmla: '',
                planku: '',
                planchs: '',
                agreement: '',
            };

            validationErrors.inner.forEach((error: any) => {
                if (error.path in newErrors) {
                    newErrors[error.path as keyof typeof newErrors] =
                        error.message;
                }
            });

            setErrors(newErrors);
            return false;
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = await validateForm();
        if (!isValid) return false;

        try {
            const res = await httpService.post('sendMail', data);
            console.log('res', res);
            if (res) alert('Фора успешно отправлена!');
            setData({
                name: '',
                email: '',
                tel: '',
                message: '',
                planlrn: false,
                pmla: false,
                planku: false,
                planchs: false,
                agreement: false,
            });
        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            alert('Ошибка отправки формы');
        }
    };

    return (
        <div className={classes.form} id="call">
            <div className="_container-default">
                <Title>Kriofire</Title>
                <div className={classes.subtitle}>
                    <Subtitle><h2>Свяжитесь с нами</h2></Subtitle>
                </div>
                <div
                    ref={ref}
                    className={classNames(
                        classes.label,
                        { [classes._inView]: inView },
                        []
                    )}
                >
                    Есть вопрос или нужна консультация? Заполните форму ниже, и
                    мы свяжемся с вами в ближайшее время.
                </div>

                <form onSubmit={handleSubmit}>
                    <AppInput
                        placeholder="Ваше имя*"
                        name="name"
                        value={data.name}
                        error={errors.name}
                        onChange={handleChange}
                    />
                    <AppInput
                        placeholder="Ваше e-mail*"
                        name="email"
                        value={data.email}
                        error={errors.email}
                        onChange={handleChange}
                    />
                    <AppInput
                        placeholder="Ваш телефон*"
                        name="tel"
                        value={data.tel}
                        error={errors.tel}
                        onChange={handleChange}
                    />

                    <div className={classes.question}>
                        Какой документ необходимо разработать?
                    </div>

                    <div className={classes.checkboxes}>
                        <AppCheckbox
                            onChange={handleChange}
                            id="planlrn"
                            value={data.planlrn}
                            name="planlrn"
                            label="План ЛРН"
                        />
                        <AppCheckbox
                            onChange={handleChange}
                            id="pmla"
                            value={data.pmla}
                            name="pmla"
                            label="ПМЛА"
                        />
                        <AppCheckbox
                            onChange={handleChange}
                            id="planku"
                            value={data.planku}
                            name="planku"
                            label="План КУ"
                        />
                        <AppCheckbox
                            onChange={handleChange}
                            id="planchs"
                            value={data.planchs}
                            name="planchs"
                            label="План действий при ЧС"
                        />
                    </div>
                    {errors.planchs && (
                        <div className={classes.errorText}>
                            {errors.planchs}
                        </div>
                    )}

                    <textarea
                        name="message"
                        value={data.message}
                        onChange={(e) =>
                            handleChange(e.target.name, e.target.value)
                        }
                        placeholder="Ваше сообщение"
                        className={classes.textArea}
                    />

                    <p>* - это обязательное поле</p>

                    <button type="submit" className={classes.submitBtn}>
                        <span>Отправить</span>
                        <svg
                            fill="#103561"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z" />
                        </svg>
                    </button>

                    <AppCheckbox
                        onChange={handleChange}
                        id="agreement"
                        value={data.agreement}
                        name="agreement"
                        label="Оставляя заявку, я даю своё согласие на обработку персональных данных"
                    />
                    {errors.agreement && (
                        <div className={classes.errorText}>
                            {errors.agreement}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};
