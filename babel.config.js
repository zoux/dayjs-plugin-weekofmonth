module.exports = process.env.TARGET === 'prod' ? {
  "presets": [
    ["@babel/env", {
      modules: false, // 如不设置 「modules: false」，Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败
      useBuiltIns: "usage",
      corejs: 2,
      debug: true // 打印 babel 的兼容目标和打包的插件
    }]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
} : {}
