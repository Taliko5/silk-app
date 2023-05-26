'use strict';
(globalThis['webpackChunksilk_strapi'] = globalThis['webpackChunksilk_strapi'] || []).push([
  [5199],
  {
    /***/ 67875: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });

      const useLicenseLimitNotification = () => {
        return null;
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = useLicenseLimitNotification;

      /***/
    },

    /***/ 94699: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29728);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89597);
      /* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);

      const Filters = ({ displayedFilters }) => {
        const [isVisible, setIsVisible] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z)();
        const buttonRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
        const handleToggle = () => {
          setIsVisible((prev) => !prev);
        };
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: [
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ /* .Box */.x,
                {
                  paddingTop: 1,
                  paddingBottom: 1,
                  children: [
                    /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ /* .Button */.z,
                      {
                        variant: 'tertiary',
                        ref: buttonRef,
                        startIcon: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                          {}
                        ),
                        onClick: handleToggle,
                        size: 'S',
                        children: formatMessage({
                          id: 'app.utils.filters',
                          defaultMessage: 'Filters',
                        }),
                      }
                    ),
                    isVisible &&
                      /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .FilterPopoverURLQuery */.J5,
                        {
                          displayedFilters,
                          isVisible,
                          onToggle: handleToggle,
                          source: buttonRef,
                        }
                      ),
                  ],
                }
              ),
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .FilterListURLQuery */.W$,
                { filtersSchema: displayedFilters }
              ),
            ],
          }
        );
      };
      Filters.propTypes = {
        displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
            name: prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,
            metadatas: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
              label: prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,
            }),
            fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
              type: prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,
            }),
          })
        ).isRequired,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Filters;

      /***/
    },

    /***/ 4214: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86896);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29728);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23293);

      const CreateAction = ({ onClick }) => {
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z)();
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ /* .Button */.z,
          {
            onClick,
            startIcon: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
              {}
            ),
            size: 'S',
            children: formatMessage({
              id: 'Settings.permissions.users.create',
              defaultMessage: 'Invite new user',
            }),
          }
        );
      };
      CreateAction.propTypes = {
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = CreateAction;

      /***/
    },

    /***/ 57338: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });

      const formDataModel = {
        firstname: '',
        lastname: '',
        email: '',
        roles: [],
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = formDataModel;

      /***/
    },

    /***/ 55867: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });

      const form = [];
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = form;

      /***/
    },

    /***/ 37735: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        default: () => /* binding */ Users_ProtectedListPage,
      });

      // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
      var jsx_runtime = __webpack_require__(85893);
      // EXTERNAL MODULE: ./node_modules/react/index.js
      var react = __webpack_require__(67294);
      // EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 25 modules
      var helper_plugin_esm = __webpack_require__(548);
      // EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
      var permissions = __webpack_require__(87751);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
      var useNotifyAT = __webpack_require__(14087);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
      var Main = __webpack_require__(185);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
      var HeaderLayout = __webpack_require__(53979);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
      var ActionLayout = __webpack_require__(36989);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
      var ContentLayout = __webpack_require__(49066);
      // EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
      var react_router = __webpack_require__(16550);
      // EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
      var useIntl = __webpack_require__(86896);
      // EXTERNAL MODULE: ./node_modules/react-query/es/index.js
      var es = __webpack_require__(88767);
      // EXTERNAL MODULE: ./node_modules/prop-types/index.js
      var prop_types = __webpack_require__(45697);
      var prop_types_default = /*#__PURE__*/ __webpack_require__.n(prop_types);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
      var Tbody = __webpack_require__(15234);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
      var Tr = __webpack_require__(79031);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
      var Cell = __webpack_require__(37909);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
      var BaseCheckbox = __webpack_require__(92155);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
      var Typography = __webpack_require__(75515);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
      var Flex = __webpack_require__(11047);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
      var IconButton = __webpack_require__(12028);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
      var Box = __webpack_require__(41580);
      // EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
      var Pencil = __webpack_require__(4585);
      // EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
      var Trash = __webpack_require__(20022);
      // EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
      var utils = __webpack_require__(19631); // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js
      const TableRows = ({
        canDelete,
        headers,
        entriesToDelete,
        onClickDelete,
        onSelectRow,
        withMainAction,
        withBulkActions,
        rows,
      }) => {
        const {
          push,
          location: { pathname },
        } = (0, react_router /* useHistory */.k6)();
        const { formatMessage } = (0, useIntl /* default */.Z)();
        return /* @__PURE__ */ (0, jsx_runtime.jsx)(Tbody /* Tbody */.p, {
          children: rows.map((data) => {
            const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
            return /* @__PURE__ */ (0, jsx_runtime.jsxs)(
              Tr.Tr,
              {
                ...(0, helper_plugin_esm /* onRowClick */.X7)({
                  fn: () => push(`${pathname}/${data.id}`),
                  condition: withBulkActions,
                }),
                children: [
                  withMainAction &&
                    /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Td, {
                      ...helper_plugin_esm /* stopPropagation */.UW,
                      children: /* @__PURE__ */ (0, jsx_runtime.jsx)(BaseCheckbox /* BaseCheckbox */.C, {
                        'aria-label': formatMessage(
                          {
                            id: 'app.component.table.select.one-entry',
                            defaultMessage: `Select {target}`,
                          },
                          {
                            target: (0, utils /* getFullName */.Pp)(data.firstname, data.lastname),
                          }
                        ),
                        checked: isChecked,
                        onChange: () => {
                          onSelectRow({ name: data.id, value: !isChecked });
                        },
                      }),
                    }),
                  headers.map(({ key, cellFormatter, name, ...rest }) => {
                    return /* @__PURE__ */ (0, jsx_runtime.jsx)(
                      Cell.Td,
                      {
                        children:
                          typeof cellFormatter === 'function'
                            ? cellFormatter(data, { key, name, formatMessage, ...rest })
                            : /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                                textColor: 'neutral800',
                                children: data[name] || '-',
                              }),
                      },
                      key
                    );
                  }),
                  withBulkActions &&
                    /* @__PURE__ */ (0, jsx_runtime.jsx)(Cell.Td, {
                      children: /* @__PURE__ */ (0, jsx_runtime.jsxs)(Flex /* Flex */.k, {
                        justifyContent: 'end',
                        children: [
                          /* @__PURE__ */ (0, jsx_runtime.jsx)(IconButton /* IconButton */.h, {
                            onClick: () => push(`${pathname}/${data.id}`),
                            label: formatMessage(
                              {
                                id: 'app.component.table.edit',
                                defaultMessage: 'Edit {target}',
                              },
                              {
                                target: (0, utils /* getFullName */.Pp)(data.firstname, data.lastname),
                              }
                            ),
                            noBorder: true,
                            icon: /* @__PURE__ */ (0, jsx_runtime.jsx)(Pencil /* default */.Z, {}),
                          }),
                          canDelete &&
                            /* @__PURE__ */ (0, jsx_runtime.jsx)(Box /* Box */.x, {
                              paddingLeft: 1,
                              ...helper_plugin_esm /* stopPropagation */.UW,
                              children: /* @__PURE__ */ (0, jsx_runtime.jsx)(IconButton /* IconButton */.h, {
                                onClick: () => onClickDelete(data.id),
                                label: formatMessage(
                                  {
                                    id: 'global.delete-target',
                                    defaultMessage: 'Delete {target}',
                                  },
                                  {
                                    target: (0, utils /* getFullName */.Pp)(data.firstname, data.lastname),
                                  }
                                ),
                                noBorder: true,
                                icon: /* @__PURE__ */ (0, jsx_runtime.jsx)(Trash /* default */.Z, {}),
                              }),
                            }),
                        ],
                      }),
                    }),
                ],
              },
              data.id
            );
          }),
        });
      };
      TableRows.defaultProps = {
        canDelete: false,
        entriesToDelete: [],
        onClickDelete() {},
        onSelectRow() {},
        rows: [],
        withBulkActions: false,
        withMainAction: false,
      };
      TableRows.propTypes = {
        canDelete: prop_types_default().bool,
        entriesToDelete: prop_types_default().array,
        headers: prop_types_default().array.isRequired,
        onClickDelete: prop_types_default().func,
        onSelectRow: prop_types_default().func,
        rows: prop_types_default().array,
        withBulkActions: prop_types_default().bool,
        withMainAction: prop_types_default().bool,
      };
      /* harmony default export */ const DynamicTable_TableRows = TableRows;

      // EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
      var Filters = __webpack_require__(94699);
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
      var esm_extends = __webpack_require__(87462);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
      var Button = __webpack_require__(29728);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
      var ModalLayout = __webpack_require__(42866);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
      var ModalHeader = __webpack_require__(24969);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Breadcrumbs/Breadcrumbs.js
      var Breadcrumbs = __webpack_require__(2407);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
      var ModalBody = __webpack_require__(59946);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
      var Grid = __webpack_require__(11276);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
      var GridItem = __webpack_require__(74571);
      // EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
      var ModalFooter = __webpack_require__(36856);
      // EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
      var formik_esm = __webpack_require__(41054);
      // EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
      var SelectRoles = __webpack_require__(81288); // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/layout.js
      const layout = [
        [
          {
            intlLabel: {
              id: 'Auth.form.firstname.label',
              defaultMessage: 'First name',
            },
            name: 'firstname',
            placeholder: {
              id: 'Auth.form.firstname.placeholder',
              defaultMessage: 'e.g. Kai',
            },
            type: 'text',
            size: {
              col: 6,
              xs: 12,
            },
            required: true,
          },
          {
            intlLabel: {
              id: 'Auth.form.lastname.label',
              defaultMessage: 'Last name',
            },
            name: 'lastname',
            placeholder: {
              id: 'Auth.form.lastname.placeholder',
              defaultMessage: 'e.g. Doe',
            },
            type: 'text',
            size: {
              col: 6,
              xs: 12,
            },
          },
        ],
        [
          {
            intlLabel: {
              id: 'Auth.form.email.label',
              defaultMessage: 'Email',
            },
            name: 'email',
            placeholder: {
              id: 'Auth.form.email.placeholder',
              defaultMessage: 'e.g. kai.doe@strapi.io',
            },
            type: 'email',
            size: {
              col: 6,
              xs: 12,
            },
            required: true,
          },
        ],
      ];
      /* harmony default export */ const utils_layout = layout;

      // EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
      var yup_es = __webpack_require__(87561); // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/schema.js
      const schema = yup_es /* object */
        .Ry()
        .shape({
          firstname: yup_es /* string */
            .Z_()
            .trim()
            .required(helper_plugin_esm /* translatedErrors.required */.I0.required),
          lastname: yup_es /* string */
            .Z_(),
          email: yup_es /* string */
            .Z_()
            .email(helper_plugin_esm /* translatedErrors.email */.I0.email)
            .required(helper_plugin_esm /* translatedErrors.required */.I0.required),
          roles: yup_es /* array */
            .IX()
            .min(1, helper_plugin_esm /* translatedErrors.required */.I0.required)
            .required(helper_plugin_esm /* translatedErrors.required */.I0.required),
        });
      /* harmony default export */ const utils_schema = schema; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/stepper.js

      const stepper = {
        create: {
          buttonSubmitLabel: {
            id: 'app.containers.Users.ModalForm.footer.button-success',
            defaultMessage: 'Invite user',
          },
          isDisabled: false,
          next: 'magic-link',
        },
        'magic-link': {
          buttonSubmitLabel: { id: 'global.finish', defaultMessage: 'Finish' },
          isDisabled: true,
          next: null,
        },
      };
      /* harmony default export */ const utils_stepper = stepper; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js

      const formDataModel = (() => {
        if (window && window.strapi && window.strapi.isEE) {
          return __webpack_require__(97083) /* ["default"] */.Z;
        }
        return __webpack_require__(57338) /* ["default"] */.Z;
      })();
      const roleSettingsForm = (() => {
        if (window && window.strapi && window.strapi.isEE) {
          return __webpack_require__(810) /* ["default"] */.Z;
        }
        return __webpack_require__(55867) /* ["default"] */.Z;
      })();
      const MagicLink = (() => {
        if (window && window.strapi && window.strapi.isEE) {
          return __webpack_require__(12201) /* ["default"] */.Z;
        }
        return __webpack_require__(31605) /* ["default"] */.Z;
      })();
      const ModalForm = (_ref) => {
        let { queryName, onToggle } = _ref;
        const [currentStep, setStep] = (0, react.useState)('create');
        const [isSubmitting, setIsSubmitting] = (0, react.useState)(false);
        const [registrationToken, setRegistrationToken] = (0, react.useState)(null);
        const queryClient = (0, es.useQueryClient)();
        const { formatMessage } = (0, useIntl /* default */.Z)();
        const toggleNotification = (0, helper_plugin_esm /* useNotification */.lm)();
        const { lockApp, unlockApp } = (0, helper_plugin_esm /* useOverlayBlocker */.o1)();
        const { post } = (0, helper_plugin_esm /* useFetchClient */.kY)();
        const postMutation = (0, es.useMutation)(
          (body) => {
            return post('/admin/users', body);
          },
          {
            async onSuccess(_ref2) {
              let { data } = _ref2;
              setRegistrationToken(data.data.registrationToken);
              await queryClient.refetchQueries(queryName);
              await queryClient.refetchQueries(['ee', 'license-limit-info']);
              goNext();
              setIsSubmitting(false);
            },
            onError(err) {
              setIsSubmitting(false);
              toggleNotification({
                type: 'warning',
                message: { id: 'notification.error', defaultMessage: 'An error occured' },
              });
              throw err;
            },
            onSettled() {
              unlockApp();
            },
          }
        );
        const headerTitle = formatMessage({
          id: 'Settings.permissions.users.create',
          defaultMessage: 'Invite new user',
        });
        const handleSubmit = async (body, _ref3) => {
          let { setErrors } = _ref3;
          lockApp();
          setIsSubmitting(true);
          try {
            await postMutation.mutateAsync(body);
          } catch (err) {
            unlockApp();
            if (err?.response?.data?.error.message === 'Email already taken') {
              setErrors({ email: err.response.data.error.message });
            }
          }
        };
        const goNext = () => {
          if (next) {
            setStep(next);
          } else {
            onToggle();
          }
        };
        const { buttonSubmitLabel, isDisabled, next } = utils_stepper[currentStep];
        const endActions =
          currentStep === 'create'
            ? /*#__PURE__*/ react.createElement(
                Button /* Button */.z,
                { type: 'submit', loading: isSubmitting },
                formatMessage(buttonSubmitLabel)
              )
            : /*#__PURE__*/ react.createElement(
                Button /* Button */.z,
                { type: 'button', loading: isSubmitting, onClick: onToggle },
                formatMessage(buttonSubmitLabel)
              );
        return /*#__PURE__*/ react.createElement(
          ModalLayout /* ModalLayout */.P,
          { onClose: onToggle, labelledBy: 'title' },
          /*#__PURE__*/ react.createElement(
            ModalHeader /* ModalHeader */.x,
            null,
            /*#__PURE__*/ react.createElement(
              Breadcrumbs /* Breadcrumbs */.O,
              { label: headerTitle },
              /*#__PURE__*/ react.createElement(Breadcrumbs /* Crumb */.$, null, headerTitle)
            )
          ),
          /*#__PURE__*/ react.createElement(
            formik_esm /* Formik */.J9,
            {
              initialValues: formDataModel,
              onSubmit: handleSubmit,
              validationSchema: utils_schema,
              validateOnChange: false,
            },
            (_ref4) => {
              let { errors, handleChange, values } = _ref4;
              return /*#__PURE__*/ react.createElement(
                helper_plugin_esm /* Form */.l0,
                null,
                /*#__PURE__*/ react.createElement(
                  ModalBody /* ModalBody */.f,
                  null,
                  /*#__PURE__*/ react.createElement(
                    Flex /* Flex */.k,
                    { direction: 'column', alignItems: 'stretch', gap: 6 },
                    currentStep !== 'create' &&
                      /*#__PURE__*/ react.createElement(MagicLink, {
                        registrationToken: registrationToken,
                      }),
                    /*#__PURE__*/ react.createElement(
                      Box /* Box */.x,
                      null,
                      /*#__PURE__*/ react.createElement(
                        Typography /* Typography */.Z,
                        { variant: 'beta', as: 'h2' },
                        formatMessage({
                          id: 'app.components.Users.ModalCreateBody.block-title.details',
                          defaultMessage: 'User details',
                        })
                      ),
                      /*#__PURE__*/ react.createElement(
                        Box /* Box */.x,
                        { paddingTop: 4 },
                        /*#__PURE__*/ react.createElement(
                          Flex /* Flex */.k,
                          { direction: 'column', alignItems: 'stretch', gap: 1 },
                          /*#__PURE__*/ react.createElement(
                            Grid /* Grid */.r,
                            { gap: 5 },
                            utils_layout.map((row) => {
                              return row.map((input) => {
                                return /*#__PURE__*/ react.createElement(
                                  GridItem /* GridItem */.P,
                                  (0, esm_extends /* default */.Z)({ key: input.name }, input.size),
                                  /*#__PURE__*/ react.createElement(
                                    helper_plugin_esm /* GenericInput */.jm,
                                    (0, esm_extends /* default */.Z)({}, input, {
                                      disabled: isDisabled,
                                      error: errors[input.name],
                                      onChange: handleChange,
                                      value: values[input.name],
                                    })
                                  )
                                );
                              });
                            })
                          )
                        )
                      )
                    ),
                    /*#__PURE__*/ react.createElement(
                      Box /* Box */.x,
                      null,
                      /*#__PURE__*/ react.createElement(
                        Typography /* Typography */.Z,
                        { variant: 'beta', as: 'h2' },
                        formatMessage({ id: 'global.roles', defaultMessage: "User's role" })
                      ),
                      /*#__PURE__*/ react.createElement(
                        Box /* Box */.x,
                        { paddingTop: 4 },
                        /*#__PURE__*/ react.createElement(
                          Grid /* Grid */.r,
                          { gap: 5 },
                          /*#__PURE__*/ react.createElement(
                            GridItem /* GridItem */.P,
                            { col: 6, xs: 12 },
                            /*#__PURE__*/ react.createElement(SelectRoles /* default */.Z, {
                              disabled: isDisabled,
                              error: errors.roles,
                              onChange: handleChange,
                              value: values.roles,
                            })
                          ),
                          roleSettingsForm.map((row) => {
                            return row.map((input) => {
                              return /*#__PURE__*/ react.createElement(
                                GridItem /* GridItem */.P,
                                (0, esm_extends /* default */.Z)({ key: input.name }, input.size),
                                /*#__PURE__*/ react.createElement(
                                  helper_plugin_esm /* GenericInput */.jm,
                                  (0, esm_extends /* default */.Z)({}, input, {
                                    disabled: isDisabled,
                                    onChange: handleChange,
                                    value: values[input.name],
                                  })
                                )
                              );
                            });
                          })
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ react.createElement(ModalFooter /* ModalFooter */.m, {
                  startActions: /*#__PURE__*/ react.createElement(
                    Button /* Button */.z,
                    { variant: 'tertiary', onClick: onToggle, type: 'button' },
                    formatMessage({ id: 'app.components.Button.cancel', defaultMessage: 'Cancel' })
                  ),
                  endActions: endActions,
                })
              );
            }
          )
        );
      };
      ModalForm.propTypes = {
        onToggle: prop_types_default().func.isRequired,
        queryName: prop_types_default().array.isRequired,
      };
      /* harmony default export */ const ListPage_ModalForm = ModalForm; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js
      const PaginationFooter = ({ pagination }) => {
        return /* @__PURE__ */ (0, jsx_runtime.jsx)(Box /* Box */.x, {
          paddingTop: 4,
          children: /* @__PURE__ */ (0, jsx_runtime.jsxs)(Flex /* Flex */.k, {
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            children: [
              /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* PageSizeURLQuery */.v4, {}),
              /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* PaginationURLQuery */.tU, {
                pagination,
              }),
            ],
          }),
        });
      };
      PaginationFooter.defaultProps = {
        pagination: {
          pageCount: 0,
          pageSize: 10,
          total: 0,
        },
      };
      PaginationFooter.propTypes = {
        pagination: prop_types_default().shape({
          page: prop_types_default().number,
          pageCount: prop_types_default().number,
          pageSize: prop_types_default().number,
          total: prop_types_default().number,
        }),
      };
      /* harmony default export */ const ListPage_PaginationFooter = PaginationFooter; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/api.js

      const fetchData = async (search, notify) => {
        const { get } = (0, helper_plugin_esm /* getFetchClient */.tg)();
        const {
          data: { data },
        } = await get(`/admin/users${search}`);
        notify();
        return data;
      };
      const deleteData = async (ids) => {
        const { post } = (0, helper_plugin_esm /* getFetchClient */.tg)();
        await post('/admin/users/batch-delete', { ids });
      }; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js

      const displayedFilters = [
        {
          name: 'firstname',
          metadatas: { label: 'Firstname' },
          fieldSchema: { type: 'string' },
        },
        {
          name: 'lastname',
          metadatas: { label: 'Lastname' },
          fieldSchema: { type: 'string' },
        },
        {
          name: 'email',
          metadatas: { label: 'Email' },
          fieldSchema: { type: 'email' },
        },
        {
          name: 'username',
          metadatas: { label: 'Username' },
          fieldSchema: { type: 'string' },
        },
        {
          name: 'isActive',
          metadatas: { label: 'Active user' },
          fieldSchema: { type: 'boolean' },
        },
      ];
      /* harmony default export */ const utils_displayedFilters = displayedFilters; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js

      const tableHeaders = [
        {
          name: 'firstname',
          key: 'firstname',
          metadatas: {
            label: {
              id: 'Settings.permissions.users.firstname',
              defaultMessage: 'Firstname',
            },
            sortable: true,
          },
        },
        {
          name: 'lastname',
          key: 'lastname',
          metadatas: {
            label: {
              id: 'Settings.permissions.users.lastname',
              defaultMessage: 'Lastname',
            },
            sortable: true,
          },
        },
        {
          key: 'email',
          name: 'email',
          metadatas: {
            label: { id: 'Settings.permissions.users.email', defaultMessage: 'Email' },
            sortable: true,
          },
        },
        {
          key: 'roles',
          name: 'roles',
          metadatas: {
            label: {
              id: 'Settings.permissions.users.roles',
              defaultMessage: 'Roles',
            },
            sortable: false,
          },
          cellFormatter({ roles }, { formatMessage }) {
            return /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
              textColor: 'neutral800',
              children: roles
                .map((role) =>
                  formatMessage({
                    id: `Settings.permissions.users.${role.code}`,
                    defaultMessage: role.name,
                  })
                )
                .join(',\n'),
            });
          },
        },
        {
          key: 'username',
          name: 'username',
          metadatas: {
            label: {
              id: 'Settings.permissions.users.username',
              defaultMessage: 'Username',
            },
            sortable: true,
          },
        },
        {
          key: 'isActive',
          name: 'isActive',
          metadatas: {
            label: {
              id: 'Settings.permissions.users.user-status',
              defaultMessage: 'User status',
            },
            sortable: false,
          },
          cellFormatter({ isActive }, { formatMessage }) {
            return /* @__PURE__ */ (0, jsx_runtime.jsxs)(Flex /* Flex */.k, {
              children: [
                /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* Status */.qb, {
                  isActive,
                  variant: isActive ? 'success' : 'danger',
                }),
                /* @__PURE__ */ (0, jsx_runtime.jsx)(Typography /* Typography */.Z, {
                  textColor: 'neutral800',
                  children: formatMessage({
                    id: isActive ? 'Settings.permissions.users.active' : 'Settings.permissions.users.inactive',
                    defaultMessage: isActive ? 'Active' : 'Inactive',
                  }),
                }),
              ],
            });
          },
        },
      ];
      /* harmony default export */ const utils_tableHeaders = tableHeaders; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js

      const CreateAction = (() => {
        if (window && window.strapi && window.strapi.isEE) {
          return __webpack_require__(49823) /* ["default"] */.Z;
        }
        return __webpack_require__(4214) /* ["default"] */.Z;
      })();
      const useLicenseLimitNotification = (() => {
        if (window && window.strapi && window.strapi.isEE) {
          return __webpack_require__(94018) /* ["default"] */.Z;
        }
        return __webpack_require__(67875) /* ["default"] */.Z;
      })();
      const ListPage = () => {
        const { formatAPIError } = (0, helper_plugin_esm /* useAPIErrorHandler */.So)();
        const [isModalOpened, setIsModalOpen] = (0, react.useState)(false);
        const {
          allowedActions: { canCreate, canDelete, canRead },
        } = (0, helper_plugin_esm /* useRBAC */.ss)(permissions /* default.settings.users */.Z.settings.users);
        const queryClient = (0, es.useQueryClient)();
        const toggleNotification = (0, helper_plugin_esm /* useNotification */.lm)();
        const { formatMessage } = (0, useIntl /* default */.Z)();
        const { search } = (0, react_router /* useLocation */.TH)();
        (0, helper_plugin_esm /* useFocusWhenNavigate */.go)();
        useLicenseLimitNotification();
        const { notifyStatus } = (0, useNotifyAT /* useNotifyAT */.G)();
        const queryName = ['users', search];
        const headers = utils_tableHeaders.map((header) => ({
          ...header,
          metadatas: { ...header.metadatas, label: formatMessage(header.metadatas.label) },
        }));
        const title = formatMessage({ id: 'global.users', defaultMessage: 'Users' });
        const notifyLoad = () => {
          notifyStatus(
            formatMessage(
              { id: 'app.utils.notify.data-loaded', defaultMessage: 'The {target} has loaded' },
              { target: title }
            )
          );
        };
        const { status, data, isFetching } = (0, es.useQuery)(queryName, () => fetchData(search, notifyLoad), {
          enabled: canRead,
          retry: false,
          onError(error) {
            toggleNotification({
              type: 'warning',
              message: {
                id: 'notification.error',
                message: formatAPIError(error),
                defaultMessage: 'An error occured',
              },
            });
          },
        });
        const handleToggle = () => {
          setIsModalOpen((prev) => !prev);
        };
        const deleteAllMutation = (0, es.useMutation)((ids) => deleteData(ids), {
          async onSuccess() {
            await queryClient.refetchQueries(queryName); // Toggle enabled/ disabled state on the invite button
            await queryClient.refetchQueries(['ee', 'license-limit-info']);
          },
          onError(error) {
            toggleNotification({
              type: 'warning',
              message: {
                id: 'notification.error',
                message: formatAPIError(error),
                defaultMessage: 'An error occured',
              },
            });
          },
        }); // This can be improved but we need to show an something to the user
        const isLoading = (status !== 'success' && status !== 'error') || (status === 'success' && isFetching);
        return /*#__PURE__*/ react.createElement(
          Main /* Main */.o,
          { 'aria-busy': isLoading },
          /*#__PURE__*/ react.createElement(helper_plugin_esm /* SettingsPageTitle */.SL, { name: 'Users' }),
          /*#__PURE__*/ react.createElement(HeaderLayout /* HeaderLayout */.T, {
            primaryAction: canCreate && /*#__PURE__*/ react.createElement(CreateAction, { onClick: handleToggle }),
            title: title,
            subtitle: formatMessage({
              id: 'Settings.permissions.users.listview.header.subtitle',
              defaultMessage: 'All the users who have access to the Strapi admin panel',
            }),
          }),
          canRead &&
            /*#__PURE__*/ react.createElement(ActionLayout /* ActionLayout */.Z, {
              startActions: /*#__PURE__*/ react.createElement(
                react.Fragment,
                null,
                /*#__PURE__*/ react.createElement(helper_plugin_esm /* SearchURLQuery */.m, {
                  label: formatMessage(
                    { id: 'app.component.search.label', defaultMessage: 'Search for {target}' },
                    { target: title }
                  ),
                }),
                /*#__PURE__*/ react.createElement(Filters /* default */.Z, {
                  displayedFilters: utils_displayedFilters,
                })
              ),
            }),
          /*#__PURE__*/ react.createElement(
            ContentLayout /* ContentLayout */.D,
            { canRead: canRead },
            !canRead && /*#__PURE__*/ react.createElement(helper_plugin_esm /* NoPermissions */.ZF, null),
            status === 'error' && /*#__PURE__*/ react.createElement('div', null, 'TODO: An error occurred'),
            canRead &&
              /*#__PURE__*/ react.createElement(
                react.Fragment,
                null,
                /*#__PURE__*/ react.createElement(
                  helper_plugin_esm /* DynamicTable */.tM,
                  {
                    contentType: 'Users',
                    isLoading: isLoading,
                    onConfirmDeleteAll: deleteAllMutation.mutateAsync,
                    onConfirmDelete: (id) => deleteAllMutation.mutateAsync([id]),
                    headers: headers,
                    rows: data?.results,
                    withBulkActions: true,
                    withMainAction: canDelete,
                  },
                  /*#__PURE__*/ react.createElement(DynamicTable_TableRows, {
                    canDelete: canDelete,
                    headers: headers,
                    rows: data?.results || [],
                    withBulkActions: true,
                    withMainAction: canDelete,
                  })
                ),
                /*#__PURE__*/ react.createElement(ListPage_PaginationFooter, {
                  pagination: data?.pagination,
                })
              )
          ),
          isModalOpened &&
            /*#__PURE__*/ react.createElement(ListPage_ModalForm, {
              onToggle: handleToggle,
              queryName: queryName,
            })
        );
      };
      /* harmony default export */ const Users_ListPage = ListPage; // CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedListPage/index.js
      const ProtectedListPage = () =>
        /* @__PURE__ */ (0, jsx_runtime.jsx)(helper_plugin_esm /* CheckPagePermissions */.O4, {
          permissions: permissions /* default.settings.users.main */.Z.settings.users.main,
          children: /* @__PURE__ */ (0, jsx_runtime.jsx)(Users_ListPage, {}),
        });
      /* harmony default export */ const Users_ProtectedListPage = ProtectedListPage;

      /***/
    },

    /***/ 82464: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12028);
      /* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65186);
      /* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74855);
      /* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);

      const MagicLinkWrapper = ({ children, target }) => {
        const toggleNotification = (0, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .useNotification */.lm)();
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z)();
        const handleCopy = () => {
          toggleNotification({ type: 'info', message: { id: 'notification.link-copied' } });
        };
        const copyLabel = formatMessage({
          id: 'app.component.CopyToClipboard.label',
          defaultMessage: 'Copy to clipboard',
        });
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .ContentBox */.Y_,
          {
            endAction: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__.CopyToClipboard,
              {
                onCopy: handleCopy,
                text: target,
                children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ /* .IconButton */.h,
                  {
                    label: copyLabel,
                    noBorder: true,
                    icon: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                      {}
                    ),
                  }
                ),
              }
            ),
            title: target,
            titleEllipsis: true,
            subtitle: children,
            icon: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('span', {
              style: { fontSize: 32 },
              children: '\u2709\uFE0F',
            }),
            iconBackground: 'neutral100',
          }
        );
      };
      MagicLinkWrapper.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_7___default().element,
          prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,
        ]).isRequired,
        target: prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MagicLinkWrapper;

      /***/
    },

    /***/ 31605: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63871);
      /* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82464);

      const MagicLink = ({ registrationToken }) => {
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z)();
        const target = `${window.location.origin}${
          _core_utils_basename__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z
        }auth/register?registrationToken=${registrationToken}`;
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
          {
            target,
            children: formatMessage({
              id: 'app.components.Users.MagicLink.connect',
              defaultMessage: 'Copy and share this link to give access to this user',
            }),
          }
        );
      };
      MagicLink.defaultProps = {
        registrationToken: '',
      };
      MagicLink.propTypes = {
        registrationToken: prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MagicLink;

      /***/
    },

    /***/ 81288: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_9__
      );
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40619);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82562);
      /* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88767);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71997);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86647);
      /* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);

      const rotation = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* .keyframes */.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
      const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].div */.ZP.div`
  animation: ${rotation} 2s infinite linear;
`;
      const Loader = () =>
        /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingWrapper, {
          children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
            {}
          ),
        });
      const fetchData = async () => {
        const { get } = (0, _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .getFetchClient */.tg)();
        const { data } = await get('/admin/roles');
        return data.data;
      };
      const SelectRoles = ({ disabled, error, onChange, value }) => {
        const { status, data } = (0, react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(['roles'], fetchData, {
          staleTime: 5e4,
        });
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z)();
        const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : '';
        const label = formatMessage({
          id: 'app.components.Users.ModalCreateBody.block-title.roles',
          defaultMessage: "User's roles",
        });
        const hint = formatMessage({
          id: 'app.components.Users.ModalCreateBody.block-title.roles.description',
          defaultMessage: 'A user can have one or several roles',
        });
        const placeholder = formatMessage({
          id: 'app.components.Select.placeholder',
          defaultMessage: 'Select',
        });
        const startIcon =
          status === 'loading'
            ? /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loader, {})
            : void 0;
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ /* .Select */.P,
          {
            id: 'roles',
            disabled,
            error: errorMessage,
            hint,
            label,
            name: 'roles',
            onChange: (v) => {
              onChange({ target: { name: 'roles', value: v } });
            },
            placeholder,
            multi: true,
            startIcon,
            value: value.map((v) => v.toString()),
            withTags: true,
            required: true,
            children: (data || []).map((role) => {
              return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ /* .Option */.W,
                {
                  value: role.id.toString(),
                  children: formatMessage({
                    id: `global.${role.code}`,
                    defaultMessage: role.name,
                  }),
                },
                role.id
              );
            }),
          }
        );
      };
      SelectRoles.defaultProps = {
        disabled: false,
        error: void 0,
      };
      SelectRoles.propTypes = {
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,
        error: prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,
        onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired,
        value: prop_types__WEBPACK_IMPORTED_MODULE_9___default().array.isRequired,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SelectRoles;

      /***/
    },

    /***/ 49823: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_11__
      );
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84495);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52624);
      /* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29728);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51277);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23293);
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14293);
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        lodash_isNil__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69483);

      const CreateAction = ({ onClick }) => {
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z)();
        const { license } = (0, _hooks__WEBPACK_IMPORTED_MODULE_3__ /* .useLicenseLimits */.q5)();
        const { permittedSeats, shouldStopCreate } = license?.data ?? {};
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ /* .Flex */.k,
          {
            gap: 2,
            children: [
              !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(permittedSeats) &&
                shouldStopCreate &&
                /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ /* .Tooltip */.u,
                  {
                    description: formatMessage({
                      id: 'Settings.application.admin-seats.at-limit-tooltip',
                      defaultMessage: 'At limit: add seats to invite more users',
                    }),
                    position: 'left',
                    children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ /* .Icon */.J,
                      {
                        width: `${14 / 16}rem`,
                        height: `${14 / 16}rem`,
                        color: 'danger500',
                        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ /* ["default"] */.Z,
                      }
                    ),
                  }
                ),
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ /* .Button */.z,
                {
                  'data-testid': 'create-user-button',
                  onClick,
                  startIcon: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_icons__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z,
                    {}
                  ),
                  size: 'S',
                  disabled: shouldStopCreate,
                  children: formatMessage({
                    id: 'Settings.permissions.users.create',
                    defaultMessage: 'Invite new user',
                  }),
                }
              ),
            ],
          }
        );
      };
      CreateAction.propTypes = {
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default().func.isRequired,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = CreateAction;

      /***/
    },

    /***/ 97083: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(57338);

      const ssoInputsModel = strapi.features.isEnabled(strapi.features.SSO)
        ? {
            useSSORegistration: true,
          }
        : {};
      const formDataModel = {
        ..._admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
        ...ssoInputsModel,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = formDataModel;

      /***/
    },

    /***/ 810: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });

      const form = strapi.features.isEnabled(strapi.features.SSO)
        ? [
            [
              {
                intlLabel: {
                  id: 'Settings.permissions.users.form.sso',
                  defaultMessage: 'Connect with SSO',
                },
                hint: {
                  id: 'Settings.permissions.users.form.sso.description',
                  defaultMessage: 'When enabled (ON), users can login via SSO',
                },
                name: 'useSSORegistration',
                type: 'bool',
                size: {
                  col: 6,
                  xs: 12,
                },
              },
            ],
          ]
        : [];
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = form;

      /***/
    },

    /***/ 12201: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63871);
      /* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(82464);

      const MagicLink = ({ registrationToken }) => {
        const { formatMessage } = (0, react_intl__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z)();
        if (registrationToken) {
          return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
            {
              target: `${window.location.origin}${
                _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z
              }auth/register?registrationToken=${registrationToken}`,
              children: formatMessage({
                id: 'app.components.Users.MagicLink.connect',
                defaultMessage: 'Copy and share this link to give access to this user',
              }),
            }
          );
        }
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
          {
            target: `${window.location.origin}${
              _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z
            }auth/login`,
            children: formatMessage({
              id: 'app.components.Users.MagicLink.connect.sso',
              defaultMessage: 'Send this link to the user, the first login can be made via a SSO provider.',
            }),
          }
        );
      };
      MagicLink.defaultProps = {
        registrationToken: '',
      };
      MagicLink.propTypes = {
        registrationToken: prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = MagicLink;

      /***/
    },

    /***/ 2407: /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ $: () => /* binding */ h,
        /* harmony export */ O: () => /* binding */ c,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16405);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71997);
      /* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(63237);
      /* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
      /* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
      /* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);

      const s = (0, styled_components__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.ZP)(
          _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ /* .Flex */.k
        )`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ /* .Box */.x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ /* .Typography */.Z} {
    color: ${({ theme: r }) => r.colors.neutral800};
    font-weight: ${({ theme: r }) => r.fontWeights.bold};
  }
`,
        h = ({ children: r }) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, {
            inline: !0,
            as: 'li',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ /* .Typography */.Z,
                { variant: 'pi', textColor: 'neutral600', children: r }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ /* .Box */.x,
                {
                  'aria-hidden': !0,
                  paddingLeft: 3,
                  paddingRight: 3,
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                    {}
                  ),
                }
              ),
            ],
          });
      h.displayName = 'Crumb';
      const c = ({ children: r, label: n, ...a }) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ /* .Flex */.k,
          {
            ...a,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ /* .VisuallyHidden */.T,
                { children: n }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('ol', {
                'aria-hidden': !0,
                children: r,
              }),
            ],
          }
        );
      c.displayName = 'Breadcrumbs';

      /***/
    },

    /***/ 36989: /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => /* binding */ l,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71997);
      /* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11047);
      /* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);

      const d = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(
          _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__ /* .Flex */.k
        )`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => (t ? 'auto' : void 0)};
`,
        a = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.ZP)(d)`
  flex-shrink: 0;
`,
        l = ({ startActions: t, endActions: r }) =>
          t || r
            ? /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ /* .Box */.x,
                {
                  paddingLeft: 10,
                  paddingRight: 10,
                  children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ /* .Box */.x,
                    {
                      paddingBottom: 4,
                      children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__ /* .Flex */.k,
                        {
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          children: [
                            t &&
                              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
                                wrap: 'wrap',
                                children: t,
                              }),
                            r &&
                              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
                                pullRight: !0,
                                children: r,
                              }),
                          ],
                        }
                      ),
                    }
                  ),
                }
              )
            : null;
      l.defaultProps = {
        endActions: void 0,
        startActions: void 0,
      };
      l.propTypes = {
        endActions: prop_types__WEBPACK_IMPORTED_MODULE_5__.node,
        startActions: prop_types__WEBPACK_IMPORTED_MODULE_5__.node,
      };

      /***/
    },

    /***/ 23293: /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => /* binding */ o,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

      const v = (h) =>
          /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '1rem',
            height: '1rem',
            fill: 'none',
            viewBox: '0 0 24 24',
            ...h,
            children: [
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                fill: '#32324D',
                d: 'M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z',
              }),
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                fill: '#32324D',
                d: 'M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z',
              }),
              /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
                fill: '#32324D',
                d: 'M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z',
              }),
            ],
          }),
        o = v;

      /***/
    },
  },
]);
