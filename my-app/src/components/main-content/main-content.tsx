import bosqueImg from '../../assets/illustrations/bosque-background.svg'


import Image from 'next/image';
import MainContentTop from './main-content-top';
import classes from './main-content.module.css';
import MainContentMiddle from './main-content-middle';

const MainContent = () => {
    return (
        <main className={classes.main}>
            <MainContentTop />
            <Image src={bosqueImg} alt='' className={classes.bosqueImg}/>
            <MainContentMiddle />
        </main>
    );
};

export default MainContent;