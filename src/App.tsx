import { Quotes } from "./components/Card";
import { Footer } from "./components/Footer/Footer.styled";
import { Header } from "./components/Header/Header.styled";
import {
  ThemeButton,
  ThemeContainer,
} from "./components/ThemeSwitching/ThemeSwitching.styled";
import { GlobalStyles } from "./style-global";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./components/Theme/Theme.styled";

import { useEffect, useState } from "react";

export function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("current-theme") || ""
    );
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme: any) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}
          ></ThemeButton>
        </ThemeContainer>

        <Quotes />

        <Footer>
          <p>
            Made with love by{" "}
            <a href="https://github.com/pedrinfreitas/css-theme-switching">
              Pedro
            </a>
          </p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
