let base = config.baseUrl;
const Routes = [
  {
    path: base,
    middleware: [AuthMiddleware],
  },
  {
    path: base + "index.html",
    middleware: [AuthMiddleware],
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
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik/index.html",
    middleware: [AuthMiddleware],
  },
  {
    path: base + "entercode/membership.php",
    middleware: [AuthMiddleware],
  },
];
