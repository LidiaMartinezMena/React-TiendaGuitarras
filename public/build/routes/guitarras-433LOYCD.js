import {
  ListadoGuitarras
} from "/build/_shared/chunk-YER5PF5C.js";
import {
  guitarras_default,
  require_guitarras
} from "/build/_shared/chunk-BOIUPS4T.js";
import {
  Outlet,
  useLoaderData,
  useOutletContext
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

// browser-route-module:routes/guitarras.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/guitarras.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_guitarras = __toESM(require_guitarras());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    { title: "GuitarLA - Tienda de guitarras" },
    { description: "GuitarLA - Nuestra colecci\xF3n de guitarras" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda() {
  const data = useOutletContext();
  console.log(data);
  const guitarras = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      false,
      {
        fileName: "app/routes/guitarras.jsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Outlet,
      {
        context: useOutletContext()
      },
      void 0,
      false,
      {
        fileName: "app/routes/guitarras.jsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda;
export {
  guitarras_default2 as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/guitarras-433LOYCD.js.map
