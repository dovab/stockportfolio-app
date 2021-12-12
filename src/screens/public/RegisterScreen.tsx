import * as React from "react";
import {Button, HStack, Link, VStack, Text} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {useRegisterMutation} from "../../redux/api/user";
import ErrorHelper from "../../api/helpers/ErrorHelper";
import Input from "../../components/form/Input";
import PublicLayout from "../../components/layout/PublicLayout";

export default function RegisterScreen() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();
    const [register, { isLoading }] = useRegisterMutation();
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [errors, setErrors] = React.useState<{[key: string]: string}>({});

    const handleLogin = async () => {
        try {
            await register({firstName, lastName, email, password}).unwrap();
            setIsRegistered(true);
        } catch (e) {
            ErrorHelper.processErrors(e, setErrors);
        }
    };

    return (
        <PublicLayout title="Register an account">
            {isRegistered && (
                <Text>Your account is successfully created. Please check your email for instructions on how to activate your account.</Text>
            )}

            {!isRegistered && (
                <VStack space={3} mt="5">
                    <Input label="First name" value={firstName} onChangeText={(value) => setFirstName(value)} error={errors.firstName} />
                    <Input label="Last name" value={lastName} onChangeText={(value) => setLastName(value)} error={errors.lastName} />
                    <Input label="Email address" value={email} onChangeText={(value) => setEmail(value)} error={errors.email} />
                    <Input label="Password" type="password" value={password} onChangeText={(value) => setPassword(value)} error={errors.password} />
                    <Button disabled={isLoading} mt="2" colorScheme="red" onPress={handleLogin}>
                        {isLoading ? <Text color="white">Loading...</Text> : <Text color="white">Sign up</Text>}
                    </Button>
                </VStack>
            )}

            <HStack mt="6" justifyContent="center">
                <Link _text={{ fontSize: 'sm', fontWeight: 'medium', color: 'red.500' }} onPress={() => navigation.navigate('Main')}>
                    Back to login
                </Link>
            </HStack>
        </PublicLayout>
    );
}