import '../../styles/styles.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="header__container desktop">
                <div className="header__container-1">
                    <div className="header__logo">
                        <img src="https://grupokpg.com/images/icons/logo/logowebp.webp" alt="logo" />
                    </div>
                    <div className="header__list">
                        <ul className="header__main-list">
                            <li className="header__item-list">Home</li>
                            <li className="header__item-list">Sobre nós</li>
                            <li className="header__item-list">Blog</li>
                            <li className="header__item-list">Carreiras</li>
                            <li className="header__item-list">Fale Conosco</li>
                        </ul>
                    </div>
                </div>

                <div className="header__container-2">
                    <div className="header__col-1">
                        <h2 className="title">Nos movemos<br/> por um propósito!</h2>
                    </div>
                    <div className="header__col-2">
                        <p className="content">Inovação, crescimentos e desenvolvimento de grandes<br/> ideias é nossa rotina.</p>
                    </div>
                    <div className="header__col-3">
                        <p className="paragraph">SAIBA MAIS</p>
                    </div>                
                </div>
            </div>
        </header>
    )
}

export default Header;