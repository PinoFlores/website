import React from "react";
import { HomePage } from "./home";

interface RoutesConfiguration {
  path: string;
  exact: boolean;
  Element: React.FunctionComponent;
}

export const BASE_ROUTES: RoutesConfiguration[] = [
  {
    path: "/",
    exact: true,
    Element: HomePage,
  },
];
