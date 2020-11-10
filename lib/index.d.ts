declare class OssSrc {
    private url;
    constructor(url: string);
    private init;
    format(type: 'jpg' | 'png' | 'webp' | 'bmp' | 'gif' | 'tiff'): this;
    getUrl(): String;
}
export default OssSrc;
