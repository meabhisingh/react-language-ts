import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "white",
  margin: "0.5rem",
  textDecoration: "none",
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>
          Learndo.
        </Typography>
        <Link style={styles} to={"/"}>
          Home
        </Link>
        <Link style={styles} to={"/login"}>
          Login
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
