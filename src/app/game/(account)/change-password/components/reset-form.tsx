"use client";

import { useMemo } from "react";

import { UseFormReturn } from "react-hook-form";

import { Button, Typography } from "@mui/material";

import { ChangeSchema, ResetSchema, resetSchema } from "@/lib/schema";

import { updateOwnPassword } from "@/lib/database";

import ZodForm from "@/app/components/zod-form";

export default function ChangePasswordResetForm() {
  const onSubmit = useMemo(() => (_: UseFormReturn<ChangeSchema>) => async (_: ResetSchema) => {
    await updateOwnPassword({ hash: null });
  }, []);

  return (
    <ZodForm
      schema={resetSchema}
      onSubmit={onSubmit}
      formProps={{
        className: "gap-2 flex flex-col",
      }}
      errorProps={{
        className: "w-full !-my-2"
      }}
    >
      <Button
        variant="outlined"
        type="submit"
        disableElevation
        fullWidth
      >
        Reset
      </Button>
      <Typography
        variant="caption"
      >
        Anyone will be able to log in and set your password.<br />
        Your account data will be preserved.
      </Typography>
    </ZodForm>
  );
}
