import '@/styles/animate.css'; // 引入动画样式
import '@/styles/globals.css'; // 全局样式
import '@/styles/nprogress.css'; // 页面加载进度条样式
import '@/styles/utility-patterns.css'; // 实用样式模式
import '@/styles/background.css';  // 背景样式

import 'react-notion-x/src/styles.css'; // react-notion-x 样式
import '@/styles/notion.css'; // 重写 react-notion-x 部分样式

import { GlobalContextProvider } from '@/lib/global'; // 全局上下文提供者

import AOS from 'aos'; // 动画库
import 'aos/dist/aos.css'; // AOS 动画样式
import dynamic from 'next/dynamic'; // 异步加载组件
import { isBrowser, loadExternalResource } from '@/lib/utils'; // 工具函数
import BLOG from '@/blog.config'; // 博客配置

// 各种扩展插件 动画等
const ExternalPlugins = dynamic(() => import('@/components/ExternalPlugins'));

const MyApp = ({ Component, pageProps }) => {
  // 自定义样式css和js引入
  if (isBrowser) {
    // 初始化AOS动画
    AOS.init();
    // 静态导入本地自定义样式和脚本
    loadExternalResource('/css/custom.css', 'css');
    loadExternalResource('/js/custom.js', 'js');

    // 自动添加图片阴影样式
    if (BLOG.IMG_SHADOW) {
      loadExternalResource('/css/img-shadow.css', 'css');
    }

    // 导入外部自定义脚本
    if (BLOG.CUSTOM_EXTERNAL_JS && BLOG.CUSTOM_EXTERNAL_JS.length > 0) {
      for (const url of BLOG.CUSTOM_EXTERNAL_JS) {
        loadExternalResource(url, 'js');
      }
    }

    // 导入外部自定义样式
    if (BLOG.CUSTOM_EXTERNAL_CSS && BLOG.CUSTOM_EXTERNAL_CSS.length > 0) {
      for (const url of BLOG.CUSTOM_EXTERNAL_CSS) {
        loadExternalResource(url, 'css');
      }
    }
  }

  const [imageUrl, setImageUrl] = useState('https://s1.ax1x.com/2023/08/20/pP8GeK0.jpg'); // 初始背景图片URL

  return (
    <GlobalContextProvider {...pageProps}>
      {/* 背景样式应用到根元素或适当的容器 */}
      <div className="background-image-container">
        <img src={imageUrl} alt="background image" className="background-image" />
        <Component {...pageProps} />
      </div>
      <ExternalPlugins {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
