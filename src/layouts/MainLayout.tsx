import React, { FC, ReactNode, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SideBar } from "@/components/ui";
import MenuIcon from "@mui/icons-material/MenuOutlined";

interface Props {
  children: ReactNode;
}
export const MainLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpenMenu, setIsOpenMenu] = useState(isMobileScreen ? false : true);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <nav>
        <SideBar isOpen={isOpenMenu} onClose={handleToggleMenu} />
      </nav>
      <Box width="100%">
        <Box
          component="header"
          sx={{
            py: 2,
            px: 2.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleToggleMenu} sx={{ color: "#5152f1" }}>
            <MenuIcon />
          </IconButton>
          <Typography
            flex={1}
            textAlign="center"
            variant="h6"
            component="p"
            color="#5152f1"
          >
            Ejemplos usando Formik y MUI
          </Typography>
        </Box>
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
    </Box>
  );
};
