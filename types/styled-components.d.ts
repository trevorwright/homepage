// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    APP_MAX_WIDTH: number;
    NAV_BAR_HEIGHT: number;

    colors: {
      red: string;
      green: string;
      yellow: string;
      blue: string;
      purple: string;
      cyan: string;
      grey: string;
      lightGrey: string;
      white: string;
      macRed: string;
      macYellow: string;
      macGreen: string;
    };
  }
}
