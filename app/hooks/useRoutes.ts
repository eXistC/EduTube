import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      label: 'Edu.Tube',
      href: '/home',
      active: pathname === '/home',
    },
    {
      label: 'Logout',
      href: '#',
      onClick: () => signOut(),
    },
  ], [pathname]);

  return routes;
}

export default useRoutes;