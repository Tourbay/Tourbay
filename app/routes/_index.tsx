import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [{ title: "Tourbay" }, { name: "description", content: "Tourbay" }];
};

export default function Index() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
