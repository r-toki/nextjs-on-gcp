import { AppLayout } from "components/app-layout";
import useTitle from "hooks/use-title";
import { fetchPeople } from "lib/fetch-people";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Me() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [title, setTitle] = useState<string>(document.title);

  useEffect(() => {
    if (typeof id != "string") {
      setTitle("nextjs-on-gcp | me");
      return;
    }

    fetchPeople(id).then((people) =>
      setTitle(`nextjs-on-gcp | ${people?.name ?? "me"}`)
    );
  }, [id]);

  useTitle(title);

  return (
    <AppLayout>
      <div>
        <h1>Me</h1>
      </div>
    </AppLayout>
  );
}
