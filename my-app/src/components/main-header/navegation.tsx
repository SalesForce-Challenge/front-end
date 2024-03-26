import Link from 'next/link'

interface NavegationProps {
   children: React.ReactNode;
   href: string;
}

const Navegation: React.FC<NavegationProps> = ({ children, href }) => {
   return (
      <nav>
         <ul>
            <li>
               <Link href={href}>{children}</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Navegation;
