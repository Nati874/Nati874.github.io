import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { PageTransition } from "./components/PageTransition";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about">
          {() => {
            useEffect(() => {
              window.location.replace("/#about");
            }, []);
            return null;
          }}
        </Route>
        <Route path="/projects">
          {() => {
            useEffect(() => {
              window.location.replace("/#projects");
            }, []);
            return null;
          }}
        </Route>
        <Route path="/experience">
          {() => {
            useEffect(() => {
              window.location.replace("/#experience");
            }, []);
            return null;
          }}
        </Route>
        <Route path="/contact">
          {() => {
            useEffect(() => {
              window.location.replace("/#contact");
            }, []);
            return null;
          }}
        </Route>
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
