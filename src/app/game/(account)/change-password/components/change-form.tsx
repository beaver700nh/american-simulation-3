"use client";

import { useMemo } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Typography, useTheme } from "@mui/material";

import { ChangeSchema, changeSchema } from "@/lib/schema";

import { updateOwnPassword } from "@/lib/database";
import PasswordInput from "@/app/components/password-input";

export default function ChangePasswordChangeForm() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangeSchema>({
    resolver: zodResolver(changeSchema),
  });

  const onSubmit = useMemo(() => async (data: ChangeSchema) => {
    updateOwnPassword({ plain: data.newPassword });
  }, []);

  return (
    <form
      className="gap-2 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PasswordInput
        label="New Password"
        name="password"
        inputProps={register("newPassword")}
        fullWidth
        error={!!errors.newPassword}
        helperText={errors.newPassword?.message}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={isSubmitting}
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
