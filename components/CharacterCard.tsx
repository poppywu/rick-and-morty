import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styles from '@/styles/CharacterCard.module.css';

export interface CharacterCardProps {
  image?: string;
  name?: string;
  id?: number;
}

function CharacterCard({ name, image, id }: CharacterCardProps) {
  return (
    <div>
      <Link href={`/character/${id}`} style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ maxWidth: 400 }} className={styles.card}>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={`${name}-image`}
          />
          <CardContent>
              {name} 
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default CharacterCard;
