import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                    aria-label="Open sidebar"
                />
            )}
            
            <Logo />

            {isWideVersion && (
                <SearchBox />
            )}
            <Flex align="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}