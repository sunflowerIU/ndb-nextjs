/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://fjmmmwvgjnqfehnhhcek.supabase.co/storage/v1/object/public/**",
      ),
      new URL(
        "https://fjmmmwvgjnqfehnhhcek.supabase.co/storage/v1/object/public/profile/**",
      ),
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;
