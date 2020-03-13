export default function ({ importer, webpackImporter = true }) {
  this.options.build.loaders.scss.sassOptions = { importer }
  this.options.build.loaders.scss.webpackImporter = webpackImporter
}