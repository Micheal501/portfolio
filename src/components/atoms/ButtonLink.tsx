import Button from "@mui/material/Button";

type ButtonType = {
  title: string;
  url: string;
};

const ButtonLink = ({ title, url }: ButtonType) => {
  return (
    <>
      <Button
        href={url}
        variant="outlined"
        size="large"
        target="_blank"
        download="Resume.pdf"
        sx={{
          "color": "#F46060",
          "borderColor": "#F46060",
          "&:hover": {
            color: "#F82626",
            borderColor: "#F82626",
          },
        }}
      >
        {title}
      </Button>
    </>
  );
};

export default ButtonLink;
