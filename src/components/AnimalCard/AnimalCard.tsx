import "./styles.css";

interface AnimalDataProps {
  name: string,
  species: string,
  image: string  
}

function AnimalCard({ name, species, image } : AnimalDataProps) {
  return (
    <div className="animal-card-wrapper">
      <h2>{name}</h2>
      <p>{species}</p>
      <img src={image} />
    </div>
  );
}

export default AnimalCard;
