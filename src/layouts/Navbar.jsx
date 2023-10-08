import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));
  const Icons = styled("Box")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));
 

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Hesennov
        </Typography>
        <StarsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={102} color="error">
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, display: { xs: "none", sm: "block" } }}
            src="/"
          />
        </Icons>
        
          <Avatar
            sx={{ width: 30, height: 30, display: { xs: "block", sm: "none" } }}
            src="/"
          />
          <Typography
            sx={{ display: { xs: "block", sm: "none" } }}
            variant="span"
          >
            hesennov_
          </Typography>
        
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
