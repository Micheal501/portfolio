import Container from "@mui/material/Container";
import MobileNavLink from "../molecules/MobileNavLink";
import NavLink from "../molecules/NavLink";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div style={{ height: "216px" }}>
        <Container
          maxWidth="xl"
          sx={{ position: "fixed", zIndex: 1000 }}
        >
          {isMobile ? <MobileNavLink /> : <NavLink />}
        </Container>
      </div>
    </>
  );
};

export default Navbar;
