import OssSrc from '../index';
test('test format', () => {
    expect(new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').format('webp').getUrl()).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/format,webp',
    );
});
