import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import LoginForm from "@/app/login/form";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <LoginForm />
  )
}
