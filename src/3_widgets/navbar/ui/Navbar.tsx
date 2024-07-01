import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
} from '6_shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

console.log(cls);

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink theme={AppLinkTheme.Secondary} to={'/'}>Home</AppLink>
            <AppLink to={'/about'}>About</AppLink>
        </div>
    );
};

