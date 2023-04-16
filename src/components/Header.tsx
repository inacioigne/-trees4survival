import { Toolbar, Button, Typography, IconButton, Divider, Box } from "@mui/material/";

// Next Components
import Image from "next/image";

// Icons
import { FcHome } from 'react-icons/fc';


interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="medium" startIcon={<FcHome />} sx={{ textTransform: 'none'}}>Iníco</Button>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/image/logo.png" alt="logo" width={80} height={80} />
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Toolbar>
    </>
  );
}

export default Header;
