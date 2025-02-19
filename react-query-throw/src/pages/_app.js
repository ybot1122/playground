import MyErrorBoundary from "@/MyErrorBoundary";
import "@/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyErrorBoundary>
        <Component {...pageProps} />
      </MyErrorBoundary>
    </QueryClientProvider>
  );
}
