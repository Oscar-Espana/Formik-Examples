import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { SideBar } from "@/components/ui";

interface Props {
  children: ReactNode;
}
export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <nav>
        <SideBar />
      </nav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
