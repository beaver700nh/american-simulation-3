import { redirect } from "next/navigation";
import Image from "next/image";

import { Box } from "@mui/material";

import { auth } from "@/auth";
import LoginForm from "@/app/login/components/form";

export default async function Login() {
  const session = await auth();

  if (session) {
    redirect("/game/home");
  }

  return (
    <Box
      className="grow relative"
    >
      <Image
        className="object-cover opacity-50 blur-sm"
        src="/assets/paper-version.jpg"
        alt=""
        fill
        priority
      />
      <LoginForm />
    </Box>
  );
}
