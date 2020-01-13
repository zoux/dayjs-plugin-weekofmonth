import pkg from '../package.json'

export const pkgName = pkg.name

export const banner =
  '/**\n' +
  ` * ${pkg.name} v${pkg.version}\n` +
  ` * author: ${pkg.author}\n` +
  ' */'
