import { AppLayout } from "components/app-layout";
import useTitle from "hooks/use-title";

export default function Index() {
  useTitle("nextjs-on-gcp");
  return (
    <AppLayout>
      <div>
        <h1>Index</h1>
      </div>
    </AppLayout>
  );
}
