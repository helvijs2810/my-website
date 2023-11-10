import {Container, Box, Heading, Text} from "@chakra-ui/react"

const Page = () => {
    return (
        <Container maxW="inherit" height="700px" m={0} boxShadow="2xl" padding={0}>
            <Box display={{md: "flex"}}  height="inherit">
                <Box display={{md: "flex"}} flexGrow={1} flexDir="column" bg="#CEECF2">
                    <Box h="100%" w="32" bg="#395D73">
                        <Heading as="h1" fontSize={48} variant="page-title" transform="rotate(-90deg)" whiteSpace="nowrap" mt="400">
                            By Helvijs Petuhovs
                        </Heading>
                    </Box>
                </Box>
                   <Box w="container.md" display={{md: "flex"}} flexGrow={1} justifyContent="center" alignItems="center" height="inherit" flexFlow="column">
                        <Heading as="h1" variant="head-one">
                            About Me
                        </Heading>
                        <Heading as="h2" variant="head-two" pt={7}>
                            Personal Statement
                        </Heading>
                        <Text variant="info-text" p={2}>
                            Whether it would be painting in school or working on games in my free time, I always had a creative itch for creating things and sharing my work with other people.
                            Having dabbled in design tools such as Photoshop, Illustrator, and Flash for many small scale projects I am looking towards my next step working in industry.
                        </Text>
                        <Heading as="h2" variant="head-two" pt={7}>
                            Experience
                        </Heading>
                        <Text variant="info-text">University of Newcastle (2018 - 2019) BCs Computer Science Game Engineering</Text>
                        <Text variant="info-text">Liverpool Hope University (2020 - 2023) BCs Computer Science</Text>
                        <Text variant="info-text">Primark (2022 - Now) Customer Service</Text>
                        <Heading as="h2"  variant="head-two" pt={7}>
                            Skills
                        </Heading>
                        <Text variant="info-text"> 
                            CSS, HTML, JavaScript, jQuerry, PHP, mySQL, React, Python, C#, C++, Java, Android Studio, Unity
                        </Text>
                </Box>
            </Box>
        </Container>
    )
}

export default Page