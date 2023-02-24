import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import theme from "./theme/theme";


function App() {
  return (
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </RouterProvider >
  );
}

export default App;
