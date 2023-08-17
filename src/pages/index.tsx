import { SpaRoot } from "components/spa-root";
import { isServer } from "lib/is-server";
import Head from "next/head";
import { Fragment } from "react";

export default function Index() {
  return (
    <Fragment>
      {/* client side での title 管理は useTitle で行う */}
      {isServer() && (
        <Head>
          <title>nextjs-on-gcp</title>
        </Head>
      )}
      <SpaRoot />
    </Fragment>
  );
}
