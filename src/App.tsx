import { Routes, Route } from "react-router-dom";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import { Topbar } from "./components/common/Topbar";
import { Sidebar } from "./components/common/Sidebar/Sidebar";

import { Dashboard } from "./pages/Dashboard";
import { Team } from "./pages/data/Team";
import { Invoices } from "./pages/data/Invoices";
import { Contacts } from "./pages/data/Contacts";
import { Bar } from "./pages/charts/Bar";
import { Form } from "./pages/settings/Form";
import { Line } from "./pages/charts/Line";
import { Pie } from "./pages/charts/Pie";
import { Faq } from "./pages/settings/Faq";
import { Geography } from "./pages/charts/Geography";
import { Calendar } from "./pages/settings/Calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
