import {Container, Box, Heading, Stack, Text, Link, Button, useColorModeValue, Center} from "@chakra-ui/react"
import NextLink from 'next/link'
import {IoLogoGoogle, IoLogoGithub, IoBookOutline} from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={1}
        target={target}
        display="inline-flex"
        alignItems="center"
        fontSize={20}
        fontFamily='Press Start 2P'
        style={{gap: 4}}
        {...props}
      >
        {children}
      </Link>
    )
  }

const About = () => {
    return (
        <Container maxW="inherit" height="700px" m={0} boxShadow="2xl" padding={0}>
            <Box display={{md: "flex"}}  height="inherit">
                <Box display={{md: "flex"}} flexGrow={1} justifyContent="center" alignItems="center" height="inherit" flexFlow="column" bg="#053D38">
                    <Heading as="h1" variant="Heading" color="#F26800">
                        About Me!
                    </Heading>
                    <Heading as="h2" fontSize={28} variant="Sub Heading" pt={4} color="#F26800">
                        Who am I?
                    </Heading>
                    <Text w="container.lg" color="#A3CCAB">
                        Whether it would be painting in school or working on games in my free time, I always had a creative itch for creating things and sharing my work with others.
                        Having dabbled in design tools such as Photoshop, Illustrator, and Flash for many small scale projects I am looking towards my next step working in industry.
                    </Text>
                    <Heading as="h2" fontSize={28} variant="Sub Heading" pt={4} color="#F26800">
                        Experience
                    </Heading>
                    <Text color="#A3CCAB">University of Newcastle (2018 - 2019) BCs Computer Science Game Engineering</Text>
                    <Text color="#A3CCAB">Liverpool Hope University (2020 - 2023) BCs Computer Science</Text>
                    <Text color="#A3CCAB">Primark (2022 - Now) Customer Service</Text>
                    <Heading as="h2" fontSize={28} variant="Sub Heading" pt={4} color="#F26800">
                        Skills
                    </Heading>
                    <Text color="#A3CCAB"> 
                        CSS, HTML, JavaScript, jQuerry, PHP, mySQL, React, Python, C#, C++, Java, Android Studio, Unity
                    </Text>
                    <LinkItem href="/">Go Back OwO</LinkItem>
                </Box>
            </Box>
        </Container>
    )
}

export default About