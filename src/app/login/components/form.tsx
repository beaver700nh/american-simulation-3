"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { UseFormReturn } from "react-hook-form";

import { Button, Icon, Typography, alpha, useTheme } from "@mui/material";

import { LoginSchema, loginSchema } from "@/lib/schema";
import { login } from "@/lib/auth-actions";

import ZodForm from "@/app/components/zod-form";
import SettlementSelect from "@/app/components/settlement-select";
import PasswordInput from "@/app/components/password-input";

// TODO:
// - declarative routing
// - strict mode

export default function LoginForm() {
  const theme = useTheme();
  const router = useRouter();

  const onSubmit = useMemo(() => (meta: UseFormReturn<LoginSchema>) => async (data: LoginSchema) => {
    const result = await login(data);
    if (!result.success) {
      meta.setError(result.error!.source as any, { message: result.error!.message });
    }

    router.refresh();
  }, [router]);

  return (
    <div
      className="absolute inset-0 flex p-2 overflow-auto"
    >
      <ZodForm
        schema={loginSchema}
        onSubmit={onSubmit}
        formProps={{
          style: {
            width: "calc(25lvw + 25lvh)",
            backgroundColor: alpha(theme.palette.background.default, 0.75),
            gridTemplateRows: "repeat(auto-fit, min-content)",
            gridTemplateColumns: "min-content 1fr",
          },
          className: "!min-w-min !m-auto p-8 gap-4 grid justify-items-start items-center border-2 rounded-lg shadow-2xl",
        }}
        errorProps={{
          sx: {
            gridColumn: "1 / span 2",
          },
          className: "w-full !-my-2",
        }}
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
        <SettlementSelect
          sx={{ gridColumn: "1 / span 2" }}
          className="!mt-4"
          label="Settlement"
          name="username"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <PasswordInput
          sx={{ gridColumn: "1 / span 2" }}
          name="password"
          fullWidth
        />
        <Button
          sx={{ gridColumn: "1 / span 2" }}
          className="!normal-case"
          variant="contained"
          type="submit"
          disableElevation
          fullWidth
        >
          Go!
        </Button>
      </ZodForm>
    </div>
  )
}
