import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      label: 'Logout',
      href: '#',
      onClick: () => signOut(),
    }
  ], [pathname]);

  return routes;
}

export default useRoutes;