"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <div>Hello Dashboard</div>
      <div>
        <Button
          type="button"
          onClick={async () => {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.replace("/");
                },
              },
            });
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}
