import { Project, TeamMember } from "@/types/index";

export const isManager = (
  managerId: Project["_id"],
  userId: TeamMember["_id"]
) => managerId === userId;
