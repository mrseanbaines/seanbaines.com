import { GatsbyNode } from 'gatsby'
import type Webpack from 'webpack'
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin'

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
    }

    actions.setWebpackConfig(config)
  }
}
