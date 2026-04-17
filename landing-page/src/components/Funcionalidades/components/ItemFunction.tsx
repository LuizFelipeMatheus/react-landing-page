import "./ItemFunction.css";


export interface ItemFunctionProps {
    icon: string;
    title: string;
    description: string;
}

function ItemFunction({ icon, title, description }: ItemFunctionProps) {
    return (
        <div className="funcionalidade-item">
                <p className="Icons-functions">{icon}</p>
                <h3>{title}</h3>
                <p>{description}</p>
        </div>
    );
}

export default ItemFunction;