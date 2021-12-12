import Toast from 'react-native-root-toast';

/**
 * Helper class for API Errors
 */
class ErrorHelper
{
    /**
     * @param error
     * @param setValidationErrors
     */
    public processErrors(error: any, setValidationErrors: Function): void
    {
        switch(error.status) {
            case 'FETCH_ERROR':
            case 'PARSING_ERROR':
            case 'CUSTOM_ERROR':
                Toast.show(`There was a network error. Please try again later. ${error.error}`, {
                    duration: Toast.durations.LONG,
                });
                break;

            case 401:
                Toast.show('Invalid credentials specified.', {duration: Toast.durations.LONG});
                break;

            case 403:
                Toast.show('You do not have access to this resource.', {duration: Toast.durations.LONG});
                break;

            case 422:
                this.processValidationErrors(error.data, setValidationErrors);
                break;

            default:
                if (error.data && error.data['hydra:description']) {
                    Toast.show(error.data['hydra:description'], {duration: Toast.durations.LONG});
                }
                console.error(error.status);
                console.error(error.data);
                console.error(error);
                break;
        }
    }

    /**
     * @param data
     * @param setValidationErrors
     * @private
     */
    private processValidationErrors(data: any, setValidationErrors: Function): void
    {
        const errors: any = {};
        data.violations.forEach((violation: any) => {
            errors[violation.propertyPath] = violation.message;
        });

        setValidationErrors(errors);
    }
}

export default new ErrorHelper();