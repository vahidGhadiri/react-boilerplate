import ReactDOM from "react-dom/client";
import { QueryProvider } from "./config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryProvider>
    <div>Render inital commit</div>
  </QueryProvider>
);
