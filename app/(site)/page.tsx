import Image from "next/image";
import Button from "./components/Button";

function Home(props: { hello: string }) {
  const { hello } = props;
  console.log(hello);
  return (
    <div>
      你好阿
      <Button />
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      hello: "world",
    },
  };
}
export default Home;
