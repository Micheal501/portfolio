import Avatar from "@mui/material/Avatar";
import LinkList from "../atoms/LinkList";
import ButtonLink from "../atoms/ButtonLink";
import Grid from "@mui/material/Grid";
const NavLink = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 5 }}
      >
        <Avatar
          alt="Remy Sharp"
          src="../../../public/assets/img/logo.png"
          sx={{ width: 136, height: 136 }}
        />
        <Grid
          sx={{ display: "flex", gap: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <LinkList
            title="About"
            path="#about"
          />
          <LinkList
            title="Projects"
            path="#projects"
          />
          <LinkList
            title="Contacts"
            path="#contacts"
          />

          <ButtonLink
            title="Resume"
            url="https://drive.google.com/uc?export=download&id=1Du6-HFRyUIKP0cToojta_4hbopr_jLNK"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default NavLink;
