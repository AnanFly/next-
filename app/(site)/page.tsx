import Image from 'next/image';
import Button from './components/Button';
const test = {
  name: '123',
  age: 18,
};
function Home() {
  return (
    <div>
      你好阿
      <Button />
    </div>
  );
}
export default Home;
