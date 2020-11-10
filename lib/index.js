"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OssSrc = /** @class */ (function () {
    function OssSrc(url) {
        this.url = url;
        this.init();
    }
    OssSrc.prototype.init = function () {
        this.url += '?x-oss-process=image';
        return this;
    };
    /*
     *
     * format()：设置图片格式 建议放在最后处理
     */
    OssSrc.prototype.format = function (type) {
        this.url += "/format," + type;
        return this;
    };
    OssSrc.prototype.getUrl = function () {
        return this.url;
    };
    return OssSrc;
}());
exports.default = OssSrc;
