import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AppointmentPage from "@/pages/appointment";
import GalleryPage from "@/pages/gallery";
import DoctorsPage from "@/pages/doctors";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Doctors */}
      <Route path="/doctors" component={DoctorsPage} />

      {/* Gallery */}
      <Route path="/gallery" component={GalleryPage} />

      {/* Appointment */}
      <Route path="/appointment" component={AppointmentPage} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
        >
          <Router />
        </WouterRouter>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;