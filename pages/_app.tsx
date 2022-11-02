import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContextProvider from "../context/userProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <UserContextProvider>
      <Component {...pageProps} />
      </UserContextProvider>
  )
}
