class MembershipMiddleware {
  async run() {
    let user = await window.auth.user();

    async function renewall() {
      let req = new RequestAPI();
      let header = window.auth.getHeaderAuthorization();
      let response = await req.postData("/membership/renew", {}, header,config.baseUrl + 'login/');
      if (response.status == true) {
        window.location.href = response.data;
      } else {
        window.location.href = config.baseUrl + 'login/';
      }
    }

    if (!user.membership) {
      if (confirm('Select a subscription package')) {
        window.location.href = config.baseUrl + 'login/'
      } else {
        window.location.href = config.baseUrl
      }
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