import Image from 'next/image'
import React from 'react'
import Eistein360Img from '../../assets/illustrations/einstein-mulher-360_desktop.svg'
import classes from './main-content-top.module.css'

const MainContentTop: React.FC = () => {

    return (
        <section className={ classes.sectionTopHero } aria-labelledby="main-heading">
            <div>
                <div className={ classes.wrapperTitle }>
                    <h1 id="main-heading">Alcance o sucesso facilmente com a ajuda do</h1>
                    <h1>
                        <span>Salesforce Customer 360.</span>
                    </h1>
                </div>

                <div className={ classes.wrapperParagraph }>
                    <p>O Customer 360 é a nossa coleção de produtos e serviços projetada para auxiliar 98% dos clientes a atingir ou superar suas metas de retorno sobre investimento (ROI).</p>
                </div>

                <div className={ classes.wrapperButton }>
                    <button className={ classes.buttonSelected }>Testar grátis</button>
                    <button className={ classes.buttonOutline }>Saber mais</button>
                </div>
            </div>

            <div className={ classes.imageContainer }>
                <Image src={ Eistein360Img } alt="Illustration of Einstein with a woman" />
            </div>
        </section>
    )
}

export default MainContentTop
