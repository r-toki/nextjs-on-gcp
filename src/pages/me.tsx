import { SpaRoot } from "components/spa-root";
import { fetchPeople } from "lib/fetch-people";
import { isServer } from "lib/is-server";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Fragment } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;
  if (typeof id != "string") return { props: { name: "me" } };
  const people = await fetchPeople(id);
  return { props: { name: people?.name ?? "me" } };
}

export default function Me(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const title = `nextjs-on-gcp | ${props.name}`;
  return (
    <Fragment>
      {isServer() && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <SpaRoot />
    </Fragment>
  );
}
