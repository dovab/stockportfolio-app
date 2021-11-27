import * as React from "react";
import {Box, Heading} from "native-base";

export default function DashboardScreen() {
    return (
        <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
            <Heading size="lg" fontWeight="bold">
                Signed in!
            </Heading>
        </Box>
    );
}