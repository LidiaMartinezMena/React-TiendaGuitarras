var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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

// app/entry.server.jsx
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
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
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
          fileName: "app/entry.server.jsx",
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

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-MPXFZIPG.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: " Inicio "
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 12,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: " Nosotros "
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 16,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: " Tienda "
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 20,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: " Blog "
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 24,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/carrito",
        children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "Carrito de compras" }, void 0, !1, {
            fileName: "app/components/navegacion.jsx",
            lineNumber: 30,
            columnNumber: 19
          }, this),
          " "
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 28,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Imagen logo" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
      " Todos los derechos reservados ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react4.useState)(carritoLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 92,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 128,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

// app/routes/$guitarraUrl.jsx
var guitarraUrl_exports = {};
__export(guitarraUrl_exports, {
  default: () => guitarraUrl_default,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/$guitarraUrl.jsx
var import_react6 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-SIB26Z4Y.css";

// app/routes/$guitarraUrl.jsx
var import_react7 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  return data ? [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ] : {
    title: "Guitarra no encontrada",
    description: "Guitarras, venta de guitarras, guitarra no encontrada"
  };
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Guitarra() {
  let { agregarCarrito } = (0, import_react6.useOutletContext)(), [cantidad, setCantidad] = (0, import_react7.useState)(0), guitarra = (0, import_react6.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen de la guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/routes/$guitarraUrl.jsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 81,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "cantidad", children: " Cantidad " }, void 0, !1, {
          fileName: "app/routes/$guitarraUrl.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "select",
          {
            onChange: (e) => setCantidad(+e.target.value),
            id: "cantidad",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "0", children: " -- Seleccione --" }, void 0, !1, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 90,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "1", children: " 1 " }, void 0, !1, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 91,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "2", children: " 2 " }, void 0, !1, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 92,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "3", children: " 3 " }, void 0, !1, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 93,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/$guitarraUrl.jsx",
            lineNumber: 87,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            type: "submit",
            value: "Agregar al carrito"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/$guitarraUrl.jsx",
            lineNumber: 96,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 84,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$guitarraUrl.jsx",
      lineNumber: 79,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$guitarraUrl.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var guitarraUrl_default = Guitarra;

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { descripcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `Imagen guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "enlace", to: `/${url}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "heading", children: " Nuestra colecci\xF3n " }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      Guitarra2,
      {
        guitarra: guitarra == null ? void 0 : guitarra.attributes
      },
      guitarra == null ? void 0 : guitarra.id,
      !1,
      {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 10,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    { title: "GuitarLA - Tienda de guitarras" },
    { description: "GuitarLA - Nuestra colecci\xF3n de guitarras" }
  ];
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
async function loader2() {
  return (await getGuitarras()).data;
}
function Tienda() {
  let data = (0, import_react9.useOutletContext)();
  console.log(data);
  let guitarras = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/guitarras.jsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react9.Outlet,
      {
        context: (0, import_react9.useOutletContext)()
      },
      void 0,
      !1,
      {
        fileName: "app/routes/guitarras.jsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda;

// app/routes/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => Post,
  links: () => links4,
  loader: () => loader3,
  meta: () => meta4
});
var import_react10 = require("@remix-run/react");

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/blogs?populate=imagen`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)).json();
}

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-IW7SJVNI.css";

// app/routes/$postUrl.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader3({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
function meta4({ data }) {
  return data ? [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}` }
  ] : {
    title: "Entrada no encontrada",
    description: "Guitarras, venta de guitarras, entrada no encontrada"
  };
}
function Post() {
  var _a;
  let post = (0, import_react10.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].atributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { className: "contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "imagen", src: (_a = imagen.data) == null ? void 0 : _a.attributes.url, alt: `Imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/routes/$postUrl.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$postUrl.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$postUrl.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links5,
  meta: () => meta5
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-CXXP4N52.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta5() {
  return [
    { title: "GuitarLA - Sobre Nosotros" },
    { description: "Venta de guitarras, blog de m\xFAsica" }
  ];
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 36,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Etiam accumsan est et feugiat dictum. Praesent urna purus, finibus vitae maximus id, gravida a erat. Vivamus aliquet dapibus odio id tincidunt. Quisque commodo lacinia lorem, nec suscipit ligula mollis nec. In pulvinar purus maximus elit sodales feugiat. Sed id turpis risus. Suspendisse neque tortor, tincidunt porttitor risus non, ultrices vehicula eros." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 38,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => Carrito,
  links: () => links6,
  meta: () => meta6
});

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-OWXGPDXE.css";

// app/routes/carrito.jsx
var import_react11 = require("@remix-run/react"), import_react12 = require("react"), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links6() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta6() {
  return [
    { title: "GuitarLA - Carrito de compras" },
    { description: "Venta de guitarras, m\xFAsica" }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react12.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react11.useOutletContext)();
  return (0, import_react12.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "heading", children: "Carrito de compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: " Art\xEDculos seleccionados " }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito vac\xEDo" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: producto.imagen, alt: `Imagen del producto ${producto.nombre}` }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 46,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 45,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 49,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Cantidad: " }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 50,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "select",
                {
                  value: producto.cantidad,
                  className: "select",
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "1", children: " 1 " }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 61,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "2", children: " 2 " }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 62,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "3", children: " 3 " }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 63,
                      columnNumber: 35
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 52,
                  columnNumber: 33
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "precio", children: [
                "  ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
                  producto.precio,
                  " "
                ] }, void 0, !0, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 66,
                  columnNumber: 57
                }, this),
                " \u20AC "
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 66,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "subtotal", children: [
                " Subtotal:  ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
                  producto.cantidad * producto.precio,
                  " \u20AC"
                ] }, void 0, !0, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 67,
                  columnNumber: 69
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 67,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 48,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "button",
              {
                type: "button",
                className: "botonEliminar",
                onClick: () => eliminarGuitarra(producto.id),
                children: "X "
              },
              void 0,
              !1,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 70,
                columnNumber: 29
              },
              this
            )
          ] }, producto.id, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        )
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Resumen del pedido" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
          " Total a pagar: ",
          total,
          "\u20AC "
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links7,
  loader: () => loader4,
  meta: () => meta7
});
var import_react14 = require("@remix-run/react");

// app/models/curso.server.js
async function getCurso() {
  return await (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/components/post.jsx
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Post2({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.formats.small.url, alt: `Imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Link, { className: "enlace", to: `/${url}`, children: "Leer Post" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var post_default = Post2;

// app/components/listado-posts.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "heading", children: " Blog" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      post_default,
      {
        post: post.attributes
      },
      post.id,
      !1,
      {
        fileName: "app/components/listado-posts.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/curso.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  let { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("style", { jsx: "true", children: `
            .curso {
                background-image: linear-gradient (to right, rgb (0 0 0 / .65), rgb(0 0 0 / 0.7)), url(${imagen.data.attributes.url})
            }
        ` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: [
        " ",
        titulo,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/curso.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "texto", children: [
        " ",
        contenido,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/curso.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/styles/curso.css
var curso_default = "/build/_assets/curso-KDGIJH2C.css";

// app/routes/index.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta7() {
}
function links7() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    }
  ];
}
async function loader4() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 51,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      Curso,
      {
        curso: curso.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ListadoPosts,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 61,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
var routes_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links8,
  loader: () => loader5,
  meta: () => meta8
});
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader5() {
  return (await getPosts()).data;
}
function links8() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta8() {
  return [
    { title: "GuitarLA - Nuestro blog" },
    { description: "GuitarLA - Blog de m\xFAsica y venta de guitarras" }
  ];
}
function Blog() {
  let posts = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "contenedor ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    ListadoPosts,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/blog.jsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6JPHN73B.js", imports: ["/build/_shared/chunk-PUDDEVZL.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VLBQNTS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$guitarraUrl": { id: "routes/$guitarraUrl", parentId: "root", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/$guitarraUrl-EYQNOUUH.js", imports: ["/build/_shared/chunk-BOIUPS4T.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$postUrl": { id: "routes/$postUrl", parentId: "root", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/$postUrl-3Y5KZRYS.js", imports: ["/build/_shared/chunk-JSBHMOFB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-WYYWQ7IF.js", imports: ["/build/_shared/chunk-P2ZRKIB7.js", "/build/_shared/chunk-JSBHMOFB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-427CJNW5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-433LOYCD.js", imports: ["/build/_shared/chunk-YER5PF5C.js", "/build/_shared/chunk-BOIUPS4T.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-ZGVI2KKJ.js", imports: ["/build/_shared/chunk-P2ZRKIB7.js", "/build/_shared/chunk-YER5PF5C.js", "/build/_shared/chunk-BOIUPS4T.js", "/build/_shared/chunk-JSBHMOFB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-PRGUFZTB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "72451b5f", hmr: void 0, url: "/build/manifest-72451B5F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$guitarraUrl": {
    id: "routes/$guitarraUrl",
    parentId: "root",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarraUrl_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/$postUrl": {
    id: "routes/$postUrl",
    parentId: "root",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
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
//# sourceMappingURL=index.js.map
