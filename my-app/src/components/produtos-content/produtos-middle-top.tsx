import classes from './produtos-middle-top.module.css'


const ProdutosMiddleTop = () => {
    return (
        <section className={ classes.produtosMiddleTopWrapper }>

            <div className={ classes.sectionWrapperTitle }>
                <h2>A inovação por trás do Customer 360</h2>
                <p>Dados, Inteligência Artificial e CRM</p>
            </div>

            <div className={ classes.videoWrapper }>
                <iframe
                    title="YouTube video player"
                    src="https://www.youtube.com/embed/sCI-BZVmYoU?si=4LIbheD3Gqv472Mg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={ classes.video }
                />
            </div>
        </section>
    )
}

export default ProdutosMiddleTop
