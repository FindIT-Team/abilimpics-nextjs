import { getUser } from "@/features/auth";

export async function hasRole(role: string | string[]): Promise<boolean> {
    const roles = typeof role === "string" ? [role] : role;

    const user = await getUser();
    if (!user) return false;

    if (!user.roles.find(r => roles.includes(r))) return false;

    return true;
}