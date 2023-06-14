import {
  __commonJS,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-NLQNPAAV.js";

// empty-module:~/models/posts.server
var require_posts = __commonJS({
  "empty-module:~/models/posts.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// app/utils/helpers.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-IW7SJVNI.css";

export {
  require_posts,
  formatearFecha,
  blog_default
};
//# sourceMappingURL=/build/_shared/chunk-JSBHMOFB.js.map
