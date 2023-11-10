import {Stack, Box, Link} from "@chakra-ui/react"
import NextLink from 'next/link'
import {IoLogoGoogle, IoLogoGithub, IoBookOutline} from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        target={target}
        display="inline-flex"
        alignItems="center"
        fontSize={22}
        color="#395D73"
        style={{gap: 4}}
        {...props}
      >
        {children}
      </Link>
    )
  }

const NavBar = () => {
    return(
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }} justifyContent="end">
            <LinkItem href="/projects"><IoLogoGithub/>My Projects</LinkItem>
            <LinkItem href="mailto:h.g.petuhovs@gmail.com"><IoLogoGoogle/>Contact Me</LinkItem>
        </Stack>
    )
}

export default NavBar