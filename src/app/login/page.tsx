"use client";

import Image from "next/image";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Icon, MenuItem, TextField, Typography, alpha, useTheme } from "@mui/material";

import { LoginSchema, loginSchema } from "@/app/lib/schema";

export default function Login() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res == null) {
      setError("root", {
        message: "Failed to reach the server",
      });
    }
    else if (res.ok) {
      console.log("SUCCESS!");
    }
    else {
      setError(res.error === "Incorrect password" ? "password" : "root", {
        message: res.error ?? "An unknown error occurred",
      });
    }
  };

  return (
    <Box
      className="grow flex relative"
    >
      <Image
        className="object-cover -z-10 opacity-50 blur-sm"
        src="/assets/paper-version.jpg"
        alt=""
        fill
        priority
      />
      <form
        style={{
          width: "calc(25lvw + 25lvh)",
          backgroundColor: alpha(theme.palette.background.default, 0.75),
          gridTemplateRows: "repeat(auto-fit, min-content)",
          gridTemplateColumns: "min-content 1fr",
        }}
        className="!min-w-min max-w-full !m-auto p-8 gap-4 grid justify-items-start items-center border-2 rounded-lg shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Icon
          sx={{ gridColumn: "1" }}
          className="relative !text-[3rem]"
        >
          <Image
            className="object-contain"
            src="/logo.png"
            alt=""
            sizes="3rem"
            fill
          />
        </Icon>
        <Typography
          sx={{ gridColumn: "2" }}
          variant="h5"
        >
          Sign In
        </Typography>
        <TextField
          sx={{ gridColumn: "1 / span 2" }}
          className="w-full"
          label="Settlement"
          name="username"
          inputProps={register("username")}
          select
          value="1" // temp
          error={!!errors.username}
          helperText={errors.username?.message}
        >
          <MenuItem value="1">Test Item A</MenuItem>
          <MenuItem value="2">Test Item B</MenuItem>
          <MenuItem value="3">Test Item C</MenuItem>
          <MenuItem value="4">Test Item D</MenuItem>
        </TextField>
        <TextField
          sx={{ gridColumn: "1 / span 2" }}
          className="w-full"
          label="Password"
          type="password"
          name="password"
          inputProps={register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          sx={{ gridColumn: "1 / span 2" }}
          className="w-full !normal-case"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          disableElevation
        >
          Next
        </Button>
        {errors.root && <Typography
          sx={{ gridColumn: "1 / span 2", color: theme.palette.error.main }}
          className="w-full !-my-2"
          variant="caption"
        >
          {errors.root.message}
        </Typography>}
      </form>
    </Box>
  )
}
