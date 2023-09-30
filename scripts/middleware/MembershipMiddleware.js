class MembershipMiddleware {
  async run() {
    let user = await window.auth.user();

    async function renewall() {
      let req = new RequestAPI();
      let header = window.auth.getHeaderAuthorization();
      let response = await req.postData("/membership/renew", {}, header);
      if (response.status == true) {
        window.location.href = response.data;
      }
    }

    if (!user.membership) {
      alert("belum subscribe");
    } else {
      switch (user.membership.status) {
        case "pending":
          renewall();
          break;
        case "expire":
          renewall();
          break;
      }
    }
  }
}
