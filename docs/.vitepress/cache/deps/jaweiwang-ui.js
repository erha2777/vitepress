import {
  Fragment,
  Teleport,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  normalizeStyle,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watch,
  withDirectives
} from "./chunk-L2JNJ22P.js";

// node_modules/jaweiwang-ui/dist/jaweiwang-ui.js
var re = defineComponent({
  name: "MButton"
});
var ce = defineComponent({
  ...re,
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(l) {
    const r = l, o = computed(() => ["m-button", `m-button-${r.type}`]);
    return (i, u) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(unref(o))
    }, [
      createBaseVNode("span", null, [
        renderSlot(i.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var R = (l, r) => {
  const o = l.__vccOpts || l;
  for (const [i, u] of r)
    o[i] = u;
  return o;
};
var j = R(ce, [["__scopeId", "data-v-d41ee4c5"]]);
j.install = (l) => {
  l.component(j.name, j);
};
var pe = ["value"];
var de = defineComponent({
  name: "MInput"
});
var me = defineComponent({
  ...de,
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: r }) {
    const o = l, i = computed(() => ["m-input", o.type === "" ? "" : `m-input-${o.type}`]), u = (h) => {
      r("update:modelValue", h.target.value);
    };
    return (h, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(i))
    }, [
      createBaseVNode("input", {
        type: "text",
        value: l.modelValue,
        onInput: u
      }, null, 40, pe)
    ], 2));
  }
});
var H = R(me, [["__scopeId", "data-v-eaa88f7a"]]);
H.install = (l) => {
  l.component(H.name, H);
};
var fe = (l) => (pushScopeId("data-v-51de37bf"), l = l(), popScopeId(), l);
var ve = { class: "m-picker" };
var _e = { class: "box" };
var ye = fe(() => createBaseVNode("div", { class: "line" }, null, -1));
var ge = defineComponent({
  name: "MDatePicker"
});
var he = defineComponent({
  ...ge,
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(l) {
    const r = computed(() => ["m-date-picker"]), o = ref(false), i = reactive([
      {
        name: "宋军",
        id: "450000198412277541"
      },
      {
        name: "林强",
        id: "54000019871006508X"
      },
      {
        name: "韩平",
        id: "450000199904141055"
      },
      {
        name: "侯刚",
        id: "230000201104136943"
      },
      {
        name: "陈明",
        id: "610000201804201196"
      },
      {
        name: "黎勇",
        id: "810000199807203768"
      },
      {
        name: "赵杰",
        id: "640000201303017441"
      },
      {
        name: "贺丽",
        id: "150000198206095949"
      },
      {
        name: "魏秀兰",
        id: "45000019890718147X"
      },
      {
        name: "杨军",
        id: "460000199204301670"
      }
    ]), u = ref(0);
    return (h, a) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass(unref(r)),
        onClick: a[0] || (a[0] = (d) => o.value = !o.value)
      }, [
        createTextVNode(" 请选择 "),
        createBaseVNode("span", {
          class: normalizeClass(["iconfont icon-xxx", { "icon-xiajiantou": o.value, "icon-xialajiantou1": !o.value }])
        }, null, 2)
      ], 2),
      createBaseVNode("button", {
        onClick: a[1] || (a[1] = (d) => u.value += 1)
      }, "+"),
      createBaseVNode("button", {
        onClick: a[2] || (a[2] = (d) => u.value -= 1)
      }, "-"),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", ve, [
          createBaseVNode("div", _e, [
            createBaseVNode("ul", {
              style: normalizeStyle({ transform: `rotateX(${u.value * 20}deg) translate3d(0px, 0px, 0px)` })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(i, (d, v) => (openBlock(), createElementBlock("li", {
                key: v,
                style: normalizeStyle({ transform: `rotateX(${-20 * v}deg) translateZ(85px)` })
              }, toDisplayString(d.name), 5))), 128))
            ], 4),
            ye
          ])
        ])
      ]))
    ], 64));
  }
});
var O = R(he, [["__scopeId", "data-v-51de37bf"]]);
O.install = (l) => {
  l.component(O.name, O);
};
var xe = { class: "m-lyric-play" };
var ke = {
  key: 0,
  class: "m-lyric-play__header"
};
var $e = defineComponent({
  name: "MLyricPlay"
});
var Se = defineComponent({
  ...$e,
  props: {
    type: {
      type: String,
      default: "default"
    },
    lrc: {
      type: String,
      default: ""
    },
    currentTime: {
      type: Number,
      default: 0
    },
    lineHeight: {
      type: Number,
      default: 30
    },
    lineNum: {
      type: Number,
      default: 5
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showAll: {
      type: Boolean,
      default: false
    }
  },
  setup(l) {
    const r = l, o = {
      title: "ti",
      artist: "ar",
      album: "al",
      offset: "offset",
      by: "by"
    };
    let i = {};
    const u = computed(() => r.lrc), h = computed(() => r.lineHeight), a = computed(() => r.lineNum), d = computed(() => r.showTitle), v = computed(() => r.showAll), E = () => {
      for (let c in o) {
        const _ = u.value.match(new RegExp(`\\[${o[c]}:([^\\]]*)]`, "i"));
        i[c] = _ && _[1] || "";
      }
    }, A = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;
    let C = [];
    const L = () => {
      const c = u.value.split(`
`), _ = parseInt(i.offset) || 0;
      let m = null;
      for (let y = 0; y < c.length; y++) {
        const P = c[y];
        let k = A.exec(P);
        if (k) {
          const e = P.replace(A, "").trim();
          e && (["合：", "女：", "男："].includes(e) ? m = {
            time: k[1] * 60 * 1e3 + k[2] * 1e3 + (k[3] || 0) * 1 + _,
            txt: e
          } : m ? (C.push({
            time: k[1] * 60 * 1e3 + k[2] * 1e3 + (k[3] || 0) * 1 + _,
            txt: m.txt + e
          }), m = null) : C.push({
            time: k[1] * 60 * 1e3 + k[2] * 1e3 + (k[3] || 0) * 1 + _,
            txt: e
          }));
        }
      }
      c.sort((y, P) => y.time - P.time);
    };
    E(), L();
    let S = ref(0);
    watch(
      () => r.currentTime,
      (c) => {
        r.currentTime === 0 ? S.value = 0 : S.value = C.findIndex((_, m) => m < C.length - 1 ? c <= _.time || c <= C[m + 1].time : c >= _.time);
      }
    );
    const b = ref(false), w = ref(true), B = () => {
      v.value && (b.value = !b.value, b.value && (w.value = false, setTimeout(() => {
        V(), w.value = true;
      }, 300)));
    };
    watch(S, (c) => {
      b.value && w.value && nextTick(() => {
        V();
      });
    });
    const V = () => {
      let c = document.querySelector(".m-lyric-play-list-item_active");
      c && (c == null || c.scrollIntoView({ behavior: "smooth", block: "center" }));
    }, N = computed(() => a.value > 2 && (a.value - 1) % 2 === 0 ? `${h.value * ((a.value - 1) / 2)}px` : a.value > 3 ? `${h.value * (a.value / 2 - 1)}px` : "0px");
    return (c, _) => (openBlock(), createElementBlock("div", xe, [
      unref(d) ? (openBlock(), createElementBlock("div", ke, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(i)), (m, y) => (openBlock(), createElementBlock("div", {
          class: "m-lyric-play-tag",
          key: y
        }, toDisplayString(unref(i)[m]), 1))), 128))
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["m-lyric-play__container", { "m-lyric-play__container_mask": unref(a) > 3 }]),
        style: normalizeStyle({ height: `${unref(h) * unref(a)}px`, paddingTop: unref(N) }),
        onClick: B
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["m-lyric-play-list", { "m-lyric-play-list_show": b.value }]),
          style: normalizeStyle({ transform: `translateY(-${unref(h) * unref(S)}px)` })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(C), (m, y) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["m-lyric-play-list-item", { "m-lyric-play-list-item_active": unref(S) === y }]),
            style: normalizeStyle({ height: `${unref(h)}px`, "line-height": `${unref(h)}px` }),
            key: y
          }, toDisplayString(m.txt), 7))), 128))
        ], 6)
      ], 6)
    ]));
  }
});
var z = R(Se, [["__scopeId", "data-v-f907eebc"]]);
z.install = (l) => {
  l.component(z.name, z);
};
var Q = (l, r) => {
  let o = null;
  return l !== void 0 && r !== void 0 ? o = parseInt(Math.random() * (r - l + 1) + l) : l !== void 0 ? o = parseInt(Math.random() * l + 1 + "") : o = 0, o;
};
function Ce(l, r, o) {
  const i = ref(0), u = computed(() => r.playlist), h = computed(() => {
    var e;
    return ((e = u == null ? void 0 : u.value) == null ? void 0 : e.length) > 0 ? u.value[i.value] : {};
  }), a = reactive({
    stop: true,
    // 停止播放
    repeat: false,
    // 循环播放
    shuffle: false
    // 随机播放
  }), d = reactive({
    duration: 0,
    // 总时长
    endTime: "00:00",
    // 总时长
    currentTime: 0,
    // 当前播放时间
    playTime: "00:00",
    // 当前播放时间
    percentage: "0%"
    // 进度百分比
  }), v = ref(0.1), E = ref(false), A = () => {
    a.stop ? (l.value.play(), a.stop = false) : (l.value.pause(), a.stop = true);
  }, C = () => {
    l.value.pause(), a.stop = true;
  }, L = () => {
    a.shuffle = !a.shuffle;
  }, S = () => {
    a.repeat = !a.repeat;
  }, b = (e) => {
    i.value = e, a.stop = false;
  }, w = () => {
    o("ended"), a.shuffle ? V() : B(), a.stop = false;
  }, B = () => {
    let e = i.value;
    e + 1 === u.value.length ? i.value = 0 : i.value = e + 1;
  }, V = () => {
    let e = i.value, n = Q(0, u.value.length - 1);
    for (; n === e && u.value.length !== 1; )
      n = Q(0, u.value.length - 1);
    i.value = n;
  }, N = () => {
    let e = i.value;
    e - 1 < 0 ? i.value = u.value.length - 1 : i.value = e - 1, a.stop = false;
  }, c = (e) => {
    o("canplaythrough", e);
    const n = e.target;
    let p = Math.floor(n.duration / 60), f = Math.floor(n.duration % 60);
    p = p >= 10 ? p : "0" + p, f = f >= 10 ? f : "0" + f;
    const Y = p + ":" + f;
    d.duration = n.duration, d.endTime = Y;
  }, _ = (e) => {
    o("timeupdate", e);
    const n = e.target.currentTime;
    let p = Math.floor(n / 60), f = Math.floor(n % 60);
    (n % 60).toFixed(3), p = p >= 10 ? p : "0" + p, f = f >= 10 ? f : "0" + f, d.playTime = p + ":" + f, d.percentage = Math.ceil(n / e.target.duration * 100) + "%";
  }, m = (e) => {
    const n = e.offsetX, p = e.target.offsetWidth, f = d.duration, Y = n / p * 100, ne = f * Y / 100;
    d.currentTime = ne;
  };
  watch(() => d.currentTime, (e) => {
    l.value.currentTime = e;
  });
  const y = (e) => {
    const n = e.offsetX, p = e.currentTarget.offsetWidth, f = n / p;
    v.value = f;
  }, P = () => {
    v.value = 0;
  }, k = () => {
    v.value = 1;
  };
  return watch(() => v.value, (e) => {
    l.value.volume = e;
  }), {
    songData: h,
    songList: u,
    audioShow: E,
    playChange: A,
    playState: a,
    stopPlay: C,
    changeShufflePlay: L,
    changeRepeatPlay: S,
    changeSong: b,
    nextSong: w,
    prevSong: N,
    canplaythrough: c,
    playProgress: d,
    timeupdate: _,
    playPlan: m,
    playVolume: y,
    volume: v,
    playMute: P,
    volumeMax: k,
    playIndex: i,
    emit: o
  };
}
var G = (l) => (pushScopeId("data-v-53700357"), l = l(), popScopeId(), l);
var Te = {
  id: "my-audio",
  class: "m-audio-play"
};
var be = G(() => createBaseVNode("header", null, [
  createBaseVNode("div", { class: "title-active" }, "本地音乐"),
  createBaseVNode("span", { class: "line" }, "|"),
  createBaseVNode("div", null, "在线音乐")
], -1));
var Ie = { class: "m-audio-play-list" };
var Me = ["onClick", "title"];
var we = { class: "timeStart" };
var Pe = { class: "timeEnd" };
var Ae = G(() => createBaseVNode("i", { class: "iconfont icon-suoxiao" }, null, -1));
var Be = [
  Ae
];
var Ve = G(() => createBaseVNode("i", { class: "iconfont icon-yinle" }, null, -1));
var De = [
  Ve
];
var Ee = ["src", "autoplay", "loop"];
var Ne = defineComponent({
  name: "MAudioPlay"
});
var Xe = defineComponent({
  ...Ne,
  props: {
    playlist: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  emits: ["timeupdate", "canplaythrough", "ended"],
  setup(l, { emit: r }) {
    const o = l;
    let i = ref("");
    const {
      songData: u,
      songList: h,
      audioShow: a,
      playChange: d,
      playState: v,
      stopPlay: E,
      changeShufflePlay: A,
      changeRepeatPlay: C,
      changeSong: L,
      nextSong: S,
      prevSong: b,
      canplaythrough: w,
      playProgress: B,
      timeupdate: V,
      playPlan: N,
      playVolume: c,
      volume: _,
      playMute: m,
      volumeMax: y,
      playIndex: P
    } = Ce(i, o, r);
    return (k, e) => (openBlock(), createElementBlock("div", Te, [
      be,
      createBaseVNode("main", null, [
        createBaseVNode("div", Ie, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(h), (n, p) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["m-audio-play-list-item", { activeSong: p === unref(P) }]),
            key: p,
            onClick: (f) => unref(L)(p),
            title: n.name
          }, toDisplayString(n.name), 11, Me))), 128))
        ])
      ]),
      createBaseVNode("footer", null, [
        createBaseVNode("span", {
          class: "progress_bar",
          onClick: e[0] || (e[0] = //@ts-ignore
          (...n) => unref(N) && unref(N)(...n))
        }, [
          createBaseVNode("span", {
            class: "progress_bar_value",
            style: normalizeStyle({ width: unref(B).percentage })
          }, null, 4)
        ]),
        createBaseVNode("div", we, toDisplayString(unref(B).playTime), 1),
        createBaseVNode("div", Pe, toDisplayString(unref(B).endTime), 1),
        createBaseVNode("span", {
          class: normalizeClass(["audio_mute", { muteT: unref(_) === 0 }]),
          onClick: e[1] || (e[1] = //@ts-ignore
          (...n) => unref(m) && unref(m)(...n))
        }, "静音", 2),
        createBaseVNode("span", {
          class: "volume_bar",
          onClick: e[2] || (e[2] = //@ts-ignore
          (...n) => unref(c) && unref(c)(...n))
        }, [
          createTextVNode("进度条"),
          createBaseVNode("span", {
            class: "volume_bar_value",
            style: normalizeStyle({ width: unref(_) * 100 + "%" })
          }, null, 4)
        ]),
        createBaseVNode("span", {
          class: "volume_max",
          onClick: e[3] || (e[3] = //@ts-ignore
          (...n) => unref(y) && unref(y)(...n))
        }, "最大音量"),
        createBaseVNode("span", {
          class: "audio_previous",
          onClick: e[4] || (e[4] = //@ts-ignore
          (...n) => unref(b) && unref(b)(...n))
        }, "上一曲"),
        createBaseVNode("span", {
          class: normalizeClass(["audio_play", { playT: !unref(v).stop }]),
          onClick: e[5] || (e[5] = //@ts-ignore
          (...n) => unref(d) && unref(d)(...n))
        }, "播放", 2),
        createBaseVNode("span", {
          class: "audio_next",
          onClick: e[6] || (e[6] = //@ts-ignore
          (...n) => unref(S) && unref(S)(...n))
        }, "下一曲"),
        createBaseVNode("span", {
          class: "audio_stop",
          onClick: e[7] || (e[7] = //@ts-ignore
          (...n) => unref(E) && unref(E)(...n))
        }, "停止"),
        createBaseVNode("span", {
          class: normalizeClass(["audio_repeat", { repeat_click: unref(v).repeat }]),
          onClick: e[8] || (e[8] = //@ts-ignore
          (...n) => unref(C) && unref(C)(...n))
        }, "循环", 2),
        createBaseVNode("span", {
          class: normalizeClass(["audio_shuffle", { shuffle_click: unref(v).shuffle }]),
          onClick: e[9] || (e[9] = //@ts-ignore
          (...n) => unref(A) && unref(A)(...n))
        }, "随机", 2)
      ]),
      withDirectives(createBaseVNode("span", {
        class: "shrinkButton",
        onClick: e[10] || (e[10] = () => {
        })
      }, Be, 512), [
        [vShow, true]
      ]),
      withDirectives(createBaseVNode("span", {
        class: normalizeClass(["leftButton", { rotate360: true }]),
        style: { left: "-40px" },
        onClick: e[11] || (e[11] = () => {
        })
      }, De, 512), [
        [vShow, false]
      ]),
      createBaseVNode("audio", {
        ref_key: "audio",
        ref: i,
        src: unref(u).url ? unref(u).url : "./",
        autoplay: o.autoplay,
        loop: unref(v).repeat,
        onTimeupdate: e[12] || (e[12] = //@ts-ignore
        (...n) => unref(V) && unref(V)(...n)),
        onCanplaythrough: e[13] || (e[13] = //@ts-ignore
        (...n) => unref(w) && unref(w)(...n)),
        onEnded: e[14] || (e[14] = //@ts-ignore
        (...n) => unref(S) && unref(S)(...n)),
        crossOrigin: "anonymous"
      }, null, 40, Ee)
    ]));
  }
});
var W = R(Xe, [["__scopeId", "data-v-53700357"]]);
W.install = (l) => {
  l.component(W.name, W);
};
var Le = (l) => {
  l.use(j), l.use(H), l.use(O), l.use(z), l.use(W);
};
var Re = {
  install: Le
};
export {
  W as MAudioAlay,
  j as MButton,
  O as MDatePicker,
  H as MInput,
  z as MLyricPlay,
  Re as default
};
//# sourceMappingURL=jaweiwang-ui.js.map
