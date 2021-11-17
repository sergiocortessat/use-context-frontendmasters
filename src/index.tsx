import { render } from "react-dom";

import Application from "./Application";
import { RGBContextProvider } from "./context";

import "./style.scss";
import { ThemeProvider } from "./ThemeContext";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeProvider>,
  rootElement
);
