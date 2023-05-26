'use strict';
(globalThis['webpackChunksilk_strapi'] = globalThis['webpackChunksilk_strapi'] || []).push([
  [3677],
  {
    /***/ 14928: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ pages_InstalledPluginsPage,
      });

      // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
      var jsx_runtime = __webpack_require__(85893);
      // EXTERNAL MODULE: ./node_modules/react/index.js
      var react = __webpack_require__(67294);
      // EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 25 modules
      var helper_plugin_esm = __webpack_require__(548);
      // EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
      var Helmet = __webpack_require__(64593);
      // EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
      var useIntl = __webpack_require__(86896);
      // EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
      var permissions = __webpack_require__(87751);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
      var useNotifyAT = __webpack_require__(14087);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
      var Layout = __webpack_require__(17034);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
      var Main = __webpack_require__(185);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
      var HeaderLayout = __webpack_require__(53979);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
      var ContentLayout = __webpack_require__(49066);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
      var Table = __webpack_require__(38939);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
      var Thead = __webpack_require__(8060);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
      var Tr = __webpack_require__(79031);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
      var Cell = __webpack_require__(37909);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
      var Typography = __webpack_require__(75515);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
      var Tbody = __webpack_require__(15234);
      // EXTERNAL MODULE: ./node_modules/react-query/es/index.js
      var es = __webpack_require__(88767); // CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/utils/api.js
      const fetchEnabledPlugins = async () => {
        const { get } = (0, helper_plugin_esm /* getFetchClient */.tg)();
        const { data } = await get('/admin/plugins');
        return data;
      }; // CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/index.js

      const useFetchEnabledPlugins = (notifyLoad) => {
        const toggleNotification = (0, helper_plugin_esm /* useNotification */.lm)();
        return (0, es.useQuery)('list-enabled-plugins', () => fetchEnabledPlugins(), {
          onSuccess() {
            if (notifyLoad) {
              notifyLoad();
            }
          },
          onError() {
            toggleNotification({
              type: 'warning',
              message: { id: 'notification.error', defaultMessage: 'An error occured' },
            });
          },
        });
      };
      /* harmony default export */ const hooks_useFetchEnabledPlugins = useFetchEnabledPlugins; // CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js

      const Plugins = () => {
        const { formatMessage } = (0, useIntl /* default */.Z)();
        const { notifyStatus } = (0, useNotifyAT /* useNotifyAT */.G)();
        (0, helper_plugin_esm /* useFocusWhenNavigate */.go)();
        const title = formatMessage({
          id: 'global.plugins',
          defaultMessage: 'Plugins',
        });
        const notifyPluginPageLoad = () => {
          notifyStatus(
            formatMessage(
              {
                id: 'app.utils.notify.data-loaded',
                defaultMessage: 'The {target} has loaded',
              },
              { target: title }
            )
          );
        };
        const { status, data } = hooks_useFetchEnabledPlugins(notifyPluginPageLoad);
        const isLoading = status !== 'success' && status !== 'error';
        if (isLoading) {
          return /* @__PURE__ */ (0, jsx_runtime.jsx)(Layout /* Layout */.A, {
            children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Main /* Main */.o, {
              'aria-busy': true,
              children: /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* LoadingIndicatorPage */.dO, {}),
            }),
          });
        }
        return /* @__PURE__ */ (0, jsx_runtime.jsx)(Layout /* Layout */.A, {
          children: /* @__PURE__ */ (0, jsx_runtime.jsxs)(Main /* Main */.o, {
            children: [
              /* @__PURE__ */ (0, jsx_runtime.jsx)(HeaderLayout /* HeaderLayout */.T, {
                title,
                subtitle: formatMessage({
                  id: 'app.components.ListPluginsPage.description',
                  defaultMessage: 'List of the installed plugins in the project.',
                }),
              }),
              /* @__PURE__ */ (0, jsx_runtime.jsx)(ContentLayout /* ContentLayout */.D, {
                children: /* @__PURE__ */ (0, jsx_runtime.jsxs)(Table /* Table */.i, {
                  colCount: 2,
                  rowCount: data?.plugins?.length ?? 0 + 1,
                  children: [
                    /* @__PURE__ */ (0, jsx_runtime.jsx)(Thead /* Thead */.h, {
                      children: /* @__PURE__ */ (0, jsx_runtime.jsxs)(Tr.Tr, {
                        children: [
                          /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Th, {
                            children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                              variant: 'sigma',
                              textColor: 'neutral600',
                              children: formatMessage({
                                id: 'global.name',
                                defaultMessage: 'Name',
                              }),
                            }),
                          }),
                          /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Th, {
                            children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                              variant: 'sigma',
                              textColor: 'neutral600',
                              children: formatMessage({
                                id: 'global.description',
                                defaultMessage: 'description',
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    /* @__PURE__ */ (0, jsx_runtime.jsx)(Tbody /* Tbody */.p, {
                      children: data.plugins.map(({ name, displayName, description }) => {
                        return /* @__PURE__ */ (0, jsx_runtime.jsxs)(
                          Tr.Tr,
                          {
                            children: [
                              /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Td, {
                                children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                                  textColor: 'neutral800',
                                  variant: 'omega',
                                  fontWeight: 'bold',
                                  children: formatMessage({
                                    id: `global.plugins.${name}`,
                                    defaultMessage: displayName,
                                  }),
                                }),
                              }),
                              /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Td, {
                                children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                                  textColor: 'neutral800',
                                  children: formatMessage({
                                    id: `global.plugins.${name}.description`,
                                    defaultMessage: description,
                                  }),
                                }),
                              }),
                            ],
                          },
                          name
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      /* harmony default export */ const InstalledPluginsPage_Plugins = Plugins; // CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/index.js

      const InstalledPluginsPage = () => {
        const { formatMessage } = (0, useIntl /* default */.Z)();
        const title = formatMessage({
          id: 'global.plugins',
          defaultMessage: 'Plugins',
        });
        return /* @__PURE__ */ (0, jsx_runtime.jsxs)(helper_plugin_esm /* CheckPagePermissions */.O4, {
          permissions: permissions /* default.marketplace.main */.Z.marketplace.main,
          children: [
            /* @__PURE__ */ (0, jsx_runtime.jsx)(Helmet /* Helmet */.q, { title }),
            /* @__PURE__ */ (0, jsx_runtime.jsx)(InstalledPluginsPage_Plugins, {}),
          ],
        });
      };
      /* harmony default export */ const pages_InstalledPluginsPage = InstalledPluginsPage;

      /***/
    },

    /***/ 17034: /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ A: () => /* binding */ t,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71997);
      /* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);

      const s = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(
          _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ /* .Box */.x
        )`
  display: grid;
  grid-template-columns: ${({ hasSideNav: o }) => (o ? 'auto 1fr' : '1fr')};
`,
        m = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(
          _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ /* .Box */.x
        )`
  overflow-x: hidden;
`,
        t = ({ sideNav: o, children: d }) =>
          /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, {
            hasSideNav: !!o,
            children: [
              o,
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
                paddingBottom: 10,
                children: d,
              }),
            ],
          });
      t.defaultProps = {
        sideNav: void 0,
      };
      t.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_4__.node.isRequired,
        sideNav: prop_types__WEBPACK_IMPORTED_MODULE_4__.node,
      };

      /***/
    },
  },
]);
