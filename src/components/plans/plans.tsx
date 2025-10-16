import classes from './plans.module.scss';
import plansConfig from '@config/plans.config';

export const Plans = () => (
    <div className={classes.plans}>
        <div className="_container-default">
            <div className={classes.row}>
                {plansConfig.plans.map(({ title, paragraphs, id }) => (
                    <div key={id} className={classes.plan}>
                        <div className={classes.title}>{title}</div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className={classes.paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={classes.note}>
                <div className={classes.icon}>
                    <img src={plansConfig.note.img} alt="note" />
                </div>
                <div className={classes.text}>{plansConfig.note.text}</div>
            </div>
        </div>
    </div>
);
