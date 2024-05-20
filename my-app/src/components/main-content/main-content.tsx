import bosqueImg from '../../assets/illustrations/bosque-background.svg'


import Image from 'next/image'
import MainContentDuvidas from './main-content-duvidas'
import MainContentEquipe from './main-content-equipe'
import MainContentMiddle from './main-content-middle'
import MainContentTop from './main-content-top'
import classes from './main-content.module.css'

const MainContent = () => {
    return (
        <main className={ classes.main } aria-label="Main content area">
            <MainContentTop />
            <Image src={ bosqueImg } alt='Background illustration of a forest' className={ classes.bosqueImg } />
            <div className={ classes.mainContentWrapper }>
                <MainContentMiddle />
                <MainContentDuvidas />
                <MainContentEquipe />
            </div>
        </main>
    )
}

export default MainContent
