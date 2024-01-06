var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\user\Downloads\new-lomda-master (1)\new-lomda-master\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\user\\Downloads\\new-lomda-master (1)\\new-lomda-master\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/theme.ts
var import_styles = require("@mui/material/styles");

// app/fonts/heebo-v21-hebrew_latin-regular.woff2
var heebo_v21_hebrew_latin_regular_default = "/build/_assets/heebo-v21-hebrew_latin-regular-L6LSX7SV.woff2";

// app/theme.ts
var theme = (0, import_styles.createTheme)({
  direction: "rtl",
  palette: {
    mode: "dark",
    // primary: {
    //     main: '#'
    // },
    background: {
      // default: "#efefef",
      // default: "#f2f8ff",
      // paper: 'rgba(245, 247, 250, 0.5)',
    }
    // primary: {
    //     main: '#23272F'
    // },
  },
  typography: {
    fontFamily: [
      "heebo",
      "san-serif",
      "arial",
      "sans-serif"
      // 'Amatic SC', 'normal'
    ].join(",")
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontDisplay: "swap",
          fontFamily: "Heebo",
          fontStyle: "normal",
          fontWeight: 200,
          src: `url(${heebo_v21_hebrew_latin_regular_default}) format('woff2')`
        },
        // "@font-face": {
        //     fontDisplay: 'swap',
        //     fontFamily: 'Amatic SC',
        //     fontStyle: 'normal',
        //     fontWeight: 400,
        //     src: `url(${AmaticWoff2}) format('woff2')`
        // },
        ":root": {},
        body: {
          "& ::-webkit-scrollbar": {
            width: "20px"
          },
          "& ::-webkit-scrollbar-track": {
            backgroundColor: "transparent"
          },
          "& ::-webkit-scrollbar-thumb": {
            backgroundColor: "#d6dee1",
            borderRadius: "20px",
            border: "6px solid transparent",
            backgroundClip: "content-box"
          },
          "& ::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#a8bbbf"
          }
          // width: '100%', height: '100%'
        }
      }
    }
  }
});

// app/root.tsx
var import_material = require("@mui/material"), import_stylis_plugin_rtl = __toESM(require("stylis-plugin-rtl")), import_react3 = require("@emotion/react"), import_cache = __toESM(require("@emotion/cache")), import_stylis = require("stylis");

// app/index.css
var app_default = "/build/_assets/index-LAUCWZKO.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), cacheRtl = (0, import_cache.default)({
  key: "muirtl",
  stylisPlugins: [import_stylis.prefixer, import_stylis_plugin_rtl.default]
}), links = () => [
  ...import_css_bundle.cssBundleHref ? [
    { rel: "stylesheet", href: import_css_bundle.cssBundleHref }
  ] : [],
  { rel: "stylesheet", href: app_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "he", dir: "rtl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { overflowY: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.CacheProvider, { value: cacheRtl, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.ThemeProvider, { theme, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.CssBaseline, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/lessons.$topicId.$lessonId.tsx
var lessons_topicId_lessonId_exports = {};
__export(lessons_topicId_lessonId_exports, {
  default: () => QuestionList,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/LessonComponents/DataGrid.tsx
var import_ArrowBackIosNew = __toESM(require("@mui/icons-material/ArrowBackIosNew")), import_Close = __toESM(require("@mui/icons-material/Close")), import_DeleteOutlined = __toESM(require("@mui/icons-material/DeleteOutlined")), import_Edit = __toESM(require("@mui/icons-material/Edit")), import_Save = __toESM(require("@mui/icons-material/Save")), import_Box = __toESM(require("@mui/material/Box")), import_x_data_grid = require("@mui/x-data-grid"), import_react5 = require("@remix-run/react"), React = __toESM(require("react"));

// app/components/SideBar.tsx
var import_react4 = require("react"), import_material2 = require("@mui/material");

// public/images/orev-icon-portrait.png
var orev_icon_portrait_default = "/build/_assets/orev-icon-portrait-GVLD24GP.png";

// app/components/SideBar.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), sideBarItems = [
  {
    name: "\u05DC\u05DE\u05D9\u05D3\u05D4",
    href: "/learn",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        width: "46",
        height: "46",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z",
              fill: "#FFC800"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              opacity: "0.5",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z",
              fill: "#945151"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 29,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z",
              fill: "#945151"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L17.5368 3.2861L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L27.2286 15.9714L16.1602 7.99185L5.09208 15.9712L5.09121 15.9719C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L2.37679 12.2306L14.7839 3.28596L14.7846 3.28544C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z",
              fill: "#FF4B4B"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 40,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    )
  },
  {
    name: "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC",
    href: "/profile",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        width: "46",
        height: "46",
        viewBox: "0 0 46 46",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.1826 5.00195C14.3461 5.00195 7.18262 12.1654 7.18262 21.002V21.9375C4.21918 23.4102 2.18262 26.4682 2.18262 30.002C2.18262 34.9725 6.21206 39.002 11.1826 39.002H35.1826C40.1532 39.002 44.1826 34.9725 44.1826 30.002C44.1826 26.4682 42.1461 23.4102 39.1826 21.9375V21.002C39.1826 12.1654 32.0192 5.00195 23.1826 5.00195Z",
              fill: "#9069CD"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M11.1826 21.002C11.1826 14.3745 16.5552 9.00195 23.1826 9.00195C29.81 9.00195 35.1826 14.3745 35.1826 21.002V29.002C35.1826 35.6294 29.81 41.002 23.1826 41.002C16.5552 41.002 11.1826 35.6294 11.1826 29.002V21.002Z",
              fill: "#F3AD6D"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M7.18262 24.502C7.18262 22.0167 9.19734 20.002 11.6826 20.002H34.6826C37.1679 20.002 39.1826 22.0167 39.1826 24.502C39.1826 26.9872 37.1679 29.002 34.6826 29.002H11.6826C9.19734 29.002 7.18262 26.9872 7.18262 24.502Z",
              fill: "#F3AD6D"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M18.1826 20.502C18.1826 19.6735 18.8542 19.002 19.6826 19.002C20.511 19.002 21.1826 19.6735 21.1826 20.502V24.502C21.1826 25.3304 20.511 26.002 19.6826 26.002C18.8542 26.002 18.1826 25.3304 18.1826 24.502V20.502Z",
              fill: "#BF8034"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 71,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M24.1826 20.502C24.1826 19.6735 24.8542 19.002 25.6826 19.002C26.511 19.002 27.1826 19.6735 27.1826 20.502V24.502C27.1826 25.3304 26.511 26.002 25.6826 26.002C24.8542 26.002 24.1826 25.3304 24.1826 24.502V20.502Z",
              fill: "#BF8034"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 75,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M17.1826 29.0445C17.1826 28.4687 17.6494 28.002 18.2252 28.002H27.1401C27.7159 28.002 28.1826 28.4687 28.1826 29.0445V29.502C28.1826 32.5395 25.7202 35.002 22.6826 35.002C19.6451 35.002 17.1826 32.5395 17.1826 29.502V29.0445Z",
              fill: "white"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 79,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "path",
            {
              d: "M7.18262 21.0062V21.002C7.18262 12.1654 14.3461 5.00195 23.1826 5.00195C26.0199 5.00195 28.6847 5.74049 30.9953 7.0358C29.7326 15.5 22.2386 22.002 13.1826 22.002C11.0788 22.002 9.05929 21.6511 7.18262 21.0062Z",
              fill: "#9069CD"
            },
            void 0,
            !1,
            {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 83,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    )
  },
  {
    //TODO: if user role is admin ONLY!
    name: "\u05DE\u05E4\u05E2\u05DC \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD",
    href: "/lesson-factory",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        width: "44",
        height: "44",
        viewBox: "0 0 512 512",
        fill: "none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#792A18" }, d: "M478.242,71.455h-67.517l33.758,360.088h33.758c18.644,0,33.758-15.115,33.758-33.758V105.213 C512,86.57,496.885,71.455,478.242,71.455z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#95341D" }, d: "M210.989,70.33L256,464.176c18.645,0,33.758-15.114,33.758-33.758h154.725V70.33H210.989z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#AB5D4A" }, d: "M33.758,70.33C15.115,70.33,0,85.444,0,104.088v292.571c0,18.644,15.115,33.758,33.758,33.758 h188.484c0,18.645,15.114,33.758,33.758,33.758V70.33H33.758z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("polygon", { style: { fill: "#A99E9B" }, points: "421.978,340.396 433.231,396.659 478.242,396.659 478.242,362.901 " }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#C1B8B5" }, d: "M233.495,340.396L256,422.537v7.88c0-18.567,15.191-33.758,33.758-33.758h141.785v-56.264H233.495z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#D8D1D0" }, d: "M33.758,362.901v33.758h188.484c18.567,0,33.758,15.191,33.758,33.758V329.143L33.758,362.901z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("polygon", { style: { fill: "#E26142" }, points: "391.066,475.429 417.775,464.176 444.484,475.429 444.484,340.396 391.066,340.396 " }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("polygon", { style: { fill: "#C1B8B5" }, points: "433.231,36.571 399.473,199.736 433.231,362.901 478.242,362.901 478.242,36.571 " }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#D8D1D0" }, d: "M289.758,36.571C271.191,36.571,256,51.763,256,70.33l-33.758,163.165L256,388.782v7.877 c0-18.567,15.191-33.758,33.758-33.758h143.473V247.557l-22.506-71.734l22.506-71.735V36.571H289.758z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 109,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#F0EBEA" }, d: "M222.242,36.571H33.758v326.33h188.484c18.567,0,33.758,15.191,33.758,33.758V70.33 C256,51.763,240.809,36.571,222.242,36.571z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("rect", { x: "301.011", y: "104.088", style: { fill: "#FFFFFF" }, width: "132.22", height: "143.473" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#7F7774" }, d: "M210.989,303.824H78.769c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C219.429,300.047,215.651,303.824,210.989,303.824z" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#7F7774" }, d: "M210.989,256H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,256,210.989,256z" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#7F7774" }, d: "M210.989,208.176H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,208.176,210.989,208.176z" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#7F7774" }, d: "M210.989,160.352H78.769c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44S215.651,160.352,210.989,160.352z" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#7F7774" }, d: "M210.989,112.527H78.769c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C219.429,108.75,215.651,112.527,210.989,112.527z" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 112,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { style: { fill: "#554F4E" }, d: "M433.231,303.824h-132.22c-4.662,0-8.44-3.778-8.44-8.44c0-4.662,3.778-8.44,8.44-8.44h132.22 c4.662,0,8.44,3.778,8.44,8.44C441.67,300.047,437.893,303.824,433.231,303.824z" }, void 0, !1, {
            fileName: "app/components/SideBar.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 95,
        columnNumber: 7
      },
      this
    )
  }
  // maybe add in the future a settings page about page and so on
], LeftBarMoreMenuSvg = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { width: "46", height: "46", viewBox: "0 0 46 46", fill: "none", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "circle",
    {
      cx: "23",
      cy: "23",
      r: "19",
      fill: "#CE82FF",
      stroke: "#CE82FF",
      strokeWidth: "2"
    },
    void 0,
    !1,
    {
      fileName: "app/components/SideBar.tsx",
      lineNumber: 129,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "15", cy: "23", r: "2", fill: "white" }, void 0, !1, {
    fileName: "app/components/SideBar.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "23", cy: "23", r: "2", fill: "white" }, void 0, !1, {
    fileName: "app/components/SideBar.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "31", cy: "23", r: "2", fill: "white" }, void 0, !1, {
    fileName: "app/components/SideBar.tsx",
    lineNumber: 139,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SideBar.tsx",
  lineNumber: 128,
  columnNumber: 5
}, this), SideBar = ({ selectedTab }) => {
  let [moreMenuShown, setMoreMenuShown] = (0, import_react4.useState)(!1), [isDarkModeChecked, setisDarkModeChecked] = (0, import_react4.useState)(!1), handleChange = () => {
    setisDarkModeChecked((prevChecked) => !prevChecked);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { sx: {
    right: 0,
    top: 0,
    width: "230px",
    height: "100%",
    backgroundColor: "#f0dfbf",
    zIndex: 2
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { sx: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 1,
      height: "80px",
      borderBottom: "2px solid #e5e5e5"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { sx: {
        fontSize: "1.7rem",
        fontWeight: "900",
        color: "orange",
        wordWrap: "break-word",
        width: "120px",
        textAlign: "left",
        paddingLeft: 4
      }, children: "\u05DC\u05D5\u05DE\u05D3\u05EA \u05E2\u05D5\u05E8\u05D1" }, void 0, !1, {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Link, { href: "/", sx: { paddingLeft: 2, margin: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: orev_icon_portrait_default, alt: "orev logo", width: "78px", height: "78px" }, void 0, !1, {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SideBar.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { sx: { display: "flex", flexDirection: "column" }, children: [
      sideBarItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_material2.Link,
        {
          href: item.href,
          sx: {
            display: "flex",
            flexDirection: "row",
            paddingY: "0.25rem",
            gap: "1rem",
            alignItems: "center",
            border: "2px solid #e5e5e5",
            borderRadius: "0.75rem",
            fontSize: "0.875rem",
            textDecoration: "none",
            color: "#9CA3AF",
            "&:hover": { backgroundColor: "#F3F4e6" },
            ...selectedTab === item.name ? {
              borderColor: "#84d8ff",
              background: "#ddf4ff"
            } : {}
          },
          children: [
            item.icon,
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { children: item.name }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/SideBar.tsx",
          lineNumber: 179,
          columnNumber: 15
        },
        this
      ) }, item.href, !1, {
        fileName: "app/components/SideBar.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_material2.Box,
        {
          sx: {
            display: "flex",
            paddingY: "0.25rem",
            paddingX: "0.5rem",
            gap: "0.75rem",
            alignItems: "center",
            borderRadius: "0.75rem",
            color: "#9CA3AF",
            cursor: "default",
            "&:hover": { backgroundColor: "#F3F4e6" }
          },
          onMouseEnter: () => setMoreMenuShown(!0),
          onMouseLeave: () => setMoreMenuShown(!1),
          role: "button",
          tabIndex: 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LeftBarMoreMenuSvg, {}, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 219,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { sx: { fontSize: "1rem" }, children: "\u05DC\u05E2\u05D5\u05D3" }, void 0, !1, {
              fileName: "app/components/SideBar.tsx",
              lineNumber: 220,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_material2.Paper,
              {
                sx: {
                  position: "absolute",
                  top: 250,
                  left: 220,
                  minWidth: "270px",
                  borderRadius: "2xl",
                  display: moreMenuShown ? "block" : "none",
                  "&:hover": {
                    display: "block"
                  }
                },
                onMouseEnter: () => setMoreMenuShown(!0),
                onMouseLeave: () => setMoreMenuShown(!1),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { sx: {
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#D1D5DB"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_material2.Button,
                    {
                      sx: { paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "right", "&:hover": { backgroundColor: "#2e1d02" } },
                      children: "\u05E6\u05D5\u05E8 \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SideBar.tsx",
                      lineNumber: 239,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_material2.Button,
                    {
                      sx: { paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "right", "&:hover": { backgroundColor: "#2e1d02" } },
                      children: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SideBar.tsx",
                      lineNumber: 245,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_material2.Button,
                    {
                      sx: { paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "right", "&:hover": { backgroundColor: "#2e1d02" } },
                      children: "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SideBar.tsx",
                      lineNumber: 251,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_material2.Button,
                    {
                      sx: { paddingTop: "0.5rem", paddingBottom: "0.5rem", textAlign: "right", "&:hover": { backgroundColor: "#2e1d02" } },
                      children: "\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SideBar.tsx",
                      lineNumber: 257,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    import_material2.Box,
                    {
                      sx: {
                        marginTop: "auto",
                        paddingX: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { sx: { display: "flex", alignItems: "center" }, children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { sx: { fontSize: "1rem", fontWeight: "normal" }, children: "\u05DE\u05E6\u05D1" }, void 0, !1, {
                            fileName: "app/components/SideBar.tsx",
                            lineNumber: 274,
                            columnNumber: 21
                          }, this),
                          isDarkModeChecked ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { sx: { color: "#784c06", marginRight: 2, fontWeight: "medium" }, children: "\u05DC\u05D9\u05DC\u05D4" }, void 0, !1, {
                            fileName: "app/components/SideBar.tsx",
                            lineNumber: 276,
                            columnNumber: 23
                          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Typography, { sx: { color: "#ffb238", marginRight: 2, fontWeight: "medium" }, children: "\u05D9\u05D5\u05DD" }, void 0, !1, {
                            fileName: "app/components/SideBar.tsx",
                            lineNumber: 278,
                            columnNumber: 23
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/components/SideBar.tsx",
                          lineNumber: 273,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Switch, { defaultChecked: isDarkModeChecked, color: "warning", onChange: handleChange }, void 0, !1, {
                          fileName: "app/components/SideBar.tsx",
                          lineNumber: 281,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/SideBar.tsx",
                      lineNumber: 264,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/SideBar.tsx",
                  lineNumber: 236,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/SideBar.tsx",
                lineNumber: 221,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/SideBar.tsx",
          lineNumber: 208,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/SideBar.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SideBar.tsx",
    lineNumber: 155,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SideBar.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
};

// app/LessonComponents/DataGrid.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function FullFeaturedCrudGrid({ rows, setRows, editable, columnProps }) {
  let [rowModesModel, setRowModesModel] = React.useState({}), handleRowEditStop = (params, event) => {
    params.reason === import_x_data_grid.GridRowEditStopReasons.rowFocusOut && (event.defaultMuiPrevented = !0);
  }, handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: import_x_data_grid.GridRowModes.Edit } });
  }, handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: import_x_data_grid.GridRowModes.View } });
  }, handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  }, handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: import_x_data_grid.GridRowModes.View, ignoreModifications: !0 }
    }), rows.find((row) => row.id === id).isNew && setRows(rows.filter((row) => row.id !== id));
  }, processRowUpdate = (newRow) => {
    let updatedRow = { ...newRow, isNew: !1 };
    return setRows(rows.map((row) => row.id === newRow.id ? updatedRow : row)), updatedRow;
  }, handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  }, columns3 = [
    ...columnProps,
    {
      field: "actions",
      type: "actions",
      headerName: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        var _a;
        return ((_a = rowModesModel[id]) == null ? void 0 : _a.mode) === import_x_data_grid.GridRowModes.Edit ? [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_x_data_grid.GridActionsCellItem,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Save.default, {}, void 0, !1, {
                fileName: "app/LessonComponents/DataGrid.tsx",
                lineNumber: 91,
                columnNumber: 35
              }, this),
              label: "Save",
              sx: {
                color: "primary.main"
              },
              onClick: handleSaveClick(id)
            },
            "Save",
            !1,
            {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 89,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_x_data_grid.GridActionsCellItem,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Close.default, {}, void 0, !1, {
                fileName: "app/LessonComponents/DataGrid.tsx",
                lineNumber: 100,
                columnNumber: 35
              }, this),
              label: "Cancel",
              className: "textPrimary",
              onClick: handleCancelClick(id),
              color: "inherit"
            },
            "Cancel",
            !1,
            {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 98,
              columnNumber: 25
            },
            this
          )
        ] : editable ? [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_x_data_grid.GridActionsCellItem,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Edit.default, {}, void 0, !1, {
                fileName: "app/LessonComponents/DataGrid.tsx",
                lineNumber: 112,
                columnNumber: 31
              }, this),
              label: "Edit",
              className: "textPrimary",
              onClick: handleEditClick(id),
              color: "inherit"
            },
            "Edit",
            !1,
            {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 110,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_x_data_grid.GridActionsCellItem,
            {
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_DeleteOutlined.default, {}, void 0, !1, {
                fileName: "app/LessonComponents/DataGrid.tsx",
                lineNumber: 120,
                columnNumber: 31
              }, this),
              label: "Delete",
              onClick: handleDeleteClick(id),
              color: "inherit"
            },
            "Delete",
            !1,
            {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 118,
              columnNumber: 21
            },
            this
          )
        ] : [/* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_x_data_grid.GridActionsCellItem,
          {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_DeleteOutlined.default, {}, void 0, !1, {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 127,
              columnNumber: 27
            }, this),
            label: "Delete",
            onClick: handleDeleteClick(id),
            color: "inherit"
          },
          "Delete",
          !1,
          {
            fileName: "app/LessonComponents/DataGrid.tsx",
            lineNumber: 125,
            columnNumber: 22
          },
          this
        )];
      }
    },
    {
      field: "navigation",
      type: "actions",
      headerName: "",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_x_data_grid.GridActionsCellItem,
          {
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Box.default, { component: import_react5.Link, to: id.toString(), sx: { color: "inherit", textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_ArrowBackIosNew.default, {}, void 0, !1, {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 147,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/DataGrid.tsx",
              lineNumber: 146,
              columnNumber: 29
            }, this),
            label: "Edit",
            className: "textPrimary",
            color: "inherit"
          },
          "navigation",
          !1,
          {
            fileName: "app/LessonComponents/DataGrid.tsx",
            lineNumber: 143,
            columnNumber: 21
          },
          this
        )
      ]
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_Box.default,
    {
      sx: {
        display: "flex",
        width: "full",
        justifyContent: "center",
        alignItems: "center",
        paddingX: 4,
        paddingY: 16
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Box.default, { sx: {
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SideBar, { selectedTab: "\u05DE\u05E4\u05E2\u05DC \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD" }, void 0, !1, {
          fileName: "app/LessonComponents/DataGrid.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/LessonComponents/DataGrid.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Box.default, { sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "1920px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_x_data_grid.DataGrid,
          {
            rows,
            columns: columns3,
            editMode: "row",
            rowModesModel,
            onRowModesModelChange: handleRowModesModelChange,
            onRowEditStop: handleRowEditStop,
            processRowUpdate,
            slotProps: {
              toolbar: { setRows, setRowModesModel }
            }
          },
          void 0,
          !1,
          {
            fileName: "app/LessonComponents/DataGrid.tsx",
            lineNumber: 178,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/LessonComponents/DataGrid.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/LessonComponents/DataGrid.tsx",
      lineNumber: 160,
      columnNumber: 9
    },
    this
  );
}

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/question.server.ts
async function getQuestions() {
  return await prisma.question.findMany();
}
async function getQuestionsByLessonId(lessonId) {
  return await prisma.question.findMany({
    where: {
      lessonId
    }
  });
}

// app/routes/lessons.$topicId.$lessonId.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { lessonId } = params;
  return { questions: await getQuestionsByLessonId(Number(lessonId)) };
}
function QuestionList() {
  let { questions } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FullFeaturedCrudGrid, { editable: !0, rows: questions, setRows: (oldRows) => {
  }, columnProps: [
    { field: "text", headerName: "\u05E9\u05DD \u05E9\u05D0\u05DC\u05D4", width: 180, editable: !0 },
    { field: "updatedAt", headerName: "\u05E0\u05E2\u05E8\u05DA \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4", width: 180, editable: !1 }
  ] }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.$lessonId.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.$lessonId.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.$lessonId.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/lessons.$topicId.tsx
var lessons_topicId_exports = {};
__export(lessons_topicId_exports, {
  default: () => LessonsList,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react");

// app/utils/lesson.server.ts
async function getLessonsByTopicId(topicId) {
  return await prisma.lesson.findMany({
    include: {
      _count: {
        select: {
          Questions: !0
        }
      }
    }
  });
}
async function getLessons() {
  return await prisma.lesson.findMany();
}

// app/routes/lessons.$topicId.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader2({ params }) {
  let { topicId } = params;
  return { lessons: (await getLessonsByTopicId(Number(topicId))).map((lesson) => ({ ...lesson, _count: lesson._count.Questions })) };
}
function LessonsList() {
  let { lessons } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FullFeaturedCrudGrid, { editable: !0, rows: lessons, setRows: (oldRows) => {
  }, columnProps: [
    { field: "name", headerName: "\u05E9\u05DD \u05E9\u05D9\u05E2\u05D5\u05E8", width: 180, editable: !0 },
    { field: "updatedAt", headerName: "\u05E0\u05E2\u05E8\u05DA \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4", width: 180, editable: !1 },
    { field: "_count", headerName: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D0\u05DC\u05D5\u05EA", width: 180, editable: !1 }
  ] }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.$topicId.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/lesson-factory.tsx
var lesson_factory_exports = {};
__export(lesson_factory_exports, {
  default: () => BuildLesson,
  loader: () => loader3
});
var import_material7 = require("@mui/material"), import_Breadcrumbs = __toESM(require("@mui/material/Breadcrumbs")), import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/LessonComponents/HierarchyCreation/NewLesson.tsx
var import_material3 = require("@mui/material"), import_react8 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewTopic({ onButtonClick }) {
  let [isInputEmpty, setIsInputEmpty] = (0, import_react8.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Paper, { sx: {
    display: "flex",
    flexDirection: "column",
    padding: 2
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Box, { sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      gap: 1,
      alignItems: "baseline"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Typography, { variant: "h6", children: "\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D7\u05D3\u05E9:" }, void 0, !1, {
        fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_material3.TextField,
        {
          id: "outlined-basic",
          label: "\u05E9\u05DD \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8",
          variant: "outlined",
          size: "small",
          onChange: (event) => {
            setIsInputEmpty(event.target.value.trim() === "" && event.target.value.length === 0);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Typography, { sx: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Box, { sx: { marginLeft: "3px" }, children: [
        "\u05D0\u05E0\u05D0 \u05D5\u05D5\u05D3\u05D0\u05D5 \u05DB\u05D9 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D6\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DD",
        " "
      ] }, void 0, !0, {
        fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_material3.Link,
        {
          component: "button",
          onClick: () => onButtonClick("LessonList"),
          children: "\u05D1\u05E8\u05E9\u05D9\u05DE\u05D4"
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Box, { sx: {
      paddingTop: 2,
      display: "flex",
      justifyContent: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Button, { variant: "outlined", onClick: () => {
      onButtonClick("LessonList");
    }, disabled: isInputEmpty, fullWidth: !0, children: "\u05E6\u05D5\u05E8 \u05E9\u05D9\u05E2\u05D5\u05E8" }, void 0, !1, {
      fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LessonComponents/HierarchyCreation/NewLesson.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/LessonComponents/HierarchyCreation/NewTopic.tsx
var import_material4 = require("@mui/material"), import_react9 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NewTopic2({ onButtonClick }) {
  let [isInputEmpty, setIsInputEmpty] = (0, import_react9.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Paper, { sx: {
    display: "flex",
    flexDirection: "column",
    padding: 2
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Box, { sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      gap: 1,
      alignItems: "baseline"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Typography, { variant: "h6", children: "\u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E0\u05D5\u05E9\u05D0 \u05D7\u05D3\u05E9:" }, void 0, !1, {
        fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_material4.TextField,
        {
          id: "outlined-basic",
          label: "\u05E9\u05DD \u05D4\u05E0\u05D5\u05E9\u05D0",
          variant: "outlined",
          size: "small",
          onChange: (event) => {
            setIsInputEmpty(event.target.value.trim() === "" && event.target.value.length === 0);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
          lineNumber: 36,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Typography, { sx: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Box, { sx: { marginLeft: "3px" }, children: [
        "\u05D0\u05E0\u05D0 \u05D5\u05D5\u05D3\u05D0\u05D5 \u05DB\u05D9 \u05E0\u05D5\u05E9\u05D0 \u05D6\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DD",
        " "
      ] }, void 0, !0, {
        fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_material4.Link,
        {
          component: "button",
          onClick: () => onButtonClick("TopicList"),
          children: "\u05D1\u05E8\u05E9\u05D9\u05DE\u05D4"
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Box, { sx: {
      paddingTop: 2,
      display: "flex",
      justifyContent: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Button, { variant: "outlined", onClick: () => {
      onButtonClick("TopicList");
    }, disabled: isInputEmpty, fullWidth: !0, children: "\u05E6\u05D5\u05E8 \u05E0\u05D5\u05E9\u05D0" }, void 0, !1, {
      fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LessonComponents/HierarchyCreation/NewTopic.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/LessonComponents/Lists/LessonList.tsx
var import_CreateNewFolderOutlined = __toESM(require("@mui/icons-material/CreateNewFolderOutlined")), import_material5 = require("@mui/material"), import_Paper = __toESM(require("@mui/material/Paper")), import_Search = __toESM(require("@mui/icons-material/Search")), import_Table = __toESM(require("@mui/material/Table")), import_TableBody = __toESM(require("@mui/material/TableBody")), import_TableCell = __toESM(require("@mui/material/TableCell")), import_TableContainer = __toESM(require("@mui/material/TableContainer")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TablePagination = __toESM(require("@mui/material/TablePagination")), import_TableRow = __toESM(require("@mui/material/TableRow")), React2 = __toESM(require("react")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), columns = [
  {
    id: "name",
    label: "\u05E9\u05DD \u05E9\u05D9\u05E2\u05D5\u05E8",
    minWidth: 250,
    align: "center"
  },
  {
    id: "lastEditDate",
    label: "\u05E0\u05E2\u05E8\u05DA \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4",
    minWidth: 250,
    align: "center"
  },
  {
    id: "questionAmount",
    label: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D0\u05DC\u05D5\u05EA",
    minWidth: 250,
    align: "center",
    format: (value) => typeof value == "number" ? value.toLocaleString("he-IL") : String(value)
  }
];
function LessonList({ onButtonClick, dataRow, dataRowChildren, selectedTopic }) {
  let [page, setPage] = React2.useState(0), [rowsPerPage, setRowsPerPage] = React2.useState(10), [searchInput, setSearchInput] = React2.useState(""), handleChangePage = (event, newPage) => {
    setPage(newPage);
  }, handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value), setPage(0);
  };
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }
  let handleLessonRowClick = () => {
    onButtonClick("QuestionList");
  }, handleButtonClick = () => {
    onButtonClick("NewLesson");
  }, filteredRows = dataRow.filter((lesson) => selectedTopic && lesson.topicId === selectedTopic.id).map((lesson) => {
    let questionsInLesson = dataRowChildren.filter(
      (question) => question.lessonId === lesson.id
    );
    return {
      ...lesson,
      questionAmount: questionsInLesson.length
    };
  }).filter((row) => row.name.toLowerCase().includes(searchInput.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Box, { sx: { display: "flex", flexDirection: "column", gap: 1, height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Box, { sx: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Paper.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_material5.TextField,
        {
          sx: {
            padding: "0.1em",
            borderRadius: "3px",
            "& input": {
              width: "14ch",
              transition: "width 0.2s ease-in-out",
              "&:focus": {
                width: "20ch"
              }
            }
          },
          size: "small",
          value: searchInput,
          onChange: handleSearchInputChange,
          placeholder: "\u05D7\u05E4\u05E9",
          InputProps: {
            startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.InputAdornment, { position: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Search.default, {}, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this)
          }
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/LessonList.tsx",
          lineNumber: 102,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/LessonComponents/Lists/LessonList.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Paper.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Button, { variant: "outlined", color: "warning", onClick: handleButtonClick, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_CreateNewFolderOutlined.default, {}, void 0, !1, {
          fileName: "app/LessonComponents/Lists/LessonList.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        " \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D7\u05D3\u05E9"
      ] }, void 0, !0, {
        fileName: "app/LessonComponents/Lists/LessonList.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/LessonComponents/Lists/LessonList.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/Lists/LessonList.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Paper.default, { elevation: 8, sx: { width: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_TableContainer.default,
        {
          sx: {
            maxHeight: 440,
            "&::-webkit-scrollbar": {
              width: "6px"
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#b5ac9a",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b89e6a"
            },
            overflowX: "hidden"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Table.default, { stickyHeader: !0, "aria-label": "sticky table", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableHead.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableRow.default, { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              import_TableCell.default,
              {
                align: column.align,
                style: { minWidth: column.minWidth, backgroundColor: "rgba(248, 206, 172)" },
                children: column.label
              },
              column.id,
              !1,
              {
                fileName: "app/LessonComponents/Lists/LessonList.tsx",
                lineNumber: 153,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 150,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableBody.default, { children: filteredRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableRow.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableCell.default, { colSpan: columns.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Box, { sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Typography, { variant: "h6", children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05DC\u05E2\u05E8\u05DA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9" }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 173,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this) : filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Grow, { timeout: (index + 1) * 100, in: !0, style: { transformOrigin: "0 0 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableRow.default, { hover: !0, role: "checkbox", tabIndex: -1, onClick: handleLessonRowClick, children: columns.map((column) => {
              let value = row[column.id];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_TableCell.default, { align: column.align, children: column.format && typeof value == "number" ? column.format(value) : String(value) }, column.id, !1, {
                fileName: "app/LessonComponents/Lists/LessonList.tsx",
                lineNumber: 188,
                columnNumber: 29
              }, this);
            }) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 184,
              columnNumber: 23
            }, this) }, row.name, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/LessonList.tsx",
              lineNumber: 163,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/LessonComponents/Lists/LessonList.tsx",
            lineNumber: 149,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/LessonList.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_TablePagination.default,
        {
          rowsPerPageOptions: [10, 25, 100],
          component: "div",
          count: dataRow.length,
          rowsPerPage,
          page,
          onPageChange: handleChangePage,
          onRowsPerPageChange: handleChangeRowsPerPage
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/LessonList.tsx",
          lineNumber: 201,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/Lists/LessonList.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LessonComponents/Lists/LessonList.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/LessonComponents/Lists/TopicList.tsx
var import_CreateNewFolderOutlined2 = __toESM(require("@mui/icons-material/CreateNewFolderOutlined")), import_Search2 = __toESM(require("@mui/icons-material/Search")), import_material6 = require("@mui/material"), import_Paper2 = __toESM(require("@mui/material/Paper")), import_Table2 = __toESM(require("@mui/material/Table")), import_TableCell2 = __toESM(require("@mui/material/TableCell")), import_TableContainer2 = __toESM(require("@mui/material/TableContainer")), import_TableHead2 = __toESM(require("@mui/material/TableHead")), import_TablePagination2 = __toESM(require("@mui/material/TablePagination")), import_TableRow2 = __toESM(require("@mui/material/TableRow")), React3 = __toESM(require("react")), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), columns2 = [
  {
    id: "name",
    label: "\u05E9\u05DD \u05E0\u05D5\u05E9\u05D0",
    minWidth: 250,
    align: "center"
  },
  {
    id: "lastEditDate",
    label: "\u05E0\u05E2\u05E8\u05DA \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4",
    minWidth: 250,
    align: "center"
  },
  {
    id: "lessonAmount",
    label: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD",
    minWidth: 250,
    align: "center",
    format: (value) => typeof value == "number" ? value.toLocaleString("he-IL") : String(value)
  }
];
function TopicList({ onButtonClick, dataRow, dataRowChildren }) {
  let [page, setPage] = React3.useState(0), [rowsPerPage, setRowsPerPage] = React3.useState(10), [searchInput, setSearchInput] = React3.useState(""), handleChangePage = (event, newPage) => {
    setPage(newPage);
  }, handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value), setPage(0);
  };
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }
  let handleTopicRowClick = (selectedTopic) => {
    onButtonClick("LessonList", selectedTopic), console.log("selectedTopic in TopicList.tsx:", selectedTopic);
  }, handleButtonClick = () => {
    onButtonClick("NewTopic");
  }, filteredRows = dataRow.map((topic) => {
    let lessonsInTopic = dataRowChildren.filter((lesson) => lesson.topicId === topic.id);
    return {
      ...topic,
      lessonAmount: lessonsInTopic.length
    };
  }).filter(
    (row) => row.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Box, { sx: { display: "flex", flexDirection: "column", gap: 1, hegith: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Box, { sx: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Paper2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_material6.TextField,
        {
          sx: {
            padding: "0.1em",
            borderRadius: "3px",
            "& input": {
              width: "14ch",
              transition: "width 0.2s ease-in-out",
              "&:focus": {
                width: "20ch"
              }
            }
          },
          size: "small",
          value: searchInput,
          onChange: handleSearchInputChange,
          placeholder: "\u05D7\u05E4\u05E9",
          InputProps: {
            startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.InputAdornment, { position: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Search2.default, {}, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 114,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 113,
              columnNumber: 17
            }, this)
          }
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/TopicList.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/LessonComponents/Lists/TopicList.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Paper2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Button, { variant: "outlined", color: "warning", onClick: handleButtonClick, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_CreateNewFolderOutlined2.default, {}, void 0, !1, {
          fileName: "app/LessonComponents/Lists/TopicList.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        " \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E0\u05D5\u05E9\u05D0 \u05D7\u05D3\u05E9"
      ] }, void 0, !0, {
        fileName: "app/LessonComponents/Lists/TopicList.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/LessonComponents/Lists/TopicList.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/Lists/TopicList.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Paper2.default, { elevation: 8, sx: { width: "100%", overflow: "hidden" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_TableContainer2.default,
        {
          sx: {
            maxHeight: 440,
            "&::-webkit-scrollbar": {
              width: "6px"
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#b5ac9a",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b89e6a"
            },
            overflowX: "hidden"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_Table2.default, { stickyHeader: !0, "aria-label": "sticky table", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableHead2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableRow2.default, { children: columns2.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_TableCell2.default,
              {
                align: column.align,
                style: { minWidth: column.minWidth, backgroundColor: "rgba(248, 206, 172)" },
                children: column.label
              },
              column.id,
              !1,
              {
                fileName: "app/LessonComponents/Lists/TopicList.tsx",
                lineNumber: 146,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 143,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.TableBody, { children: filteredRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableRow2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableCell2.default, { colSpan: columns2.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Box, { sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Typography, { variant: "h6", children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05DC\u05E2\u05E8\u05DA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9" }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 166,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 160,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this) : filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Grow, { timeout: (index + 1) * 100, in: !0, style: { transformOrigin: "0 0 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableRow2.default, { hover: !0, role: "checkbox", tabIndex: -1, onClick: () => handleTopicRowClick(row), children: columns2.map((column) => {
              let value = row[column.id];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_TableCell2.default, { align: column.align, children: column.format && typeof value == "number" ? column.format(value) : String(value) }, column.id, !1, {
                fileName: "app/LessonComponents/Lists/TopicList.tsx",
                lineNumber: 182,
                columnNumber: 29
              }, this);
            }) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 177,
              columnNumber: 23
            }, this) }, row.name, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 176,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/LessonComponents/Lists/TopicList.tsx",
              lineNumber: 156,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/LessonComponents/Lists/TopicList.tsx",
            lineNumber: 142,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/TopicList.tsx",
          lineNumber: 127,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_TablePagination2.default,
        {
          rowsPerPageOptions: [10, 25, 100],
          component: "div",
          count: dataRow.length,
          rowsPerPage,
          page,
          onPageChange: handleChangePage,
          onRowsPerPageChange: handleChangeRowsPerPage
        },
        void 0,
        !1,
        {
          fileName: "app/LessonComponents/Lists/TopicList.tsx",
          lineNumber: 196,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/LessonComponents/Lists/TopicList.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LessonComponents/Lists/TopicList.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/utils/topic.server.ts
async function getTopics() {
  return await prisma.topic.findMany({
    include: {
      _count: {
        select: {
          Lessons: !0
        }
      }
    }
  });
}

// app/routes/lesson-factory.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  let topics = await getTopics(), lessons = await getLessons(), questions = await getQuestions();
  return { topics, lessons, questions };
}
var breadcrumbHierarchy = [
  {
    label: "\u05E0\u05D5\u05E9\u05D0",
    componentName: "TopicList",
    children: [
      { label: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E0\u05D5\u05E9\u05D0", componentName: "NewTopic" },
      {
        label: "\u05E9\u05D9\u05E2\u05D5\u05E8",
        componentName: "LessonList",
        children: [
          { label: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8", componentName: "NewLesson" },
          {
            label: "\u05E9\u05D0\u05DC\u05D4",
            componentName: "QuestionList",
            children: [{ label: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E9\u05D0\u05DC\u05D4", componentName: "NewQuestion" }]
          }
        ]
      }
    ]
  }
], populateParentProperty = (breadcrumbs) => {
  for (let breadcrumb of breadcrumbs)
    if (breadcrumb.children) {
      for (let child of breadcrumb.children)
        child.parent = breadcrumb;
      populateParentProperty(breadcrumb.children);
    }
};
populateParentProperty(breadcrumbHierarchy);
var BreadCrumbsComponent = ({
  selectedComponent,
  onBreadcrumbClick
}) => {
  let findBreadcrumb = (breadcrumbs, componentName) => {
    for (let breadcrumb of breadcrumbs) {
      if (breadcrumb.componentName === componentName)
        return breadcrumb;
      if (breadcrumb.children) {
        let foundChild = findBreadcrumb(breadcrumb.children, componentName);
        if (foundChild)
          return foundChild;
      }
    }
  }, getVisibleBreadcrumbs = () => {
    let selectedBreadcrumb = findBreadcrumb(breadcrumbHierarchy, selectedComponent);
    return selectedBreadcrumb ? [...getAncestors(selectedBreadcrumb), selectedBreadcrumb] : [];
  }, getAncestors = (breadcrumb) => {
    let ancestors = [], currentBreadcrumb = breadcrumb;
    for (; currentBreadcrumb.parent; )
      ancestors.unshift(currentBreadcrumb.parent), currentBreadcrumb = currentBreadcrumb.parent;
    return ancestors;
  }, handleBreadcrumbClick = (breadcrumb) => {
    onBreadcrumbClick(breadcrumb.componentName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Breadcrumbs.default, { separator: "\u203A", "aria-label": "breadcrumb", sx: { color: "white", cursor: "pointer" }, children: getVisibleBreadcrumbs().map((breadcrumb, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_material7.Link,
    {
      underline: "hover",
      color: "#ffa111",
      onClick: () => handleBreadcrumbClick(breadcrumb),
      children: breadcrumb.label
    },
    index,
    !1,
    {
      fileName: "app/routes/lesson-factory.tsx",
      lineNumber: 138,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/lesson-factory.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
};
function BuildLesson() {
  let { topics, lessons, questions } = (0, import_react10.useLoaderData)(), [selectedComponent, setSelectedComponent] = (0, import_react11.useState)("TopicList"), [selectedTopic, setSelectedTopic] = (0, import_react11.useState)(void 0), handleComponentChange = (componentName, selectedTopic2) => {
    console.log("Selected Topic:", selectedTopic2), setSelectedTopic(selectedTopic2), setSelectedComponent(componentName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_material7.Box,
    {
      sx: {
        display: "flex",
        width: "full",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#235390",
        paddingX: 4,
        paddingY: 16
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Box, { sx: {
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SideBar, { selectedTab: "\u05DE\u05E4\u05E2\u05DC \u05D4\u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD" }, void 0, !1, {
          fileName: "app/routes/lesson-factory.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/lesson-factory.tsx",
          lineNumber: 178,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Box, { sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "1920px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Box, { sx: {
            position: "fixed",
            top: 3,
            left: 238
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            BreadCrumbsComponent,
            {
              onBreadcrumbClick: (componentName) => {
                setSelectedComponent(componentName);
              },
              selectedComponent
            },
            void 0,
            !1,
            {
              fileName: "app/routes/lesson-factory.tsx",
              lineNumber: 191,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/lesson-factory.tsx",
            lineNumber: 186,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Box, { sx: { width: "100%", overflow: "hidden", alignItems: "center", height: "100%" }, children: [
            selectedComponent === "TopicList" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              TopicList,
              {
                onButtonClick: handleComponentChange,
                dataRow: topics,
                dataRowChildren: lessons
              },
              void 0,
              !1,
              {
                fileName: "app/routes/lesson-factory.tsx",
                lineNumber: 198,
                columnNumber: 15
              },
              this
            ),
            selectedComponent === "NewTopic" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewTopic2, { onButtonClick: handleComponentChange }, void 0, !1, {
              fileName: "app/routes/lesson-factory.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this),
            selectedComponent === "LessonList" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              LessonList,
              {
                onButtonClick: handleComponentChange,
                dataRow: lessons,
                dataRowChildren: questions,
                selectedTopic
              },
              void 0,
              !1,
              {
                fileName: "app/routes/lesson-factory.tsx",
                lineNumber: 208,
                columnNumber: 15
              },
              this
            ),
            selectedComponent === "NewLesson" && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewTopic, { onButtonClick: handleComponentChange }, void 0, !1, {
              fileName: "app/routes/lesson-factory.tsx",
              lineNumber: 216,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/lesson-factory.tsx",
            lineNumber: 196,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/lesson-factory.tsx",
          lineNumber: 183,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/lesson-factory.tsx",
      lineNumber: 167,
      columnNumber: 7
    },
    this
  );
}

// app/routes/lessons.tsx
var lessons_exports = {};
__export(lessons_exports, {
  default: () => TopicList2,
  loader: () => loader4
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader4() {
  return { topics: (await getTopics()).map((topic) => ({ ...topic, _count: topic._count.Lessons })) };
}
function TopicList2() {
  let { topics } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FullFeaturedCrudGrid, { editable: !0, rows: topics, setRows: (oldRows) => {
  }, columnProps: [
    { field: "name", headerName: "\u05E9\u05DD \u05E0\u05D5\u05E9\u05D0", width: 180, editable: !0 },
    { field: "updatedAt", headerName: "\u05E0\u05E2\u05E8\u05DA \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4", width: 180, editable: !1 },
    { field: "_count", headerName: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D9\u05E2\u05D5\u05E8\u05D9\u05DD", width: 180, editable: !1 }
  ] }, void 0, !1, {
    fileName: "app/routes/lessons.tsx",
    lineNumber: 25,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/lessons.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_material8 = require("@mui/material"), import_react_tsparticles = __toESM(require("react-tsparticles"));

// app/components/UserGreetings.tsx
function UserGreetings({ firstname, lastname }) {
  let currentHour = (/* @__PURE__ */ new Date()).getHours();
  return currentHour >= 5 && currentHour < 12 ? `\u05D1\u05D5\u05E7\u05E8 \u05D8\u05D5\u05D1, ${firstname} ${lastname}` : currentHour >= 12 && currentHour < 17 ? `\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D9\u05DD, ${firstname} ${lastname}` : currentHour >= 17 && currentHour < 22 ? `\u05E2\u05E8\u05D1 \u05D8\u05D5\u05D1, ${firstname} ${lastname}` : `\u05DC\u05D9\u05DC\u05D4 \u05D8\u05D5\u05D1, ${firstname} ${lastname}`;
}
var UserGreetings_default = UserGreetings;

// app/routes/index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Box, { sx: {
    gap: 1
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Box, { sx: { position: "absolute", top: "18px", left: "18px", color: "white" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(UserGreetings_default, { firstname: "\u05D7\u05D9\u05D9\u05DE\u05D5\u05DF", lastname: "\u05D7\u05D9\u05D9\u05DE\u05E7\u05D4" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_tsparticles.default, { id: "tsparticles" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Box, { sx: { display: "flex", justify: "center", color: "white" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Typography, { sx: { color: "white" }, children: " I DID IT!!!!!!!!!!!!!!!!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Typography, { sx: { color: "white" }, children: " I DID IT!!!!!!!!!!!!!!!!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Button, { children: " ahhhhh " }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Typography, { sx: { color: "white" }, children: " I DID IT!!!!!!!!!!!!!!!!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Typography, { sx: { color: "white" }, children: " I DID IT!!!!!!!!!!!!!!!!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/learn.tsx
var learn_exports = {};
__export(learn_exports, {
  default: () => Learn
});
var import_react13 = require("react");

// app/components/Svgs.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
var CheckmarkSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_7030_116512)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.5239 18.112L14.4053 13.9934C13.1459 12.734 11.104 12.734 9.84455 13.9934C8.58514 15.2528 8.58514 17.2947 9.84455 18.5541L16.1331 24.8427C16.7889 25.4985 17.6569 25.8128 18.5161 25.7856C19.3802 25.817 20.2545 25.5028 20.9142 24.8432L32.2521 13.5053C33.5115 12.2459 33.5115 10.204 32.2521 8.94456C30.9927 7.68515 28.9508 7.68515 27.6914 8.94456L18.5239 18.112Z",
      fill: "#CD7900"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 249,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 248,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_7030_116512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "rect",
    {
      width: "24.2966",
      height: "17.7878",
      fill: "white",
      transform: "translate(8.89999 8)"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 258,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 257,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 256,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 247,
  columnNumber: 5
}, this);
var StarSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_7030_116432)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M18.7521 4.41157C19.6598 2.52948 22.3402 2.52948 23.2479 4.41157L25.8539 9.81517C26.225 10.5847 26.9639 11.1109 27.8125 11.2099L33.7906 11.9076C35.9269 12.1569 36.7684 14.8114 35.1658 16.2459L30.8845 20.0785C30.224 20.6697 29.9267 21.567 30.1035 22.4357L31.2468 28.053C31.6684 30.124 29.4857 31.7487 27.6228 30.7506L22.1786 27.8339C21.4424 27.4395 20.5576 27.4395 19.8214 27.8339L14.3772 30.7506C12.5143 31.7487 10.3316 30.124 10.7532 28.053L11.8965 22.4357C12.0733 21.567 11.776 20.6697 11.1155 20.0785L6.83415 16.2459C5.23162 14.8114 6.07307 12.1569 8.20939 11.9076L14.1875 11.2099C15.0361 11.1109 15.775 10.5847 16.1461 9.81517L18.7521 4.41157Z",
      fill: "white"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 289,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 288,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_7030_116432", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "rect",
    {
      width: "30",
      height: "28",
      fill: "white",
      transform: "translate(6 3)"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 296,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 295,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 294,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 287,
  columnNumber: 5
}, this), LockedBookSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M42 8.49236C42 6.4901 40.3329 4.86694 38.2765 4.86694H29.9359C24.4521 4.86694 20.0066 9.19536 20.0066 14.5347V31.8401C20.0066 32.5075 20.5686 33.0638 21.2481 32.9753C25.129 32.4696 23.7034 29.5177 30.4323 29.5177C32.3039 29.5177 36.1106 29.5177 38.2776 29.5177C40.3341 29.5177 42 27.8945 42 25.8923V8.49236Z",
      fill: "#AFAFAF"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 311,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M0 8.49237C0 6.4901 1.66706 4.86694 3.72348 4.86694H12.0641C17.5479 4.86694 21.9934 9.19536 21.9934 14.5347V31.8401C21.9934 32.5075 21.4313 33.0594 20.749 32.9948C15.97 32.5427 18.3992 29.3905 11.5676 29.3905C9.69604 29.3905 5.88932 29.3905 3.72233 29.3905C1.66591 29.3905 0 27.7673 0 25.765V8.49237Z",
      fill: "#AFAFAF"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 315,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M36.8864 3.90058C36.8864 2.29877 35.5527 1.00024 33.9076 1.00024H27.95C23.563 1.00024 20.0066 4.46298 20.0066 8.73448V26.1365C20.0066 26.6704 20.4591 27.1221 20.9949 27.0082C23.3482 26.5078 23.1355 24.2029 28.4465 24.2029C29.9718 24.2029 32.1481 24.2029 33.9087 24.2029C35.5538 24.2029 36.8864 22.9044 36.8864 21.3026V3.90058Z",
      fill: "#D8D8D8"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 319,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M5.11316 3.90058C5.11316 2.29877 6.44681 1.00024 8.09194 1.00024H14.0495C18.4366 1.00024 21.9929 4.46298 21.9929 8.73448V26.1365C21.9929 26.6704 21.5445 27.1184 21.0036 27.0307C18.236 26.5817 18.9484 24.2029 13.5531 24.2029C12.0277 24.2029 9.85141 24.2029 8.09083 24.2029C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90058Z",
      fill: "#D8D8D8"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 323,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      opacity: "0.4",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5113 3.11898C20.0999 3.66189 20.6032 4.29157 20.9995 4.987C21.3964 4.29065 21.9005 3.66022 22.4901 3.11682V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V3.11898Z",
      fill: "#AFAFAF"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 327,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 310,
  columnNumber: 5
}, this), ActiveBookSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5113 8.14018C17.6919 6.13294 15.0298 4.86694 12.0641 4.86694H3.72348C1.66706 4.86694 0 6.4901 0 8.49237V25.765C0 27.7673 1.66591 29.3905 3.72233 29.3905H11.5676C15.368 29.3905 16.3025 30.366 17.2063 31.3095C17.9272 32.062 18.6285 32.7942 20.749 32.9948C20.853 33.0046 20.9541 33.0002 21.0509 32.9832C21.1152 32.9865 21.1811 32.984 21.2481 32.9753C22.8488 32.7667 23.5467 32.142 24.2865 31.4799C25.3402 30.5367 26.4787 29.5177 30.4323 29.5177H38.2776C40.3341 29.5177 42 27.8945 42 25.8923V8.49236C42 6.4901 40.3329 4.86694 38.2765 4.86694H29.9359C26.9709 4.86694 24.3095 6.13229 22.4901 8.13863V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V8.14018Z",
      fill: "black",
      fillOpacity: "0.2"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 341,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.11316 3.90058C5.11316 2.29877 6.44681 1.00024 8.09194 1.00024H14.0495C17.04 1.00024 19.6446 2.60928 20.9997 4.9867C20.9997 4.9868 20.9996 4.9869 20.9995 4.987C20.6032 4.29157 20.0999 3.66189 19.5113 3.11898V26.4549C19.2475 26.2781 19.0148 26.0781 18.7751 25.8721C17.8556 25.0819 16.8328 24.2029 13.5531 24.2029H8.09083C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90058ZM21.5861 26.9072C21.6541 26.8626 21.7157 26.8081 21.7691 26.7458C22.2102 26.5336 22.5617 26.247 22.9349 25.9427C23.9252 25.1353 25.0687 24.2029 28.4465 24.2029H33.9087C35.5538 24.2029 36.8864 22.9044 36.8864 21.3026V3.90058C36.8864 2.29877 35.5527 1.00024 33.9076 1.00024H27.95C25.8352 1.00024 23.9135 1.80489 22.4901 3.1169V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.7156 26.8081 21.6541 26.8626 21.5861 26.9072Z",
      fill: "white"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 348,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      opacity: "0.4",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5113 3.11898C20.0999 3.66189 20.6032 4.29157 20.9995 4.987C21.3964 4.29065 21.9005 3.66022 22.4901 3.11682V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9583 21.3098 27.0806 21.0034 27.0308C20.9797 27.027 20.9563 27.023 20.9332 27.0189C20.7276 27.0465 20.5368 26.9915 20.3824 26.8822C20.0419 26.7707 19.7625 26.6235 19.5113 26.4552V3.11898Z",
      fill: "white"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 354,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 340,
  columnNumber: 5
}, this), GoldenBookSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M42 8.49241C42 6.49014 40.3329 4.86699 38.2765 4.86699H29.9359C24.4521 4.86699 20.0066 9.19541 20.0066 14.5348V31.8401C20.0066 32.5075 20.5687 33.0638 21.2481 32.9753C25.1291 32.4696 23.7034 29.5177 30.4324 29.5177C32.304 29.5177 36.1107 29.5177 38.2777 29.5177C40.3341 29.5177 42 27.8946 42 25.8923V8.49241Z",
      fill: "#CD7900"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 368,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M0 8.49241C0 6.49015 1.66706 4.86699 3.72348 4.86699H12.0641C17.5479 4.86699 21.9934 9.19541 21.9934 14.5348V31.8401C21.9934 32.5075 21.4313 33.0594 20.749 32.9949C15.97 32.5427 18.3992 29.3905 11.5676 29.3905C9.69604 29.3905 5.88932 29.3905 3.72233 29.3905C1.66591 29.3905 0 27.7674 0 25.7651V8.49241Z",
      fill: "#CD7900"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 372,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M36.8864 3.90056C36.8864 2.29875 35.5528 1.00023 33.9076 1.00023H27.95C23.563 1.00023 20.0066 4.46296 20.0066 8.73446V26.1365C20.0066 26.6704 20.4592 27.1221 20.9949 27.0082C23.3482 26.5078 23.1356 24.2029 28.4465 24.2029C29.9719 24.2029 32.1482 24.2029 33.9087 24.2029C35.5539 24.2029 36.8864 22.9044 36.8864 21.3026V3.90056Z",
      fill: "#FFF1C0"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 376,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M5.11316 3.90056C5.11316 2.29875 6.44681 1.00023 8.09194 1.00023H14.0495C18.4366 1.00023 21.9929 4.46296 21.9929 8.73446V26.1365C21.9929 26.6704 21.5445 27.1184 21.0036 27.0307C18.236 26.5817 18.9484 24.2029 13.5531 24.2029C12.0277 24.2029 9.85141 24.2029 8.09083 24.2029C6.44569 24.2029 5.11316 22.9044 5.11316 21.3026V3.90056Z",
      fill: "#FFF1C0"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 380,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      opacity: "0.4",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5113 3.11903C20.0999 3.66193 20.6032 4.29162 20.9996 4.98705C21.3965 4.2907 21.9005 3.66027 22.4901 3.11687V26.2959C22.2659 26.4645 22.0336 26.6186 21.769 26.7459C21.5866 26.9584 21.3099 27.0806 21.0034 27.0309C20.9797 27.0271 20.9564 27.0231 20.9332 27.019C20.7277 27.0466 20.5368 26.9915 20.3824 26.8822C20.0419 26.7708 19.7625 26.6235 19.5113 26.4552V3.11903Z",
      fill: "#E6A000"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 384,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 367,
  columnNumber: 5
}, this), LockedDumbbellSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_334_225170)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "line",
      {
        x1: "16",
        y1: "20.3246",
        x2: "24.7589",
        y2: "15.2676",
        stroke: "#AFAFAF",
        strokeWidth: 4
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 399,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "17.7635",
        y: "3.66309",
        width: "9.1025",
        height: "26.2961",
        rx: "4.55125",
        transform: "rotate(-30 17.7635 3.66309)",
        fill: "#AFAFAF"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 407,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "2.87354",
        y: "12.2598",
        width: "9.1025",
        height: "26.2961",
        rx: "4.55125",
        transform: "rotate(-30 2.87354 12.2598)",
        fill: "#AFAFAF"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 416,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "25.9183",
        y: "3.62891",
        width: "9.1025",
        height: "18.205",
        rx: "4.55125",
        transform: "rotate(-30 25.9183 3.62891)",
        fill: "#AFAFAF"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 425,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "-1.23499",
        y: "19.3027",
        width: "9.1025",
        height: "18.205",
        rx: "4.55125",
        transform: "rotate(-30 -1.23499 19.3027)",
        fill: "#AFAFAF"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 434,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "2.81079",
        y: "20.3145",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 2.81079 20.3145)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 443,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "31.1294",
        y: "5.14355",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 31.1294 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 453,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "6.85596",
        y: "13.2354",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 6.85596 13.2354)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 463,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "22.027",
        y: "5.14355",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 22.027 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 473,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 398,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_334_225170", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("rect", { width: "42", height: "34", fill: "white" }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 486,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 485,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 484,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 397,
  columnNumber: 5
}, this), ActiveDumbbellSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_334_225192)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.8461 15.9274L17.8332 19.9763L16.3162 17.3486L23.329 13.2998L24.8461 15.9274Z",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 497,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.8148 9.98445C4.63797 11.2412 3.89214 14.0247 5.14893 16.2016L5.27901 16.4269C4.41076 16.3693 3.51657 16.5597 2.7064 17.0274C0.529574 18.2842 -0.216264 21.0677 1.04053 23.2445L5.59178 31.1275C6.84857 33.3044 9.63207 34.0502 11.8089 32.7934C12.6191 32.3257 13.231 31.6464 13.6153 30.8657L13.7457 31.0917C15.0025 33.2685 17.786 34.0143 19.9629 32.7575C22.1397 31.5008 22.8855 28.7172 21.6287 26.5404L13.0319 11.6503C11.7751 9.47349 8.99163 8.72766 6.8148 9.98445Z",
        fill: "black",
        fillOpacity: "0.3"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 503,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.7049 1.38844C19.5281 2.64523 18.7823 5.42873 20.0391 7.60556L28.6359 22.4957C29.8926 24.6725 32.6761 25.4183 34.853 24.1615C37.0298 22.9047 37.7756 20.1212 36.5188 17.9444L36.3892 17.7198C37.2575 17.7774 38.1519 17.5871 38.9622 17.1193C41.139 15.8625 41.8849 13.079 40.6281 10.9022L36.0768 3.01915C34.82 0.842324 32.0365 0.0964886 29.8597 1.35328C29.0494 1.82111 28.4374 2.50048 28.0531 3.28136L27.922 3.05431C26.6653 0.877481 23.8818 0.131645 21.7049 1.38844Z",
        fill: "black",
        fillOpacity: "0.3"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 510,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "2.81067",
        y: "20.3154",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 2.81067 20.3154)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 517,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "31.1292",
        y: "5.14355",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 31.1292 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 527,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "22.0269",
        y: "5.14355",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 22.0269 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 537,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "6.85583",
        y: "13.2363",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 6.85583 13.2363)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 547,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 496,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_334_225192", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("rect", { width: "42", height: "34", fill: "white" }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 560,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 559,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 558,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 495,
  columnNumber: 5
}, this), GoldenDumbbellSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_334_225119)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "line",
      {
        x1: "16",
        y1: "20.3246",
        x2: "24.7589",
        y2: "15.2676",
        stroke: "#E6A000",
        strokeWidth: "4"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 571,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "17.7635",
        y: "3.66309",
        width: "9.1025",
        height: "26.2961",
        rx: "4.55125",
        transform: "rotate(-30 17.7635 3.66309)",
        fill: "#CD7900"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 579,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "2.87354",
        y: "12.2598",
        width: "9.1025",
        height: "26.2961",
        rx: "4.55125",
        transform: "rotate(-30 2.87354 12.2598)",
        fill: "#CD7900"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 588,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "25.9184",
        y: "3.62891",
        width: "9.1025",
        height: "18.205",
        rx: "4.55125",
        transform: "rotate(-30 25.9184 3.62891)",
        fill: "#CD7900"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 597,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        x: "-1.23499",
        y: "19.3027",
        width: "9.1025",
        height: "18.205",
        rx: "4.55125",
        transform: "rotate(-30 -1.23499 19.3027)",
        fill: "#CD7900"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 606,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "2.81079",
        y: "20.3145",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 2.81079 20.3145)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 615,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "31.1294",
        y: "5.14355",
        width: "3.03417",
        height: "5.05694",
        rx: "1.51708",
        transform: "rotate(-30 31.1294 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 625,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "6.85596",
        y: "13.2354",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 6.85596 13.2354)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 635,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "rect",
      {
        opacity: "0.2",
        x: "22.0269",
        y: "5.14355",
        width: "3.03417",
        height: "6.06833",
        rx: "1.51708",
        transform: "rotate(-30 22.0269 5.14355)",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 645,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 570,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_334_225119", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("rect", { width: "42", height: "34", fill: "white" }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 658,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 657,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 656,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 569,
  columnNumber: 5
}, this), GuidebookSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M0.019043 4.83285C0.019043 4.10489 0.609167 3.51477 1.33712 3.51477H3.09456C3.82251 3.51477 4.41264 4.10489 4.41264 4.83285C4.41264 5.5608 3.82251 6.15093 3.09456 6.15093H1.33712C0.609167 6.15093 0.019043 5.5608 0.019043 4.83285Z",
      fill: "currentColor"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 668,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M0.019043 11.8628C0.019043 11.1348 0.609167 10.5447 1.33712 10.5447H3.09456C3.82251 10.5447 4.41264 11.1348 4.41264 11.8628C4.41264 12.5907 3.82251 13.1808 3.09456 13.1808H1.33712C0.609167 13.1808 0.019043 12.5907 0.019043 11.8628Z",
      fill: "currentColor"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 672,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M0.019043 18.8923C0.019043 18.1643 0.609167 17.5742 1.33712 17.5742H3.09456C3.82251 17.5742 4.41264 18.1643 4.41264 18.8923C4.41264 19.6202 3.82251 20.2104 3.09456 20.2104H1.33712C0.609167 20.2104 0.019043 19.6202 0.019043 18.8923Z",
      fill: "currentColor"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 676,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.65527 3.51493V6.15108H3.09466C3.82261 6.15108 4.41274 5.56096 4.41274 4.83301C4.41274 4.10505 3.82261 3.51493 3.09466 3.51493H2.65527ZM3.09466 1.75749H3.09349C3.68239 0.708669 4.80532 0 6.09377 0H20.4134C22.3125 0 23.8519 1.53947 23.8519 3.4385V20.2869C23.8519 22.1859 22.3125 23.7254 20.4134 23.7254H6.09377C4.80535 23.7254 3.68244 23.0168 3.09353 21.968H3.09464C4.7932 21.968 6.17016 20.591 6.17016 18.8925C6.17016 17.1939 4.7932 15.817 3.09464 15.817H2.65527V14.9383H3.09464C4.7932 14.9383 6.17016 13.5614 6.17016 11.8628C6.17016 10.1643 4.7932 8.78731 3.09464 8.78731H2.65527V7.90852H3.09466C4.79322 7.90852 6.17017 6.53157 6.17017 4.83301C6.17017 3.13445 4.79322 1.75749 3.09466 1.75749ZM3.09464 20.2105H2.65527V17.5744H3.09464C3.8226 17.5744 4.41272 18.1645 4.41272 18.8925C4.41272 19.6204 3.8226 20.2105 3.09464 20.2105ZM3.09464 13.1809H2.65527V10.5448H3.09464C3.8226 10.5448 4.41272 11.1349 4.41272 11.8628C4.41272 12.5908 3.8226 13.1809 3.09464 13.1809ZM9.90473 3.95423C9.2981 3.95423 8.80633 4.446 8.80633 5.05263C8.80633 5.65926 9.2981 6.15103 9.90473 6.15103H19.1313C19.7379 6.15103 20.2297 5.65926 20.2297 5.05263C20.2297 4.446 19.7379 3.95423 19.1313 3.95423H9.90473ZM8.80633 10.3249C8.80633 9.71831 9.2981 9.22654 9.90473 9.22654H19.1313C19.7379 9.22654 20.2297 9.71831 20.2297 10.3249C20.2297 10.9316 19.7379 11.4233 19.1313 11.4233H9.90473C9.2981 11.4233 8.80633 10.9316 8.80633 10.3249ZM9.90473 14.4989C9.2981 14.4989 8.80633 14.9906 8.80633 15.5973C8.80633 16.2039 9.2981 16.6957 9.90473 16.6957H16.4951C17.1017 16.6957 17.5935 16.2039 17.5935 15.5973C17.5935 14.9906 17.1017 14.4989 16.4951 14.4989H9.90473Z",
      fill: "currentColor"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 680,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 667,
  columnNumber: 5
}, this), PracticeExerciseSvg = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "23", height: "19", viewBox: "0 0 23 19", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { fill: "#1CB0F6", fillRule: "nonzero", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M4.157 17.781a1.5 1.5 0 0 0 2.598-1.5l-3.5-6.062a1.5 1.5 0 0 0-2.598 1.5l3.5 6.062zm4.463-.268a1.5 1.5 0 0 0 2.599-1.5l-5.5-9.526a1.5 1.5 0 0 0-2.598 1.5l5.5 9.526zM18.843 1.219a1.5 1.5 0 0 0-2.598 1.5l3.5 6.062a1.5 1.5 0 0 0 2.598-1.5l-3.5-6.062zm-4.463.268a1.5 1.5 0 0 0-2.599 1.5l5.5 9.526a1.5 1.5 0 0 0 2.598-1.5l-5.5-9.526zm.035 8.062l-1.5-2.598-4.33 2.5 1.5 2.598z" }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 701,
  columnNumber: 23
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 700,
  columnNumber: 21
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 699,
  columnNumber: 19
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 698,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 697,
  columnNumber: 15
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 696,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 695,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 694,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 693,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 692,
  columnNumber: 5
}, this), UpArrowSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "18", height: "20", viewBox: "0 0 18 20", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.820019 7.29641C-0.00641216 8.12284 -0.00641276 9.46275 0.820019 10.2892C1.64645 11.1156 2.98636 11.1156 3.81279 10.2892L6.89729 7.20468V17.8841C6.89729 19.0529 7.84474 20.0004 9.01349 20.0004C10.1822 20.0004 11.1297 19.0529 11.1297 17.8841V7.22501L14.1939 10.2892C15.0203 11.1156 16.3602 11.1156 17.1866 10.2892C18.0131 9.46275 18.0131 8.12284 17.1866 7.29641L10.5101 0.619824C10.0944 0.204119 9.54675 -0.00261376 9.00332 2.49416e-05C8.45989 -0.00261173 7.9123 0.204122 7.4966 0.619823L0.820019 7.29641Z",
    fill: "#1CB0F6"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 717,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 716,
  columnNumber: 5
}, this), FastForwardSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { clipPath: "url(#clip0_7030_116434)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.0423 14.9989C23.4698 15.8749 23.4698 17.9491 22.0423 18.825L8.91839 26.8783C7.42288 27.796 5.5 26.7199 5.5 24.9653L5.5 8.85865C5.5 7.10401 7.42288 6.02791 8.9184 6.94562L22.0423 14.9989Z",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 731,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M35.4535 14.9989C36.881 15.8749 36.881 17.9491 35.4535 18.825L22.3296 26.8783C20.8341 27.796 18.9112 26.7199 18.9112 24.9653L18.9112 8.85865C18.9112 7.10401 20.8341 6.02791 22.3296 6.94562L35.4535 14.9989Z",
        fill: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 737,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 730,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip0_7030_116434", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "rect",
    {
      width: "31",
      height: "30",
      fill: "white",
      transform: "translate(5.5 2)"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 746,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 745,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 744,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 729,
  columnNumber: 5
}, this), LockedTrophySvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0867 0.656357C11.241 -0.566997 7.97179 1.50405 7.97179 4.66166V13.4091C7.97179 19.8104 12.3546 25.1645 18.2181 26.5027C19.2287 26.8827 19.5393 27.3939 19.5793 27.8013V27.8899L19.579 27.8896L19.5793 27.8957V27.9759C19.5687 28.2279 19.4591 28.5701 19.1536 28.8471H15.9409C15.1526 28.8471 14.5136 29.4861 14.5136 30.2744C14.5136 30.435 14.5401 30.5893 14.5889 30.7333H13.0182C12.2272 30.7333 11.5859 31.3746 11.5859 32.1657C11.5859 32.9568 12.2272 33.598 13.0182 33.598H28.7601C29.5512 33.598 30.1925 32.9568 30.1925 32.1657C30.1925 31.3746 29.5512 30.7333 28.7601 30.7333H27.4615C27.5103 30.5893 27.5368 30.435 27.5368 30.2744C27.5368 29.4861 26.8978 28.8471 26.1095 28.8471H22.8507C22.5685 28.6241 22.4241 28.3499 22.3681 28.1133V27.8309C22.4457 27.3726 22.8765 26.805 24.2268 26.4375C29.9533 24.998 34.2011 19.711 34.2011 13.4091V4.66166C34.2011 1.50405 30.9319 -0.566996 28.0862 0.656358C25.4325 1.79713 22.5919 2.84158 21.0864 2.84158C19.581 2.84158 16.7403 1.79713 14.0867 0.656357ZM4.35009 16.3748C2.6223 15.4664 1.68222 13.4485 2.20034 11.4887C2.30684 11.0859 2.71874 10.8494 3.12034 10.9605L3.25989 10.9991C4.46034 11.3312 5.40222 12.1498 5.93 13.1841C6.27824 13.3866 6.50967 13.7663 6.50263 14.1977C6.48629 15.1997 6.65091 16.9075 7.20872 18.6485C7.76885 20.3967 8.68562 22.0565 10.0855 23.122C10.5909 23.5066 10.6887 24.2281 10.3041 24.7335C10.2195 24.8446 10.1187 24.936 10.0075 25.0069C9.05615 26.8441 6.86647 27.7005 4.88711 26.9278C4.50596 26.7791 4.31291 26.3477 4.45591 25.9643L4.57108 25.6556C5.00725 24.4863 5.91081 23.6374 6.98825 23.2401C6.67974 22.8379 6.40435 22.4164 6.15877 21.9847C4.26086 22.3411 2.32119 21.3362 1.55668 19.4685C1.39911 19.0836 1.58132 18.6388 1.96365 18.475L2.11386 18.4107C2.9626 18.0472 3.85995 17.9849 4.68935 18.1762C4.53785 17.5503 4.42727 16.9423 4.35009 16.3748ZM35.6154 13.2459C35.3208 13.4585 35.1315 13.8069 35.1379 14.1977C35.1542 15.1997 34.9896 16.9075 34.4318 18.6485C33.8717 20.3967 32.9549 22.0565 31.555 23.122C31.0496 23.5066 30.9518 24.2281 31.3364 24.7335C31.4351 24.8632 31.556 24.9661 31.6897 25.0408C32.6503 26.8546 34.8252 27.6957 36.7924 26.9278C37.1735 26.7791 37.3666 26.3477 37.2236 25.9643L37.1084 25.6556C36.6681 24.4753 35.7516 23.6214 34.6608 23.229C34.9786 22.8134 35.2612 22.3774 35.5122 21.9309C37.4859 22.4262 39.5623 21.4168 40.3598 19.4685C40.5174 19.0836 40.3352 18.6388 39.9528 18.475L39.8026 18.4107C38.852 18.0035 37.8405 17.9743 36.9317 18.2559C37.0997 17.5756 37.2193 16.9152 37.3 16.3035C39.0398 15.3373 39.9272 13.2427 39.3135 11.2768C39.1894 10.8792 38.7679 10.6618 38.372 10.7911L38.2291 10.8378C37.0073 11.2369 36.0835 12.1414 35.6154 13.2459Z",
    fill: "#AFAFAF"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 761,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 760,
  columnNumber: 5
}, this), ActiveTrophySvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0867 0.656406C11.241 -0.566948 7.97179 1.5041 7.97179 4.66171V13.4091C7.97179 19.8104 12.3546 25.1645 18.2181 26.5027C19.2287 26.8828 19.5393 27.3939 19.5793 27.8013V27.8899L19.579 27.8896L19.5793 27.8958V27.9759C19.5687 28.2279 19.4591 28.5701 19.1536 28.8471H15.9409C15.1526 28.8471 14.5136 29.4862 14.5136 30.2745C14.5136 30.435 14.5401 30.5894 14.5889 30.7334H13.0182C12.2272 30.7334 11.5859 31.3747 11.5859 32.1657C11.5859 32.9568 12.2272 33.5981 13.0182 33.5981H28.7601C29.5512 33.5981 30.1925 32.9568 30.1925 32.1657C30.1925 31.3747 29.5512 30.7334 28.7601 30.7334H27.4615C27.5103 30.5894 27.5368 30.435 27.5368 30.2745C27.5368 29.4862 26.8978 28.8471 26.1095 28.8471H22.8507C22.5685 28.6242 22.4241 28.35 22.3681 28.1133V27.831C22.4457 27.3727 22.8765 26.805 24.2268 26.4375C29.9533 24.998 34.2011 19.711 34.2011 13.4091V4.66171C34.2011 1.5041 30.9319 -0.566947 28.0862 0.656407C25.4325 1.79718 22.5919 2.84163 21.0864 2.84163C19.581 2.84163 16.7403 1.79718 14.0867 0.656406ZM4.35009 16.3748C2.6223 15.4664 1.68222 13.4485 2.20034 11.4888C2.30684 11.0859 2.71874 10.8494 3.12034 10.9605L3.25989 10.9991C4.46034 11.3312 5.40222 12.1499 5.93 13.1842C6.27824 13.3866 6.50967 13.7664 6.50263 14.1978C6.48629 15.1998 6.65091 16.9075 7.20872 18.6485C7.76885 20.3967 8.68562 22.0566 10.0855 23.122C10.5909 23.5067 10.6887 24.2282 10.3041 24.7336C10.2195 24.8447 10.1187 24.9361 10.0075 25.007C9.05615 26.8441 6.86647 27.7005 4.88711 26.9279C4.50596 26.7791 4.31291 26.3477 4.45591 25.9644L4.57108 25.6556C5.00725 24.4864 5.91081 23.6374 6.98825 23.2401C6.67974 22.8379 6.40435 22.4165 6.15877 21.9847C4.26086 22.3411 2.32119 21.3362 1.55668 19.4686C1.39911 19.0837 1.58132 18.6389 1.96365 18.4751L2.11386 18.4107C2.9626 18.0472 3.85995 17.9849 4.68935 18.1762C4.53785 17.5503 4.42727 16.9424 4.35009 16.3748ZM35.6154 13.2459C35.3208 13.4585 35.1315 13.807 35.1379 14.1978C35.1542 15.1998 34.9896 16.9075 34.4318 18.6485C33.8717 20.3967 32.9549 22.0566 31.555 23.122C31.0496 23.5067 30.9518 24.2282 31.3364 24.7336C31.4351 24.8633 31.556 24.9661 31.6897 25.0409C32.6503 26.8546 34.8252 27.6957 36.7924 26.9279C37.1735 26.7791 37.3666 26.3477 37.2236 25.9644L37.1084 25.6556C36.6681 24.4754 35.7516 23.6215 34.6608 23.229C34.9786 22.8135 35.2612 22.3774 35.5122 21.9309C37.4859 22.4263 39.5623 21.4169 40.3598 19.4686C40.5174 19.0837 40.3352 18.6389 39.9528 18.4751L39.8026 18.4108C38.852 18.0036 37.8405 17.9743 36.9317 18.256C37.0997 17.5757 37.2193 16.9153 37.3 16.3036C39.0398 15.3374 39.9272 13.2427 39.3135 11.2768C39.1894 10.8793 38.7679 10.6618 38.372 10.7912L38.2291 10.8379C37.0073 11.2369 36.0835 12.1415 35.6154 13.2459Z",
    fill: "white"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 774,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 773,
  columnNumber: 5
}, this), GoldenTrophySvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "105", height: "89", viewBox: "0 0 105 89", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "ellipse",
    {
      cx: "52.5564",
      cy: "67.7784",
      rx: "22.4297",
      ry: "20.3697",
      fill: "#FFB800"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 787,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "ellipse",
    {
      cx: "52.5564",
      cy: "62.6959",
      rx: "22.4297",
      ry: "20.3697",
      fill: "#FFD600"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 794,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M35.2837 71.8353C37.0692 74.9453 41.8904 78.7941 46.7356 80.0312",
      stroke: "#FFF500",
      strokeWidth: "4.6734",
      strokeLinecap: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 801,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M40.97 69.3791C41.9876 71.1516 44.7353 73.3452 47.4968 74.0502",
      stroke: "#FFF500",
      strokeWidth: "4.6734",
      strokeLinecap: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 807,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M68.2007 64.1053C68.2007 70.8805 61.5298 76.8096 52.7121 76.8096C43.8943 76.8096 37.2235 70.8805 37.2235 64.1053C37.2235 57.3301 43.8943 51.401 52.7121 51.401C61.5298 51.401 68.2007 57.3301 68.2007 64.1053Z",
      stroke: "#FFB800",
      strokeWidth: "3.01241"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 813,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M17.3816 11.4355C17.3816 3.1568 26.1494 -2.27311 33.7815 0.934306C40.8985 3.92521 48.517 6.66357 52.5545 6.66357C56.5921 6.66357 64.2106 3.92521 71.3275 0.934308C78.9597 -2.27311 87.7275 3.1568 87.7275 11.4355V34.3697C87.7275 53.7952 71.98 69.5427 52.5545 69.5427C33.1291 69.5427 17.3816 53.7952 17.3816 34.3697V11.4355Z",
      fill: "#FFB800"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 818,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M87.7275 21.0444C86.643 41.5035 69.7102 57.7589 48.9808 57.7589C36.5675 57.7589 25.5156 51.9298 18.4131 42.8596C17.7392 40.1407 17.3816 37.297 17.3816 34.3697V11.4355C17.3816 3.1568 26.1494 -2.27311 33.7815 0.934306C40.8985 3.92521 48.517 6.66357 52.5545 6.66357C56.5921 6.66357 64.2106 3.92521 71.3275 0.934308C78.9597 -2.27311 87.7275 3.1568 87.7275 11.4355V21.0444Z",
      fill: "#FFD600"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 822,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("circle", { cx: "29.6788", cy: "11.2542", r: "6.94978", fill: "#FFF500" }, void 0, !1, {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 828,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      d: "M58.7405 13.872C64.2067 12.9001 67.262 11.6908 71.377 9.41648",
      stroke: "#FFF500",
      strokeWidth: "9.29181",
      strokeLinecap: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 829,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.26014 26.1716C3.24474 25.897 2.19899 26.4976 1.92438 27.513L1.79236 28.0011C0.251515 33.6987 3.62117 39.5665 9.31868 41.1073L10.0909 41.3162C10.2291 42.5931 10.495 44.0908 10.9274 45.6959C8.28389 44.4473 5.14154 44.2821 2.23252 45.5002L1.16946 45.9454C0.199208 46.3516 -0.257982 47.4675 0.148295 48.4378L0.343623 48.9043C2.62328 54.3484 8.88469 56.9138 14.3289 54.6341L14.8702 54.4075C15.5961 55.4647 16.4218 56.4893 17.3585 57.4489C13.4278 57.8114 9.85 60.3467 8.3477 64.2837L7.93681 65.3604C7.5618 66.3432 8.05448 67.4439 9.03724 67.8189L9.50972 67.9992C15.0241 70.1034 21.2002 67.3389 23.3044 61.8246L23.7153 60.7478C23.9141 60.2269 23.869 59.6728 23.6364 59.2112C23.5574 58.8347 23.3276 58.4909 22.9715 58.2775C19.8938 56.4338 17.6739 53.7916 16.1067 50.9741C15.9303 50.5815 15.733 50.2045 15.5165 49.844C15.354 49.5123 15.2 49.1793 15.0541 48.8461C13.5172 45.3356 12.9251 41.8875 12.8428 39.7864L12.899 39.5787C14.4398 33.8812 11.0702 28.0133 5.37267 26.4725L4.26014 26.1716Z",
      fill: "#FFF500"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 835,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M99.0225 25.7233C100.025 25.4034 101.096 25.9563 101.416 26.9583L101.57 27.4401C103.365 33.0626 100.263 39.076 94.6403 40.8713L93.9755 41.0836C93.8396 42.4669 93.5502 44.1295 93.0544 45.9174C95.7851 44.4706 99.1184 44.2137 102.191 45.5004L103.254 45.9456C104.225 46.3518 104.682 47.4677 104.275 48.438L104.08 48.9045C101.801 54.3486 95.5391 56.914 90.0949 54.6343L89.2569 54.2834C88.5047 55.3934 87.6435 56.469 86.6603 57.4731C90.4992 57.9122 93.9664 60.4245 95.439 64.2839L95.8499 65.3606C96.2249 66.3434 95.7323 67.4441 94.7495 67.8191L94.277 67.9994C88.7627 70.1036 82.5866 67.3391 80.4824 61.8248L80.0715 60.748C79.7439 59.8896 80.0784 58.9412 80.8232 58.465C80.8973 58.3952 80.98 58.3322 81.0709 58.2777C84.9149 55.9749 87.4209 52.4263 88.9882 48.8463C90.4535 45.4995 91.0599 42.2096 91.1846 40.0893C91.1718 40.0557 91.1598 40.0215 91.1487 39.9868L90.9949 39.5051C89.1996 33.8826 92.3021 27.8692 97.9246 26.0739L99.0225 25.7233Z",
      fill: "#FFF500"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 841,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.26014 27.92C3.24474 27.6454 2.19899 28.246 1.92438 29.2614L1.79236 29.7495C0.251515 35.4471 3.62117 41.3149 9.31868 42.8558L10.0909 43.0646C10.2291 44.3415 10.495 45.8392 10.9274 47.4443C8.28389 46.1957 5.14154 46.0305 2.23252 47.2486L1.16946 47.6938C0.199208 48.1001 -0.257982 49.2159 0.148295 50.1862L0.343623 50.6527C2.62328 56.0968 8.88469 58.6622 14.3289 56.3825L14.8702 56.1559C15.5961 57.2131 16.4218 58.2377 17.3585 59.1973C13.4278 59.5598 9.85 62.0951 8.3477 66.0321L7.93681 67.1088C7.5618 68.0916 8.05448 69.1923 9.03724 69.5673L9.50972 69.7476C15.0241 71.8518 21.2002 69.0874 23.3044 63.573L23.7153 62.4962C23.9141 61.9753 23.869 61.4212 23.6364 60.9596C23.5574 60.5831 23.3276 60.2393 22.9715 60.026C19.8939 58.1822 17.6739 55.54 16.1067 52.7225C15.9303 52.3299 15.733 51.9529 15.5165 51.5924C15.354 51.2607 15.2 50.9277 15.0541 50.5945C13.5172 47.084 12.9251 43.6359 12.8428 41.5348L12.899 41.3271C14.4398 35.6296 11.0702 29.7618 5.37267 28.2209L4.26014 27.92Z",
      fill: "#FFD600"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 847,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M99.0225 27.4717C100.025 27.1518 101.096 27.7047 101.416 28.7067L101.57 29.1885C103.365 34.811 100.263 40.8244 94.6403 42.6197L93.9755 42.832C93.8396 44.2153 93.5502 45.8779 93.0544 47.6658C95.7851 46.219 99.1184 45.9621 102.191 47.2488L103.254 47.694C104.225 48.1003 104.682 49.2162 104.275 50.1864L104.08 50.6529C101.801 56.0971 95.5391 58.6624 90.0949 56.3827L89.2569 56.0318C88.5047 57.1418 87.6435 58.2174 86.6603 59.2215C90.4992 59.6606 93.9664 62.173 95.439 66.0323L95.8499 67.109C96.2249 68.0918 95.7323 69.1925 94.7495 69.5675L94.277 69.7478C88.7627 71.852 82.5866 69.0876 80.4824 63.5732L80.0715 62.4964C79.7439 61.638 80.0784 60.6896 80.8232 60.2134C80.8973 60.1436 80.9799 60.0806 81.0709 60.0262C84.9149 57.7233 87.4209 54.1747 88.9882 50.5947C90.4535 47.2479 91.0599 43.958 91.1846 41.8377C91.1718 41.8041 91.1598 41.77 91.1487 41.7353L90.9949 41.2535C89.1996 35.631 92.3021 29.6176 97.9246 27.8223L99.0225 27.4717Z",
      fill: "#FFB800"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Svgs.tsx",
      lineNumber: 853,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 786,
  columnNumber: 5
}, this);
var LockSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("svg", { width: "42", height: "34", viewBox: "0 0 42 34", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.8731 4.53816C16.9449 4.53816 13.7604 7.52403 13.7604 11.2073V13.483C13.7604 13.5386 13.7612 13.5941 13.7626 13.6493H13.7049C11.854 13.6493 10.3535 15.1498 10.3535 17.0007V25.9418C10.3535 27.7927 11.854 29.2932 13.7049 29.2932H28.0455C29.8965 29.2932 31.397 27.7927 31.397 25.9418V17.0008C31.397 15.1498 29.8965 13.6493 28.0455 13.6493H27.9837C27.9851 13.5941 27.9858 13.5386 27.9858 13.483V11.2073C27.9858 7.52402 24.8014 4.53816 20.8731 4.53816ZM24.4812 13.6493C24.484 13.5942 24.4855 13.5388 24.4855 13.483V11.2073C24.4855 9.33665 22.8682 7.82022 20.8731 7.82022C18.8781 7.82022 17.2608 9.33665 17.2608 11.2073V13.483C17.2608 13.5388 17.2622 13.5942 17.2651 13.6493H24.4812Z",
    fill: "#AFAFAF"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 1320,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Svgs.tsx",
  lineNumber: 1319,
  columnNumber: 5
}, this);
var LessonCompletionSvg0 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "svg",
  {
    style: { transitionDuration: "400ms" },
    viewBox: "0 0 100 100",
    className: "absolute",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip-session/ProgressRing1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M3.061616997868383e-15,-50L2.5717582782094417e-15,-42Z" }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2242,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2241,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2240,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { transform: "translate(50, 50)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z",
            fill: "rgb(229,229,229)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2246,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "circle",
          {
            clipPath: "url(#clip-session/ProgressRing1)",
            cx: "-3.9949609477190866",
            cy: "-45.82619651494328",
            fill: "rgb(255,255,255)",
            r: "4"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2250,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.061616997868383e-15,-50L2.5717582782094417e-15,-42Z",
            fill: "rgb(255,200,0)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2257,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2245,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 2234,
    columnNumber: 5
  },
  this
), LessonCompletionSvg1 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "svg",
  {
    style: { transitionDuration: "400ms" },
    viewBox: "0 0 100 100",
    className: "absolute",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip-session/ProgressRing614", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,49.979156518488836,1.4435767040219651A4,4,0,0,1,45.51809422092188,5.301235563081284L45.51809422092188,5.301235563081285A4,4,0,0,1,41.98249147553062,1.2126044313784499A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z" }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2276,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2275,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2274,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { transform: "translate(50, 50)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z",
            fill: "#E5E5E5"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2280,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "circle",
          {
            clipPath: "url(#clip-session/ProgressRing614)",
            cx: "45.82619651494328",
            cy: "-3.994960947719092",
            fill: "#FFFFFF",
            r: "6.666666666666666"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2284,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,49.81060537995478,-4.347826086956522A4,4,0,0,1,45.8257569495584,0L45.8257569495584,0A4,4,0,0,1,41.840908519162014,-3.652173913043479A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z",
            fill: "#FFC800"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2291,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2279,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 2268,
    columnNumber: 5
  },
  this
), LessonCompletionSvg2 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 100 100",
    style: { transitionDuration: "400ms" },
    className: "absolute",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip-session/ProgressRing1043", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,-1.4435767040219774,49.979156518488836A4,4,0,0,1,-5.30123556308129,45.51809422092188L-5.301235563081291,45.51809422092188A4,4,0,0,1,-1.2126044313784563,41.98249147553062A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z" }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2310,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2309,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2308,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { transform: "translate(50, 50)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z",
            fill: "rgb(229,229,229)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2314,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "circle",
          {
            clipPath: "url(#clip-session/ProgressRing1043)",
            cx: "3.9949609477190924",
            cy: "45.82619651494328",
            fill: "rgb(255,255,255)",
            r: "6.666666666666666"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2318,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,0,1,4.347826086956521,49.81060537995478A4,4,0,0,1,3.552713678800501e-15,45.8257569495584L3.552713678800501e-15,45.8257569495584A4,4,0,0,1,3.6521739130434816,41.840908519162014A42,42,0,0,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z",
            fill: "rgb(255,200,0)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2325,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2313,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 2302,
    columnNumber: 5
  },
  this
), LessonCompletionSvg3 = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 100 100",
    style: { transitionDuration: "400ms" },
    className: "absolute",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("clipPath", { id: "clip-session/ProgressRing1577", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("path", { d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,1,1,-49.979156518488836,-1.4435767040219978A4,4,0,0,1,-45.518094220921874,-5.301235563081309L-45.518094220921874,-5.301235563081308A4,4,0,0,1,-41.982491475530615,-1.212604431378473A42,42,0,1,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z" }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2344,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2343,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2342,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("g", { transform: "translate(50, 50)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z",
            fill: "rgb(229,229,229)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2348,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "circle",
          {
            clipPath: "url(#clip-session/ProgressRing1577)",
            cx: "-45.82619651494328",
            cy: "3.994960947719095",
            fill: "rgb(255,255,255)",
            r: "6.666666666666666"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2352,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "path",
          {
            d: "M3.552713678800501e-15,-45.8257569495584A4,4,0,0,1,4.347826086956525,-49.81060537995478A50,50,0,1,1,-49.81060537995478,4.347826086956535A4,4,0,0,1,-45.8257569495584,5.329070518200751e-15L-45.8257569495584,5.329070518200751e-15A4,4,0,0,1,-41.840908519162014,3.652173913043483A42,42,0,1,0,3.6521739130434776,-41.840908519162014A4,4,0,0,1,3.552713678800501e-15,-45.8257569495584Z",
            fill: "rgb(255,200,0)"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Svgs.tsx",
            lineNumber: 2359,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Svgs.tsx",
        lineNumber: 2347,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Svgs.tsx",
    lineNumber: 2336,
    columnNumber: 5
  },
  this
);

// app/routes/learn.tsx
var import_Box2 = __toESM(require("@mui/material/Box"));

// app/utils/units.ts
var units = [
  {
    unitNumber: 1,
    description: "\u05DC\u05DE\u05D3 \u05E2\u05DC \u05D0,\u05D1,\u05D2,\u05D3",
    backgroundColor: "bg-lime-500",
    textColor: "text-lime-500",
    borderColor: "border-lime-700",
    tiles: [
      {
        type: "star",
        description: "\u05DE\u05E9\u05E4\u05D8 \u05E7\u05D0\u05E6'\u05D9 \u05D5\u05D7\u05D9\u05D5\u05D1\u05D9!"
      },
      {
        type: "book",
        description: "Good morning"
      },
      {
        type: "star",
        description: "Greet people"
      },
      { type: "book", description: "A date" },
      { type: "trophy", description: "Unit 1 review" }
    ]
  },
  {
    unitNumber: 2,
    description: "Get around in a city",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "One thing" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" }
    ]
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 2 review" }
    ]
  }
];

// app/routes/learn.tsx
var import_material9 = require("@mui/material"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), tileStatus = (tile, lessonsCompleted) => {
  let tilesCompleted = Math.floor(lessonsCompleted / 4), tileIndex = units.flatMap((unit) => unit.tiles).findIndex((t) => t === tile);
  return tileIndex < tilesCompleted ? "COMPLETE" : tileIndex > tilesCompleted ? "LOCKED" : "ACTIVE";
}, TileIcon = ({
  tileType,
  status
}) => {
  switch (tileType) {
    case "star":
      return status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CheckmarkSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this) : status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(StarSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LockSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this);
    case "book":
      return status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(GoldenBookSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this) : status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ActiveBookSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LockedBookSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this);
    case "dumbbell":
      return status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(GoldenDumbbellSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this) : status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ActiveDumbbellSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LockedDumbbellSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this);
    case "fast-forward":
      return status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CheckmarkSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this) : status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(StarSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(FastForwardSvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this);
    case "trophy":
      return status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(GoldenTrophySvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this) : status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ActiveTrophySvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LockedTrophySvg, {}, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this);
  }
}, tileTooltipLeftOffsets = [140, 95, 70, 95, 140, 185, 210, 185], getTileTooltipLeftOffset = ({
  index,
  unitNumber,
  tilesLength
}) => {
  if (index >= tilesLength - 1)
    return tileTooltipLeftOffsets[0];
  let offsets = unitNumber % 2 === 1 ? tileTooltipLeftOffsets : [
    ...tileTooltipLeftOffsets.slice(4),
    ...tileTooltipLeftOffsets.slice(0, 4)
  ];
  return offsets[index % offsets.length] ?? tileTooltipLeftOffsets[0];
};
var TileTooltip = ({
  selectedTile,
  index,
  unitNumber,
  tilesLength,
  description,
  status,
  closeTooltip
}) => {
  let tileTooltipRef = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    let containsTileTooltip = (event) => {
      var _a;
      selectedTile !== index || (_a = tileTooltipRef.current) != null && _a.contains(
        event.target
      ) || closeTooltip();
    };
    return window.addEventListener("click", containsTileTooltip, !0), () => window.removeEventListener("click", containsTileTooltip, !0);
  }, [selectedTile, tileTooltipRef, closeTooltip, index]);
  let unit = units.find((unit2) => unit2.unitNumber === unitNumber), activeBackgroundColor = (unit == null ? void 0 : unit.backgroundColor) ?? "bg-green-500", activeTextColor = (unit == null ? void 0 : unit.textColor) ?? "text-green-500";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: [
        "relative h-0 w-full",
        index === selectedTile ? "" : "invisible"
      ].join(" "),
      ref: tileTooltipRef,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "div",
        {
          className: [
            "absolute z-30 flex w-[300px] flex-col gap-4 rounded-xl p-4 font-bold transition-all duration-300",
            status === "ACTIVE" ? activeBackgroundColor : status === "LOCKED" ? "border-2 border-gray-200 bg-gray-100" : "bg-yellow-400",
            index === selectedTile ? "top-4 scale-100" : "-top-14 scale-0"
          ].join(" "),
          style: { left: "calc(50% - 150px)" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "div",
              {
                className: [
                  "absolute left-[140px] top-[-8px] h-4 w-4 rotate-45",
                  status === "ACTIVE" ? activeBackgroundColor : status === "LOCKED" ? "border-l-2 border-t-2 border-gray-200 bg-gray-100" : "bg-yellow-400"
                ].join(" "),
                style: {
                  left: getTileTooltipLeftOffset({ index, unitNumber, tilesLength })
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/learn.tsx",
                lineNumber: 245,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "div",
              {
                className: [
                  "text-lg",
                  status === "ACTIVE" ? "text-white" : status === "LOCKED" ? "text-gray-400" : "text-yellow-600"
                ].join(" "),
                children: description
              },
              void 0,
              !1,
              {
                fileName: "app/routes/learn.tsx",
                lineNumber: 258,
                columnNumber: 9
              },
              this
            ),
            status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_material9.Link,
              {
                href: "/lesson",
                className: [
                  "flex w-full items-center justify-center rounded-xl border-b-4 border-gray-200 bg-white p-3 uppercase",
                  activeTextColor
                ].join(" "),
                children: "\u05DC\u05D4\u05EA\u05D7\u05DC\u05D4 10+ \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/learn.tsx",
                lineNumber: 271,
                columnNumber: 11
              },
              this
            ) : status === "LOCKED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "button",
              {
                className: "w-full rounded-xl bg-gray-200 p-3 uppercase text-gray-400",
                disabled: !0,
                children: "\u05E0\u05E2\u05D5\u05DC"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/learn.tsx",
                lineNumber: 281,
                columnNumber: 11
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_material9.Link,
              {
                href: "/lesson",
                className: "flex w-full items-center justify-center rounded-xl border-b-4 border-yellow-200 bg-white p-3 uppercase text-yellow-400",
                children: "Practice +5 XP"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/learn.tsx",
                lineNumber: 288,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/learn.tsx",
          lineNumber: 233,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/learn.tsx",
      lineNumber: 226,
      columnNumber: 5
    },
    this
  );
}, UnitSection = ({ unit }) => {
  let [isHovered, setHovered] = (0, import_react13.useState)(!1), [selectedTile, setSelectedTile] = (0, import_react13.useState)(null);
  (0, import_react13.useEffect)(() => {
    let unselectTile = () => setSelectedTile(null);
    return window.addEventListener("scroll", unselectTile), () => window.removeEventListener("scroll", unselectTile);
  }, []);
  let closeTooltip = (0, import_react13.useCallback)(() => setSelectedTile(null), []), lessonsCompleted = 2;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      UnitHeader,
      {
        unitNumber: unit.unitNumber,
        description: unit.description,
        backgroundColor: unit.backgroundColor,
        borderColor: unit.borderColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/learn.tsx",
        lineNumber: 324,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
      maxWidth: "42rem"
    }, children: unit.tiles.map((tile, i) => {
      let status = tileStatus(tile, lessonsCompleted);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Fragment, { children: [
        (() => {
          switch (tile.type) {
            case "star":
            case "book":
            case "dumbbell":
            case "trophy":
            case "fast-forward":
              return tile.type === "trophy" && status === "COMPLETE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TileIcon, { tileType: tile.type, status }, void 0, !1, {
                  fileName: "app/routes/learn.tsx",
                  lineNumber: 352,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material9.Typography, { sx: {
                  display: "flex",
                  position: "absolute",
                  right: 0,
                  left: 0,
                  top: "1.5rem",
                  justifyContent: "center",
                  fontSize: "1.125rem",
                  fontweight: 700,
                  color: "#B45309"
                }, children: unit.unitNumber }, void 0, !1, {
                  fileName: "app/routes/learn.tsx",
                  lineNumber: 353,
                  columnNumber: 27
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/learn.tsx",
                lineNumber: 351,
                columnNumber: 25
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_material9.Button,
                {
                  children: [
                    tile.type === "fast-forward" && status === "LOCKED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      HoverLabel,
                      {
                        text: "\u05D3\u05DC\u05D2 \u05DC\u05DB\u05D0\u05DF?",
                        textColor: unit.textColor
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/learn.tsx",
                        lineNumber: 381,
                        columnNumber: 27
                      },
                      this
                    ) : selectedTile !== i && status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(HoverLabel, { text: "\u05D4\u05EA\u05D7\u05DC!", textColor: unit.textColor }, void 0, !1, {
                      fileName: "app/routes/learn.tsx",
                      lineNumber: 386,
                      columnNumber: 27
                    }, this) : null,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      LessonCompletionSvg,
                      {
                        lessonsCompleted,
                        status
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/learn.tsx",
                        lineNumber: 388,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      import_Box2.default,
                      {
                        sx: {
                          position: "relative",
                          padding: "1rem",
                          margin: " 0.75rem",
                          borderRadius: "9999px",
                          borderBottomWidth: "8px",
                          "&:hover": {
                            "& > .tooltip": {
                              opacity: 1
                            }
                          }
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TileIcon, { tileType: tile.type, status }, void 0, !1, {
                            fileName: "app/routes/learn.tsx",
                            lineNumber: 418,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            import_material9.Typography,
                            {
                              className: "tooltip",
                              sx: {
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                opacity: isHovered ? 1 : 0,
                                transition: "opacity 0.3s ease-in-out"
                              },
                              onMouseEnter: () => setHovered(!0),
                              onMouseLeave: () => setHovered(!1),
                              children: "\u05D4\u05E6\u05D2 \u05E9\u05D9\u05E2\u05D5\u05E8"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/learn.tsx",
                              lineNumber: 419,
                              columnNumber: 27
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/learn.tsx",
                        lineNumber: 392,
                        columnNumber: 25
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/learn.tsx",
                  lineNumber: 370,
                  columnNumber: 23
                },
                this
              );
          }
        })(),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          TileTooltip,
          {
            selectedTile,
            index: i,
            unitNumber: unit.unitNumber,
            tilesLength: unit.tiles.length,
            description: (() => {
              switch (tile.type) {
                case "book":
                case "dumbbell":
                case "star":
                  return tile.description;
                case "fast-forward":
                  return status === "LOCKED" ? "Jump here?" : tile.description;
                case "trophy":
                  return `Unit ${unit.unitNumber} review`;
              }
            })(),
            status,
            closeTooltip
          },
          void 0,
          !1,
          {
            fileName: "app/routes/learn.tsx",
            lineNumber: 438,
            columnNumber: 15
          },
          this
        )
      ] }, i, !0, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 341,
        columnNumber: 13
      }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 330,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/learn.tsx",
    lineNumber: 323,
    columnNumber: 5
  }, this);
};
function Learn() {
  let [scrollY, setScrollY] = (0, import_react13.useState)(0);
  return (0, import_react13.useEffect)(() => {
    let updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
    return updateScrollY(), document.addEventListener("scroll", updateScrollY), () => document.removeEventListener("scroll", updateScrollY);
  }, [scrollY]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: { overflowX: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SideBar, { selectedTab: "\u05DC\u05DE\u05D9\u05D3\u05D4" }, void 0, !1, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 505,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 502,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginRight: "6rem",
      backgroundColor: "#d0a34c"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: { display: "flex", flexDirection: "column", flexGrow: "1", maxWidth: "48rem" }, children: [
      units.map((unit) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UnitSection, { unit }, unit.unitNumber, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 512,
        columnNumber: 13
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Box2.default, { sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "sticky",
        right: 0,
        left: 0,
        bottom: "7rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_material9.Link,
          {
            href: "/lesson?practice",
            sx: {
              display: "flex",
              position: "absolute",
              right: "1rem",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9999px",
              borderWidth: "2px",
              borderBottomWidth: "4px",
              borderColor: "#E5E7EB",
              width: "4rem",
              height: "4rem",
              backgroundColor: "#ffffff"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material9.Typography, { children: "\u05D7\u05D6\u05E8\u05D5\u05EA \u05EA\u05D9\u05E8\u05D2\u05D5\u05DC" }, void 0, !1, {
                fileName: "app/routes/learn.tsx",
                lineNumber: 526,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PracticeExerciseSvg, { style: { width: "2rem", height: "2rem" } }, void 0, !1, {
                fileName: "app/routes/learn.tsx",
                lineNumber: 527,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/learn.tsx",
            lineNumber: 518,
            columnNumber: 13
          },
          this
        ),
        scrollY > 100 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_material9.Button,
          {
            sx: {
              display: "flex",
              position: "absolute",
              right: "1rem",
              justifyContent: "center",
              alignItems: "center",
              alignDelf: "flex-end",
              borderRadius: "1rem",
              borderWidth: "2px",
              borderBottomWidth: "4px",
              borderColor: "#E5E7EB",
              width: "3.5rem",
              height: "3.5rem",
              backgroundColor: "#ffffff"
            },
            onClick: () => scrollTo(0, 0),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material9.Typography, { children: "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D4\u05EA\u05D7\u05DC\u05D4" }, void 0, !1, {
                fileName: "app/routes/learn.tsx",
                lineNumber: 548,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UpArrowSvg, {}, void 0, !1, {
                fileName: "app/routes/learn.tsx",
                lineNumber: 549,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/learn.tsx",
            lineNumber: 530,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 514,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 510,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 507,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/learn.tsx",
    lineNumber: 501,
    columnNumber: 5
  }, this);
}
var LessonCompletionSvg = ({
  lessonsCompleted,
  status,
  style = {}
}) => {
  if (status !== "ACTIVE")
    return null;
  switch (lessonsCompleted % 4) {
    case 0:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LessonCompletionSvg0, { style }, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 577,
        columnNumber: 14
      }, this);
    case 1:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LessonCompletionSvg1, { style }, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 579,
        columnNumber: 14
      }, this);
    case 2:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LessonCompletionSvg2, { style }, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 581,
        columnNumber: 14
      }, this);
    case 3:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(LessonCompletionSvg3, { style }, void 0, !1, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 583,
        columnNumber: 14
      }, this);
    default:
      return null;
  }
}, HoverLabel = ({
  text,
  textColor
}) => {
  var _a;
  let hoverElement = (0, import_react13.useRef)(null), [width, setWidth] = (0, import_react13.useState)(72);
  return (0, import_react13.useEffect)(() => {
    var _a2;
    setWidth(((_a2 = hoverElement.current) == null ? void 0 : _a2.clientWidth) ?? width);
  }, [(_a = hoverElement.current) == null ? void 0 : _a.clientWidth, width]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: `absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-bold uppercase ${textColor}`,
      style: {
        top: "-25%",
        left: `calc(50% - ${width / 2}px)`
      },
      ref: hoverElement,
      children: [
        text,
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "div",
          {
            className: "absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white",
            style: { left: "calc(50% - 8px)", bottom: "-8px" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/learn.tsx",
            lineNumber: 613,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/learn.tsx",
      lineNumber: 604,
      columnNumber: 5
    },
    this
  );
}, UnitHeader = ({
  unitNumber,
  description,
  backgroundColor,
  borderColor
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "article",
  {
    className: ["max-w-2xl text-white sm:rounded-xl", backgroundColor].join(
      " "
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("header", { className: "flex items-center justify-between gap-4 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-2xl font-bold", children: [
          "\u05D7\u05DC\u05E7 ",
          unitNumber
        ] }, void 0, !0, {
          fileName: "app/routes/learn.tsx",
          lineNumber: 641,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-lg", children: description }, void 0, !1, {
          fileName: "app/routes/learn.tsx",
          lineNumber: 642,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/learn.tsx",
        lineNumber: 640,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_material9.Link,
        {
          className: [
            "flex items-center gap-3 rounded-2xl border-2 border-b-4 p-3 transition hover:text-gray-100",
            borderColor
          ].join(" "),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(GuidebookSvg, {}, void 0, !1, {
              fileName: "app/routes/learn.tsx",
              lineNumber: 651,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "sr-only font-bold uppercase lg:not-sr-only", children: "Guidebook" }, void 0, !1, {
              fileName: "app/routes/learn.tsx",
              lineNumber: 652,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/learn.tsx",
          lineNumber: 644,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/learn.tsx",
      lineNumber: 639,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/learn.tsx",
    lineNumber: 634,
    columnNumber: 5
  },
  this
);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XXMNNQ72.js", imports: ["/build/_shared/chunk-OZ6QX5MG.js", "/build/_shared/chunk-TFAVYZDK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UPLW43KY.js", imports: ["/build/_shared/chunk-QTKJ253X.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CL2AQ6TQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/learn": { id: "routes/learn", parentId: "root", path: "learn", index: void 0, caseSensitive: void 0, module: "/build/routes/learn-ZRJVTS5Z.js", imports: ["/build/_shared/chunk-6UBMAJQY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lesson-factory": { id: "routes/lesson-factory", parentId: "root", path: "lesson-factory", index: void 0, caseSensitive: void 0, module: "/build/routes/lesson-factory-BXAB3K56.js", imports: ["/build/_shared/chunk-RM3PVU74.js", "/build/_shared/chunk-OXIWLU4Q.js", "/build/_shared/chunk-Q57CA2YT.js", "/build/_shared/chunk-BHZX3OXX.js", "/build/_shared/chunk-6UBMAJQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lessons": { id: "routes/lessons", parentId: "root", path: "lessons", index: void 0, caseSensitive: void 0, module: "/build/routes/lessons-2GBPPAT6.js", imports: ["/build/_shared/chunk-SYBVGEC3.js", "/build/_shared/chunk-Q57CA2YT.js", "/build/_shared/chunk-BHZX3OXX.js", "/build/_shared/chunk-6UBMAJQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lessons.$topicId": { id: "routes/lessons.$topicId", parentId: "root", path: "lessons/:topicId", index: void 0, caseSensitive: void 0, module: "/build/routes/lessons.$topicId-WYJISKQI.js", imports: ["/build/_shared/chunk-OXIWLU4Q.js", "/build/_shared/chunk-SYBVGEC3.js", "/build/_shared/chunk-BHZX3OXX.js", "/build/_shared/chunk-6UBMAJQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lessons.$topicId.$lessonId": { id: "routes/lessons.$topicId.$lessonId", parentId: "root", path: "lessons/:topicId/:lessonId", index: void 0, caseSensitive: void 0, module: "/build/routes/lessons.$topicId.$lessonId-GOUNUJTF.js", imports: ["/build/_shared/chunk-RM3PVU74.js", "/build/_shared/chunk-SYBVGEC3.js", "/build/_shared/chunk-BHZX3OXX.js", "/build/_shared/chunk-6UBMAJQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5bfab877", hmr: void 0, url: "/build/manifest-5BFAB877.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/lessons.$topicId.$lessonId": {
    id: "routes/lessons.$topicId.$lessonId",
    parentId: "root",
    path: "lessons/:topicId/:lessonId",
    index: void 0,
    caseSensitive: void 0,
    module: lessons_topicId_lessonId_exports
  },
  "routes/lessons.$topicId": {
    id: "routes/lessons.$topicId",
    parentId: "root",
    path: "lessons/:topicId",
    index: void 0,
    caseSensitive: void 0,
    module: lessons_topicId_exports
  },
  "routes/lesson-factory": {
    id: "routes/lesson-factory",
    parentId: "root",
    path: "lesson-factory",
    index: void 0,
    caseSensitive: void 0,
    module: lesson_factory_exports
  },
  "routes/lessons": {
    id: "routes/lessons",
    parentId: "root",
    path: "lessons",
    index: void 0,
    caseSensitive: void 0,
    module: lessons_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/learn": {
    id: "routes/learn",
    parentId: "root",
    path: "learn",
    index: void 0,
    caseSensitive: void 0,
    module: learn_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
