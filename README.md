# Zehua Ma · Academic Homepage

个人学术主页，适用于 GitHub Pages：**https://smazehua.github.io/**。

参考 [Zhenyu Xie 的个人主页](https://xiezhy6.github.io/) 的简洁学术排版，独立实现；内容来自本人简历与论文原文。纯 HTML / CSS / JavaScript，无构建依赖、无分析追踪、无第三方字体。

## 更新内容

- `site-data.js`：中英文简介、研究方向、新闻、论文、实习与教育信息。
- `styles.css`：配色、排版和响应式布局。
- `assets/portrait.webp`：个人照片。
- `assets/papers/`：论文缩略图。
- `assets/files/Zehua_Ma_CV.pdf`：公开版英文 CV，不包含手机号和出生日期。
- `scripts/build_cv.py`：CV 生成源文件，更新后使用安装了 `reportlab` 的 Python 运行。

论文 `first: true` 表示共同第一作者，`published: true` 表示已核实的正式发表，`accepted: true` 表示已接收。未正式确认的会议录用不写入主页。代码与项目链接仅使用已公开的地址。

## 本地预览

```sh
python3 -m http.server 8080
```

访问 `http://localhost:8080`。页面也可以直接打开 `index.html`；剪贴板复制功能在 HTTPS 或 localhost 下可用，其他环境提供手动复制回退。

## GitHub Pages

仓库名为 `smazehua.github.io`，默认分支为 `main`。GitHub 仓库 **Settings → Pages → Source** 使用 **GitHub Actions**。推送到 `main` 会通过 `.github/workflows/pages.yml` 自动部署。

## 内容来源与图片

- 简介、照片、教育与实习：马泽华本人提供的简历。
- VR-JEPA：[arXiv:2609.40129](https://arxiv.org/abs/2609.40129)，缩略图来自论文 teaser。
- ERGO：[arXiv:2602.10278](https://arxiv.org/abs/2602.10278)，缩略图来自论文 teaser。
- Beyond the Eye：[arXiv:2607.11106](https://arxiv.org/abs/2607.11106)，2026 年 10 月被 IEEE TPAMI 接收（作者提供），缩略图来自论文 main picture。
- AnyCrowd：[arXiv:2603.15415](https://arxiv.org/abs/2603.15415)，缩略图来自论文 Figure 1。
- DreamVTON：[arXiv:2407.16511](https://arxiv.org/abs/2407.16511)，缩略图来自论文 teaser；ACM MM 2024，[DOI](https://doi.org/10.1145/3664647.3681391)。

论文图片版权归各论文作者及对应权利方；个人照片仅用于本人主页。内容核对日期：2026-10-28。

学院官方译名：**School of Intelligent Systems Engineering**（智能工程学院）。依据：[中山大学英文官网院系列表](https://www.sysu.edu.cn/sysuen/Academics/Schools___Departments.htm)。
