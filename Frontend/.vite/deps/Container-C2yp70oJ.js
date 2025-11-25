import { __toESM, require_react } from "./react-CSb6HjG4.js";
import { require_classnames, require_jsx_runtime, useBootstrapPrefix } from "./ThemeProvider-CCZMDbDk.js";

//#region node_modules/react-bootstrap/esm/Container.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var Container = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, fluid = false, as: Component = "div", className,...props }, ref) => {
	const prefix = useBootstrapPrefix(bsPrefix, "container");
	const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		...props,
		className: (0, import_classnames.default)(className, fluid ? `${prefix}${suffix}` : prefix)
	});
});
Container.displayName = "Container";
var Container_default = Container;

//#endregion
export { Container_default };
//# sourceMappingURL=Container-C2yp70oJ.js.map