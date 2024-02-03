import styles from '../page.module.css';
import initTraslations from '../i18n';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import TranslationsProvider from '@/components/TranslationsProvider';
import LanguageChanger from '@/components/LanguageChanger';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTraslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <main className={styles.main}>
                <h1>{t('header')}</h1>
                <ExampleClientComponent />
                <LanguageChanger />
            </main>
        </TranslationsProvider>
    );
}