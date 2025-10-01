import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "landing-mode",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      const checkAndApplyMode = () => {
        const path = window.location.pathname;
        const isHomePage = path === "/" || path === "/latest" || path === "/categories";
        
        if (isHomePage) {
          document.body.classList.add("landing-mode");
        } else {
          document.body.classList.remove("landing-mode");
        }
      };

      checkAndApplyMode();
      api.onPageChange(() => {
        checkAndApplyMode();
      });
    });
  },
};