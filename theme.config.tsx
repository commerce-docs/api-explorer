import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs';
import ExplorerLogo from './components/ExplorerLogo';

const config: DocsThemeConfig = {
  darkMode: false,
  project: { link: 'https://github.com/commerce-docs/explorer' },
  docsRepositoryBase: 'https://github.com/commerce-docs/explorer',
  logo: ExplorerLogo,
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Exploring Adobe Commerce Storefront APIs."
        />
        <meta
          name="og:description"
          content="Exploring Adobe Commerce Storefront APIs."
        />
        <meta
          name="og:title"
          content={title ? title + ' – Explorer' : 'Explorer'}
        />
        <meta name="apple-mobile-web-app-title" content="Explorer" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  banner: {
    key: 'commerce-explorer-banner',
    text: (
      <a
        href="https://github.com/commerce-docs/explorer"
        target="_blank"
        rel="noreferrer"
      >
        🎉 Adobe Commerce API Explorer — Alpha 0.0.1 🎉
      </a>
    ),
  },
  toc: {
    float: true,
  },
  logoLink: false,
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Questions? Give us feedback →',
    labels: 'feedback',
  },
  nextThemes: {
    defaultTheme: 'light',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Commerce Explorer Project.
        </p>
      </div>
    ),
  },
  i18n: [],
  search: {
    placeholder: 'Search documentation…',
  },
};

export default config;
