import { Container, Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        id="about"
      >
        <Grid sx={{ marginTop: "150px", padding: 5 }}>
          <h2
            style={{
              textAlign: "center",
              color: "#F46060",
              fontSize: "36px",
              marginBottom: "50px",
            }}
          >
            About Me.
          </h2>
          <Grid item>
            <p style={{ color: "#FFFFFF", opacity: 0.8, fontSize: "20px" }}>
              My journey into the world of web development began during my
              college years. It wasn't until my 5th semester that I was
              introduced to the fascinating realm of web development,
              discovering the array of technologies and tools used to craft
              stunning websites.
            </p>
          </Grid>
          <Grid
            item
            style={{ color: "#FFFFFF", opacity: 0.8, fontSize: "20px" }}
          >
            <p>
              From that point onward, I delved deeper into Front-End
              Development, fueled by a growing passion for the craft. As I honed
              my skills, I found myself drawn to the artistry and functionality
              of web programming, particularly in the realm of Front-End
              Development.
            </p>
          </Grid>
          <Grid
            item
            style={{ color: "#FFFFFF", opacity: 0.8, fontSize: "20px" }}
          >
            <p>
              Throughout my learning journey, I embarked on various personal
              projects, ranging from responsive portfolios to interactive
              website prototypes. These projects served as invaluable
              opportunities to refine my skills and foster my growth as a
              developer.
            </p>
          </Grid>
          <Grid sx={{ marginTop: "30px" }}>
            <p style={{ color: "#FFFFFF", fontSize: "18px" }}>
              Some tools, technologies and frameworks I've worked with:
            </p>
          </Grid>
          <Grid sx={{ display: "flex", width: "80%", gap: 10 }}>
            <Grid item>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  color: "#FFFFFF",
                  opacity: 0.7,
                  fontSize: "16px",
                }}
              >
                <li style={{ flex: 1, color: "#FFFFFF" }}>Javascript</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>Typescript</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>NPM</li>
              </ul>
            </Grid>
            <Grid item>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  color: "#FFFFFF",
                  opacity: 0.7,
                  fontSize: "16px",
                }}
              >
                <li style={{ flex: 1, color: "#FFFFFF" }}>React</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>Tailwind</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>MUI</li>
              </ul>
            </Grid>
            <Grid item>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  color: "#FFFFFF",
                  opacity: 0.7,
                  fontSize: "16px",
                }}
              >
                <li style={{ flex: 1, color: "#FFFFFF" }}>Git</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>Github</li>
                <li style={{ flex: 1, color: "#FFFFFF" }}>Figma</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
