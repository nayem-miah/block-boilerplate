(() => {
	'use strict';
	var e,
		r = {
			743: () => {
				const e = window.wp.blocks,
					r = JSON.parse('{"UU":"blocks-course/text-box"}'),
					o = window.wp.i18n,
					t = window.wp.blockEditor,
					n = window.ReactJSXRuntime;
				(0, e.registerBlockType)(r.UU, {
					icon: {
						src: 'text-page',
						background: '#f03',
						foreground: '#fff',
					},
					edit: function () {
						return (0, n.jsx)('p', {
							...(0, t.useBlockProps)(),
							children: (0, o.__)(
								'Boilerplate – hello from the editor!',
								'boilerplate'
							),
						});
					},
					save: function () {
						return (0, n.jsx)('p', {
							...t.useBlockProps.save(),
							children:
								'Boilerplate – hello from the saved content!',
						});
					},
				});
			},
		},
		o = {};
	function t(e) {
		var n = o[e];
		if (void 0 !== n) return n.exports;
		var i = (o[e] = { exports: {} });
		return r[e](i, i.exports, t), i.exports;
	}
	(t.m = r),
		(e = []),
		(t.O = (r, o, n, i) => {
			if (!o) {
				var l = 1 / 0;
				for (c = 0; c < e.length; c++) {
					for (var [o, n, i] = e[c], a = !0, s = 0; s < o.length; s++)
						(!1 & i || l >= i) &&
						Object.keys(t.O).every((e) => t.O[e](o[s]))
							? o.splice(s--, 1)
							: ((a = !1), i < l && (l = i));
					if (a) {
						e.splice(c--, 1);
						var p = n();
						void 0 !== p && (r = p);
					}
				}
				return r;
			}
			i = i || 0;
			for (var c = e.length; c > 0 && e[c - 1][2] > i; c--)
				e[c] = e[c - 1];
			e[c] = [o, n, i];
		}),
		(t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(() => {
			var e = { 245: 0, 921: 0 };
			t.O.j = (r) => 0 === e[r];
			var r = (r, o) => {
					var n,
						i,
						[l, a, s] = o,
						p = 0;
					if (l.some((r) => 0 !== e[r])) {
						for (n in a) t.o(a, n) && (t.m[n] = a[n]);
						if (s) var c = s(t);
					}
					for (r && r(o); p < l.length; p++)
						(i = l[p]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
					return t.O(c);
				},
				o = (globalThis.webpackChunkboilerplate =
					globalThis.webpackChunkboilerplate || []);
			o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
		})();
	var n = t.O(void 0, [921], () => t(743));
	n = t.O(n);
})();
