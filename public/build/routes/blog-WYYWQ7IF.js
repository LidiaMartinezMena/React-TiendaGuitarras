import {
  ListadoPosts
} from "/build/_shared/chunk-P2ZRKIB7.js";
import {
  blog_default,
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

// browser-route-module:routes/blog.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/blog.jsx
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
function meta() {
  return [
    { title: "GuitarLA - Nuestro blog" },
    { description: "GuitarLA - Blog de m\xFAsica y venta de guitarras" }
  ];
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ListadoPosts,
    {
      posts
    },
    void 0,
    false,
    {
      fileName: "app/routes/blog.jsx",
      lineNumber: 34,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;
export {
  blog_default2 as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog-WYYWQ7IF.js.map
