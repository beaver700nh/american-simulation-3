"use client";

import { useMemo } from "react";

import { UseFormReturn } from "react-hook-form";

import { Button, Typography } from "@mui/material";

import { ChangeSchema, changeSchema } from "@/lib/schema";

import { updateOwnPassword } from "@/lib/database";

import ZodForm from "@/app/components/zod-form";
import PasswordInput from "@/app/components/password-input";

export default function ChangePasswordChangeForm() {
  const onSubmit = useMemo(() => (meta: UseFormReturn<ChangeSchema>) => async (data: ChangeSchema) => {
    meta.setValue("newPassword", "");
    await updateOwnPassword({ plain: data.newPassword });
  }, []);

  return (
    <ZodForm
      schema={changeSchema}
      onSubmit={onSubmit}
      formProps={{
        className: "gap-2 flex flex-col",
      }}
      errorProps={{
        className: "w-full !-my-2"
      }}
    >
      <PasswordInput
        label="New Password"
        name="newPassword"
        fullWidth
      />
      <Button
        variant="contained"
        type="submit"
        disableElevation
        fullWidth
      >
        Change
      </Button>
      <Typography
        variant="caption"
      >
        You will be able to log in with the new password.
      </Typography>
    </ZodForm>
  );
}
