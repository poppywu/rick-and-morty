import {
  Card,
  Avatar,
  CardContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import styles from '@/styles/CharacterDetail.module.css';

export declare type CharacterDetailProps = {
  id?: number | undefined;
  name?: string | undefined;
  image?: string | undefined;
  status?: string | undefined;
  species?: string | undefined;
  gender?: string | undefined;
  origin?: { name?: string } | { name?: undefined };
  location?: { name?: string } | { name?: undefined };
};

function CharacterDetail(props: CharacterDetailProps) {
  return (
    <Card sx={{ minWidth: 680 }}>
      <div className={styles.header}>
        <Avatar
          alt="character-detail"
          src={props?.image}
          sx={{ height: 200, width: 200 }}
        />
        <h1>{props?.name}</h1>
      </div>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>{props?.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell>{props?.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Species</TableCell>
              <TableCell>{props?.species}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Origin</TableCell>
              <TableCell>{props?.origin?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell>{props?.location?.name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CharacterDetail;
