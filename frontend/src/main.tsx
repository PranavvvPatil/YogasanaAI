import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartProvider from "./contexts/CartProvider.tsx";
import WishListProvider from "./contexts/WishListProvider.tsx";
import PreOrderProvider from "./contexts/PreOrderProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishListProvider>
          <PreOrderProvider>
            <App />
          </PreOrderProvider>
        </WishListProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
