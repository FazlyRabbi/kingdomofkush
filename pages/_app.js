import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";
// 1. import `NextUIProvider` component
import { AuthProvider } from "@/context/AuthContext";
import { VolunteerProvider } from "@/context/VolunteerContext";

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
          <Component {...pageProps} />
          <ToastContainer />
        </VolunteerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
