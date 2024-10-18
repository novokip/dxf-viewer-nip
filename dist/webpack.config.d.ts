declare function _exports({ development }: {
    development: any;
}): {
    plugins?: HtmlWebpackPlugin[] | undefined;
    stats?: string | undefined;
    devServer?: {
        static: {
            directory: string;
        };
        open: boolean;
    } | undefined;
    entry: string;
    devtool: string | boolean;
    optimization: {
        minimize: boolean;
    };
    mode: string;
    output: {
        filename: string;
        path: string;
        library: string;
        libraryExport: string;
        libraryTarget: string;
        umdNamedDefine: boolean;
        globalObject: string;
        clean: boolean;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: string[];
            type?: undefined;
        } | {
            test: RegExp;
            type: string;
            exclude?: undefined;
            use?: undefined;
        })[];
    };
};
export = _exports;
import HtmlWebpackPlugin = require("html-webpack-plugin");
