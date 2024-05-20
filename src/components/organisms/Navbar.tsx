import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import MobileNavLink from "../molecules/MobileNavLink";
import NavLink from "../molecules/NavLink";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "216px" }}>
        <Container
          maxWidth="xl"
          sx={{
            position: "fixed",
            zIndex: 1000,
            paddingTop: 2,
            top: 0,
            backdropFilter: scrollY > 0 ? "blur(10px)" : "none",
            transition: "backdrop-filter 0.3s ease-in-out",
          }}
        >
          {isMobile ? <MobileNavLink /> : <NavLink />}
        </Container>
      </div>
    </>
  );
};

export default Navbar;
