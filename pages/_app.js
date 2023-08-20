import { useState, useEffect } from 'react'; // 添加 useState 和 useEffect 导入
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import BLOG from '@/blog.config';
import { isBrowser, loadExternalResource } from '@/lib/utils';
import { GlobalContextProvider } from '@/lib/global';
import 'react-notion-x/src/styles.css';
import '@/styles/notion.css';
import '@/styles/animate.css';
import '@/styles/globals.css';
import '@/styles/nprogress.css';
import '@/styles/utility-patterns.css';
import '../styles/globals.css';
import '../styles/background.css';

// 各种扩展插件 动画等
const ExternalPlugins = dynamic(() => import('@/components/ExternalPlugins'));

function MyApp({ Component, pageProps }) {
  const [imageUrl, setImageUrl] = useState('https://s1.ax1x.com/2023/08/20/pP8GeK0.jpg'); // 初始背景图片URL

  // 自定义样式css和js引入
  useEffect(() => {
    if (isBrowser) {
      // 初始化AOS动画
      AOS.init();
      // 静态导入本地自定义样式
      loadExternalResource('/css/custom.css', 'css');
      loadExternalResource('/js/custom.js', 'js');

      // 自动添加图片阴影
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
  }, []); // 使用 useEffect 进行初始化，仅在组件挂载时执行一次

  return (
    <div className="background-container">
      <img src={imageUrl} alt="background image" className="background-image" />
      <GlobalContextProvider {...pageProps}>
        <Component {...pageProps} />
        <ExternalPlugins {...pageProps} />
      </GlobalContextProvider>
    </div>
  );
}

export default MyApp;

