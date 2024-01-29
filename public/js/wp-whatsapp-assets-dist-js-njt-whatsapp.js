(() => {
    var t = {
            484: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = 1e3,
                        e = 6e4,
                        n = 36e5,
                        i = "millisecond",
                        r = "second",
                        o = "minute",
                        a = "hour",
                        s = "day",
                        c = "week",
                        l = "month",
                        u = "quarter",
                        d = "year",
                        p = "date",
                        f = "Invalid Date",
                        m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        g = {
                            name: "en",
                            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                        },
                        y = function(t, e, n) {
                            var i = String(t);
                            return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(n) + t
                        },
                        _ = {
                            s: y,
                            z: function(t) {
                                var e = -t.utcOffset(),
                                    n = Math.abs(e),
                                    i = Math.floor(n / 60),
                                    r = n % 60;
                                return (e <= 0 ? "+" : "-") + y(i, 2, "0") + ":" + y(r, 2, "0")
                            },
                            m: function t(e, n) {
                                if (e.date() < n.date()) return -t(n, e);
                                var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                    r = e.clone().add(i, l),
                                    o = n - r < 0,
                                    a = e.clone().add(i + (o ? -1 : 1), l);
                                return +(-(i + (n - r) / (o ? r - a : a - r)) || 0)
                            },
                            a: function(t) {
                                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                            },
                            p: function(t) {
                                return {
                                    M: l,
                                    y: d,
                                    w: c,
                                    d: s,
                                    D: p,
                                    h: a,
                                    m: o,
                                    s: r,
                                    ms: i,
                                    Q: u
                                } [t] || String(t || "").toLowerCase().replace(/s$/, "")
                            },
                            u: function(t) {
                                return void 0 === t
                            }
                        },
                        b = "en",
                        v = {};
                    v[b] = g;
                    var w = function(t) {
                            return t instanceof $
                        },
                        T = function(t, e, n) {
                            var i;
                            if (!t) return b;
                            if ("string" == typeof t) v[t] && (i = t), e && (v[t] = e, i = t);
                            else {
                                var r = t.name;
                                v[r] = t, i = r
                            }
                            return !n && i && (b = i), i || !n && b
                        },
                        A = function(t, e) {
                            if (w(t)) return t.clone();
                            var n = "object" == typeof e ? e : {};
                            return n.date = t, n.args = arguments, new $(n)
                        },
                        x = _;
                    x.l = T, x.i = w, x.w = function(t, e) {
                        return A(t, {
                            locale: e.$L,
                            utc: e.$u,
                            x: e.$x,
                            $offset: e.$offset
                        })
                    };
                    var $ = function() {
                            function g(t) {
                                this.$L = T(t.locale, null, !0), this.parse(t)
                            }
                            var y = g.prototype;
                            return y.parse = function(t) {
                                this.$d = function(t) {
                                    var e = t.date,
                                        n = t.utc;
                                    if (null === e) return new Date(NaN);
                                    if (x.u(e)) return new Date;
                                    if (e instanceof Date) return new Date(e);
                                    if ("string" == typeof e && !/Z$/i.test(e)) {
                                        var i = e.match(m);
                                        if (i) {
                                            var r = i[2] - 1 || 0,
                                                o = (i[7] || "0").substring(0, 3);
                                            return n ? new Date(Date.UTC(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)
                                        }
                                    }
                                    return new Date(e)
                                }(t), this.$x = t.x || {}, this.init()
                            }, y.init = function() {
                                var t = this.$d;
                                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                            }, y.$utils = function() {
                                return x
                            }, y.isValid = function() {
                                return !(this.$d.toString() === f)
                            }, y.isSame = function(t, e) {
                                var n = A(t);
                                return this.startOf(e) <= n && n <= this.endOf(e)
                            }, y.isAfter = function(t, e) {
                                return A(t) < this.startOf(e)
                            }, y.isBefore = function(t, e) {
                                return this.endOf(e) < A(t)
                            }, y.$g = function(t, e, n) {
                                return x.u(t) ? this[e] : this.set(n, t)
                            }, y.unix = function() {
                                return Math.floor(this.valueOf() / 1e3)
                            }, y.valueOf = function() {
                                return this.$d.getTime()
                            }, y.startOf = function(t, e) {
                                var n = this,
                                    i = !!x.u(e) || e,
                                    u = x.p(t),
                                    f = function(t, e) {
                                        var r = x.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                        return i ? r : r.endOf(s)
                                    },
                                    m = function(t, e) {
                                        return x.w(n.toDate()[t].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                    },
                                    h = this.$W,
                                    g = this.$M,
                                    y = this.$D,
                                    _ = "set" + (this.$u ? "UTC" : "");
                                switch (u) {
                                    case d:
                                        return i ? f(1, 0) : f(31, 11);
                                    case l:
                                        return i ? f(1, g) : f(0, g + 1);
                                    case c:
                                        var b = this.$locale().weekStart || 0,
                                            v = (h < b ? h + 7 : h) - b;
                                        return f(i ? y - v : y + (6 - v), g);
                                    case s:
                                    case p:
                                        return m(_ + "Hours", 0);
                                    case a:
                                        return m(_ + "Minutes", 1);
                                    case o:
                                        return m(_ + "Seconds", 2);
                                    case r:
                                        return m(_ + "Milliseconds", 3);
                                    default:
                                        return this.clone()
                                }
                            }, y.endOf = function(t) {
                                return this.startOf(t, !1)
                            }, y.$set = function(t, e) {
                                var n, c = x.p(t),
                                    u = "set" + (this.$u ? "UTC" : ""),
                                    f = (n = {}, n[s] = u + "Date", n[p] = u + "Date", n[l] = u + "Month", n[d] = u + "FullYear", n[a] = u + "Hours", n[o] = u + "Minutes", n[r] = u + "Seconds", n[i] = u + "Milliseconds", n)[c],
                                    m = c === s ? this.$D + (e - this.$W) : e;
                                if (c === l || c === d) {
                                    var h = this.clone().set(p, 1);
                                    h.$d[f](m), h.init(), this.$d = h.set(p, Math.min(this.$D, h.daysInMonth())).$d
                                } else f && this.$d[f](m);
                                return this.init(), this
                            }, y.set = function(t, e) {
                                return this.clone().$set(t, e)
                            }, y.get = function(t) {
                                return this[x.p(t)]()
                            }, y.add = function(i, u) {
                                var p, f = this;
                                i = Number(i);
                                var m = x.p(u),
                                    h = function(t) {
                                        var e = A(f);
                                        return x.w(e.date(e.date() + Math.round(t * i)), f)
                                    };
                                if (m === l) return this.set(l, this.$M + i);
                                if (m === d) return this.set(d, this.$y + i);
                                if (m === s) return h(1);
                                if (m === c) return h(7);
                                var g = (p = {}, p[o] = e, p[a] = n, p[r] = t, p)[m] || 1,
                                    y = this.$d.getTime() + i * g;
                                return x.w(y, this)
                            }, y.subtract = function(t, e) {
                                return this.add(-1 * t, e)
                            }, y.format = function(t) {
                                var e = this;
                                if (!this.isValid()) return f;
                                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                                    i = x.z(this),
                                    r = this.$locale(),
                                    o = this.$H,
                                    a = this.$m,
                                    s = this.$M,
                                    c = r.weekdays,
                                    l = r.months,
                                    u = function(t, i, r, o) {
                                        return t && (t[i] || t(e, n)) || r[i].substr(0, o)
                                    },
                                    d = function(t) {
                                        return x.s(o % 12 || 12, t, "0")
                                    },
                                    p = r.meridiem || function(t, e, n) {
                                        var i = t < 12 ? "AM" : "PM";
                                        return n ? i.toLowerCase() : i
                                    },
                                    m = {
                                        YY: String(this.$y).slice(-2),
                                        YYYY: this.$y,
                                        M: s + 1,
                                        MM: x.s(s + 1, 2, "0"),
                                        MMM: u(r.monthsShort, s, l, 3),
                                        MMMM: u(l, s),
                                        D: this.$D,
                                        DD: x.s(this.$D, 2, "0"),
                                        d: String(this.$W),
                                        dd: u(r.weekdaysMin, this.$W, c, 2),
                                        ddd: u(r.weekdaysShort, this.$W, c, 3),
                                        dddd: c[this.$W],
                                        H: String(o),
                                        HH: x.s(o, 2, "0"),
                                        h: d(1),
                                        hh: d(2),
                                        a: p(o, a, !0),
                                        A: p(o, a, !1),
                                        m: String(a),
                                        mm: x.s(a, 2, "0"),
                                        s: String(this.$s),
                                        ss: x.s(this.$s, 2, "0"),
                                        SSS: x.s(this.$ms, 3, "0"),
                                        Z: i
                                    };
                                return n.replace(h, (function(t, e) {
                                    return e || m[t] || i.replace(":", "")
                                }))
                            }, y.utcOffset = function() {
                                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                            }, y.diff = function(i, p, f) {
                                var m, h = x.p(p),
                                    g = A(i),
                                    y = (g.utcOffset() - this.utcOffset()) * e,
                                    _ = this - g,
                                    b = x.m(this, g);
                                return b = (m = {}, m[d] = b / 12, m[l] = b, m[u] = b / 3, m[c] = (_ - y) / 6048e5, m[s] = (_ - y) / 864e5, m[a] = _ / n, m[o] = _ / e, m[r] = _ / t, m)[h] || _, f ? b : x.a(b)
                            }, y.daysInMonth = function() {
                                return this.endOf(l).$D
                            }, y.$locale = function() {
                                return v[this.$L]
                            }, y.locale = function(t, e) {
                                if (!t) return this.$L;
                                var n = this.clone(),
                                    i = T(t, e, !0);
                                return i && (n.$L = i), n
                            }, y.clone = function() {
                                return x.w(this.$d, this)
                            }, y.toDate = function() {
                                return new Date(this.valueOf())
                            }, y.toJSON = function() {
                                return this.isValid() ? this.toISOString() : null
                            }, y.toISOString = function() {
                                return this.$d.toISOString()
                            }, y.toString = function() {
                                return this.$d.toUTCString()
                            }, g
                        }(),
                        S = $.prototype;
                    return A.prototype = S, [
                        ["$ms", i],
                        ["$s", r],
                        ["$m", o],
                        ["$H", a],
                        ["$W", s],
                        ["$M", l],
                        ["$y", d],
                        ["$D", p]
                    ].forEach((function(t) {
                        S[t[1]] = function(e) {
                            return this.$g(e, t[0], t[1])
                        }
                    })), A.extend = function(t, e) {
                        return t.$i || (t(e, $, A), t.$i = !0), A
                    }, A.locale = T, A.isDayjs = w, A.unix = function(t) {
                        return A(1e3 * t)
                    }, A.en = v[b], A.Ls = v, A.p = {}, A
                }()
            },
            646: function(t) {
                t.exports = function() {
                    "use strict";
                    var t, e, n = 1e3,
                        i = 6e4,
                        r = 36e5,
                        o = 864e5,
                        a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        s = 31536e6,
                        c = 2592e6,
                        l = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                        u = {
                            years: s,
                            months: c,
                            days: o,
                            hours: r,
                            minutes: i,
                            seconds: n,
                            milliseconds: 1,
                            weeks: 6048e5
                        },
                        d = function(t) {
                            return t instanceof _
                        },
                        p = function(t, e, n) {
                            return new _(t, n, e.$l)
                        },
                        f = function(t) {
                            return e.p(t) + "s"
                        },
                        m = function(t) {
                            return t < 0
                        },
                        h = function(t) {
                            return m(t) ? Math.ceil(t) : Math.floor(t)
                        },
                        g = function(t) {
                            return Math.abs(t)
                        },
                        y = function(t, e) {
                            return t ? m(t) ? {
                                negative: !0,
                                format: "" + g(t) + e
                            } : {
                                negative: !1,
                                format: "" + t + e
                            } : {
                                negative: !1,
                                format: ""
                            }
                        },
                        _ = function() {
                            function m(t, e, n) {
                                var i = this;
                                if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), e) return p(t * u[f(e)], this);
                                if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
                                if ("object" == typeof t) return Object.keys(t).forEach((function(e) {
                                    i.$d[f(e)] = t[e]
                                })), this.calMilliseconds(), this;
                                if ("string" == typeof t) {
                                    var r = t.match(l);
                                    if (r) {
                                        var o = r.slice(2).map((function(t) {
                                            return Number(t)
                                        }));
                                        return this.$d.years = o[0], this.$d.months = o[1], this.$d.weeks = o[2], this.$d.days = o[3], this.$d.hours = o[4], this.$d.minutes = o[5], this.$d.seconds = o[6], this.calMilliseconds(), this
                                    }
                                }
                                return this
                            }
                            var g = m.prototype;
                            return g.calMilliseconds = function() {
                                var t = this;
                                this.$ms = Object.keys(this.$d).reduce((function(e, n) {
                                    return e + (t.$d[n] || 0) * u[n]
                                }), 0)
                            }, g.parseFromMilliseconds = function() {
                                var t = this.$ms;
                                this.$d.years = h(t / s), t %= s, this.$d.months = h(t / c), t %= c, this.$d.days = h(t / o), t %= o, this.$d.hours = h(t / r), t %= r, this.$d.minutes = h(t / i), t %= i, this.$d.seconds = h(t / n), t %= n, this.$d.milliseconds = t
                            }, g.toISOString = function() {
                                var t = y(this.$d.years, "Y"),
                                    e = y(this.$d.months, "M"),
                                    n = +this.$d.days || 0;
                                this.$d.weeks && (n += 7 * this.$d.weeks);
                                var i = y(n, "D"),
                                    r = y(this.$d.hours, "H"),
                                    o = y(this.$d.minutes, "M"),
                                    a = this.$d.seconds || 0;
                                this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
                                var s = y(a, "S"),
                                    c = t.negative || e.negative || i.negative || r.negative || o.negative || s.negative,
                                    l = r.format || o.format || s.format ? "T" : "",
                                    u = (c ? "-" : "") + "P" + t.format + e.format + i.format + l + r.format + o.format + s.format;
                                return "P" === u || "-P" === u ? "P0D" : u
                            }, g.toJSON = function() {
                                return this.toISOString()
                            }, g.format = function(t) {
                                var n = t || "YYYY-MM-DDTHH:mm:ss",
                                    i = {
                                        Y: this.$d.years,
                                        YY: e.s(this.$d.years, 2, "0"),
                                        YYYY: e.s(this.$d.years, 4, "0"),
                                        M: this.$d.months,
                                        MM: e.s(this.$d.months, 2, "0"),
                                        D: this.$d.days,
                                        DD: e.s(this.$d.days, 2, "0"),
                                        H: this.$d.hours,
                                        HH: e.s(this.$d.hours, 2, "0"),
                                        m: this.$d.minutes,
                                        mm: e.s(this.$d.minutes, 2, "0"),
                                        s: this.$d.seconds,
                                        ss: e.s(this.$d.seconds, 2, "0"),
                                        SSS: e.s(this.$d.milliseconds, 3, "0")
                                    };
                                return n.replace(a, (function(t, e) {
                                    return e || String(i[t])
                                }))
                            }, g.as = function(t) {
                                return this.$ms / u[f(t)]
                            }, g.get = function(t) {
                                var e = this.$ms,
                                    n = f(t);
                                return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? h(e / u[n]) : this.$d[n], 0 === e ? 0 : e
                            }, g.add = function(t, e, n) {
                                var i;
                                return i = e ? t * u[f(e)] : d(t) ? t.$ms : p(t, this).$ms, p(this.$ms + i * (n ? -1 : 1), this)
                            }, g.subtract = function(t, e) {
                                return this.add(t, e, !0)
                            }, g.locale = function(t) {
                                var e = this.clone();
                                return e.$l = t, e
                            }, g.clone = function() {
                                return p(this.$ms, this)
                            }, g.humanize = function(e) {
                                return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                            }, g.milliseconds = function() {
                                return this.get("milliseconds")
                            }, g.asMilliseconds = function() {
                                return this.as("milliseconds")
                            }, g.seconds = function() {
                                return this.get("seconds")
                            }, g.asSeconds = function() {
                                return this.as("seconds")
                            }, g.minutes = function() {
                                return this.get("minutes")
                            }, g.asMinutes = function() {
                                return this.as("minutes")
                            }, g.hours = function() {
                                return this.get("hours")
                            }, g.asHours = function() {
                                return this.as("hours")
                            }, g.days = function() {
                                return this.get("days")
                            }, g.asDays = function() {
                                return this.as("days")
                            }, g.weeks = function() {
                                return this.get("weeks")
                            }, g.asWeeks = function() {
                                return this.as("weeks")
                            }, g.months = function() {
                                return this.get("months")
                            }, g.asMonths = function() {
                                return this.as("months")
                            }, g.years = function() {
                                return this.get("years")
                            }, g.asYears = function() {
                                return this.as("years")
                            }, m
                        }();
                    return function(n, i, r) {
                        t = r, e = r().$utils(), r.duration = function(t, e) {
                            var n = r.locale();
                            return p(t, {
                                $l: n
                            }, e)
                        }, r.isDuration = d;
                        var o = i.prototype.add,
                            a = i.prototype.subtract;
                        i.prototype.add = function(t, e) {
                            return d(t) && (t = t.asMilliseconds()), o.bind(this)(t, e)
                        }, i.prototype.subtract = function(t, e) {
                            return d(t) && (t = t.asMilliseconds()), a.bind(this)(t, e)
                        }
                    }
                }()
            },
            387: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = {
                            year: 0,
                            month: 1,
                            day: 2,
                            hour: 3,
                            minute: 4,
                            second: 5
                        },
                        e = {};
                    return function(n, i, r) {
                        var o, a = function(t, n, i) {
                                void 0 === i && (i = {});
                                var r = new Date(t);
                                return function(t, n) {
                                    void 0 === n && (n = {});
                                    var i = n.timeZoneName || "short",
                                        r = t + "|" + i,
                                        o = e[r];
                                    return o || (o = new Intl.DateTimeFormat("en-US", {
                                        hour12: !1,
                                        timeZone: t,
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        timeZoneName: i
                                    }), e[r] = o), o
                                }(n, i).formatToParts(r)
                            },
                            s = function(e, n) {
                                for (var i = a(e, n), o = [], s = 0; s < i.length; s += 1) {
                                    var c = i[s],
                                        l = c.type,
                                        u = c.value,
                                        d = t[l];
                                    d >= 0 && (o[d] = parseInt(u, 10))
                                }
                                var p = o[3],
                                    f = 24 === p ? 0 : p,
                                    m = o[0] + "-" + o[1] + "-" + o[2] + " " + f + ":" + o[4] + ":" + o[5] + ":000",
                                    h = +e;
                                return (r.utc(m).valueOf() - (h -= h % 1e3)) / 6e4
                            },
                            c = i.prototype;
                        c.tz = function(t, e) {
                            void 0 === t && (t = o);
                            var n = this.utcOffset(),
                                i = this.toDate(),
                                a = i.toLocaleString("en-US", {
                                    timeZone: t
                                }),
                                s = Math.round((i - new Date(a)) / 1e3 / 60),
                                c = r(a).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i.getTimezoneOffset() / 15) - s, !0);
                            if (e) {
                                var l = c.utcOffset();
                                c = c.add(n - l, "minute")
                            }
                            return c.$x.$timezone = t, c
                        }, c.offsetName = function(t) {
                            var e = this.$x.$timezone || r.tz.guess(),
                                n = a(this.valueOf(), e, {
                                    timeZoneName: t
                                }).find((function(t) {
                                    return "timezonename" === t.type.toLowerCase()
                                }));
                            return n && n.value
                        };
                        var l = c.startOf;
                        c.startOf = function(t, e) {
                            if (!this.$x || !this.$x.$timezone) return l.call(this, t, e);
                            var n = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                            return l.call(n, t, e).tz(this.$x.$timezone, !0)
                        }, r.tz = function(t, e, n) {
                            var i = n && e,
                                a = n || e || o,
                                c = s(+r(), a);
                            if ("string" != typeof t) return r(t).tz(a);
                            var l = function(t, e, n) {
                                    var i = t - 60 * e * 1e3,
                                        r = s(i, n);
                                    if (e === r) return [i, e];
                                    var o = s(i -= 60 * (r - e) * 1e3, n);
                                    return r === o ? [i, r] : [t - 60 * Math.min(r, o) * 1e3, Math.max(r, o)]
                                }(r.utc(t, i).valueOf(), c, a),
                                u = l[0],
                                d = l[1],
                                p = r(u).utcOffset(d);
                            return p.$x.$timezone = a, p
                        }, r.tz.guess = function() {
                            return Intl.DateTimeFormat().resolvedOptions().timeZone
                        }, r.tz.setDefault = function(t) {
                            o = t
                        }
                    }
                }()
            },
            178: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = "minute",
                        e = /[+-]\d\d(?::?\d\d)?/g,
                        n = /([+-]|\d\d)/g;
                    return function(i, r, o) {
                        var a = r.prototype;
                        o.utc = function(t) {
                            return new r({
                                date: t,
                                utc: !0,
                                args: arguments
                            })
                        }, a.utc = function(e) {
                            var n = o(this.toDate(), {
                                locale: this.$L,
                                utc: !0
                            });
                            return e ? n.add(this.utcOffset(), t) : n
                        }, a.local = function() {
                            return o(this.toDate(), {
                                locale: this.$L,
                                utc: !1
                            })
                        };
                        var s = a.parse;
                        a.parse = function(t) {
                            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), s.call(this, t)
                        };
                        var c = a.init;
                        a.init = function() {
                            if (this.$u) {
                                var t = this.$d;
                                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
                            } else c.call(this)
                        };
                        var l = a.utcOffset;
                        a.utcOffset = function(i, r) {
                            var o = this.$utils().u;
                            if (o(i)) return this.$u ? 0 : o(this.$offset) ? l.call(this) : this.$offset;
                            if ("string" == typeof i && null === (i = function(t) {
                                    void 0 === t && (t = "");
                                    var i = t.match(e);
                                    if (!i) return null;
                                    var r = ("" + i[0]).match(n) || ["-", 0, 0],
                                        o = r[0],
                                        a = 60 * +r[1] + +r[2];
                                    return 0 === a ? 0 : "+" === o ? a : -a
                                }(i))) return this;
                            var a = Math.abs(i) <= 16 ? 60 * i : i,
                                s = this;
                            if (r) return s.$offset = a, s.$u = 0 === i, s;
                            if (0 !== i) {
                                var c = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                (s = this.local().add(a + c, t)).$offset = a, s.$x.$localOffset = c
                            } else s = this.utc();
                            return s
                        };
                        var u = a.format;
                        a.format = function(t) {
                            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                            return u.call(this, e)
                        }, a.valueOf = function() {
                            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
                            return this.$d.valueOf() - 6e4 * t
                        }, a.isUTC = function() {
                            return !!this.$u
                        }, a.toISOString = function() {
                            return this.toDate().toISOString()
                        }, a.toString = function() {
                            return this.toDate().toUTCString()
                        };
                        var d = a.toDate;
                        a.toDate = function(t) {
                            return "s" === t && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this)
                        };
                        var p = a.diff;
                        a.diff = function(t, e, n) {
                            if (t && this.$u === t.$u) return p.call(this, t, e, n);
                            var i = this.local(),
                                r = o(t).local();
                            return p.call(i, r, e, n)
                        }
                    }
                }()
            },
            856: function(t) {
                t.exports = function() {
                    "use strict";
                    const {
                        entries: t,
                        setPrototypeOf: e,
                        isFrozen: n,
                        getPrototypeOf: i,
                        getOwnPropertyDescriptor: r
                    } = Object;
                    let {
                        freeze: o,
                        seal: a,
                        create: s
                    } = Object, {
                        apply: c,
                        construct: l
                    } = "undefined" != typeof Reflect && Reflect;
                    c || (c = function(t, e, n) {
                        return t.apply(e, n)
                    }), o || (o = function(t) {
                        return t
                    }), a || (a = function(t) {
                        return t
                    }), l || (l = function(t, e) {
                        return new t(...e)
                    });
                    const u = w(Array.prototype.forEach),
                        d = w(Array.prototype.pop),
                        p = w(Array.prototype.push),
                        f = w(String.prototype.toLowerCase),
                        m = w(String.prototype.toString),
                        h = w(String.prototype.match),
                        g = w(String.prototype.replace),
                        y = w(String.prototype.indexOf),
                        _ = w(String.prototype.trim),
                        b = w(RegExp.prototype.test),
                        v = T(TypeError);

                    function w(t) {
                        return function(e) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            return c(t, e, i)
                        }
                    }

                    function T(t) {
                        return function() {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            return l(t, n)
                        }
                    }

                    function A(t, i, r) {
                        var o;
                        r = null !== (o = r) && void 0 !== o ? o : f, e && e(t, null);
                        let a = i.length;
                        for (; a--;) {
                            let e = i[a];
                            if ("string" == typeof e) {
                                const t = r(e);
                                t !== e && (n(i) || (i[a] = t), e = t)
                            }
                            t[e] = !0
                        }
                        return t
                    }

                    function x(e) {
                        const n = s(null);
                        for (const [i, r] of t(e)) n[i] = r;
                        return n
                    }

                    function $(t, e) {
                        for (; null !== t;) {
                            const n = r(t, e);
                            if (n) {
                                if (n.get) return w(n.get);
                                if ("function" == typeof n.value) return w(n.value)
                            }
                            t = i(t)
                        }

                        function n(t) {
                            return console.warn("fallback value for", t), null
                        }
                        return n
                    }
                    const S = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        E = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        k = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        D = o(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        N = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                        M = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        C = o(["#text"]),
                        O = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                        L = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        R = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        I = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        z = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        H = a(/<%[\w\W]*|[\w\W]*%>/gm),
                        P = a(/\${[\w\W]*}/gm),
                        U = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                        F = a(/^aria-[\-\w]+$/),
                        Y = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        j = a(/^(?:\w+script|data):/i),
                        W = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        B = a(/^html$/i);
                    var G = Object.freeze({
                        __proto__: null,
                        MUSTACHE_EXPR: z,
                        ERB_EXPR: H,
                        TMPLIT_EXPR: P,
                        DATA_ATTR: U,
                        ARIA_ATTR: F,
                        IS_ALLOWED_URI: Y,
                        IS_SCRIPT_OR_DATA: j,
                        ATTR_WHITESPACE: W,
                        DOCTYPE_NAME: B
                    });
                    const q = () => "undefined" == typeof window ? null : window,
                        Z = function(t, e) {
                            if ("object" != typeof t || "function" != typeof t.createPolicy) return null;
                            let n = null;
                            const i = "data-tt-policy-suffix";
                            e && e.hasAttribute(i) && (n = e.getAttribute(i));
                            const r = "dompurify" + (n ? "#" + n : "");
                            try {
                                return t.createPolicy(r, {
                                    createHTML: t => t,
                                    createScriptURL: t => t
                                })
                            } catch (t) {
                                return console.warn("TrustedTypes policy " + r + " could not be created."), null
                            }
                        };

                    function X() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
                        const n = t => X(t);
                        if (n.version = "3.0.5", n.removed = [], !e || !e.document || 9 !== e.document.nodeType) return n.isSupported = !1, n;
                        const i = e.document,
                            r = i.currentScript;
                        let {
                            document: a
                        } = e;
                        const {
                            DocumentFragment: s,
                            HTMLTemplateElement: c,
                            Node: l,
                            Element: w,
                            NodeFilter: T,
                            NamedNodeMap: z = e.NamedNodeMap || e.MozNamedAttrMap,
                            HTMLFormElement: H,
                            DOMParser: P,
                            trustedTypes: U
                        } = e, F = w.prototype, j = $(F, "cloneNode"), W = $(F, "nextSibling"), V = $(F, "childNodes"), J = $(F, "parentNode");
                        if ("function" == typeof c) {
                            const t = a.createElement("template");
                            t.content && t.content.ownerDocument && (a = t.content.ownerDocument)
                        }
                        let K, Q = "";
                        const {
                            implementation: tt,
                            createNodeIterator: et,
                            createDocumentFragment: nt,
                            getElementsByTagName: it
                        } = a, {
                            importNode: rt
                        } = i;
                        let ot = {};
                        n.isSupported = "function" == typeof t && "function" == typeof J && tt && void 0 !== tt.createHTMLDocument;
                        const {
                            MUSTACHE_EXPR: at,
                            ERB_EXPR: st,
                            TMPLIT_EXPR: ct,
                            DATA_ATTR: lt,
                            ARIA_ATTR: ut,
                            IS_SCRIPT_OR_DATA: dt,
                            ATTR_WHITESPACE: pt
                        } = G;
                        let {
                            IS_ALLOWED_URI: ft
                        } = G, mt = null;
                        const ht = A({}, [...S, ...E, ...k, ...N, ...C]);
                        let gt = null;
                        const yt = A({}, [...O, ...L, ...R, ...I]);
                        let _t = Object.seal(Object.create(null, {
                                tagNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                attributeNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                allowCustomizedBuiltInElements: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: !1
                                }
                            })),
                            bt = null,
                            vt = null,
                            wt = !0,
                            Tt = !0,
                            At = !1,
                            xt = !0,
                            $t = !1,
                            St = !1,
                            Et = !1,
                            kt = !1,
                            Dt = !1,
                            Nt = !1,
                            Mt = !1,
                            Ct = !0,
                            Ot = !1;
                        const Lt = "user-content-";
                        let Rt = !0,
                            It = !1,
                            zt = {},
                            Ht = null;
                        const Pt = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                        let Ut = null;
                        const Ft = A({}, ["audio", "video", "img", "source", "image", "track"]);
                        let Yt = null;
                        const jt = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            Wt = "http://www.w3.org/1998/Math/MathML",
                            Bt = "http://www.w3.org/2000/svg",
                            Gt = "http://www.w3.org/1999/xhtml";
                        let qt = Gt,
                            Zt = !1,
                            Xt = null;
                        const Vt = A({}, [Wt, Bt, Gt], m);
                        let Jt;
                        const Kt = ["application/xhtml+xml", "text/html"],
                            Qt = "text/html";
                        let te, ee = null;
                        const ne = a.createElement("form"),
                            ie = function(t) {
                                return t instanceof RegExp || t instanceof Function
                            },
                            re = function(t) {
                                if (!ee || ee !== t) {
                                    if (t && "object" == typeof t || (t = {}), t = x(t), Jt = Jt = -1 === Kt.indexOf(t.PARSER_MEDIA_TYPE) ? Qt : t.PARSER_MEDIA_TYPE, te = "application/xhtml+xml" === Jt ? m : f, mt = "ALLOWED_TAGS" in t ? A({}, t.ALLOWED_TAGS, te) : ht, gt = "ALLOWED_ATTR" in t ? A({}, t.ALLOWED_ATTR, te) : yt, Xt = "ALLOWED_NAMESPACES" in t ? A({}, t.ALLOWED_NAMESPACES, m) : Vt, Yt = "ADD_URI_SAFE_ATTR" in t ? A(x(jt), t.ADD_URI_SAFE_ATTR, te) : jt, Ut = "ADD_DATA_URI_TAGS" in t ? A(x(Ft), t.ADD_DATA_URI_TAGS, te) : Ft, Ht = "FORBID_CONTENTS" in t ? A({}, t.FORBID_CONTENTS, te) : Pt, bt = "FORBID_TAGS" in t ? A({}, t.FORBID_TAGS, te) : {}, vt = "FORBID_ATTR" in t ? A({}, t.FORBID_ATTR, te) : {}, zt = "USE_PROFILES" in t && t.USE_PROFILES, wt = !1 !== t.ALLOW_ARIA_ATTR, Tt = !1 !== t.ALLOW_DATA_ATTR, At = t.ALLOW_UNKNOWN_PROTOCOLS || !1, xt = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, $t = t.SAFE_FOR_TEMPLATES || !1, St = t.WHOLE_DOCUMENT || !1, Dt = t.RETURN_DOM || !1, Nt = t.RETURN_DOM_FRAGMENT || !1, Mt = t.RETURN_TRUSTED_TYPE || !1, kt = t.FORCE_BODY || !1, Ct = !1 !== t.SANITIZE_DOM, Ot = t.SANITIZE_NAMED_PROPS || !1, Rt = !1 !== t.KEEP_CONTENT, It = t.IN_PLACE || !1, ft = t.ALLOWED_URI_REGEXP || Y, qt = t.NAMESPACE || Gt, _t = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ie(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (_t.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ie(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (_t.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (_t.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $t && (Tt = !1), Nt && (Dt = !0), zt && (mt = A({}, [...C]), gt = [], !0 === zt.html && (A(mt, S), A(gt, O)), !0 === zt.svg && (A(mt, E), A(gt, L), A(gt, I)), !0 === zt.svgFilters && (A(mt, k), A(gt, L), A(gt, I)), !0 === zt.mathMl && (A(mt, N), A(gt, R), A(gt, I))), t.ADD_TAGS && (mt === ht && (mt = x(mt)), A(mt, t.ADD_TAGS, te)), t.ADD_ATTR && (gt === yt && (gt = x(gt)), A(gt, t.ADD_ATTR, te)), t.ADD_URI_SAFE_ATTR && A(Yt, t.ADD_URI_SAFE_ATTR, te), t.FORBID_CONTENTS && (Ht === Pt && (Ht = x(Ht)), A(Ht, t.FORBID_CONTENTS, te)), Rt && (mt["#text"] = !0), St && A(mt, ["html", "head", "body"]), mt.table && (A(mt, ["tbody"]), delete bt.tbody), t.TRUSTED_TYPES_POLICY) {
                                        if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML) throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                        if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL) throw v('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                        K = t.TRUSTED_TYPES_POLICY, Q = K.createHTML("")
                                    } else void 0 === K && (K = Z(U, r)), null !== K && "string" == typeof Q && (Q = K.createHTML(""));
                                    o && o(t), ee = t
                                }
                            },
                            oe = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            ae = A({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                            se = A({}, ["title", "style", "font", "a", "script"]),
                            ce = A({}, E);
                        A(ce, k), A(ce, D);
                        const le = A({}, N);
                        A(le, M);
                        const ue = function(t) {
                                let e = J(t);
                                e && e.tagName || (e = {
                                    namespaceURI: qt,
                                    tagName: "template"
                                });
                                const n = f(t.tagName),
                                    i = f(e.tagName);
                                return !!Xt[t.namespaceURI] && (t.namespaceURI === Bt ? e.namespaceURI === Gt ? "svg" === n : e.namespaceURI === Wt ? "svg" === n && ("annotation-xml" === i || oe[i]) : Boolean(ce[n]) : t.namespaceURI === Wt ? e.namespaceURI === Gt ? "math" === n : e.namespaceURI === Bt ? "math" === n && ae[i] : Boolean(le[n]) : t.namespaceURI === Gt ? !(e.namespaceURI === Bt && !ae[i]) && !(e.namespaceURI === Wt && !oe[i]) && !le[n] && (se[n] || !ce[n]) : !("application/xhtml+xml" !== Jt || !Xt[t.namespaceURI]))
                            },
                            de = function(t) {
                                p(n.removed, {
                                    element: t
                                });
                                try {
                                    t.parentNode.removeChild(t)
                                } catch (e) {
                                    t.remove()
                                }
                            },
                            pe = function(t, e) {
                                try {
                                    p(n.removed, {
                                        attribute: e.getAttributeNode(t),
                                        from: e
                                    })
                                } catch (t) {
                                    p(n.removed, {
                                        attribute: null,
                                        from: e
                                    })
                                }
                                if (e.removeAttribute(t), "is" === t && !gt[t])
                                    if (Dt || Nt) try {
                                        de(e)
                                    } catch (t) {} else try {
                                        e.setAttribute(t, "")
                                    } catch (t) {}
                            },
                            fe = function(t) {
                                let e, n;
                                if (kt) t = "<remove></remove>" + t;
                                else {
                                    const e = h(t, /^[\r\n\t ]+/);
                                    n = e && e[0]
                                }
                                "application/xhtml+xml" === Jt && qt === Gt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
                                const i = K ? K.createHTML(t) : t;
                                if (qt === Gt) try {
                                    e = (new P).parseFromString(i, Jt)
                                } catch (t) {}
                                if (!e || !e.documentElement) {
                                    e = tt.createDocument(qt, "template", null);
                                    try {
                                        e.documentElement.innerHTML = Zt ? Q : i
                                    } catch (t) {}
                                }
                                const r = e.body || e.documentElement;
                                return t && n && r.insertBefore(a.createTextNode(n), r.childNodes[0] || null), qt === Gt ? it.call(e, St ? "html" : "body")[0] : St ? e.documentElement : r
                            },
                            me = function(t) {
                                return et.call(t.ownerDocument || t, t, T.SHOW_ELEMENT | T.SHOW_COMMENT | T.SHOW_TEXT, null, !1)
                            },
                            he = function(t) {
                                return t instanceof H && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof z) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes)
                            },
                            ge = function(t) {
                                return "object" == typeof l ? t instanceof l : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                            },
                            ye = function(t, e, i) {
                                ot[t] && u(ot[t], (t => {
                                    t.call(n, e, i, ee)
                                }))
                            },
                            _e = function(t) {
                                let e;
                                if (ye("beforeSanitizeElements", t, null), he(t)) return de(t), !0;
                                const i = te(t.nodeName);
                                if (ye("uponSanitizeElement", t, {
                                        tagName: i,
                                        allowedTags: mt
                                    }), t.hasChildNodes() && !ge(t.firstElementChild) && (!ge(t.content) || !ge(t.content.firstElementChild)) && b(/<[/\w]/g, t.innerHTML) && b(/<[/\w]/g, t.textContent)) return de(t), !0;
                                if (!mt[i] || bt[i]) {
                                    if (!bt[i] && ve(i)) {
                                        if (_t.tagNameCheck instanceof RegExp && b(_t.tagNameCheck, i)) return !1;
                                        if (_t.tagNameCheck instanceof Function && _t.tagNameCheck(i)) return !1
                                    }
                                    if (Rt && !Ht[i]) {
                                        const e = J(t) || t.parentNode,
                                            n = V(t) || t.childNodes;
                                        if (n && e)
                                            for (let i = n.length - 1; i >= 0; --i) e.insertBefore(j(n[i], !0), W(t))
                                    }
                                    return de(t), !0
                                }
                                return t instanceof w && !ue(t) ? (de(t), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !b(/<\/no(script|embed|frames)/i, t.innerHTML) ? ($t && 3 === t.nodeType && (e = t.textContent, e = g(e, at, " "), e = g(e, st, " "), e = g(e, ct, " "), t.textContent !== e && (p(n.removed, {
                                    element: t.cloneNode()
                                }), t.textContent = e)), ye("afterSanitizeElements", t, null), !1) : (de(t), !0)
                            },
                            be = function(t, e, n) {
                                if (Ct && ("id" === e || "name" === e) && (n in a || n in ne)) return !1;
                                if (Tt && !vt[e] && b(lt, e));
                                else if (wt && b(ut, e));
                                else if (!gt[e] || vt[e]) {
                                    if (!(ve(t) && (_t.tagNameCheck instanceof RegExp && b(_t.tagNameCheck, t) || _t.tagNameCheck instanceof Function && _t.tagNameCheck(t)) && (_t.attributeNameCheck instanceof RegExp && b(_t.attributeNameCheck, e) || _t.attributeNameCheck instanceof Function && _t.attributeNameCheck(e)) || "is" === e && _t.allowCustomizedBuiltInElements && (_t.tagNameCheck instanceof RegExp && b(_t.tagNameCheck, n) || _t.tagNameCheck instanceof Function && _t.tagNameCheck(n)))) return !1
                                } else if (Yt[e]);
                                else if (b(ft, g(n, pt, "")));
                                else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== y(n, "data:") || !Ut[t])
                                    if (At && !b(dt, g(n, pt, "")));
                                    else if (n) return !1;
                                return !0
                            },
                            ve = function(t) {
                                return t.indexOf("-") > 0
                            },
                            we = function(t) {
                                let e, i, r, o;
                                ye("beforeSanitizeAttributes", t, null);
                                const {
                                    attributes: a
                                } = t;
                                if (!a) return;
                                const s = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: gt
                                };
                                for (o = a.length; o--;) {
                                    e = a[o];
                                    const {
                                        name: c,
                                        namespaceURI: l
                                    } = e;
                                    if (i = "value" === c ? e.value : _(e.value), r = te(c), s.attrName = r, s.attrValue = i, s.keepAttr = !0, s.forceKeepAttr = void 0, ye("uponSanitizeAttribute", t, s), i = s.attrValue, s.forceKeepAttr) continue;
                                    if (pe(c, t), !s.keepAttr) continue;
                                    if (!xt && b(/\/>/i, i)) {
                                        pe(c, t);
                                        continue
                                    }
                                    $t && (i = g(i, at, " "), i = g(i, st, " "), i = g(i, ct, " "));
                                    const u = te(t.nodeName);
                                    if (be(u, r, i)) {
                                        if (!Ot || "id" !== r && "name" !== r || (pe(c, t), i = Lt + i), K && "object" == typeof U && "function" == typeof U.getAttributeType)
                                            if (l);
                                            else switch (U.getAttributeType(u, r)) {
                                                case "TrustedHTML":
                                                    i = K.createHTML(i);
                                                    break;
                                                case "TrustedScriptURL":
                                                    i = K.createScriptURL(i)
                                            }
                                        try {
                                            l ? t.setAttributeNS(l, c, i) : t.setAttribute(c, i), d(n.removed)
                                        } catch (t) {}
                                    }
                                }
                                ye("afterSanitizeAttributes", t, null)
                            },
                            Te = function t(e) {
                                let n;
                                const i = me(e);
                                for (ye("beforeSanitizeShadowDOM", e, null); n = i.nextNode();) ye("uponSanitizeShadowNode", n, null), _e(n) || (n.content instanceof s && t(n.content), we(n));
                                ye("afterSanitizeShadowDOM", e, null)
                            };
                        return n.sanitize = function(t) {
                            let e, r, o, a, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (Zt = !t, Zt && (t = "\x3c!--\x3e"), "string" != typeof t && !ge(t)) {
                                if ("function" != typeof t.toString) throw v("toString is not a function");
                                if ("string" != typeof(t = t.toString())) throw v("dirty is not a string, aborting")
                            }
                            if (!n.isSupported) return t;
                            if (Et || re(c), n.removed = [], "string" == typeof t && (It = !1), It) {
                                if (t.nodeName) {
                                    const e = te(t.nodeName);
                                    if (!mt[e] || bt[e]) throw v("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (t instanceof l) e = fe("\x3c!----\x3e"), r = e.ownerDocument.importNode(t, !0), 1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? e = r : e.appendChild(r);
                            else {
                                if (!Dt && !$t && !St && -1 === t.indexOf("<")) return K && Mt ? K.createHTML(t) : t;
                                if (e = fe(t), !e) return Dt ? null : Mt ? Q : ""
                            }
                            e && kt && de(e.firstChild);
                            const u = me(It ? t : e);
                            for (; o = u.nextNode();) _e(o) || (o.content instanceof s && Te(o.content), we(o));
                            if (It) return t;
                            if (Dt) {
                                if (Nt)
                                    for (a = nt.call(e.ownerDocument); e.firstChild;) a.appendChild(e.firstChild);
                                else a = e;
                                return (gt.shadowroot || gt.shadowrootmode) && (a = rt.call(i, a, !0)), a
                            }
                            let d = St ? e.outerHTML : e.innerHTML;
                            return St && mt["!doctype"] && e.ownerDocument && e.ownerDocument.doctype && e.ownerDocument.doctype.name && b(B, e.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + e.ownerDocument.doctype.name + ">\n" + d), $t && (d = g(d, at, " "), d = g(d, st, " "), d = g(d, ct, " ")), K && Mt ? K.createHTML(d) : d
                        }, n.setConfig = function(t) {
                            re(t), Et = !0
                        }, n.clearConfig = function() {
                            ee = null, Et = !1
                        }, n.isValidAttribute = function(t, e, n) {
                            ee || re({});
                            const i = te(t),
                                r = te(e);
                            return be(i, r, n)
                        }, n.addHook = function(t, e) {
                            "function" == typeof e && (ot[t] = ot[t] || [], p(ot[t], e))
                        }, n.removeHook = function(t) {
                            if (ot[t]) return d(ot[t])
                        }, n.removeHooks = function(t) {
                            ot[t] && (ot[t] = [])
                        }, n.removeAllHooks = function() {
                            ot = {}
                        }, n
                    }
                    return X()
                }()
            }
        },
        e = {};

    function n(i) {
        var r = e[i];
        if (void 0 !== r) return r.exports;
        var o = e[i] = {
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t = n(484),
            e = n.n(t),
            i = n(178),
            r = n.n(i),
            o = n(646),
            a = n.n(o),
            s = n(387),
            c = n.n(s);
        e().extend(r()), e().extend(a()), e().extend(c());
        const l = e(),
            u = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            d = function(t) {
                const e = (t || "").split(":");
                return 2 == e.length ? {
                    hour: e[0],
                    minute: e[1]
                } : null
            },
            p = function(t) {
                const e = (t || "").split(":");
                if (e.length >= 2) {
                    return {
                        hours: parseInt(e[0], 10),
                        minutes: parseInt(e[1], 10)
                    }
                }
                return null
            },
            f = function(t, e) {
                const n = p(t),
                    i = p(e),
                    r = n.minutes + 60 * n.hours,
                    o = i.minutes + 60 * i.hours;
                return r === o ? 0 : r > o ? 1 : -1
            },
            m = function(t, e, n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "expires=" + i.toUTCString();
                document.cookie = t + "=" + e + ";" + r + ";path=/"
            },
            h = function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    for (var r = n[i];
                        " " == r.charAt(0);) r = r.substring(1);
                    if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                }
                return ""
            },
            g = function(t, e) {
                let n;
                if ("ON" === t.isAlwaysAvailable) return "online";
                var i;
                i = e.timezone, n = /\d/.test(i) ? l().utcOffset(function(t) {
                    const e = t.split(":");
                    let n, i;
                    return 2 === e.length ? (n = parseInt(e[0]), i = parseInt(e[1])) : (n = parseInt(e[0]), i = 0), -1 !== t.indexOf("-") ? -(60 * Math.abs(n) + i) : 60 * n + i
                }(e.timezone)) : l(l()).tz(e.timezone);
                const r = u[n.get("day")],
                    o = t.daysOfWeekWorking[r];
                if ("OFF" === o.isWorkingOnDay) return t.dayOffsText;
                for (let i = 0; i < o.workHours.length; i++) {
                    const r = n.get("hour") + ":" + n.get("minute"),
                        c = o.workHours[i].startTime,
                        u = o.workHours[i].endTime;
                    if (-1 === f(r, c)) {
                        const i = p(c),
                            r = (a = {
                                hour: i.hours,
                                minute: i.minutes
                            }, s = {
                                hour: n.get("hour"),
                                minute: n.get("minute")
                            }, 1e3 * (3600 * (a.hour - s.hour) + 60 * (a.minute - s.minute))),
                            o = l.duration(r),
                            u = d(e.options.display.time_symbols),
                            f = ` ${o.get("hours")}${u.hour}:${o.get("minutes")}${u.minute} `;
                        return t.willBeBackText.replace(/\[njwa_time_work\]/gi, f)
                    }
                    if (0 === f(r, c) || 0 === f(r, u)) return "online";
                    if (1 === f(r, c) && -1 === f(r, u)) return "online"
                }
                var a, s;
                return t.dayOffsText
            },
            y = function(t, e) {
                if ("ON" == e.enabledFacebook || "ON" == e.enabledGoogle) {
                    var n = t.href,
                        i = n.indexOf("phone=") + 6,
                        r = n.indexOf("&text="); - 1 === r && (r = n.length);
                    var o = n.substring(i, r),
                        a = "NinjaTeam WhatsApp",
                        s = "Phone Number: " + o,
                        c = document.title;
                    if ("ON" === e.enabledFacebook && "undefined" != typeof fbq && fbq("trackCustom", "NinjaTeam WhatsApp", {
                            phone: o,
                            label: c
                        }), "ON" === e.enabledGoogle) {
                        if ("undefined" != typeof gtag) "ON" === e.enabledGoogleGA4 ? gtag("event", "NinjaTeam WhatsApp", {
                            number: o,
                            title: c,
                            url: window.location.href
                        }) : gtag("event", s, {
                            event_category: a,
                            event_label: c
                        });
                        else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                            ga.getAll()[0].send("event", a, s, c)
                        } else "undefined" != typeof __gaTracker && __gaTracker("send", "event", a, s, c);
                        "undefined" != typeof dataLayer && dataLayer.push({
                            event: "NinjaTeam WhatsApp",
                            number: o,
                            title: c,
                            url: window.location.href,
                            event_category: a,
                            event_label: c,
                            event_action: s
                        })
                    }
                }
            };
        var _ = n(856),
            b = n.n(_);
        void 0 === String.prototype.njtReplaceAll && (String.prototype.njtReplaceAll = function(t, e) {
            return this.replace(new RegExp(t, "g"), (() => e))
        });
        const v = (T = !1, w = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(w) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(w.substr(0, 4))) && (T = !0), T);
        var w, T;
        const A = function(t, e) {
            let n = "",
                i = t.predefinedText;
            if (i = i.njtReplaceAll(/\[njwa_page_title\]/gi, encodeURIComponent(document.title)), i = i.njtReplaceAll(/\[njwa_page_url\]/gi, window.location.href), i = i.njtReplaceAll(/\n/gi, "%0A"), -1 !== t.number.indexOf("chat.whatsapp.com")) n += t.number;
            else {
                let r = e.urlSettings[v ? "onMobile" : "onDesktop"];
                if (r || (r = "api"), "protocol" === r) return "whatsapp://send?phone=" + t.number.replace(/[^0-9]/gi, "");
                n += "https://" + r + ".whatsapp.com/send?phone=", n += t.number.replace(/[^0-9]/gi, ""), n += t.predefinedText ? "&text=" + i : ""
            }
            return n
        };
        window.njtWhatsApp = {
            createButton: function(t, e) {
                const n = Object.assign({}, e),
                    i = n.info,
                    r = g(i, n);
                let o = "";
                o += "round" == n.styles.type ? " wa__r_button" : " wa__sq_button", o += "online" == r ? " wa__stt_online" : " wa__stt_offline", o += n.avatar ? " wa__btn_w_img" : " wa__btn_w_icon", o += n.name ? "" : " wa__button_text_only";
                let a = A(i, n);
                const s = document.createElement("div");
                s.setAttribute("class", n.avatar ? "wa__cs_img" : "wa__btn_icon"), s.appendChild((() => {
                    if (n.avatar) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_img_wrap"), t.setAttribute("style", `background: url(${n.avatar}) center center no-repeat; background-size: cover`), t
                    } {
                        const t = document.createElement("img");
                        return t.setAttribute("alt", "img"), t.setAttribute("src", n.defaultAvatar), t
                    }
                })());
                const c = document.createElement("div");
                c.setAttribute("class", "wa__btn_txt"), c.appendChild(n.name ? (() => {
                    const t = document.createElement("div");
                    return t.className = "wa__cs_info", t.appendChild((() => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_name"), t.setAttribute("style", "online" == r ? `color: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?"#d5f0d9":n.styles.textColor}; opacity: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?1:.8}` : ""), t.innerHTML = b().sanitize(n.name), t
                    })()), t.appendChild((() => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_status"), t.innerHTML = "online" === r ? b().sanitize(n.i18n.online) : b().sanitize(n.i18n.offline), t
                    })()), t
                })() : document.createTextNode("")), c.appendChild((() => {
                    const t = document.createElement("div");
                    return t.setAttribute("class", "wa__btn_title"), t.setAttribute("style", "online" == r ? "color: " + n.styles.textColor : ""), t.innerHTML = b().sanitize(n.styles.label), t
                })()), c.appendChild((() => {
                    if ("online" != r) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__btn_status"), t.innerHTML = b().sanitize(r), t
                    }
                    return document.createTextNode("")
                })());
                const l = document.createElement("div");
                l.setAttribute("class", "nta-wa-gdpr"), l.appendChild((() => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"), t.setAttribute("type", "checkbox"), t.setAttribute("value", "accept"), t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30), "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            l.style.opacity = 0, setTimeout((() => {
                                t.forEach((t => t.style.display = "none"))
                            }), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    };
                    const e = document.createElement("span");
                    e.appendChild(t), e.appendChild((() => {
                        const t = document.createElement("span");
                        return t.innerHTML = b().sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t
                    })());
                    const i = document.createElement("label");
                    return i.setAttribute("for", "nta-wa-gdpr"), i.appendChild(e), i
                })());
                const u = document.createElement("a");
                u.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"), u.setAttribute("href", a), u.setAttribute("rel", "nofollow noopener noreferrer"), u.setAttribute("class", "wa__button" + o), u.onclick = function(t) {
                    if (n.gdprStatus && !h("nta-wa-gdpr")) return t.preventDefault(), l.style.background = "red", void(l.style.color = "#fff");
                    y(this, {
                        enabledFacebook: n.options.analytics.enabledFacebook,
                        enabledGoogle: n.options.analytics.enabledGoogle,
                        enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                    })
                }, "online" == r && (u.style.backgroundColor = n.styles.backgroundColor), u.appendChild(s), u.appendChild(c), t.appendChild(u), n.gdprStatus && "accept" != h("nta-wa-gdpr") && t.appendChild(l), t._isWaButton = !0
            },
            createWidget: function(t, e) {
                const n = Object.assign({
                    accounts: [],
                    timezone: "",
                    defaultAvatar: "",
                    gdprStatus: !1,
                    options: {
                        display: {},
                        styles: {},
                        analytics: {}
                    },
                    urlSettings: {}
                }, e);
                if ("OFF" == n.options.display.showOnDesktop && !v) return;
                if ("OFF" == n.options.display.showOnMobile && v) return;
                const i = n.options.styles;
                t.classList.add("wa__widget_container");
                const r = document.createElement("div");
                r.setAttribute("class", "wa__btn_popup_txt"), r.appendChild((() => {
                    const t = document.createElement("span");
                    return t.innerHTML = b().sanitize(i.btnLabel), t
                })()), r.style.display = "ON" == i.isShowBtnLabel ? "block" : "none", r.style.left = "left" == i.btnPosition ? "100%" : "unset", r.style.right = "right" == i.btnPosition ? "100%" : "unset", r.style.marginRight = "right" == i.btnPosition ? "7px" : "0px", r.style.marginLeft = "left" == i.btnPosition ? "7px" : "0px", r.style.width = i.btnLabelWidth + "px";
                const o = document.createElement("div");
                o.setAttribute("class", "wa__btn_popup_icon"), o.style.background = i.backgroundColor;
                const a = document.createElement("div");
                a.setAttribute("class", "wa__btn_popup"), a.onclick = function() {
                    let t, e;
                    const n = document.querySelector(".wa__popup_chat_box"),
                        i = document.querySelector(".wa__btn_popup");
                    n.classList.contains("wa__active") ? (n.classList.remove("wa__active"), i.classList.remove("wa__active"), clearTimeout(e), n.classList.contains("wa__lauch") && (t = setTimeout((function() {
                        n.classList.remove("wa__pending"), n.classList.remove("wa__lauch")
                    }), 400))) : (n.classList.add("wa__pending"), n.classList.add("wa__active"), i.classList.add("wa__active"), clearTimeout(t), n.classList.contains("wa__lauch") || (e = setTimeout((function() {
                        n.classList.add("wa__lauch")
                    }), 100)))
                }, a.appendChild(r), a.appendChild(o), a.style.left = "left" == i.btnPosition ? parseInt(i.btnLeftDistance) + "px" : "unset", a.style.right = "right" == i.btnPosition ? parseInt(i.btnRightDistance) + "px" : "unset", a.style.bottom = parseInt(i.btnBottomDistance) + "px", t.appendChild(a);
                const s = document.createElement("div");
                s.setAttribute("class", "wa__popup_heading"), s.style.background = i.backgroundColor, s.append((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_title", t.innerHTML = b().sanitize(i.title), t.style.color = i.textColor, t.style.fontSize = i.titleSize + "px", t
                })()), s.append((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_intro", t.innerHTML = b().sanitize(i.description.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t.style = "#fff" == i.textColor || "#ffffff" == i.textColor ? "color: #D9EBC6" : "color: " + i.textColor + "; opacity: 0.8", t.style.fontSize = i.descriptionTextSize + "px", t
                })());
                const c = document.createElement("div");
                c.className = "nta-wa-gdpr", c.appendChild((() => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"), t.setAttribute("type", "checkbox"), t.setAttribute("value", "accept"), t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30), "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            c.style.opacity = 0, setTimeout((() => {
                                t.forEach((t => t.style.display = "none"))
                            }), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    };
                    const e = document.createElement("span");
                    e.appendChild(t), e.appendChild((() => {
                        const t = document.createElement("span");
                        return t.innerHTML = b().sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t
                    })());
                    const i = document.createElement("label");
                    return i.setAttribute("for", "nta-wa-gdpr"), i.appendChild(e), i
                })());
                const l = document.createElement("div");
                l.className = "wa__popup_content wa__popup_content_left", l.appendChild((() => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_notice", t.innerHTML = b().sanitize(i.responseText.njtReplaceAll(/\r\n\r\n/gm, "<br/>")), t.style.fontSize = i.regularTextSize + "px", t
                })()), l.appendChild("ON" == i.isShowGDPR && 1 == n.gdprStatus && "accept" != h("nta-wa-gdpr") ? c : document.createTextNode("")), l.appendChild((() => {
                    const t = document.createElement("div");
                    var e;
                    return t.className = "wa__popup_content_list", t.onclick = function() {
                        "" == h("nta-wa-gdpr") && (c.style.background = "red", c.style.color = "#fff")
                    }, e = t, n.accounts.forEach((t => {
                        const r = g(t, n);
                        let o = A(t, n);
                        const a = document.createElement("div");
                        a.className = "wa__popup_avatar" + (t.avatar ? "" : " nta-default-avt"), a.appendChild((() => {
                            if (t.avatar) {
                                const e = document.createElement("div");
                                return e.className = "wa__cs_img_wrap", e.style = `background: url(${t.avatar}) center center no-repeat; background-size: cover;`, e
                            }
                            return document.createRange().createContextualFragment(n.defaultAvatar)
                        })());
                        const s = document.createElement("div");
                        s.className = "wa__popup_content_item" + (n.gdprStatus ? " pointer-disable" : ""), s.appendChild((() => {
                            const e = document.createElement("a");
                            return e.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"), e.setAttribute("href", o), e.setAttribute("rel", "nofollow noopener noreferrer"), e.className = "wa__stt" + ("online" === r ? " wa__stt_online" : " wa__stt_offline"), e.onclick = function() {
                                y(this, {
                                    enabledFacebook: n.options.analytics.enabledFacebook,
                                    enabledGoogle: n.options.analytics.enabledGoogle,
                                    enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                                })
                            }, e.appendChild(a), e.appendChild((() => {
                                const e = document.createElement("div");
                                e.className = "wa__popup_txt";
                                let n = "";
                                return n += `<div class="wa__member_name" style='font-size:${i.accountNameSize}px'>${t.accountName}</div>`, n += `<div class="wa__member_duty" style='font-size:${i.regularTextSize}px'>${t.title}</div>`, n += "online" != r ? `<div class="wa__member_status">${r}</div>` : "", e.innerHTML = b().sanitize(n), e
                            })()), e
                        })()), e.appendChild(s)
                    })), t
                })());
                var u = '<a target="_blank" href="https://ninjateam.org/whatsapp-chat-wordpress/"><svg role="img" aria-label="NinjaTeam WhatsApp for WordPress" class="wa__popup_icon-ninja" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><g> <path class="st0" fill="#a9a9a9" d="M286.3,67C238,67,194,85.3,160.8,115.2l0-0.1l-13.2-27.8L84.9,49.2l8.5,66.4l27.1,21.1l-31.8-19.9l-60,8.9   l40.2,46.1l48.9,0.3C105.6,197,98.7,225,98.7,254.6c0,103.6,84,187.6,187.6,187.6s187.6-84,187.6-187.6S389.9,67,286.3,67z    M285.8,346.3c-111,0-171.9-63.2-171.9-92.5s62.2-91.5,171.9-91.5c109.5,0,172.8,62.1,172.8,91.5   C458.6,283.2,398.4,346.3,285.8,346.3z"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -77.6656 328.6796)" class="st1" cx="357.9" cy="258.1" rx="20.6" ry="20.6"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.8129 226.9269)" class="st1" cx="214" cy="258.1" rx="20.6" ry="20.6"/></g></svg></a>',
                    d = '<div class="wa__popup_powered_content">' + u + '<span class="wa__popup_tooltiptext"><svg class="wa__popup_icon-tooltip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFAC33" d="M32.938 15.651C32.792 15.26 32.418 15 32 15H19.925L26.89 1.458c.219-.426.106-.947-.271-1.243C26.437.071 26.218 0 26 0c-.233 0-.466.082-.653.243L18 6.588 3.347 19.243c-.316.273-.43.714-.284 1.105S3.582 21 4 21h12.075L9.11 34.542c-.219.426-.106.947.271 1.243.182.144.401.215.619.215.233 0 .466-.082.653-.243L18 29.412l14.653-12.655c.317-.273.43-.714.285-1.106z"/></svg> Powered by <span class="wa__popup_tooltiptext-ninja">NinjaTeam</span></span></div>',
                    p = '<span class="wa__popup_tooltiptext_mb"> POWERED BY' + u + '<span class="wa__popup_tooltiptext-ninja-mb">NINJATEAM</span></span>';
                "ON" === i.isShowPoweredBy && l.appendChild((() => {
                    const t = document.createElement("div");
                    return t.className = v ? "wa__popup_powered_mb" : "wa__popup_powered", t.innerHTML = v ? b().sanitize(p) : b().sanitize(d), t
                })()), "ON" === i.isShowScroll && (l.style.maxHeight = parseInt(i.scrollHeight) + "px", l.style.overflow = "auto");
                const f = document.createElement("div");
                f.className = "wa__popup_chat_box", f.appendChild(s), f.style.left = "left" == i.btnPosition ? parseInt(i.btnLeftDistance) + "px" : "unset", f.style.right = "right" == i.btnPosition ? parseInt(i.btnRightDistance) + "px" : "unset", f.style.bottom = parseInt(i.btnBottomDistance) + 72 + "px", f.appendChild(l), t.appendChild(f)
            },
            ready: function(t) {
                return (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t)
            }
        }
    })()
})();