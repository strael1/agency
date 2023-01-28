import '../../styles/styles.scss';
import  { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div>
            {
                window.innerWidth > 1024 ? 
                    <header className="header">
                        <div className="header__container">
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
                :
                    // criar um header para mobile e tablet:
                    // importar uma imagem do tipo bars para o menu hamburger
                    // o menu deve ser um hamburger menu 
                    // o menu deve ser um menu dropdown

                    <header className='header'>
                        <div className="header__container">
                            <div className="header__logo-mobile">
                                <div><img src="https://grupokpg.com/images/icons/logo/logowebp.webp" alt="logo" /></div>
                                <div className="header__logo-bars-mobile" onClick={handleMenuClick}></div>
                            </div>
                            <div className="header__list-mobile" style={{transform: isMenuOpen ? 'translateY(0px)' : 'translateY(-370px)'}}>
                                <div className='header__list-mobile-close' 
                                //quando clicar fechar o menu
                                onClick={handleMenuClick}></div>
                                
                                <ul className='header__main-list-mobile'>
                                    <li className='header__item-list-mobile'>Home</li>
                                    <li className='header__item-list-mobile'>Sobre Nós</li>
                                    <li className='header__item-list-mobile'>Blog</li>
                                    <li className='header__item-list-mobile'>Carreiras</li>
                                    <li className='header__item-list-mobile'>Fale Conosco</li>
                                </ul>
                                
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
            }
        </div>
        
    )
}

export default Header;