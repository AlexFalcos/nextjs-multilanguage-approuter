import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";

export default async function initTraslations(
    locale,
    namespace,
    i18nInstace,
    resources
) {
    i18nInstace = i18nInstace || createInstance();
    i18nInstace.use(initReactI18next);

    if (!resources) {
        i18nInstace.use(
            resourcesToBackend(
                (language, namespace) =>
                    import(`@/locales/${language}/${namespace}.json`)
            )
        );
    }

    await i18nInstace.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        defaultNS: namespace[0],
        fallbackNS: namespace[0],
        ns: namespace,
        preload: resources ? [] : i18nConfig.locales
    });

    return {
        i18n: i18nInstace,
        resources: i18nInstace.services.resourceStore.data,
        t: i18nInstace.t,
    };
}