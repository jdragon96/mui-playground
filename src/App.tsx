import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";
import { dark } from './shared/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as components from "./shared/components"
import * as Sidear from './sidebar';


const theme = createTheme({
  palette: dark,
  shape: {borderRadius: 2},
  components
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline/>
      <Sidear.Sidebar1/>
    </ThemeProvider>
  );
}