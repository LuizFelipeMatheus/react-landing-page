import './Statistics.css';

interface StatisticsProps {
  data: string;
  description: string;
}

function Statistics({ data, description }: StatisticsProps) {
  return (
    <div className="statistics">
      <h2 className="statistics-data">{data}</h2>
      <p className="statistics-description">{description}</p>
    </div>
  );
}

export default Statistics;