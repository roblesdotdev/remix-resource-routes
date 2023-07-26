import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Rocks" },
    { name: "description", content: "Remix resource routes example" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Working</h1>
    </div>
  );
}
