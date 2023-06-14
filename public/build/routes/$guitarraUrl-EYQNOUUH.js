import {
  guitarras_default,
  require_guitarras
} from "/build/_shared/chunk-BOIUPS4T.js";
import {
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
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/$guitarraUrl.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/$guitarraUrl.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_guitarras = __toESM(require_guitarras());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return {
      title: "Guitarra no encontrada",
      description: "Guitarras, venta de guitarras, guitarra no encontrada"
    };
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
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
function Guitarra() {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = (0, import_react2.useState)(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen de la guitarra ${nombre}` }, void 0, false, {
      fileName: "app/routes/$guitarraUrl.jsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, false, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 81,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, true, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "cantidad", children: " Cantidad " }, void 0, false, {
          fileName: "app/routes/$guitarraUrl.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            onChange: (e) => setCantidad(+e.target.value),
            id: "cantidad",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: " -- Seleccione --" }, void 0, false, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 90,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: " 1 " }, void 0, false, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 91,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: " 2 " }, void 0, false, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 92,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: " 3 " }, void 0, false, {
                fileName: "app/routes/$guitarraUrl.jsx",
                lineNumber: 93,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/$guitarraUrl.jsx",
            lineNumber: 87,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "submit",
            value: "Agregar al carrito"
          },
          void 0,
          false,
          {
            fileName: "app/routes/$guitarraUrl.jsx",
            lineNumber: 96,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/$guitarraUrl.jsx",
        lineNumber: 84,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/$guitarraUrl.jsx",
      lineNumber: 79,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$guitarraUrl.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var guitarraUrl_default = Guitarra;
export {
  guitarraUrl_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$guitarraUrl-EYQNOUUH.js.map
