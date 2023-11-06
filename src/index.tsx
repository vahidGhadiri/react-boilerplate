import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "@router";
import {
  ErrorBoundaryProvider,
  LanguageProvider,
  QueryProvider,
} from "@config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundaryProvider>
    <LanguageProvider>
      <QueryProvider>
        <Router>
          <App />
        </Router>
      </QueryProvider>
    </LanguageProvider>
  </ErrorBoundaryProvider>
);
