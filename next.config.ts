import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
