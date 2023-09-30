const Routes = [
  {
    path: "/",
    middleware: [AuthMiddleware, MembershipMiddleware],
  },
  {
    path: "/index.html",
    middleware: [AuthMiddleware, MembershipMiddleware],
  },
  {
    path: "/login/",
    middleware: AuthMiddleware,
  },
  {
    path: "/login",
    middleware: AuthMiddleware,
  },
  {
    path: "/login/index.html",
    middleware: AuthMiddleware,
  },
  {
    path: "/mikrotik",
    middleware: AuthMiddleware,
  },
  {
    path: "/mikrotik/index.html",
    middleware: AuthMiddleware,
  },
];
