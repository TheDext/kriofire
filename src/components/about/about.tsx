import classes from './about.module.scss';
import { Subtitle } from '@/components/subtitle';
import fireIcon from '@icons/fire.png';
import noteIcon from '@icons/note.png';

export const About = () => {
    return (
        <div id="about" className={classes.about}>
            <div className={'_container-default'}>
                <Subtitle><h2>О нас</h2></Subtitle>
                <div className={classes.main}>
                    <div className={classes.mainImg}>
                        <img src={fireIcon} alt="fireIcon" />
                    </div>
                    <div className={classes.mainText}>
                        ООО «КРИОФАЙР» создаёт документацию, которая
                        обеспечивает реальную безопасность вашего предприятия.
                        ПМЛА, План ЛРН, План КУ и План действий при ЧС
                        разрабатываются с учётом требований нормативно-правовых
                        актов, проверены на практике и готовы к применению на
                        объектах.
                    </div>
                </div>
                <div className={classes.note}>
                    <div className={classes.noteImg}>
                        <img src={noteIcon} alt="noteIcon" />
                    </div>
                    <div className={classes.noteText}>
                        Наша миссия – сделать документацию инструментом
                        безопасности, а не формальностью.
                    </div>
                </div>
                <div className={classes.info}>
                    <p className={classes.paragraph}>
                        Компания стабильно развивается и обеспечивает высокий уровень надёжности: у
                        нас налажены прямые договоры с типографией и службами
                        доставки, что позволяет выпускать и передавать
                        документацию заказчику в кратчайшие сроки.
                    </p>
                    <p className={classes.paragraph}>
                        В команде КРИОФАЙР работают специалисты с практическим
                        опытом в профессиональном аварийно-спасательном
                        формировании, промышленной и пожарной безопасности, а
                        также в области охраны труда, что делает документы максимально
                        приближенными к реальным условиям эксплуатации. Мы
                        знаем, как проходят проверки и готовим документы,
                        которые их выдерживают.
                    </p>
                    <p className={classes.paragraph}>
                        Современное программное обеспечение, двухэтапный
                        контроль качества, электронный документооборот,
                        сотрудничество с рядом профильных партнёров даёт
                        возможность комплексно решать задачи наших заказчиков —
                        от разработки до согласования.
                    </p>
                </div>
            </div>
        </div>
    );
};
