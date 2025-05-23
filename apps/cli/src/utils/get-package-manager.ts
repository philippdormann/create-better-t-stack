import type { ProjectPackageManager } from "../types";

export const getUserPkgManager: () => ProjectPackageManager = () => {
	const userAgent = process.env.npm_config_user_agent;

	if (userAgent?.startsWith("pnpm")) {
		return "pnpm";
	}
	if (userAgent?.startsWith("bun")) {
		return "bun";
	}
	return "npm";
};
