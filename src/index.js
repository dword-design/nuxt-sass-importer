export default function (options) {
  options = { webpackImporter: true, ...options }
  this.options.build.loaders.scss.sassOptions = { importer: options.importer }
  this.options.build.loaders.scss.webpackImporter = options.webpackImporter
}
