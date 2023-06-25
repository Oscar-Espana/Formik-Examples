import React, { FC } from "react";
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
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { menu } from "@/constants";

const drawerWidth = 250;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: FC<Props> = ({ isOpen, onClose }) => {
  const { asPath } = useRouter();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "inherit",
          backgroundColor: "#5152f1",
          color: "white",
          border: "none",
          paddingY: 4,
        },
        marginLeft: isOpen ? 0 : `-${drawerWidth}px`,
        transition: theme.transitions.create(["margin"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
      variant={isMobileScreen ? "temporary" : "persistent"}
      anchor="left"
      open={isOpen}
      onClose={onClose}
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
