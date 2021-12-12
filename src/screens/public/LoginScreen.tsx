import * as React from "react";
import { Button, FormControl, HStack, Input, Link, VStack, Text} from "native-base";
import {useLoginMutation} from "../../redux/api/auth";
import {useNavigation} from "@react-navigation/native";
import ErrorHelper from "../../api/helpers/ErrorHelper";
import PublicLayout from "../../components/layout/PublicLayout";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async () => {
        try {
            await login({email, password}).unwrap();
        } catch (e) {
            ErrorHelper.processErrors(e, () => {});
        }
    };

    return (
        <PublicLayout title="Sign in">
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
                    <Link _text={{ fontSize: 'sm', fontWeight: 'medium', color: 'red.500'}} onPress={() => navigation.navigate('Register')}>
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </PublicLayout>
    );
}