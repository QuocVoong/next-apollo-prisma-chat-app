import React, { InputHTMLAttributes, useState } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  isPassword?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: undefined,
  isPassword,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isInvalid={!!(error && touched)}>
      <FormLabel fontWeight="300" htmlFor={field.name}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          {...field}
          {...props}
          id={field.name}
          type={!isPassword || showPassword ? "text" : "password"}
        />
        <InputRightElement>
          {isPassword ? (
            showPassword ? (
              <ViewIcon
                color="_hoveredPurple"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <ViewOffIcon
                color="_hoveredPurple"
                onClick={() => setShowPassword(!showPassword)}
              />
            )
          ) : (
            <></>
          )}
        </InputRightElement>
      </InputGroup>
      <Flex mb={2}>
        <FormErrorMessage fontSize={14}>{error}</FormErrorMessage>
      </Flex>
    </FormControl>
  );
};
