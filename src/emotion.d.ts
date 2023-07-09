import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: {
      primary: string;
      secondery: string;
    };
    level: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    };
    breakpoints: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
    color: {
      primary: string;
      secondery: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    fontSize: {
      xxs: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    interaction: {
      primary: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        pressed: string;
      };
      signal: {
        green: string;
        red: string;
        yellow: string;
      };
    };
    space: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;

      pageMargin: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
      };
    };
  }
}
