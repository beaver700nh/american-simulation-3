"use client";

import { Typography } from "@mui/material";

import ChangeForm from "@/app/game/(account)/change-password/components/change-form";
import ResetForm from "@/app/game/(account)/change-password/components/reset-form";

// TODO:
// - maybe refactor to reduce duplication between 3 forms

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
