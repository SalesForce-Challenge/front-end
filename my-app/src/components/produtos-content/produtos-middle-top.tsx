import classes from './produtos-middle-top.module.css';


const ProdutosMiddleTop = () => {
    return (
        <section className={classes.sectionWrapper}>

            <div className={classes.sectionWrapperTitle}>
                <h2>A inovação por trás do Customer 360</h2>
                <p>Dados, Inteligência Artificial e CRM</p>
            </div>
            
            <iframe width="800" height="450" src="https://www.youtube.com/embed/sCI-BZVmYoU?si=4LIbheD3Gqv472Mg" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </section>
    );
};

export default ProdutosMiddleTop;