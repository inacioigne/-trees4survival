"use client";
import {
  Toolbar,
  Button,
  Typography,
  IconButton,
  Divider,
  Box,
  Grid,
} from "@mui/material/";
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from "@mui/styles";
// Next Components
import Image from "next/image";
import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";

// Icons
import { FcHome } from "react-icons/fc";
import { ImStatsDots } from "react-icons/im";
import {
  GiBurningForest,
  GiFarmer,
  GiPalmTree,
  GiHoneypot,
} from "react-icons/gi";
import { useEffect } from "react";
import { blue } from "@mui/material/colors";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const useStyles = makeStyles((theme) => ({
    button: {
      textTransform: "none",
    },
    active: {
      // bgcolor: blue[500]
      backgroundColor: blue[500],
      color: "white",
      "&:hover": {
        backgroundColor: "blue",
      },
    },
  }));

  const classes = useStyles();

  const { title } = props;
  const pathname = usePathname();

  useEffect(() => {
    // const url = pathname + searchParams.toString();
    console.log("URL: ", pathname);
    // You can now use the current URL
  }, [pathname]);

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link href={"/"}>
          <Button
            size="medium"
            startIcon={<FcHome />}
            sx={{ textTransform: "none" }}
          >
            Iníco
          </Button>
        </Link>

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
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Grid container spacing={2}>
        <Link href={"/"}>
          <Button
            className={
              pathname == "/"
                ? `${classes.button} ${classes.active}`
                : classes.button
            }
            size="small"
            startIcon={<GiBurningForest />}
          >
            Sistemas Agroflorestais
          </Button>
        </Link>
        <Link href={"/family_farming"}>
          <Button
            size="small"
            startIcon={<GiFarmer />}
            className={
              pathname == "/family_farming"
                ? `${classes.button} ${classes.active}`
                : classes.button
            }
          >
            Agricultura Familiar
          </Button>
        </Link>
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

        </Grid>
       
      </Toolbar>
    </>
  );
}

export default Header;
