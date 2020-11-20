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
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,w_100,h_100',
    );
});

test('watermarkLocation', () => {
    expect(
        new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg')
            .watermarkLocation(100, 'center', 1, 1, 1)
            .getUrl(),
    ).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/watermark,t_100,g_center,x_1,y_1,voffset_1',
    );
});
test('watermarkText', () => {
    expect(
        new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg')
            .watermarkLocation(100, 'center', 1, 1, 1)
            .watermarkText('我们')
            .getUrl(),
    ).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/watermark,t_100,g_center,x_1,y_1,voffset_1,text_5oiR5Lus,type_d3F5LXplbmhlaQ',
    );
});

test('roundedCorners', () => {
    expect(new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').roundedCorners(50).getUrl()).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/rounded-corners,r_50',
    );
});

test('circle', () => {
    expect(new OssSrc('https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg').circle(50).getUrl()).toBe(
        'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/circle,r_50',
    );
});
