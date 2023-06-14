import {
  blog_default,
  formatearFecha,
  require_posts
} from "/build/_shared/chunk-JSBHMOFB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PUDDEVZL.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/$postUrl.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/$postUrl.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_posts = __toESM(require_posts());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta({ data }) {
  if (!data) {
    return {
      title: "Entrada no encontrada",
      description: "Guitarras, venta de guitarras, entrada no encontrada"
    };
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}` }
  ];
}
function Post() {
  var _a;
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].atributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "contenedor post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: (_a = imagen.data) == null ? void 0 : _a.attributes.url, alt: `Imagen blog ${titulo}` }, void 0, false, {
      fileName: "app/routes/$postUrl.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: titulo }, void 0, false, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/routes/$postUrl.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$postUrl.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$postUrl.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  Post as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$postUrl-3Y5KZRYS.js.map
