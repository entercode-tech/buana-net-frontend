let base = config.baseUrl;
const Routes = [
  {
    path: base,
    middleware: [AuthMiddleware, MembershipMiddleware],
  },
  {
    path: base + "index.html",
    middleware: [AuthMiddleware, MembershipMiddleware],
  },
  {
    path: base + "login/",
    middleware: [AuthMiddleware],
  },
  {
    path: base + "login",
    middleware: [AuthMiddleware],
  },
  {
    path: base + "login/index.html",
    middleware: [AuthMiddleware],
  },
  {
    path: base + "mikrotik",
    middleware: [AuthMiddleware],
  },
  {
    path: base + "mikrotik/index.html",
    middleware: [AuthMiddleware],
  },
];

myconsole(base + "/login/");
