import "styled-components";

import defaultTheme from './defaultTheme';

import darkTheme from "./darkTheme";


export type Theme = typeof defaultTheme;

export type DarkThemes = typeof darkTheme;

declare module 'styled-components'{
  export interface DefaultTheme extends Theme {}
}

declare module 'styled-components'{
  export interface DarkTheme extends DarkThemes {}
}
