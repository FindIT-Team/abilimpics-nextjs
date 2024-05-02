import React, { use } from "react";

export function Packer({
  Delegate,
  packPromise,
}: {
  Delegate: ({ data }: { data: unknown }) => React.JSX.Element;
  packPromise: Promise<unknown[]>;
}) {
  const pack = use(packPromise as Promise<{ id: string }[]>);
  return pack.map((obj) => <Delegate key={obj.id} data={obj} />);
}
