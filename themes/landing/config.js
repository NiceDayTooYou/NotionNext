const CONFIG = {

  HEADER_BUTTON_1_TITLE: 'Github',
  HEDEAR_BUTTON_1_URL: 'https://github.com/NiceDayTooYou',

  HEADER_BUTTON_2_TITLE: '我的页面',
  HEDEAR_BUTTON_2_URL: 'https://liyong.online/',

  // 首页大图英雄板块
  HERO_TITLE_1: 'Li Yong',
  HERO_P_1: '热爱生活，知足常乐',
  HERO_BUTTON_1_TEXT: 'My page',
  HERO_BUTTON_1_LINK: 'https://liyong.online/',
  HERO_BUTTON_2_TEXT: 'About me',
  HERO_BUTTON_2_LINK: 'https://flowcv.com/resume/ww2mhitt2c',
  HERO_VIDEO_IMAGE: '/images/home.png',
  //   HERO_VIDEO_URL: '/videos/video.mp4',
  HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=231057676&bvid=BV1N8411S7zo&cid=1198768438&page=1&&high_quality=1',
  HERO_VIDEO_TIPS: '这只是一个测试视频 (4 min)',

  // 特性介绍
  FEATURES_HEADER_1: 'My Hobbies',
  FEATURES_HEADER_1_P: "兴趣爱好能够远离无聊和永远开心<br/>我的兴趣爱好也很多，比如<strong class='font-bold text-red-500'>English</strong>是的，我知道它很简单、<strong class='font-bold  text-red-500'>Oil Painting</strong>油画让我对色彩更加了解、<strong class='font-bold text-red-500'>Photography</strong>记录生活<strong class='font-bold text-red-500'>Game</strong>是另外一个世界;<br/>My principles, love life, contentment, that's fine",
  FEATURES_HEADER_2: 'Li Yong',
  FEATURES_HEADER_2_P: '我是一个很笨的人，而且我也很懒，我也是一个平凡的普通人，只是想让自己变得更好一点。',
  FEATURES_CARD_1_TITLE: 'English',
  FEATURES_CARD_1_P: '我以前上学的时候并不喜欢上英语课，因为当时感觉它是很尴尬的语言，很别扭，完全没有兴趣学习',
  FEATURES_CARD_2_TITLE: 'Oil Painting',
  FEATURES_CARD_2_P: '画画可能是我的天赋，也可能不是，虽然我画的并没有那么好，但是我确实喜欢画',
  FEATURES_CARD_3_TITLE: 'Photography',
  FEATURES_CARD_3_P: '摄影看起来很简单，只是一张照片，但是需要学的东西很多。',

  // 特性介绍2
  FEATURES_BLOCK_HEADER: 'Li Yong',
  FEATURES_BLOCK_P: '兴趣是最好的热爱，它能引领我们进入一个充满激情和创造力的世界。',
  FEATURES_BLOCK_1_TITLE: 'Belief',
  FEATURES_BLOCK_1_P: '生命短暂，要学会爱自己和爱她人',
  FEATURES_BLOCK_2_TITLE: 'Photography',
  FEATURES_BLOCK_2_P: '分享生活之美，寻找镜头之外的故事。',
  FEATURES_BLOCK_3_TITLE: 'Painting',
  FEATURES_BLOCK_3_P: '拿起笔，世界就变成了画布。',
  FEATURES_BLOCK_4_TITLE: 'Life',
  FEATURES_BLOCK_4_P: '要么过自己想要的生活，或者别人的。',
  FEATURES_BLOCK_5_TITLE: 'Evolution',
  FEATURES_BLOCK_5_P: '行动是成就一切的首要条件。',
  FEATURES_BLOCK_6_TITLE: 'Feeling',
  FEATURES_BLOCK_6_P: '最大的幸福就是生活在当下，珍惜每一刻。',

  // 感言
  TESTIMONIALS_HEADER: '“ If You Don't Know, Now You Know “',
  TESTIMONIALS_P: '这只是一个页面，来自互联网的另外一端，谢谢你到此一游',

  TESTIMONIALS_AVATAR: 'https://s1.ax1x.com/2023/08/20/pP86kin.png',
  TESTIMONIALS_NICKNAME: 'Serendipity',
  TESTIMONIALS_ID: '点击访问',
  TESTIMONIALS_SOCIAL_NAME: 'Li Yong',
  TESTIMONIALS_SOCIAL_URL: 'https://web.liyong.online',
  TESTIMONIALS_WORD: '“ 昨天是段历史，明天是个谜团，而今天是天赐的礼物，要像珍惜礼物那样珍惜今天 “',

  POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || true, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://liyong.online/', // 重定向网站地址

  NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
