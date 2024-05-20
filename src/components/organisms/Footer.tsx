import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          sx={{
            marginTop: "100px",
            padding: 5,
            textAlign: "center",
          }}
        >
          <p style={{ color: "#FFFFFF", fontSize: "20px" }}>
            &copy; 2024 Micheal Owen
          </p>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
