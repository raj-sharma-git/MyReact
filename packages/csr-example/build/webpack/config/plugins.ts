import LoadablePlugin from "@loadable/webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

import { MANIFEST } from "../utils";

import type { SafeGenerateActionProps } from "../type";
import type { Configuration } from "webpack";

export const pluginsConfig = ({ env, isDEV }: SafeGenerateActionProps): Configuration["plugins"] =>
  [
    env === "client" &&
      new WebpackManifestPlugin({
        fileName: isDEV ? MANIFEST.manifest_dev : MANIFEST.manifest_prod,
      }),
    env === "client" && new LoadablePlugin({ filename: MANIFEST.manifest_loadable }),
    new DefinePlugin({
      __CLIENT__: env === "client",
      __SERVER__: env === "server",
      __DEVELOPMENT__: isDEV,
      __BUILD_TIME__: JSON.stringify(new Date().toLocaleString()),
    }),
    env === "client" &&
      new MiniCssExtractPlugin({
        filename: isDEV ? "[name].css" : "[name]-[contenthash].css",
        chunkFilename: isDEV ? "[name]-[id].css" : "[name]-[id]-[contenthash].css",
      }),
    env === "server" && isDEV && new HotModuleReplacementPlugin(),
    env === "client" &&
      isDEV &&
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
    env === "client" &&
      isDEV &&
      new ESLintWebpackPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        quiet: true,
      }),
  ].filter(Boolean) as Configuration["plugins"];
