import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { LineChart } from "../../components/charts/LineChart";

export function Line() {
  return (
    <Box m="32px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
