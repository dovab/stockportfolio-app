import {Box, Heading} from "native-base";
import * as React from "react";

type PublicLayoutProps = {
    children: React.ReactNode;
    title: string;
};

export default function PublicLayout({children, title}: PublicLayoutProps) {
    return (
        <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
            <Heading size="lg" fontWeight="bold">
                {title}
            </Heading>

            {children}
        </Box>
    );
}