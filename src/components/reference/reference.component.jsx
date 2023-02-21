import "../../styles/styles.scss";
import { SimpleSlider } from "./reference.component.simpleslider";




const Reference = () => {
  return (
    <div>
      {window.innerWidth > 1024 ? 
        <section className="reference">
          <div className="reference__home__text">
            <h3>Somos Refêrencia</h3>
            <p>
              Estamos sempre focados na Excelência <br />e na qualidade dos
              nossos produtos e servicos
            </p>
            <SimpleSlider className="reference__home__slider"/>
          </div>
          <div className="reference__home__image">
            <img
              src="https://grupokpg.com/_next/static/media/referencia.9ef55a9c.webp"
              alt=""
            />
          </div>
        </section>
       : (
        <section className="reference_mobile">
          <div className="reference_mobile__home__text">
            <h3>Somos Referencia</h3>
            <p>
              Estamos sempre focados na Excelência <br />e na qualidade dos
              nossos produtos e servicos  
            </p>
            <SimpleSlider className="reference_mobile__home__slider"/>
          </div>


        </section>
      )}
    </div>
  );
};

export default Reference;
