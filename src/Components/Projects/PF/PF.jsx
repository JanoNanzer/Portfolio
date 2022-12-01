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
import img from "./home.jpeg";

export default function PF() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#00000063", color: "white" }}>
      <CardHeader title="Mi Scusi Books" />
      <CardMedia component="img" alt="Home Page" height="140" image={img} />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
        <Typography variant="body2" color="white">
          Group academic experience consisting of 4 weeks of work under the SCRUM
          methodology, developing an ecommerce of books. My rol was as a
          fullstack developer but focused mainly on admin panel development and front end components.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href="https://mi-scusi-books.vercel.app/" target="_blank">
          <LanguageIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          href="https://github.com/AlejandroGCorzo/Mi-Scusi-Books"
          target="_blank"
        >
          <GitHubIcon sx={{ color: "white" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import LanguageIcon from "@mui/icons-material/Language";

// import img from "./home.jpeg";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function PF() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         // action={
//         //   <IconButton aria-label="settings">
//         //     <MoreVertIcon />
//         //   </IconButton>
//         // }
//         title="Mi Scusi Books"
//       />
//       <CardMedia component="img" height="194" image={img} alt="Home Page" />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="linkedin">
//           <LinkedInIcon />
//         </IconButton>
//         <IconButton aria-label="website">
//           <LanguageIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
