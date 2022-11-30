import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import img from "./home.png";

export default function PI() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#00000063", color:"white"  }}>
        <CardHeader title="Pokemon API"/>
      <CardMedia component="img" alt="Home Page" height="140" image={img} />
      <CardContent>
        <Typography variant="body2" color="white">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href="https://pi-pokemon-main-client-2ur8.vercel.app/home" target="_blank">
          <LanguageIcon sx={{color:"white"}}/>
        </IconButton>
        <IconButton href="https://github.com/JanoNanzer/Pi-Pokemon-main" target="_blank">
          <GitHubIcon sx={{color:"white"}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
