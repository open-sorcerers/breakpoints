module.exports = {
  scripts: {
    build: {
      script: 'nps build.rollup',
      rollup: 'NODE_ENV=production rollup -c rollup.config.js'
    },
    lint: 'eslint ./src --fix',
    test: {
      script: 'jest --verbose --coverage ',
      description: 'run tests',
      watch: 'jest --verbose --coverage --watchAll'
    }
  }
}
