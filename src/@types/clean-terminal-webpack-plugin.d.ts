declare module 'clean-terminal-webpack-plugin' {
  import { Compiler } from 'webpack'

  class CleanTerminalPlugin {
    apply(compiler: Compiler): void
  }

  export default CleanTerminalPlugin
}
