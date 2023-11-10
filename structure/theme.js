import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter';
import '@fontsource-variable/merienda';

const fonts = {
  heading: `'Merienda Variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
}

const components = {
  Text: {
    variants: {
      'info-text': {
        color: '#395D73',
        fontSize: '16',
        fontWeight: '300'
      }
    }
  },
  Heading: {
    variants: {
      'head-one': {
        color: '#395D73',
        fontSize: '38'
      },
      'head-two': {
        color: '#45718C',
        fontSize: '30'
      },
      'page-title': {
        color: '#CEECF2'
      }
    }
  }
}

const theme = extendTheme({fonts, components})

export default theme