import Grid from "@mui/material/Grid";
import LinkList from "../atoms/LinkList";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Avatar from "@mui/material/Avatar";

const MobileNavLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
    >
      <div>
        <Avatar
          alt="Micheal Owen"
          src="../../../assets/img/logo.png"
          sx={{ width: 136, height: 136 }}
        />
      </div>
      <div style={{ position: "relative" }}>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "80%",
              right: 0,
              backgroundColor: "#2e2e2e",
              padding: "30px",
              zIndex: 1000,
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <LinkList
                  title="About"
                  path="#about"
                />
              </Grid>
              <Grid item>
                <LinkList
                  title="Projects"
                  path="#projects"
                />
              </Grid>
              <Grid item>
                <LinkList
                  title="Contacts"
                  path="#contacts"
                />
              </Grid>
            </Grid>
          </div>
        )}

        {isOpen ? (
          <MenuOpenIcon
            onClick={handleIsOpen}
            sx={{
              color: "#ffffff",
              position: "absolute",
              top: 0,
              right: 0,
              width: 60,
              height: 60,
              padding: 5,
            }}
          />
        ) : (
          <MenuIcon
            onClick={handleIsOpen}
            sx={{
              color: "#ffffff",
              position: "absolute",
              top: 0,
              right: 0,
              width: 60,
              height: 60,
              padding: 5,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MobileNavLink;
