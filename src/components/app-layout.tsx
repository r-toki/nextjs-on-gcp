import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function AppLayout(props: PropsWithChildren) {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <Link to="/me">Me</Link>
        <Link to="/me?id=1">Me?id=1</Link>
      </div>

      <div>{props.children}</div>
    </div>
  );
}
