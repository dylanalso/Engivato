const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? undefined : 'export',
    allowedDevOrigins: ['127.0.0.1'],

    // Trailing slashes and unoptimized images required for static export hosting
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;