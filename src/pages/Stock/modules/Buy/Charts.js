/**
 * Created by xuejian.xu on 2017/11/23.
 */

import {chartLine} from '../../../../common/echarts.extends';
import _each from 'lodash/each';
var hq_str_ml_sh600036="UHgAAGR4AAD46xYAWHgAAIx4AADPeAkAcXgAABh5AADWwwYAi3gAABh5AACougYAqXgAAHx5AAAT0wcAyngAAEB5AABAHA0A1ngAADZ5AABA7wcA3XgAAPB4AAC47ggA03gAAFp4AADKwwgAxngAAEZ4AAAR3wcAuXgAAB54AADQZwkArngAADJ4AABYewkAm3gAAIh3AAD0Qw4AfXgAAAZ3AADYQwwAYngAAFZ3AABMWAsAWXgAAOx3AADUFAcAV3gAAFp4AAA9vwkAWHgAAHh4AABUtQUAWHgAAFB4AADscgUAV3gAAOx3AABEzAMAVXgAAB54AAACpwQAVHgAAAp4AAB0RwMAUXgAANh3AAB4SwUATngAAKZ3AABrDAQAQ3gAAEx3AABa/AkAO3gAAFZ3AAAuiAcAOXgAAIh3AACHPQIANngAAFZ3AABMwAIANHgAAEx3AAB9tAIAMXgAAIh3AAAcLAMALngAAKZ3AADeewUAKngAAOJ3AAA89AYAKXgAAJJ3AABgEAMAKHgAAM53AABQTQMAJngAAMR3AACoMAQAJHgAAIh3AABQFQQAIngAAIh3AAA0kgIAIXgAAOx3AAB9RgIAIXgAAB54AABEbgIAIXgAAAp4AADquwMAIXgAACh4AABgkwIAIngAAJZ4AABUogQAI3gAAG54AABoewMAJngAALR4AAD8EAcAKHgAAPp4AACMiAQAKngAAL54AADgAwMAK3gAAKB4AADwKgMALXgAAGR4AAC7wQMALXgAAIJ4AAAolAIALngAAIJ4AAD4SgMALngAAFB4AABQngIAL3gAAEZ4AADEEAMAL3gAAEZ4AAAJBQIAL3gAAFB4AAAQeQMAMHgAAB54AAAPPQMAMHgAAHh4AAASwQQAMngAALR4AAAKBAYAM3gAAIJ4AAC8mQQANHgAAFp4AAC4DAQANHgAAHh4AABYvgIANXgAAIJ4AACc4QQANXgAAG54AABIsAIANngAAKB4AACQsQQAN3gAAG54AAD0bAMAN3gAAEZ4AAAQFQMAOHgAADx4AAC8OwMAOHgAACh4AACw3wEAN3gAAAp4AAAYnwIAN3gAAAB4AADMfwEAN3gAAOJ3AADQ4gEANngAAKZ3AAA4+wEANXgAALp3AADDmAIANXgAAM53AAAAqQEANHgAABR4AACcpwQANHgAAAB4AACUzQIAM3gAAOx3AACgywIAM3gAABR4AAD54gEAM3gAAAB4AAA04wEAMngAAOx3AADfcQMAMngAANh3AABQygMAMXgAAM53AACklgEAMXgAAFB4AAARVgMAMXgAADJ4AABc5wIAMXgAAFB4AACcogIAMngAAIx4AACIOQIAM3gAAIx4AABMtAQAM3gAAHh4AAAOcAEANHgAAFB4AABU/wEANHgAACh4AACepAEANHgAACh4AACAtQEAM3gAABR4AAAAWAIAM3gAAM53AAC8kgEAM3gAAOx3AACQJwIAMngAAM53AABkIAMAMXgAAKZ3AABKjAUAL3gAAOx3AABi7gUALngAAOx3AADFoAQALngAAAp4AACw8gIALngAAOJ3AABcGQMALHgAAIh3AADYZwYAK3gAAMR3AAD8nwQAKngAALp3AABoEQQAKHgAADx4AADsNAcAKHgAAMR3AAB0sQIAKHgAAPZ3AACQ3AEAJ3gAAOJ3AACEdAIAJ3gAANh3AACQFAEAJ3gAALB3AAA0YAIAJngAAJx3AACcHwMAJXgAALB3AACEKQIAJHgAAHR3AACHFAQAIXgAAOx3AAArTwoAIXgAAOx3AACVVgMAH3gAAKZ3AABQ4wMAH3gAALp3AADsowEAH3gAAOJ3AAD84wEAHngAAJx3AAD0QAIAHXgAAH53AACsGwYAHHgAAAB4AABorQMAHHgAALB3AADo8QIAHHgAALB3AAAAAAAAF3gAAIh3AAChlA8AFngAAGB3AAD8YQYAFXgAAGp3AAD0ngMAE3gAAEJ3AAAsxAUAD3gAABp3AAC2mQgADXgAADh3AABmugQACngAAPx2AAA06AcAB3gAABp3AABcOQYABXgAAAZ3AAAg3wUAA3gAAPx2AAC3NAQAAngAAAZ3AACr4AIA/3cAAGp3AACN0gcA/ncAABB3AADssAMA/XcAAPx2AAC8CQMA/HcAABp3AAD0QAIA+ncAAGp3AACICAYA+XcAACR3AADo3gEA93cAADh3AABYxAYA9ncAAGB3AAAYWwUA9XcAAGp3AACg3gMA9HcAAH53AADd1AQA9HcAAJx3AAAgxQEA9HcAAIh3AABONwIA9HcAAHR3AAB0CAEA83cAAFZ3AAD1gwIA83cAAFZ3AADMuQEA8ncAAEx3AABEKwMA8XcAAIh3AAAA7gIA8HcAAEx3AABDqwMA8HcAAFZ3AAAMugIA73cAAJJ3AADIDAUA7ncAAGp3AAB0qwMA7ncAAGp3AABcDAEA7XcAAEJ3AAC7fQIA7HcAALB3AAC2NAYA7HcAAPZ3AACiWwQA7HcAAPZ3AABoxgMA7HcAANh3AACKfAMA7HcAAKZ3AAAZOgEA63cAAGB3AACfbgIA6ncAACR3AADj5QMA6XcAAOJ3AAB0VQkA6XcAAEJ3AADQ1gMA6HcAAIh3AADhqgYA53cAAGp3AAAcnQUA5ncAAKZ3AAAsLgUA5XcAAKZ3AADeCQMA5XcAAKZ3AACQIQMA5XcAANh3AAAIJwMA5XcAANh3AABUEgMA5XcAANh3AACP6QMA5XcAAM53AACs3AMA5XcAAKZ3AAA0LgIA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";

//分时图数据转化
var transformTool = {
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

// k线图数据转化
function transformToolK(t) {
  var e, i = arguments,
    s, n, r, a, l, o, h, f = 864e5,
    c = 7657,
    u = [],
    d = [],
    v = ~(3 << 30),
    p = 1 << 30,
    g = [0, 3, 5, 6, 9, 10, 12, 15, 17, 18, 20, 23, 24, 27, 29, 30],
    m = Math,
    N = function () {
      var i, a;
      for (i = 0; i < 64; i++) {
        d[i] = m.pow(2, i);
        if (i < 26) {
          u[i] = b(i + 65);
          u[i + 26] = b(i + 97);
          if (i < 10) {
            u[i + 52] = b(i + 48)
          }
        }
      }
      u.push("+", "/");
      u = u.join("");
      s = t.split("");
      n = s.length;
      for (i = 0; i < n; i++) {
        s[i] = u.indexOf(s[i])
      }
      r = {};
      e = o = 0;
      l = {};
      a = M([12, 6]);
      h = 63 ^ a[1];
      return {
          _1479: T,
          _136: A,
          _200: w,
          _139: D,
          _197: S
        }["_" + a[0]] || function () {
          return []
        }
    }, b = String.fromCharCode,
    _ = function (t) {
      return t === {}._
    }, I = function () {
      var t, e;
      t = y();
      e = 1;
      for (; ;) {
        if (y()) {
          e++
        } else {
          return e * (t * 2 - 1)
        }
      }
    }, y = function () {
      var t;
      if (e >= n) {
        return 0
      }
      t = s[e] & 1 << o;
      o++;
      if (o >= 6) {
        o -= 6;
        e++
      }
      return !!t
    }, M = function (t, i, r) {
      var a, l, h, f, c;
      l = [];
      h = 0;
      if (!i) {
        i = []
      }
      if (!r) {
        r = []
      }
      for (a = 0; a < t.length; a++) {
        f = t[a];
        h = 0;
        if (!f) {
          l[a] = 0;
          continue
        }
        if (e >= n) {
          return l
        }
        if (t[a] <= 0) {
          h = 0
        } else if (t[a] <= 30) {
          for (; ;) {
            c = 6 - o;
            c = c < f ? c : f;
            h |= (s[e] >> o & (1 << c) - 1) << t[a] - f;
            o += c;
            if (o >= 6) {
              o -= 6;
              e++
            }
            f -= c;
            if (f <= 0) {
              break
            }
          }
          if (i[a] && h >= d[t[a] - 1]) {
            h -= d[t[a]]
          }
        } else {
          h = M([30, t[a] - 30], [0, i[a]]);
          if (!r[a]) {
            h = h[0] + h[1] * d[30]
          }
        }
        l[a] = h
      }
      return l
    }, O = function (t) {
      var e, i, s;
      if (t > 1) {
        e = 0
      }
      for (e = 0; e < t; e++) {
        r.d++;
        s = r.d % 7;
        if (s == 3 || s == 4) {
          r.d += 5 - s
        }
      }
      i = new Date;
      i.setTime((c + r.d) * f);
      return i
    }, w = function () {
      var t, i, s, a, l, o;
      if (h >= 1) {
        return []
      }
      r.d = M([18], [1])[0] - 1;
      a = M([3, 3, 30, 6]);
      r.p = a[0];
      r.ld = a[1];
      r.cd = a[2];
      r.c = a[3];
      r.m = m.pow(10, r.p);
      r.pc = r.cd / r.m;
      s = [];
      for (t = 0; ; t++) {
        l = {
          d: 1
        };
        if (y()) {
          a = M([3])[0];
          if (a == 0) {
            l.d = M([6])[0]
          } else if (a == 1) {
            r.d = M([18])[0];
            l.d = 0
          } else {
            l.d = a
          }
        }
        o = {
          date: O(l.d)
        };
        if (y()) {
          r.ld += I()
        }
        a = M([r.ld * 3], [1]);
        r.cd += a[0];
        o.close = r.cd / r.m;
        s.push(o);
        if (e >= n || e == n - 1 && !((r.c ^ t + 1) & 63)) {
          break
        }
      }
      s[0].prevclose = r.pc;
      return s
    }, A = function () {
      var t, i, s, a, l, o, f, c, u, d, v;
      if (h >= 2) {
        return []
      }
      f = [];
      u = {
        v: "volume",
        p: "price",
        a: "avg_price"
      };
      r.d = M([18], [1])[0] - 1;
      c = {
        date: O(1)
      };
      s = M(h < 1 ? [3, 3, 4, 1, 1, 1, 5] : [4, 4, 4, 1, 1, 1, 3]);
      for (t = 0; t < 7; t++) {
        r[["la", "lp", "lv", "tv", "rv", "zv", "pp"][t]] = s[t]
      }
      r.m = m.pow(10, r.pp);
      if (h >= 1) {
        s = M([3, 3]);
        r.c = s[0];
        s = s[1]
      } else {
        s = 5;
        r.c = 2
      }
      r.pc = M([s * 6])[0];
      c.pc = r.pc / r.m;
      r.cp = r.pc;
      r.da = 0;
      r.sa = r.sv = 0;
      for (t = 0; ; t++) {
        if (e >= n || e == n - 1 && !((r.c ^ t) & 7)) {
          break
        }
        l = {};
        a = {};
        d = r.tv ? y() : 1;
        for (i = 0; i < 3; i++) {
          v = ["v", "p", "a"][i];
          if (d ? y() : 0) {
            s = I();
            r["l" + v] += s
          }
          o = v == "v" && r.rv ? y() : 1;
          s = M([r["l" + v] * 3 + (v == "v" ? o * 7 : 0)], [!!i])[0] * (o ? 1 : 100);
          a[v] = s;
          if (v == "v") {
            if (!(l[u[v]] = s) && t < 241 && (r.zv ? !y() : 1)) {
              a["p"] = 0;
              break
            }
          } else if (v == "a") {
            r.da = (h < 1 ? 0 : r.da) + a["a"]
          }
        }
        r.sv += a["v"];
        l[u["p"]] = (r.cp += a["p"]) / r.m;
        r.sa += a["v"] * r.cp;
        l[u["a"]] = _(a["a"]) ? t ? f[t - 1][u["a"]] : l[u["p"]] : r.sv ? ((m.floor((r.sa * (2e3 / r.m) + r.sv) / r.sv) >> 1) + r.da) / 1e3 : l[u["p"]] + r.da / 1e3;
        f.push(l)
      }
      f[0].date = c.date;
      f[0].prevclose = c.pc;
      return f
    }, T = function () {
      var t, e, i, s, n, a, l, o;
      if (h >= 1) {
        return []
      }
      r.lv = 0;
      r.ld = 0;
      r.cd = 0;
      r.cv = [0, 0];
      r.p = M([6])[0];
      r.d = M([18], [1])[0] - 1;
      r.m = m.pow(10, r.p);
      a = M([3, 3]);
      r.md = a[0];
      r.mv = a[1];
      t = [];
      for (; ;) {
        a = M([6]);
        if (!a.length) {
          break
        }
        s = {
          c: a[0]
        };
        n = {};
        s.d = 1;
        if (s.c & 32) {
          for (; ;) {
            a = M([6])[0];
            if ((a | 16) == 63) {
              o = a & 16 ? "x" : "u";
              a = M([3, 3]);
              s[o + "_d"] = a[0] + r.md;
              s[o + "_v"] = a[1] + r.mv;
              break
            } else if (a & 32) {
              l = a & 8 ? "d" : "v";
              o = a & 16 ? "x" : "u";
              s[o + "_" + l] = (a & 7) + r["m" + l];
              break
            } else {
              l = a & 15;
              if (l == 0) {
                s.d = M([6])[0]
              } else if (l == 1) {
                r.d = l = M([18])[0];
                s.d = 0
              } else {
                s.d = l
              } if (!(a & 16)) {
                break
              }
            }
          }
        }
        n.date = O(s.d);
        for (l in {
          v: 0,
          d: 0
        }) {
          if (!_(s["x_" + l])) {
            r["l" + l] = s["x_" + l]
          }
          if (_(s["u_" + l])) {
            s["u_" + l] = r["l" + l]
          }
        }
        s.l_l = [s.u_d, s.u_d, s.u_d, s.u_d, s.u_v];
        o = g[s.c & 15];
        if (s.u_v & 1) {
          o = 31 - o
        }
        if (s.c & 16) {
          s.l_l[4] += 2
        }
        for (i = 0; i < 5; i++) {
          if (o & 1 << 4 - i) {
            s.l_l[i]++
          }
          s.l_l[i] *= 3
        }
        s.d_v = M(s.l_l, [1, 0, 0, 1, 1], [0, 0, 0, 0, 1]);
        l = r.cd + s.d_v[0];
        n.open = l / r.m;
        n.high = (l + s.d_v[1]) / r.m;
        n.low = (l - s.d_v[2]) / r.m;
        n.close = (l + s.d_v[3]) / r.m;
        a = s.d_v[4];
        if (typeof a == "number") {
          a = [a, a >= 0 ? 0 : -1]
        }
        r.cd = l + s.d_v[3];
        o = r.cv[0] + a[0];
        r.cv = [o & v, r.cv[1] + a[1] + !!((r.cv[0] & v) + (a[0] & v) & p)];
        n.volume = (r.cv[0] & p - 1) + r.cv[1] * p;
        t.push(n)
      }
      return t
    }, D = function () {
      var t, e, i, s;
      if (h > 1) {
        return []
      }
      r.l = 0;
      s = -1;
      r.d = M([18])[0] - 1;
      i = M([18])[0];
      while (r.d < i) {
        e = O(1);
        if (s <= 0) {
          if (y()) {
            r.l += I()
          }
          s = M([r.l * 3], [0])[0] + 1;
          if (!t) {
            t = [e];
            s--
          }
        } else {
          t.push(e)
        }
        s--
      }
      return t
    }, S = function () {
      var t, i, s, a, l, o;
      if (h >= 1) {
        return []
      }
      r.f = M([6])[0];
      r.c = M([6])[0];
      s = [];
      r.dv = [];
      r.dl = [];
      for (t = 0; t < r.f; t++) {
        r.dv[t] = 0;
        r.dl[t] = 0
      }
      for (t = 0; ; t++) {
        if (e >= n || e == n - 1 && !((r.c ^ t) & 7)) {
          break
        }
        l = [];
        for (i = 0; i < r.f; i++) {
          if (y()) {
            r.dl[i] += I()
          }
          r.dv[i] += M([r.dl[i] * 3], [1])[0];
          l[i] = r.dv[i]
        }
        s.push(l)
      }
      return s
    };
  return N()()
}

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export default (dom)=>{
  const stockCode = 'sh600036';
  var sChartData = hq_str_ml_sh600036;
  var result = transformTool.fB(transformTool.db(sChartData), false, 'CN');
  var chartVal = [];

  _each(result, function (item) {
    var inVal = [];
    if (item.price >= 0) {
      var dVal = new Date().format("yyyy-MM-dd");

      var s1arr1 = dVal.split("-");
      var s1arr2 = item.time.split(":");
      if (s1arr2.length == 2) {
        s1arr2.push("00");
      }

      var rVal = new Date(s1arr1[0], s1arr1[1] - 1, s1arr1[2], s1arr2[0], s1arr2[1], s1arr2[2]).getTime();
      inVal.push(rVal);
      inVal.push(item.price);
      chartVal.push(inVal);
    }
    //console.log(inVal);
    //console.log(chartVal);
  });

  var json = { "records": chartVal, "y_close": '30.9' };
  chartLine.init("#chart", json, null, dom);
}
