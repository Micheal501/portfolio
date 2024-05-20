import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

type LinkListType = {
  title: string;
  path: string;
};

const LinkList = ({ title, path }: LinkListType) => {
  const scrollToSection = (event: React.MouseEvent) => {
    event.preventDefault();
    const targetSection = document.querySelector(path);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        "display": "flex",
        "flexWrap": "wrap",
        "typography": "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
    >
      <Link
        href={path}
        onClick={scrollToSection}
        underline="none"
        sx={{
          "display": "flex",
          "color": "#ffffff",
          "fontSize": 18,
          "width": 90,
          "height": 30,
          "&:hover": {
            color: "#F46060",
            borderColor: "#F46060",
            transition: "ease-in",
            transitionDuration: "0.3s",
          },
        }}
      >
        {title}
      </Link>
    </Box>
  );
};

export default LinkList;
