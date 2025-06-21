/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_URI:
      "mongodb+srv://codewithahmad363:codewithahmad363@cluster0.mevag.mongodb.net/ahmad?retryWrites=true&w=majority&appName=Cluster0",

    // Cloudinary ------------------------------
  //  NEXT_PUBLIC_SECRET_KEY: "1234555aaddad",
  //   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dmy1m9vrc",
  //   NEXT_PUBLIC_CLOUDINARY_API_KEY: "674835324448873",
  //   NEXT_PUBLIC_CLOUDINARY_API_SECRET: "XyNbfGExh3MmTjiHY9TgmfEzc30",
  },
};

export default nextConfig;