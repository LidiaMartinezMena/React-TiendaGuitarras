import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  useLocation
} from "/build/_shared/chunk-PUDDEVZL.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:root.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react());

// app/styles/index.css
var styles_default = "/build/_assets/index-MPXFZIPG.css";

// app/components/header.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Navegacion() {
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: " Inicio "
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 12,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: " Nosotros "
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 16,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: " Tienda "
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 20,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: " Blog "
      },
      void 0,
      false,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 24,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/carrito",
        children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: carrito_default, alt: "Carrito de compras" }, void 0, false, {
            fileName: "app/components/navegacion.jsx",
            lineNumber: 30,
            columnNumber: 19
          }, this),
          " "
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 28,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Imagen logo" }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(navegacion_default, {}, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "copyright", children: [
      " Todos los derechos reservados ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " "
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
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
  var _a;
  const carritoLS = typeof window !== "undefined" ? (_a = JSON.parse(localStorage.getItem("carrito"))) != null ? _a : [] : null;
  const [carrito, setCarrito] = (0, import_react3.useState)(carritoLS);
  (0, import_react3.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };
  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };
  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
    setCarrito(carritoActualizado);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Outlet,
    {
      context: {
        agregarCarrito,
        carrito,
        actualizarCantidad,
        eliminarGuitarra
      }
    },
    void 0,
    false,
    {
      fileName: "app/root.jsx",
      lineNumber: 92,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(footer_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const error = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 128,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volvera a la p\xE1gina principal" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-VLBQNTS2.js.map
