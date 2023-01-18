import '../../styles/styles.scss';

const About = () => {
    return (
        <main className="main">
            <section className="main__container">
                <div className="about">
                    <div className="main__about">
                        <div className="main__photo">
                            <img src="https://grupokpg.com/images/home/imgAbout.webp" alt="Sobre nós" />
                            <div className="main__link">
                                Sobre nós
                            </div>
                        </div>
                        <div className="main__text">
                            <h3 className="title">Quem Somos</h3>
                            <p className="content">Somos um grupo multissetorial com negócios inovadores, crescimento exponencial e todos com um propósito: transformar vidas!</p>
                            <div className="main__link">
                                    Sobre nós
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;