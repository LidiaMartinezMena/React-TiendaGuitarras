import {
  ListadoPosts
} from "/build/_shared/chunk-P2ZRKIB7.js";
import {
  ListadoGuitarras
} from "/build/_shared/chunk-YER5PF5C.js";
import {
  guitarras_default,
  require_guitarras
} from "/build/_shared/chunk-BOIUPS4T.js";
import {
  blog_default,
  require_posts
} from "/build/_shared/chunk-JSBHMOFB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PUDDEVZL.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// empty-module:~/models/curso.server
var require_curso = __commonJS({
  "empty-module:~/models/curso.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_guitarras = __toESM(require_guitarras());
var import_posts = __toESM(require_posts());
var import_curso = __toESM(require_curso());

// app/components/curso.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { jsx: "true", children: `
            .curso {
                background-image: linear-gradient (to right, rgb (0 0 0 / .65), rgb(0 0 0 / 0.7)), url(${imagen.data.attributes.url})
            }
        ` }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "heading", children: [
        " ",
        titulo,
        " "
      ] }, void 0, true, {
        fileName: "app/components/curso.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: [
        " ",
        contenido,
        " "
      ] }, void 0, true, {
        fileName: "app/components/curso.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/curso.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/curso.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/styles/curso.css
var curso_default = "/build/_assets/curso-KDGIJH2C.css";

// app/routes/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function meta() {
}
function links() {
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
function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 51,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Curso,
      {
        curso: curso.attributes
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ListadoPosts,
      {
        posts
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 61,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
var routes_default = Index;
export {
  routes_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-ZGVI2KKJ.js.map
