import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Tourbay" }, { name: "description", content: "Tourbay" }];
};

export default function Index() {
  return <div>hello</div>;
}
