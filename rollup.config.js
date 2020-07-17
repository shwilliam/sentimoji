import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import run from '@rollup/plugin-run'

const dev = process.env.NODE_ENV === 'development'

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    babel(),
    json(),
    dev &&
      run({
        execArgv: ['-r', 'dotenv/config'],
      }),
  ],
}
