import { GatsbyNode } from 'gatsby'
import type Webpack from 'webpack'
// FIXME: Make TypeScript recognize custom declaration file
// @ts-ignore: No declaration file error
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin'
import path from 'path'
import fs from 'fs'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath)

const paths = {
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, actions }) => {
  if (stage === 'develop') {
    const config: Webpack.Configuration = {
      plugins: [new CleanTerminalPlugin()],
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['eslint-loader'],
          },
        ],
      },
      resolve: {
        modules: ['node_modules', paths.appNodeModules, paths.appSrc],
      },
    }

    actions.setWebpackConfig(config)
  }
}
