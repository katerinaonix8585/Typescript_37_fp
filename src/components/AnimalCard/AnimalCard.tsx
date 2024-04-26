import {AnimalCardWrapper, CardParagraph, CardTitle, AnimalCardImage} from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <CardTitle>{animalData.name}</CardTitle>
      <CardParagraph>{animalData.species}</CardParagraph>
      <AnimalCardImage src={animalData.image} alt={animalData.name} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
