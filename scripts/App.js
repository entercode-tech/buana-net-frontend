class App {
  #routes = [];
  #registeredRoutes = [];
  #currentPath = "";
  use(route, middleware = []) {
    this.#routes.push({
      path: route,
      middleware: middleware,
    });
  }

  start() {
    this.registerCurrentPath();
    this.registerRoutes();
    // console.log("start the app");

    this.#registeredRoutes.forEach((element) => {
      //   console.log(this.#currentPath);
      if (this.#currentPath == element.path) {
        element?.middleware.forEach(async (element) => {
          console.log("start the middleware");
          let middlewareInstance = new element();
          middlewareInstance.run();
        });
      }
    });
  }

  routes(routes) {
    this.#routes = [...this.#routes, ...routes];
  }

  registerCurrentPath() {
    this.#currentPath = window.location.pathname;
  }
  registerRoutes() {
    this.#routes.forEach((element) => {
      let middleware = [];
      if (element?.middleware) {
        middleware = Array.isArray(element.middleware)
          ? [...element.middleware]
          : [element.middleware];
      }

      this.#registeredRoutes.push({
        path: element?.path ?? "",
        middleware,
      });
    });
  }
}

let app = new App();
app.routes(Routes);
app.start();
