import LoginForm from '@/components/login-content/login-form'
import LoginHero from '@/components/login-content/login-hero'
import MainHeader from '@/components/main-header/main-header'
import classes from './page.module.css'

const Login: React.FC = () => {
   return (
      <>
         <MainHeader/>

         <main className={classes.mainWrapper}>
            <LoginForm/>
            <LoginHero/>
         </main>
      </>
   );
}

export default Login;
