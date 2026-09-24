const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? undefined : 'export',
    allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;