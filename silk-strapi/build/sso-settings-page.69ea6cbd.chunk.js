'use strict';
(globalThis['webpackChunksilk_strapi'] = globalThis['webpackChunksilk_strapi'] || []).push([
  [302],
  {
    /***/ 40316: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        SingleSignOn: () => /* binding */ SingleSignOn,
        default: () => /* binding */ pages_SingleSignOn,
      });

      // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
      var jsx_runtime = __webpack_require__(85893);
      // EXTERNAL MODULE: ./node_modules/react/index.js
      var react = __webpack_require__(67294);
      // EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 25 modules
      var helper_plugin_esm = __webpack_require__(548);
      // EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
      var Check = __webpack_require__(85018);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
      var Layout = __webpack_require__(17034);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
      var Main = __webpack_require__(185);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
      var HeaderLayout = __webpack_require__(53979);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
      var Button = __webpack_require__(29728);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
      var ContentLayout = __webpack_require__(49066);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
      var Flex = __webpack_require__(11047);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
      var Typography = __webpack_require__(75515);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
      var Grid = __webpack_require__(11276);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
      var GridItem = __webpack_require__(74571);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
      var ToggleInput = __webpack_require__(20707);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
      var Select = __webpack_require__(40619);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
      var Option = __webpack_require__(82562);
      // EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
      var useIntl = __webpack_require__(86896);
      // EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
      var isEqual = __webpack_require__(18446);
      var isEqual_default = /*#__PURE__*/ __webpack_require__.n(isEqual);
      // EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
      var utils = __webpack_require__(19631);
      // EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
      var hooks = __webpack_require__(48474);
      // EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
      var permissions = __webpack_require__(87751);
      // EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
      var es = __webpack_require__(87561); // CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/utils/schema.js
      const schema = es /* object */
        .Ry()
        .shape({
          autoRegister: es /* bool */
            .Xg()
            .required(helper_plugin_esm /* translatedErrors.required */.I0.required),
          defaultRole: es /* mixed */
            .nK()
            .when('autoRegister', (value, initSchema) => {
              return value
                ? initSchema.required(helper_plugin_esm /* translatedErrors.required */.I0.required)
                : initSchema.nullable();
            }),
        });
      /* harmony default export */ const utils_schema = schema; // CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/index.js

      const ssoPermissions = {
        ...permissions /* default.settings.sso */.Z.settings.sso,
        readRoles: permissions /* default.settings.roles.read */.Z.settings.roles.read,
      };
      const SingleSignOn = () => {
        const { formatMessage } = (0, useIntl /* default */.Z)();
        const {
          isLoading: isLoadingForPermissions,
          allowedActions: { canUpdate, canReadRoles },
        } = (0, helper_plugin_esm /* useRBAC */.ss)(ssoPermissions);
        const [
          { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader },
          // eslint-disable-next-line no-unused-vars
          dispatch,
          { handleChange, handleSubmit },
        ] = (0, hooks /* useSettingsForm */.G4)(
          (0, utils /* getRequestUrl */.IF)('providers/options'),
          utils_schema,
          () => {},
          ['autoRegister', 'defaultRole']
        );
        const { roles } = (0, hooks /* useRolesList */.bF)(canReadRoles);
        (0, helper_plugin_esm /* useFocusWhenNavigate */.go)();
        const showLoader = isLoadingForPermissions || isLoading;
        (0, react.useEffect)(() => {
          if (formErrors.defaultRole) {
            const selector = `[name="defaultRole"]`;
            document.querySelector(selector).focus();
          }
        }, [formErrors]);
        const isHeaderButtonDisabled = isEqual_default()(initialData, modifiedData);
        return /* @__PURE__ */ (0, jsx_runtime.jsxs)(Layout /* Layout */.A, {
          children: [
            /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* SettingsPageTitle */.SL, { name: 'SSO' }),
            /* @__PURE__ */ (0, jsx_runtime.jsx)(Main /* Main */.o, {
              tabIndex: -1,
              children: /* @__PURE__ */ (0, jsx_runtime.jsxs)('form', {
                onSubmit: (e) => {
                  if (isHeaderButtonDisabled) {
                    e.preventDefault();
                    return;
                  }
                  handleSubmit(e);
                },
                children: [
                  /* @__PURE__ */ (0, jsx_runtime.jsx)(HeaderLayout /* HeaderLayout */.T, {
                    primaryAction: /* @__PURE__ */ (0, jsx_runtime.jsx)(Button /* Button */.z, {
                      'data-testid': 'save-button',
                      disabled: isHeaderButtonDisabled,
                      loading: showHeaderButtonLoader,
                      startIcon: /* @__PURE__ */ (0, jsx_runtime.jsx)(Check /* default */.Z, {}),
                      type: 'submit',
                      size: 'L',
                      children: formatMessage({
                        id: 'global.save',
                        defaultMessage: 'Save',
                      }),
                    }),
                    title: formatMessage({ id: 'Settings.sso.title', defaultMessage: 'Single Sign-On' }),
                    subtitle: formatMessage({
                      id: 'Settings.sso.description',
                      defaultMessage: 'Configure the settings for the Single Sign-On feature.',
                    }),
                  }),
                  /* @__PURE__ */ (0, jsx_runtime.jsx)(ContentLayout /* ContentLayout */.D, {
                    children: showLoader
                      ? /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* LoadingIndicatorPage */.dO, {})
                      : /* @__PURE__ */ (0, jsx_runtime.jsxs)(Flex /* Flex */.k, {
                          direction: 'column',
                          alignItems: 'stretch',
                          gap: 4,
                          background: 'neutral0',
                          padding: 6,
                          shadow: 'filterShadow',
                          hasRadius: true,
                          children: [
                            /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                              variant: 'delta',
                              as: 'h2',
                              children: formatMessage({
                                id: 'global.settings',
                                defaultMessage: 'Settings',
                              }),
                            }),
                            /* @__PURE__ */ (0, jsx_runtime.jsxs)(Grid /* Grid */.r, {
                              gap: 4,
                              children: [
                                /* @__PURE__ */ (0, jsx_runtime.jsx)(GridItem /* GridItem */.P, {
                                  col: 6,
                                  m: 6,
                                  s: 12,
                                  children: /* @__PURE__ */ (0, jsx_runtime.jsx)(ToggleInput /* ToggleInput */.s, {
                                    'aria-label': 'autoRegister',
                                    'data-testid': 'autoRegister',
                                    disabled: !canUpdate,
                                    checked: modifiedData.autoRegister,
                                    hint: formatMessage({
                                      id: 'Settings.sso.form.registration.description',
                                      defaultMessage: 'Create new user on SSO login if no account exists',
                                    }),
                                    label: formatMessage({
                                      id: 'Settings.sso.form.registration.label',
                                      defaultMessage: 'Auto-registration',
                                    }),
                                    name: 'autoRegister',
                                    offLabel: formatMessage({
                                      id: 'app.components.ToggleCheckbox.off-label',
                                      defaultMessage: 'Off',
                                    }),
                                    onLabel: formatMessage({
                                      id: 'app.components.ToggleCheckbox.on-label',
                                      defaultMessage: 'On',
                                    }),
                                    onChange: (e) => {
                                      handleChange({
                                        target: { name: 'autoRegister', value: e.target.checked },
                                      });
                                    },
                                  }),
                                }),
                                /* @__PURE__ */ (0, jsx_runtime.jsx)(GridItem /* GridItem */.P, {
                                  col: 6,
                                  m: 6,
                                  s: 12,
                                  children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Select /* Select */.P, {
                                    disabled: !canUpdate,
                                    hint: formatMessage({
                                      id: 'Settings.sso.form.defaultRole.description',
                                      defaultMessage: 'It will attach the new authenticated user to the selected role',
                                    }),
                                    error: formErrors.defaultRole
                                      ? formatMessage({
                                          id: formErrors.defaultRole.id,
                                          defaultMessage: formErrors.defaultRole.id,
                                        })
                                      : '',
                                    label: formatMessage({
                                      id: 'Settings.sso.form.defaultRole.label',
                                      defaultMessage: 'Default role',
                                    }),
                                    name: 'defaultRole',
                                    onChange: (value) => {
                                      handleChange({ target: { name: 'defaultRole', value } });
                                    },
                                    placeholder: formatMessage({
                                      id: 'components.InputSelect.option.placeholder',
                                      defaultMessage: 'Choose here',
                                    }),
                                    value: modifiedData.defaultRole,
                                    children: roles.map(({ id, name }) =>
                                      /* @__PURE__ */ (0, jsx_runtime.jsx)(
                                        Option /* Option */.W,
                                        { value: id.toString(), children: name },
                                        id
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      const ProtectedSSO = () =>
        /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* CheckPagePermissions */.O4, {
          permissions: ssoPermissions.main,
          children: /* @__PURE__ */ (0, jsx_runtime.jsx)(SingleSignOn, {}),
        });
      /* harmony default export */ const pages_SingleSignOn = ProtectedSSO;

      /***/
    },
  },
]);
