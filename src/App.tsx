import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const UmrahPage = lazy(() => import("./pages/UmrahPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CustomizePage = lazy(() => import("./pages/CustomizePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// const HandleRedirect = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const path = params.get("p");

//     if (path) {
//       navigate(path);
//     }
//   }, []);

//   return null;
// };

// Scroll to top on route change'
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/mapTravelsAndTours/">
        {/* <HandleRedirect /> */}
        {/* <HashRouter> */}
        <ScrollToTop />
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <div>Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="umrah" element={<UmrahPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="customize" element={<CustomizePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
            {/* </HashRouter> */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
