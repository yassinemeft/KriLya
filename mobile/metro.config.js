const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('env'); // Add support for .env files

config.resolver.blockList = [
  /react-native\/Libraries\/Utilities\/codegenNativeCommands/, // Exclude native-only modules
  /node_modules\/react-native-maps\/.*/, // Exclude react-native-maps for web
];

module.exports = withNativeWind(config, { input: "./global.css" });
