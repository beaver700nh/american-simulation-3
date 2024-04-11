import { redirect } from "next/navigation";

import { Button, Input } from "@mui/material";

export default function Home() {
  redirect("/login");

  return (
    <main className="flex flex-col items-center justify-center">
      <p>Hello, world!</p>
      <Input />
      <Button>Button!</Button>
    </main>
  );
}
