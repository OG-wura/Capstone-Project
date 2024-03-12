import AuthProvider from "./providers/AuthProvider";
import DatabaseProvider from "./providers/DatabaseProvider";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <DatabaseProvider>{children}</DatabaseProvider>
    </AuthProvider>
  );
}
