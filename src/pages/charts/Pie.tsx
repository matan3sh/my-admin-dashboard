import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/charts/PieChart";

export function Pie() {
  return (
    <Box m="32px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
