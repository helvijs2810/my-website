import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../structure/layouts/main"

import theme from '../structure/theme'

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.router}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website