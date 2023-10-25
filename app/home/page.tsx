// 声明这是一个客户端组件，才可以使用客户端的组件
import { Metadata } from 'next';
export default function Page() {
  return (
    <div>
      <h1>这是home1</h1>
    </div>
  );
}
// seo
export const metadata: Metadata = {
  title: 'home标题',
  description: '主页面',
};
