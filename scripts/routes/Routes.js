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
    path: base + "pcc.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  ////
  {
    path: base + "mikrotik-burst-limit-calculator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-hide-my-router-from-isp.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-backup-to-mail.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-failover-script-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "static-routing-games.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "nth.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "ecmp.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "policy-based-routing-website.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-local-ip-pbr.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-port-forward-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-port-static-routing.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "vpn-tunnel-all-traffic-script-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "remote-ip-public-static.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "vpn-game-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "vpn-game-generator2.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "vpn-remote-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-static-routing.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-pcq-burst-rate-queue-size-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "simple-queue-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "simple-queue-generator-shared.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "queue-tree-generator-shared.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-pcq-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-queue-qos.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-qr-code-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-block-sharing-hotspot.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-hotspot-wizard.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-username-password-ppp-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-username-password-hotspot-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-share-user-multi-login.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-expired-isolate-pppoe-hotspot.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-dns-over-https-doh.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-netwatch-monitoring.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-bonding-interface.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-dhcp-rogue.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-hide-my-router-from-isp.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "advanced-mikrotik-protection.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "port-knocking-icmp.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-block-website-generator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mikrotik-mangle-script-obfuscator.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "pcc-calculation.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "mirkotik-indonesia-timezone.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  },
  {
    path: base + "wifid-wms-seamless.html",
    middleware: [AuthMiddleware,MembershipMiddleware],
  }
];
