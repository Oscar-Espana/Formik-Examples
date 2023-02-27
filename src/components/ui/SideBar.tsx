import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  Box,
  ListItemText,
  Typography,
} from "@mui/material";

const drawerWidth = 250;

const menu = [
  {
    label: "Componentes reutilizables",
    href: "/componentes-reusables",
  },
  {
    label: "Agregar / Editar",
    href: "/",
  },
  {
    label: "Agregar / Editar",
    href: "/test",
  },
];

export const SideBar = () => {
  const { asPath } = useRouter();

  return (
    <Drawer
      variant="permanent"
      open={true}
      anchor="left"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#5152f1",
          color: "white",
          border: "none",
          paddingY: 4,
        },
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={index}
            sx={asPath === item.href ? activeStyles : inActiveStyles}
          >
            {asPath === item.href && (
              <Box
                sx={{
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-20px",
                    right: "16px",
                    width: "20px",
                    height: "20px",
                    background: "white",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "-20px",
                    right: "16px",
                    width: "20px",
                    height: "20px",
                    background: "#5152f1",
                    borderBottomRightRadius: "16px",
                  },
                }}
              />
            )}

            <Link
              href={item.href}
              passHref
              style={{
                width: "100%",
              }}
            >
              <ListItemText>
                <Typography variant="subtitle2">{item.label}</Typography>
              </ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const activeStyles = {
  backgroundColor: "white",
  marginLeft: "16px",
  borderRadius: "16px",
  color: "#5152f1",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "-20px",
    right: "16px",
    width: "20px",
    height: "20px",
    background: "white",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-20px",
    right: "16px",
    width: "20px",
    height: "20px",
    background: "#5152f1",
    borderTopRightRadius: "16px",
  },
};

const inActiveStyles = {
  marginLeft: "16px",
};
