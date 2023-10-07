import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Link to="/">
            <Typography variant="h6">HomePage</Typography>
          </Link>
          <Link to="/Products">
            <Typography variant="h6">ProductPage</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default MyAppBar;
