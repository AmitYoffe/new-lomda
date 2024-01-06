import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import indexStyle from "~/index.css"

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
  ] :
    []),
  { rel: "stylesheet", href: indexStyle },
];

export default function App() {
  return (
    <html lang="he" dir="rtl" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ overflowY: 'hidden' }}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet />
          </ThemeProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CacheProvider>
      </body>
    </html>
  );
}
