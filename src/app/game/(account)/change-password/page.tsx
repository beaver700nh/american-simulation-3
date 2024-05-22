import { auth } from "@/auth";

import ChangePasswordForm from "@/app/game/(account)/change-password/components/form";

export default async function ChangePassword() {
  const session = await auth();

  if (session == null || session.user == null || session.user.name == null) {
    return null;
  }

  return (
    <ChangePasswordForm settlementId={session.user.name} />
  )
}
