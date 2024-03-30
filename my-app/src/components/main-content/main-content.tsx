import bosqueImg from '../../assets/illustrations/bosque-background.svg'


import Image from 'next/image'
import MainContentDuvidas from './main-content-duvidas'
import MainContentMiddle from './main-content-middle'
import MainContentTop from './main-content-top'
import classes from './main-content.module.css'

const MainContent = () => {
    return (
        <main className={classes.main}>
            <MainContentTop />
            <Image src={bosqueImg} alt='' className={classes.bosqueImg}/>
            <div className={classes.mainContentWrapper}>
                <MainContentMiddle />
                <MainContentDuvidas />
            </div>
        </main>
    );
};

export default MainContent;
