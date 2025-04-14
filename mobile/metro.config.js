const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('env'); // Add support for .env files

module.exports = withNativeWind(config, { input: "./global.css" });
