// https://help.aliyun.com/document_detail/183902.html?spm=a2c4g.11174283.6.731.2e5a7da2XS98Z9
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
     * 设置图片格式 建议放在最后处理
     * https://help.aliyun.com/document_detail/44703.html
     */
    format(type: 'jpg' | 'png' | 'webp' | 'bmp' | 'gif' | 'tiff') {
        this.url += `/format,${type}`;
        return this;
    }
    /**
     * @param {number}  value 旋转角度
     *
     * 通过旋转参数，将存储在OSS内的原图按指定方向旋转
     * https://help.aliyun.com/document_detail/44690.html
     */
    rotate(value: number) {
        this.url += `/rotate,${value}`;
        return this;
    }
    /**图片缩放
     * @param {}
     */
    resize(m: 'lfit' | 'mfit' | 'fill' | 'pad' | 'fixed' = 'lfit', w: number, h: number) {
        this.url += `/resize,m_${m},h_${h},w_${w}`;
        return this;
    }
    getUrl() {
        return this.url;
    }
}

export default OssSrc;
