import { AppLayout } from "components/app-layout";
import useTitle from "hooks/use-title";

export default function About() {
  useTitle("nextjs-on-gcp | about");
  return (
    <AppLayout>
      <div>
        <h1>About</h1>
      </div>
    </AppLayout>
  );
}
