import React from 'react'
import * as ReactDOM from 'react-dom/client'
import Player from './components/Player.jsx'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

// 3. extend the theme
const theme = extendTheme({ config })
export default theme

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <Player />
    </ChakraProvider>
  </React.StrictMode>,
)

