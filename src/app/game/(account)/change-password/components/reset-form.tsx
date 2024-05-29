"use client";

import { useMemo } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Typography, useTheme } from "@mui/material";

import { ResetSchema, resetSchema } from "@/lib/schema";

import { updateOwnPassword } from "@/lib/database";
import { redirect } from "next/navigation";

export default function ChangePasswordResetForm() {
  const theme = useTheme();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetSchema>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = useMemo(() => async (_: ResetSchema) => {
    await updateOwnPassword({ hash: null });
  }, []);

  return (
    <form
      className="gap-2 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button
        variant="outlined"
        type="submit"
        disabled={isSubmitting}
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
