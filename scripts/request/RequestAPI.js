class RequestAPI {
  constructor() {
    this.baseUrl = config.endpointAPI;
  }
  async postData(url = "", data = {}, headerParams = {}) {
    // Default options are marked with *
    let header = {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };

    header = {
      ...header,
      ...headerParams
    };
    const response = await fetch(this.baseUrl + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: header,
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    let res = await response.json()

    if (response.status !== 200) {
      if (res.message) {
        Alert.render("❌ " + res.message);
      } else {
        Alert.render("❌ " + response.status + ' ' + response.statusText);
      }
    } else {
      return res
    }
  }

  async getData(url = "", data = {}, headerParams = {}) {
    let header = {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };

    header = {
      ...header,
      ...headerParams
    };
    // Default options are marked with *
    const response = await fetch(this.baseUrl + url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: header, // body data type must match "Content-Type" header
    });

    let res = await response.json()

    if (response.status !== 200) {
      if (res.message) {
        Alert.render("❌ " + res.message);
      } else {
        Alert.render("❌ " + response.status + ' ' + response.statusText);
      }
    } else {
      return res
    }

  }
}