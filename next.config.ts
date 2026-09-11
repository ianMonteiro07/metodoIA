import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantém as configurações que você já tinha, se houver
  devIndicators: {
    appIsrStatus: false, 
    buildActivity: false,
  },
};

export default nextConfig;