import Link from 'next/link'
import classes from './navegation.module.css'
interface NavegationProps {
   children: React.ReactNode;
   href: string;
}

const Navegation: React.FC<NavegationProps> = ({ children, href }) => {
   return (
            <li className={classes.listLink}>
               <Link className={classes.link} href={href}>{children}</Link>
            </li>
   );
}

export default Navegation;
