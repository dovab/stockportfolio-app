import * as React from "react";
import PublicLayout from "../../components/layout/PublicLayout";
import {Text} from "native-base";
import {useActivateAccountMutation} from "../../redux/api/user";
import ErrorHelper from "../../api/helpers/ErrorHelper";
import Toast from "react-native-root-toast";

export default function ActivateAccountScreen({route, navigation}) {
    const [activateAccount, { isLoading, isError }] = useActivateAccountMutation();

    React.useEffect(() => {
        // Run this function immediately
        (async () => {
            try {
                await activateAccount({token: route.params.token}).unwrap();
                navigation.navigate('Login');
            } catch(e) {
                ErrorHelper.processErrors(e, (errors) => {
                    if (errors.token) {
                        Toast.show(errors.token, {duration: Toast.durations.LONG});
                    }
                });
            }
        })();
    }, []);

    return (
        <PublicLayout title="Activate Account">
            {isLoading && <Text>Activating your account...</Text>}
            {isError && <Text>An error occurred while activating your account!</Text>}
        </PublicLayout>
    );
}