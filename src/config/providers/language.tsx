import type { FC, PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { Intl } from "../../constants";

import fa from "../../i18n/fa.json";

const LanguageProvider: FC<PropsWithChildren> = ({ children }) => (
  <IntlProvider messages={fa} locale={Intl.LOCALES.PERSIAN}>
    {children}
  </IntlProvider>
);

export default LanguageProvider;
