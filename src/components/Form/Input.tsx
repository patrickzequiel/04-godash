import { FormLabel, Input as ChakrInput, FormControl } from '@chakra-ui/react';

interface InputProps {
    name: string;
    label?: string;
    type?: string;
}

export function Input({name, label, ...rest}:InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakrInput
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900',
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    )
}