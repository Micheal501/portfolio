import TechStack from "../../mocks/TechStack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardProjects = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {TechStack.map((project, index) => (
        <Card
          key={index}
          sx={{ width: 550, height: 580, bgcolor: "#524C4C" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardHeader
              title={project.title}
              sx={{ color: "#FFFFFF" }}
            />
            <div>
              <a
                href={`https://github.com/Micheal501/${project.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <GitHubIcon
                  sx={{
                    width: 40,
                    height: 40,
                    marginRight: "14px",
                    color: "#FFFFFF",
                  }}
                />
              </a>
              <a
                href={`https://micheal-owen-${project.value}.netlify.app/`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <LaunchIcon
                  sx={{
                    width: 40,
                    height: 40,
                    marginRight: "14px",
                    color: "#FFFFFF",
                  }}
                />
              </a>
            </div>
          </div>
          <div style={{ marginLeft: "15px", marginRight: "15px" }}>
            <CardMedia
              component="img"
              height="270"
              image="../../public/portfolio-v1.png"
              alt="Portfolio website"
              sx={{ borderRadius: "10px" }}
            />
          </div>
          <CardContent>
            <Typography
              variant="body2"
              color="#FFFFFF"
              sx={{ fontSize: "18px" }}
            >
              {project.description}
            </Typography>

            <List
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-end",
                marginTop: "120px",
              }}
            >
              {project.techstack.map((techItem, techIndex) => (
                <div
                  key={techIndex}
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#F46060",
                    borderColor: "#F46060",
                    borderRadius: "5px",
                    width: "80px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  {techItem.tech}
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardProjects;
