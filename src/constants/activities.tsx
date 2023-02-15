import Sports from "@mui/icons-material/SportsSoccerOutlined";
import Nightlife from "@mui/icons-material/NightlifeOutlined";
import Pool from "@mui/icons-material/PoolOutlined";
import Shopping from "@mui/icons-material/ShoppingBagOutlined";
import Restaurant from "@mui/icons-material/RestaurantOutlined";
import { IActivity } from "@/interfaces";

export const activities: IActivity[] = [
  {
    id: 1,
    label: "Deportes",
    icon: <Sports />,
  },
  {
    id: 2,
    label: "Diversión",
    icon: <Nightlife />,
  },
  {
    id: 3,
    label: "Natación",
    icon: <Pool />,
  },
  {
    id: 4,
    label: "Compras",
    icon: <Shopping />,
  },
  {
    id: 5,
    label: "Comida",
    icon: <Restaurant />,
  },
];
