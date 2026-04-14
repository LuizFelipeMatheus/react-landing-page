interface ItemPilarProps {
  icon: string;
  title: string;
  description: string;
}

function ItemPilar({ icon, title, description }: ItemPilarProps) {
  return (
    <div className="item-pilar">
      <div>
        <img src={icon} />
      </div>
      <div>
        <span className="titulo-pilar">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ItemPilar;