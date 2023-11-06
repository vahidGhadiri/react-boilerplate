import ReactDOM from "react-dom/client";
import { QueryProvider } from "./config";
import LanguageProvider from "./config/providers/language";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LanguageProvider>
    <QueryProvider>
      <div>Render inital commit</div>
    </QueryProvider>
  </LanguageProvider>
);
