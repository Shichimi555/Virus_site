import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as platform from "https://cdn.skypack.dev/platform@1.3.6";

const app = new Vue ({
  el: "#app",
  data: {
    count: 3 * 24 * 60 * 60,
    color: "black"
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1
      if (this.color ==="black"){
        this.color ="red"
      } else {
        this.color = "black"
      }
    }, 1000)
  }
})


$("#device").text(platform.description);
$("#date").text(new Date().toLocaleString("ja-JP"));





/*
let c = 6*60*60;
setInterval(() => {
  $("#hour").text(Math.floor(c /3600));
  $("#minute").text(Math.floor((c %3600) /60));
  $("#second").text(Math.floor(c % 60));

  c -= 1;
}, 1000);
*/
