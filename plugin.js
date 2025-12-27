module.exports = {
  name: 'Filter Sample Plugin', // @required plugin name
  uid: 'com.onecomme.plugin-filter-sample', // @required unique plugin id
  version: '0.0.1', // @required semver version
  author: 'OneComme', // @required author name
  url: 'https://onecomme.com', // @optional link (ex. documentation link)
  permissions: ['filter.comment'], // @required　https://onecomme.com/docs/developer/websocket-api/#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF
  defaultState: {},
  /**
   * コメントフィルタ
   * @param {Comment} comment 
   * @param {Service} service 
   * @param {UserNameData | null} userData 
   * @returns Promise<Comment | false>
   */
  filterComment(comment, service, userData) {
    console.info("This is a plugin test")

    // move qiitan
    const url = 'https://obniz.com/obniz/[OBNIZ-ID]/api/1';
    const data = [
  {
    io: {
      animation: {
        name: "LED",
        repeat: 2,
        status: "loop",
        states: [
          {
            duration: 2000,
            state: { io11: true }
          },
          {
            duration: 500,
            state: { io11: null }
          }
        ]
      }
    }
  }
];

    async function postAnimation() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.info("qiitan success");
  } catch (err) {
    console.info("qiitan fail");
  }
}

    postAnimation();

    return comment
  },
}
