import Head from "next/head";
import { NAME } from "../../utils/dictionary";

const HeadContainer = () => {
  return (
    <div>
      <Head>
        <title>🐱‍👤 {NAME}</title>
      </Head>
    </div>
  );
};

export default HeadContainer;
