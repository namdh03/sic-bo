import { ReactNode } from "react";

import { Role } from "./guards.enum";

// Role based guard types
export type RoleBasedGuardProps = {
    children: ReactNode;
    accessibleRoles: Role[];
};
