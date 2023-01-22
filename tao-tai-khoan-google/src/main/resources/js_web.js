setInterval(function () {
  if (document.location.href.indexOf('signup/setup/v2/users') >= 0) {
    start().then(r => {
    });
  }
}, 500);

async function start() {
  await fetch("http://127.0.0.1:8080/start", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  }).then(async value => {
    var data = await value.json();
    if (data.state === true) {
      var spans = document.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent.trim() == 'Lưu người dùng') {
          spans[i].click()
        }
      }
    }
  });
}

setInterval(function () {
  if (document.location.href.indexOf('/u/0/ac/users') >= 0) {
    startSetPassword().then(r => {
    });
  }
}, 1000);

async function startSetPassword() {
  // tao mat khau custom
  var labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].textContent.trim() == 'Tạo mật khẩu') {
      labels[i].click()
    }
  }

  // bỏ yêu cầu tạo lại mật khu khi đăng nhập
  var spanId = "zzz";
  var spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].textContent.trim()
        == 'Yêu cầu người dùng thay đổi mật khẩu của họ khi đăng nhập') {
      spanId = spans[i].id;
    }
  }

  var divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].getAttribute('aria-labelledby') === spanId) {
      if (divs[i].getAttribute('aria-checked') === 'true') {
        divs[i].click()
      }
    }
  }

  // click đặt lại
  var spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].textContent.trim() == 'Đặt lại') {
      spans[i].click()
    }
  }
  // click  xong
  var spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].textContent.trim() == 'Xong') {
      spans[i].click()
    }
  }
}