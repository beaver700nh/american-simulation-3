"use client";

import { FormEventHandler, useMemo } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { updateOwnPassword } from "@/lib/database";

type ChangePasswordFormProps = {
  settlementId: string;
};

export default function ChangePasswordForm({
  settlementId,
}: ChangePasswordFormProps) {
  const changePassword = useMemo<FormEventHandler<HTMLFormElement>>(() => (event) => {
    event.preventDefault();

    const password = new FormData(event.currentTarget).get("password") as string;
    updateOwnPassword({ plain: password });
  }, []);

  const resetPassword = useMemo<FormEventHandler<HTMLFormElement>>(() => (event) => {
    event.preventDefault();

    updateOwnPassword({ hash: null });
  }, []);

  return (
    <Box
      className="w-1/3 min-w-fit m-8 gap-4 flex flex-col"
    >
      <Typography
        className="gap-2"
        variant="h5"
      >
        Change Password
      </Typography>
      <form
        className="gap-2 flex flex-col"
        onSubmit={changePassword}
      >
        <TextField
          label="New Password"
          type="password"
          name="password"
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
      </form>
      <form
        className="gap-2 flex flex-col"
        onSubmit={resetPassword}
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
      </form>
    </Box>
  );
}
