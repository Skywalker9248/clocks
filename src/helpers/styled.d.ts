import 'styled-components'
import { ThemeType } from './themes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    background: string;
    text: string;
  }
}
