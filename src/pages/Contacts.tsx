import { Container, Grid } from "@mui/material";
import Button from "../components/atoms/ButtonLink";
const Contacts = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "150px" }}
        id="contacts"
      >
        <Grid sx={{ padding: 5 }}>
          <h2
            style={{
              textAlign: "center",
              color: "#F46060",
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "50px",
            }}
          >
            Contacts
          </h2>
          <p style={{ color: "#FFFFFF", fontSize: "20px" }}>
            Let's collaborate and create something amazing together!. I believe
            in the power of collaboration to push boundaries and shape the
            future of web development. Feel free to reach out me directly via
            email or phone. I can't wait to hear about your project and discuss
            how I can contribute to its success.
          </p>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Button
            title="Email"
            url="mailto:mowen8983@gmail.com"
          />
          <Button
            title="Whatsapp"
            url="https://wa.me/62895376866611"
          />
        </div>
      </Container>
    </>
  );
};

export default Contacts;
