import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
// 1. import `NextUIProvider` component
import { AuthProvider } from "@/context/AuthContext";
import { VolunteerProvider } from "@/context/VolunteerContext";
import { ContactProvider } from "@/context/ContactContext";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <ThemeProvider>
      <AuthProvider>
        <VolunteerProvider>
          <ContactProvider>
            <Component {...pageProps} />
            
          </ContactProvider>
        </VolunteerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
