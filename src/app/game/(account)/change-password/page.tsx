"use client";

import { Typography } from "@mui/material";

import ChangeForm from "./components/change-form";
import ResetForm from "./components/reset-form";

export default function ChangePassword() {
  return (
    <div
      className="w-1/3 min-w-fit m-8 gap-4 flex flex-col"
    >
      <Typography
        className="gap-2"
        variant="h5"
      >
        Change Password
      </Typography>
      <ChangeForm />
      <ResetForm />
    </div>
  );
}
