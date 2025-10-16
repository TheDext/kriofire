import { object, string, boolean } from 'yup';

export const formValidateSchemaConfig = object({
    name: string().required('Укажите Ваше имя'),
    email: string()
        .email('Проверьте правильность ввода эл. почты')
        .required('Укажите адрес эл. почты'),
    tel: string()
        .required('Укажите номер телефона')
        .test(
            'phone-format',
            'Проверьте правильность ввода номера телефона',
            (value) => {
                if (!value) return false;

                // Проверяем точное соответствие одному из двух форматов
                const isFormat1 = /^\+7\d{10}$/.test(value); // +77777777777
                const isFormat2 = /^8\d{10}$/.test(value); // 87777777777

                return isFormat1 || isFormat2;
            }
        ),
    agreement: boolean()
        .oneOf([true], 'Необходимо согласие на обработку персональных данных')
        .required('Необходимо согласие на обработку персональных данных'),
});
