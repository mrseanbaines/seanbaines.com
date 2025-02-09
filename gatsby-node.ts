import { GatsbyNode } from 'gatsby'
import type Webpack from 'webpack'
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin'
import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath)

const paths = {
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  const config: Webpack.Configuration = {
    // plugins: [new CleanTerminalPlugin()],
    // module: {
    //   rules: [
    //     {
    //       enforce: 'pre',
    //       test: /\.tsx?$/,
    //       exclude: /node_modules/,
    //       use: ['eslint-loader'],
    //     },
    //   ],
    // },
    resolve: {
      modules: ['node_modules', paths.appNodeModules, paths.appSrc],
    },
  }

  actions.setWebpackConfig(config)
}
