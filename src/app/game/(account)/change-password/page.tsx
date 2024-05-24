"use client";

import { FormEventHandler, useMemo } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { updateOwnPassword } from "@/lib/database";
import PasswordInput from "@/app/components/password-input";

// TODO:
// - put password length limit on password change too
// - make form clear on these actions below

export default function ChangePassword() {
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
        <PasswordInput
          label="New Password"
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
