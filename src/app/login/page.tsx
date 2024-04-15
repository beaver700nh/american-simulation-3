"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Icon, MenuItem, TextField, Typography, alpha, useTheme } from "@mui/material";

import { LoginSchema, loginSchema } from "@/app/lib/schema";
import { login } from "@/app/lib/auth";

export default function Login() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    login(data);
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
          grid:
            '"icon title"    min-content' +
            '"user user"     min-content' +
            '"pass pass"     min-content' +
            '"submit submit" min-content' +
            '/ min-content 1fr',
        }}
        className="!min-w-min max-w-full !m-auto p-8 grid justify-items-start items-center gap-4 border-2 rounded-lg shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Icon
          sx={{ gridArea: "icon" }}
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
          sx={{ gridArea: "title" }}
          variant="h5"
        >
          Sign In
        </Typography>
        <TextField
          sx={{ gridArea: "user" }}
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
          sx={{ gridArea: "pass" }}
          className="w-full"
          label="Password"
          type="password"
          name="password"
          inputProps={register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          sx={{ gridArea: "submit" }}
          className="w-full !normal-case"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          disableElevation
        >
          Next
        </Button>
      </form>
    </Box>
  )
}
