import OssSrc from '../index';
test('format', () => {
    expect(new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').format('webp').getUrl()).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/format,webp',
    );
});
test('rotate', () => {
    expect(new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').rotate(90).getUrl()).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/rotate,90',
    );
});

test('resize', () => {
    expect(
        new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').resize('fixed', 100, 100).getUrl(),
    ).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,h_100,w_100',
    );
});
