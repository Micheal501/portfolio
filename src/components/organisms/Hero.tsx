import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ReactTyped } from "react-typed";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        color="#ffffff"
        sx={{ marginTop: 5 }}
      >
        <Grid item>
          <h1>
            Hi I'm{" "}
            <span style={{ color: "#F46060", fontSize: "36px" }}>
              Micheal Owen
            </span>{" "}
            👋
          </h1>
        </Grid>
        <Grid item>
          <h2 style={{ fontSize: "26px" }}>
            Front End {""}
            <ReactTyped
              strings={["Developer", "Engineer", "Enthusiats"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </Grid>
        <Grid item>
          <q style={{ fontSize: "18px" }}>
            Code is like humor. When you have to explain it, it's bad. ~Cory
            House
          </q>
        </Grid>
        <Card
          sx={{
            marginTop: 10,
            backgroundColor: "#232121",
            color: "#F46060",
            display: "flex",
            width: 350,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>Checkout My : </h3>
            <Grid
              item
              sx={{
                display: "flex",
                gap: 1,
                marginLeft: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://github.com/Micheal501"
                target="_blank"
                className="icon-link"
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                <GitHubIcon style={{ width: 40, height: 40 }} />
              </a>
              <a
                href="https://linkedin.com/in/micheal-owen"
                className="icon-link"
                style={{ color: "#FFFFFF" }}
                target="_blank"
              >
                <LinkedInIcon sx={{ width: 45, height: 45 }} />
              </a>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Hero;
