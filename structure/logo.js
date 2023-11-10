import Link from 'next/link'
import {IoLeaf, IoSun, IoSnow, IoFlower} from 'react-icons/io5'
import { Text, Icon } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 16px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

const Logo = () => {
    const seasonLogo = IoFlower;

    return(
        <Link href='/'>
            <LogoBox>
                <Icon as={seasonLogo} width={10} height={10}/>
                <Text fontWeight="bold" ml={3}>My Website</Text>
            </LogoBox>
        </Link>
    )
}

export default Logo