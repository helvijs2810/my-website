import {Container, Box, Heading, List, Text, ListItem, Link, Button, Icon, chakra, Image, useColorModeValue} from "@chakra-ui/react"
import NextLink from 'next/link'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }

const Projects = () => {
    return (
        <Container maxW="inherit" height="700px" m={0} boxShadow="2xl" padding={0}>
            <Box display={{md: "flex"}}  height="inherit">
                <Box display={{md: "flex"}} flexGrow={1} justifyContent="center" alignItems="center" height="inherit" flexFlow="column" bg="whiteAlpha.700">
                    <Heading as="h2" variant="Page Title">
                        Projects
                    </Heading>
                    <Text>
                        Work in progress for later.
                    </Text>
                    <LinkItem href="/">Go Back</LinkItem>
                </Box>
            </Box>
        </Container>
    )
}

export default Projects