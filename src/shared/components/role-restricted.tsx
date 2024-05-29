import { hasRole } from "@/features/roles/actions/get";
import { ReactNode, use } from "react";

export function RoleRestricted(props: {
    role: string | string[];
    children: ReactNode;
}) {
    const has = use(hasRole(props.role));

    if (!has) return <></>;
    return props.children;
}
