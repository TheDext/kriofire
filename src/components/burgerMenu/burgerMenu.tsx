import classes from './burgerMenu.module.scss';

type BurgerMenuProps = {
    setShowMenu: () => void;
};

export const BurgerMenu = ({ setShowMenu }: BurgerMenuProps) => {
    return (
        <div onClick={setShowMenu} className={classes.wrapper}>
            <div className={classes.burger}>
                <div className={classes.line}></div>
            </div>
        </div>
    );
};
