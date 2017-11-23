/**
 * Created by xuejian.xu on 2017/11/23.
 */

export default {
  s0: function (t) {
    t = parseInt(Number(t));
    if (t < 0) return "";
    if (t < 10) return "0" + String(t);
    return String(t)
  },
  tIWS: function (t, e) {
    var i = [];
    for (var s = t; s <= e; s++) {
      i.push(this.s0(s / 60) + ":" + this.s0(s % 60))
    }
    return i
  },
  gtr: function (t) {
    var e = [];
    for (var i, s, n, r, a, l, o, h = 0, f = t.length; h < f; h++) {
      n = t[h][0];
      r = t[h][1];
      a = Number(n.split(":")[0]) * 60 + Number(n.split(":")[1]);
      l = Number(r.split(":")[0]) * 60 + Number(r.split(":")[1]);
      o = this.tIWS(a, l);
      e = e.concat(o)
    }
    return e
  },
  tradingA: [],
  gta: function () {
    if (!this.tradingA.length) this.tradingA = this.gtr([
      ["9:30", "11:30"],
      ["13:00", "15:00"]
    ]);
    return this.tradingA
  },
  tradingUs: [],
  gtus: function () {
    if (!this.tradingUs.length) this.tradingUs = this.gtr([
      ["9:30", "16:00"]
    ]);
    return this.tradingUs
  },
  tradingHk: [],
  gthk: function () {
    if (!this.tradingHk.length) this.tradingHk = this.gtr([
      ["09:30", "12:00"],
      ["13:00", "16:00"]
    ]);
    return this.tradingHk
  },
  gata: function (t) {
    var e;
    switch (t) {
      case "US":
        e = this.gtus();
        break;
      case "HK":
        e = this.gthk();
        break;
      default:
      case "CN":
        e = this.gta();
        break
    }
    return e
  },
  ist: function (t, e) {
    t = t.toUpperCase();
    var i = this.gata(t);
    var s = NaN;
    if (i.indexOf) {
      s = i.indexOf(e)
    } else {
      for (var n = i.length; n--;) {
        if (i[n] == e) {
          s = n;
          break
        }
      }
    }
    return s >= 0
  },
  gltbt: function (t, e, i, s) {
    var n = [];
    var r = this.gata(s);
    var a = r.length;
    for (var l = 0, o = t * a; l < o; l++) {
      n.push({
        time: r[l % a],
        price: 0,
        percent: 0,
        avg_price: 0,
        volume: 0
      });
      if (!i) n[l].price = n[l].avg_price = e
    }
    n[0].price = n[0].avg_price = n[0].prevclose = e;
    n[0].volume = n[0].totalVolume = n[0].totalAmount = 0;
    return n
  },
  azft: function (t, e) {
    if (!t) return t;
    var i = this.gata(e);
    for (var s = 0, n = t.length; s < n; s++) t[s].time = i[s];
    t[0].date.setHours(0);
    return t
  },
  c2b: function (t) {
    t = t.replace(" ", "+");
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t);
    return e >= 0 ? e : 0
  },
  db: function (t) {
    if (!t) return [];
    var e = [];
    for (var i, s, n = 0, r = 0, a = 0, l = t.length; a < l; a++) {
      i = this.c2b(t.charAt(a));
      s = r & 6 ? r & 7 ^ 7 : 5;
      n |= i >> 5 - s << (r ^ 7) - s;
      n == 64767 && i == 63 && (n = 65535);
      if (r > 25) {
        r -= 32;
        e[e.length] = n;
        n = 0
      }
      n |= (i & (1 << 5 - s) - 1) << (r | 7) + 4 + s;
      r += 6
    }
    return e
  },
  fB: function (t, e, i) {
    var s = [];
    var n = this.gata(i),
      r = n.length * 3;
    var a = 0,
      l = 0,
      o;
    for (var h = 0, f = 0; f < r; f += 3) {
      h = Math.floor(f / 3);
      if (e) {
        s[s.length] = {
          time: n[h],
          price: t[f + 1] / 1e3
        }
      } else {
        s[s.length] = {
          time: n[h],
          avg_price: t[f] / 1e3,
          price: t[f + 1] / 1e3,
          volume: t[f + 2] / 100
        };
        if (s[h].volume > 0) l += s[h].volume;
        if (s[h].avg_price > 0) o = s[h].avg_price
      }
    }
    if (s[0].price < 0) s[0].price = s[0].avg_price = l = a = 0;
    if (!e) {
      s[0].totalVolume = l;
      s[0].totalAmount = l * o
    }
    return s
  }
};
