import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import NavBar from '../navbar'

const Main = ({children, router}) => {
    return (
        <Box as="main" height='container.md'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Helvijs Petuhovs Homepage</title>
            </Head>
            <Container maxW="container.lg" height="container.lg">
            <NavBar/>
                {children}
            </Container>
        </Box>
    )
}

export default Main