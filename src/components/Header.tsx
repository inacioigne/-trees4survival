import {
  Toolbar,
  Button,
  Typography,
  IconButton,
  Divider,
  Box,
} from "@mui/material/";

// Next Components
import Image from "next/image";

// Icons
import { FcHome } from "react-icons/fc";
import { ImStatsDots } from "react-icons/im";
import { GiBurningForest, GiFarmer, GiPalmTree, GiHoneypot } from "react-icons/gi";

interface HeaderProps {
  // sections: ReadonlyArray<{
  //   title: string;
  //   url: string;
  // }>;
  title: string;
}

const sections = [
  { title: "Sistemas Agroflorestais", url: "#" },
  { title: "Agricultura Familiar", url: "#" },
  { title: "Melhoramento Genético de Espécies Arbóreas", url: "#" },
  { title: "Meliponicultura Cabocla", url: "#" },
  { title: "Estatística Experimental", url: "#" },
];

function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button
          size="medium"
          startIcon={<FcHome />}
          sx={{ textTransform: "none" }}
        >
          Iníco
        </Button>
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
        {/* <Divider /> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Button
          size="small"
          startIcon={<GiBurningForest />}
          sx={{ textTransform: "none" }}
        >
          Sistemas Agroflorestais
        </Button>
        <Button
          size="small"
          startIcon={<GiFarmer />}
          sx={{ textTransform: "none" }}
        >
          Agricultura Familiar
        </Button>
        <Button
          size="small"
          startIcon={<GiPalmTree />}
          sx={{ textTransform: "none" }}
        >
          Melhoramento Genético de Espécies Arbóreas
        </Button>
        <Button
          size="small"
          startIcon={<GiHoneypot />}
          sx={{ textTransform: "none" }}
        >
          Meliponicultura Cabocla
        </Button>
        <Button
          size="small"
          startIcon={<ImStatsDots />}
          sx={{ textTransform: "none" }}
        >
          Estatística Experimental
        </Button>
       
       
       
      </Toolbar>
    </>
  );
}

export default Header;
