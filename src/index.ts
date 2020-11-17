// https://help.aliyun.com/document_detail/183902.html?spm=a2c4g.11174283.6.731.2e5a7da2XS98Z9

import { encode } from 'base64-url';

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

    private objToSring(obj: any) {
        let str = '';
        for (let key of Object.keys(obj)) {
            str += `,${key}_${obj[key]}`;
        }

        return str;
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
        this.url += `/resize${this.objToSring({
            m,
            w,
            h,
        })}`;
        return this;
    }

    /**图片水印
     * @param {}
     */
    watermarkLocation(t: number, g: string, x: number, y: number, voffset: number) {
        this.url += `/watermark${this.objToSring({
            t,
            g,
            x,
            y,
            voffset,
        })}`;
        return this;
    }

    watermarkText(text: string, type: string = 'd3F5LXplbmhlaQ') {
        if (this.url.indexOf('watermark') === -1) throw Error('must call watermarkLocation first');
        this.url += `${this.objToSring({ text: encode(text), type })}`;
        return this;
    }
    roundedCorners(r: number) {
        this.url += `/rounded-corners${this.objToSring({ r })}`;
        return this;
    }

    getUrl() {
        return this.url;
    }
}

export default OssSrc;
