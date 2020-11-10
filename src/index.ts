class OssSrc {
    private url: string;

    constructor(url: string) {
        this.url = url;
        this.init();
    }

    private init() {
        this.url += '?x-oss-process=image';
        return this;
    }
    /*
     *
     * format()：设置图片格式 建议放在最后处理
     */
    format(type: 'jpg' | 'png' | 'webp' | 'bmp' | 'gif' | 'tiff') {
        this.url += `/format,${type}`;
        return this;
    }

    getUrl(): String {
        return this.url;
    }
}

export default OssSrc;
