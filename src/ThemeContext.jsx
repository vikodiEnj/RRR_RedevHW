import { createContext } from "react";

const themeContext = createContext({ theme: "light", toggleTheme: () => {} });

export default themeContext;
