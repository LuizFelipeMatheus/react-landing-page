import { pilares } from "../../data/pilares";
import ItemPilar from "./components/ItemPilar";
import "./Sobre.css";


function Sobre() {
    return(
        <section className="sobre">
            <div className="container-sobre">
                <div>
                    <h4>Sobre a EduTrack</h4>
                    <h2>Tecnologia a serviço da educação de qualidade</h2>
                    <p>Nossa missão é transformar a maneira como escolas técnicas operam, eliminando burocracias e fornecendo dados em tempo real para decisões pedagógicas precisas.</p>
                    <p>Acreditamos que o professor deve focar no ensino, enquanto nossa tecnologia cuida da infraestrutura de dados e acompanhamento do discente.</p>
                </div>
                <div>
                    <h3>Os 4 pilares</h3>
                </div>
            <div>
  <h3>Os 4 pilares</h3>
  {pilares.map((pilar) => (
    <ItemPilar
      key={pilar.id}
      icon={pilar.icon}
      title={pilar.title}
      description={pilar.description}
    />
  ))}
</div>

            </div>
        </section>
    )
}

export default Sobre;