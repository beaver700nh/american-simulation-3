"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Icon, MenuItem, TextField, Typography, alpha, useTheme } from "@mui/material";

import { LoginSchema, loginSchema } from "@/lib/schema";
import { login } from "@/lib/auth-actions";

import SettlementList from "@/app/components/settlement-select";

// TODO:
// - declarative routing
// - strict mode

export default function LoginForm() {
  const theme = useTheme();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useMemo(() => async (data: LoginSchema) => {
    const result = await login(data);
    if (!result.success) {
      setError(result.error!.source as any, { message: result.error!.message });
    }

    router.refresh();
  }, [setError, router]);

  return (
    <div
      className="absolute inset-0 flex p-2 overflow-auto"
    >
      <form
        style={{
          width: "calc(25lvw + 25lvh)",
          backgroundColor: alpha(theme.palette.background.default, 0.75),
          gridTemplateRows: "repeat(auto-fit, min-content)",
          gridTemplateColumns: "min-content 1fr",
        }}
        className="!min-w-min !m-auto p-8 gap-4 grid justify-items-start items-center border-2 rounded-lg shadow-2xl"
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
            priority
          />
        </Icon>
        <Typography
          sx={{ gridColumn: "2" }}
          variant="h5"
        >
          Sign In
        </Typography>
        <SettlementList
          sx={{ gridColumn: "1 / span 2" }}
          className="!mt-4"
          label="Settlement"
          name="username"
          inputProps={register("username")}
          InputLabelProps={{ shrink: true }}
          fullWidth
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          sx={{ gridColumn: "1 / span 2" }}
          label="Password"
          type="password"
          name="password"
          inputProps={register("password")}
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          sx={{ gridColumn: "1 / span 2" }}
          className="!normal-case"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          disableElevation
          fullWidth
        >
          Go!
        </Button>
        {errors.root && <Typography
          sx={{ gridColumn: "1 / span 2", color: theme.palette.error.main }}
          className="w-full !-my-2"
          variant="caption"
        >
          {errors.root.message}
        </Typography>}
      </form>
    </div>
  )
}
