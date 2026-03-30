module.exports = {
  default: {
    require: [
      "src/support/**/*.ts",
      "src/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    paths: ["features/**/*.feature"],
    format: [
      "progress",
      "summary",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    },
    publishQuiet: true
  }
};