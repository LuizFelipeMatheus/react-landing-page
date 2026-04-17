import ItemFunction from "./components/ItemFunction";
import { funcionalidades } from "../../data/funcionalidades";
import "./Funcionalidades.css";

function Funcionalidades() {
  return ( 
    <section className="funcionalidades">
      <div className="funcionalidades-container">
        <div className="funcionalidades-header">
            <h2 className="funcionalidades-title">Por que escolher a EduTrack?</h2>
            <p>Soluções completas desenhadas para o ecossistema de educação técnica
            profissionalizante.</p>
        </div>
    <div className="funcionalidades-cards">
        {funcionalidades.map((funcionalidade) =>(
            <ItemFunction
            key={funcionalidade.id}
            icon={funcionalidade.icon}
            title={funcionalidade.title}
            description={funcionalidade.description}
            />
        ) )} 

    </div>
    </div>

    
    </section>
);  
}
 
export default Funcionalidades;