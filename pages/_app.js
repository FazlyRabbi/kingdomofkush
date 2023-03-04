import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
// 1. import `NextUIProvider` component
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
