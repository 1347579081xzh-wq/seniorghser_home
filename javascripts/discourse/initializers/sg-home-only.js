// javascripts/discourse/initializers/sg-home-only.js.es6
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "sg-home-only",

  initialize() {
    withPluginApi("1.20.0", (api) => {
      // 仅根路径视为首页
      const HOME_PATHS = new Set(["", "/"]);

      const isHomePath = () => {
        let p = window.location.pathname || "/";
        p = p.replace(/\/+$/, "") || "/";
        return HOME_PATHS.has(p);
      };

      const refreshFlag = () => {
        document.body.classList.toggle("sg-home", isHomePath());
      };

      // 初次进入
      refreshFlag();

      // SPA 路由切换
      api.onPageChange(refreshFlag);

      // 浏览器前进/后退兜底
      window.addEventListener("popstate", refreshFlag);
    });
  },
};
