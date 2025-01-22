// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
    // Ya domains ke saath karna chahein:
    // domains: ['cdn.sanity.io'], 
  },
  /* aur config options agar hain, to yahan add karein */
};

export default nextConfig;
