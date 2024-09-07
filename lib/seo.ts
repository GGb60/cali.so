export const seo = {
  title: '段枫 | 剪辑师、摄影师、无限进步',
  description:
    '我是段枫,是一个B站知识区8.5W粉UP主,主要做一些网站搭建,免费AI工具分享的视频,如果有商务合作可以+V:LAOGOU717',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.laogou717.com'
      : 'http://localhost:3000'
  ),
} as const
