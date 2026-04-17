import './ItemPilar.css';
interface ItemPilarProps {
  icon: string;
  title: string;
  description: string;
}

function ItemPilar({ icon, title, description }: ItemPilarProps) {
  return (
    <div className="pilar-item">
      <div className="pilar-content">
        <img src={icon} />
      </div>
      <div className="pilar-content">
        <h4 className="pilar-title">{title}</h4>
        <p className="pilar-description">{description}</p>
      </div>
    </div>
  );
}

export default ItemPilar;
 