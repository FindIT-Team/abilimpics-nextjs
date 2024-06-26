/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
            child_process: false,
        };

        return config;
    },

    experimental: {
        serverActions:
            {
                allowedOrigins: ["web", "findit.test"],
                bodySizeLimit: "10mb",
            }
    }
};

export default nextConfig;
