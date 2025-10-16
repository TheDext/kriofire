import img1 from '@img/services/01.png';
import img2 from '@img/services/02.png';
import img3 from '@img/services/03.png';
import img4 from '@img/services/04.png';

const servicesConfig = [
    {
        id: 'service1',
        img: img1,
        name: 'План ЛРН',
        description:
            'План предупреждения и ликвидации разливов нефти и нефтепродуктов ',
        price: 'от 90 000,00 ₽',
    },
    {
        id: 'service2',
        img: img2,
        name: 'ПМЛА',
        description:
            'План мероприятий по локализации и ликвидации последствий аварий на опасном производственном объекте',
        price: 'от 40 000,00 ₽',
    },
    {
        id: 'service3',
        img: img3,
        name: 'План КУ',
        description: 'План комплексных учений',
        price: 'от 50 000,00 ₽',
    },
    {
        id: 'service4',
        img: img4,
        name: 'План действий при ЧС',
        description:
            'План по предупреждению и ликвидации чрезвычайных ситуаций',
        price: [
            {
                id: 'service4price1',
                title: 'Для муниципальных образований',
                price: 'от 250 000,00 ₽',
            },
            {
                id: 'service4price2',
                title: 'Для организаций',
                price: 'от 80 000,00 ₽',
            },
        ],
    },
];

export default servicesConfig;
