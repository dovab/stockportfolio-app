import {FormControl, Input as BaseInput, IInputProps} from "native-base";
import * as React from "react";

type InputProps = IInputProps & {
    label: string;
    type?: string | undefined;
    error?: string | undefined;
};

export default function Input({label, type, error, ...props}: InputProps) {
    return (
        <FormControl isInvalid={!!error}>
            <FormControl.Label>
                {label}
            </FormControl.Label>
            <BaseInput type={type || 'text'} {...props} />
            <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
        </FormControl>
    );
}