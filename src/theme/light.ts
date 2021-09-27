import { Theme } from 'styled-components'
import { darkTheme } from './dark'

const white = '#FFFFFF'
const gray = '#F4F6FB'
const black = '#000000'
const pink = '#DB83DD'
const yellow = '#fab005'
const blue = '#5800ff'

// TODO – Add colors for light theme
export const lightTheme: Theme = {
  ...darkTheme,
  colors: {
    white,
    black,
    gray,
    pink,
    yellow,
    background: gray,
    foreground: black,
    primary: blue,
    header: white,
    card: '',
    footer: ''
  }
}
