goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.highEntropy.highEntropyValue");
  const util = goog.require("goog.labs.userAgent.util");
  const {compareVersions} = goog.require("goog.string.internal");
  class AsyncValue {
    getIfLoaded() {
    }
    load() {
    }
  }
  exports.AsyncValue = AsyncValue;
  class HighEntropyValue {
    constructor(key) {
      this.key_ = key;
      this.value_ = undefined;
      this.promise_ = undefined;
      this.pending_ = false;
    }
    getIfLoaded() {
      const userAgentData = util.getUserAgentData();
      if (!userAgentData) {
        return undefined;
      }
      return this.value_;
    }
    load() {
      const $jscomp$async$this = this;
      return $jscomp.asyncExecutePromiseGeneratorFunction(function*() {
        const userAgentData = util.getUserAgentData();
        if (!userAgentData) {
          return undefined;
        }
        if (!$jscomp$async$this.promise_) {
          $jscomp$async$this.pending_ = true;
          $jscomp$async$this.promise_ = (() => {
            return $jscomp.asyncExecutePromiseGeneratorFunction(function*() {
              try {
                const dataValues = yield userAgentData.getHighEntropyValues([$jscomp$async$this.key_]);
                $jscomp$async$this.value_ = dataValues[$jscomp$async$this.key_];
                return $jscomp$async$this.value_;
              } finally {
                $jscomp$async$this.pending_ = false;
              }
            });
          })();
        }
        return yield $jscomp$async$this.promise_;
      });
    }
    resetForTesting() {
      if (this.pending_) {
        throw new Error("Unsafe call to resetForTesting");
      }
      this.promise_ = undefined;
      this.value_ = undefined;
      this.pending_ = false;
    }
  }
  exports.HighEntropyValue = HighEntropyValue;
  class Version {
    constructor(versionString) {
      this.versionString_ = versionString;
    }
    toVersionStringForLogging() {
      return this.versionString_;
    }
    isAtLeast(version) {
      return compareVersions(this.versionString_, version) >= 0;
    }
  }
  exports.Version = Version;
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.highentropy.highentropyvalue.js.map
