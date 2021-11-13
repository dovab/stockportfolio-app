import * as React from "react";
import {Box, Button, FormControl, Heading, HStack, Input, Link, VStack, Text} from "native-base";
import {useLoginMutation} from "../../redux/api/auth";

export default function LoginScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async () => {
        try {
            await login({email, password}).unwrap();
        } catch (e) {
            // TODO: Handle errors
            console.log(e);
        }
    };

    return (
        <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
            <Heading size="lg" fontWeight="bold">
                Sign in
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>
                        Email address
                    </FormControl.Label>
                    <Input type="text" onChangeText={(value) => setEmail(value)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>
                        Password
                    </FormControl.Label>
                    <Input type="password" onChangeText={(value) => setPassword(value)} />
                </FormControl>
                <Button disabled={isLoading} mt="2" colorScheme="red" onPress={handleLogin}>
                    {isLoading ? <Text color="white">Loading...</Text> : <Text color="white">Sign in</Text>}
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Link _text={{ fontSize: 'sm', fontWeight: 'medium', color: 'red.500' }} href="#">
                        Forgot Password?
                    </Link>
                    <Text> | </Text>
                    <Link _text={{ fontSize: 'sm', fontWeight: 'medium', color: 'red.500'}} href="#">
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
}