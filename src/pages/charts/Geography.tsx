import { Box, useTheme } from "@mui/material";
import { GeographyChart } from "../../components/charts/GeographyChart";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";

export function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="32px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
