"use client";

import { Children, ReactNode, cloneElement, isValidElement } from "react";

import { FieldErrors, FieldPath, UseFormReturn, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

import { Typography, useTheme } from "@mui/material";

type ZodFormProps<SchemaType extends ZodType> = {
  children: ReactNode;
  schema: SchemaType;
  onSubmit: (meta: UseFormReturn<SchemaType>) => (data: SchemaType) => Promise<void>;
  formProps?: React.HTMLProps<HTMLFormElement>;
};

export default function ZodForm<SchemaType extends ZodType>({
  children,
  schema,
  onSubmit,
  formProps,
}: ZodFormProps<SchemaType>) {
  const theme = useTheme();

  const formControls = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formControls;

  return (
    <form
      {...formProps}
      onSubmit={handleSubmit(onSubmit(formControls))}
    >
      {Children.map(children, child => {
        if (!isValidElement(child)) {
          return child;
        }

        const { props: { type, name } } = child;

        if (type === "submit") {
          return cloneElement(child, {
            ...child.props,
            disabled: isSubmitting,
          });
        }

        if (name != null) {
          type ErrorKey = keyof FieldErrors<SchemaType>;

          return cloneElement(child, {
            ...child.props,
            inputProps: register(name as FieldPath<SchemaType>),
            error: !!errors[name as ErrorKey],
            helperText: errors[name as ErrorKey]?.message,
          });
        }

        return child;
      })}
      {errors.root && <Typography
        sx={{
          color: theme.palette.error.main,
        }}
        className="w-full !-my-2"
        variant="caption"
      >
        {errors.root.message}
      </Typography>}
    </form>
  );
}
