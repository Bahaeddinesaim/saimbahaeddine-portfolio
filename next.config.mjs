const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "saimbahaeddine-portfolio";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : ""
};

export default nextConfig;
