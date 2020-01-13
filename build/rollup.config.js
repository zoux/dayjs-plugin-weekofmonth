import pluginResolve from 'rollup-plugin-node-resolve' // rollup 支持识别外部模块
import pluginCommonjs from 'rollup-plugin-commonjs' // rollup 支持识别 cjs 模块
import pluginJson from 'rollup-plugin-json' // rollup 支持识别 json 文件
import pluginTypescript from 'rollup-plugin-typescript2' // rollup 支持 ts 文件转 js 文件
import pluginBabel from 'rollup-plugin-babel' // rollup 支持 babel
import { DEFAULT_EXTENSIONS } from '@babel/core'

import { banner, pkgName } from './utils'

const getOutput = () => {
  let result = [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: pkgName,
      exports: 'named',
      banner
    }
  ]
  if (process.env.TARGET === 'prod') {
    result = [
      ...result,
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        banner
      }
    ]
  }

  return result
}

export default {
  input: 'src/index.ts',
  output: getOutput(),
  plugins: [
    pluginResolve(),
    pluginCommonjs(),
    pluginJson(),
    pluginTypescript(),
    pluginBabel({
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        'ts',
        'tsx'
      ],
      runtimeHelpers: true
    })
  ]
}
