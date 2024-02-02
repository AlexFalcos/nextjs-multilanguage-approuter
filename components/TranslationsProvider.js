'use client';

import { I18nextProvider } from "react-i18next";
import initTraslations from "@/app/i18n";
import { createInstance } from "i18next";

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources,
}) {
    const i18n = createInstance();

    initTraslations(locale, namespaces, i18n, resources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}