# Custom Home (Git) — Discourse 主题组件

这是一个最小可用的“自定义首页”主题组件骨架：
- 通过 connector **above-main-container** 注入你的首页内容
- 在 discovery（首页列表页）隐藏默认列表与侧栏
- 所有资源放在主题内，便于 Git 持续迭代

## 使用
1. 把仓库推到你的 Git 平台（GitHub/GitLab）。
2. Discourse 后台 → Admin → Customize → Themes → Install → **From a git repository**，填入仓库地址。
3. 把组件勾选到你正在使用的主题上（Enable）。
4. 打开首页（latest 或 categories），看到你的自定义页面。

## 自定义
- 修改 `javascripts/.../home-hero.hbs` 里的 HTML 结构与链接。
- 修改 `common/common.scss` 的样式。
- 把 `assets/hero.jpg` 换成你自己的图片，模板用 `{{theme-prefix 'hero.jpg'}}` 自动指纹。

## 仅供示例的许可证
MIT
