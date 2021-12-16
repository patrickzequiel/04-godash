import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex 
        align="center" 
    >
        { showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Patrick Cruz</Text>
            <Text
                color="gray.300"
                fontSize="small"
            >
                patescruz@gmail.com</Text>
        </Box>
        )}

        <Avatar size="md" name="Patrick Cruz" src="https://github.com/patrickzequiel.png" />
    </Flex>
    )
}