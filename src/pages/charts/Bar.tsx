import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { BarChart } from "../../components/charts/BarChart";

export function Bar() {
  return (
    <Box m="32px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
