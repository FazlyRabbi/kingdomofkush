import Head from "next/head";
import Cursor from "./cursor/Cursor";
import Footer from "./Footer";
import Nav from "./Nav";

export default function layout({ title, des, content, children, mainContent }) {
  return (
    <Cursor>
      <Head>
        <title>{title}</title>
        <meta name={content} content={des}></meta>
      </Head>
      <Nav />
      {children}
      <Footer />
    </Cursor>
  );
}

layout.defaultProps = {
  title: "default",
  des: "default page",
  content: "this is about page",
};
