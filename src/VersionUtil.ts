const packageJson = require('../package.json');

export class VersionUtil {
  static version = packageJson.version;
}
