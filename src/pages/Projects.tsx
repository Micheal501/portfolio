import { Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardProjects from "../components/organisms/CardProjects";

export default function RecipeReviewCard() {
  const theme = useTheme();
  const blockCard = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "50px", paddingTop: 10 }}
        id="projects"
      >
        <h2
          style={{
            textAlign: "center",
            color: "#F46060",
            fontSize: "36px",
            marginBottom: "50px",
            fontWeight: "bold",
          }}
        >
          Projects.
        </h2>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            flexDirection: blockCard ? "column" : "row",
          }}
        >
          <CardProjects></CardProjects>
        </Grid>
      </Container>
    </>
  );
}
