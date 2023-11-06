import ReactDOM from "react-dom/client";
import {
  ErrorBoundaryProvider,
  QueryProvider,
  LanguageProvider,
} from "./config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundaryProvider>
    <LanguageProvider>
      <QueryProvider>
        <div>Render inital commit</div>
      </QueryProvider>
    </LanguageProvider>
  </ErrorBoundaryProvider>
);
