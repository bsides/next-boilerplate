import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${require('typeface-source-sans-pro')}

  body {
    font-family: "Source Sans Pro", sans-serif;
  }
`

export default GlobalStyle
