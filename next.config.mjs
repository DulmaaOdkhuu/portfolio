/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(glb|gltf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Inline files smaller than 8kb, otherwise fall back to file-loader
                fallback: 'file-loader',
                publicPath: '/_next/static/models/',
                outputPath: 'static/models/',
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
        config.module.rules.push({
          test: /\.(mp3|wav)$/, // Add support for .mp3 and .wav files
          type: 'asset/resource', // Handle these files as assets
          generator: {
            filename: 'static/media/[name].[hash][ext]', // Output to static/media folder
          },
        });
    
        return config;
      },
};

export default nextConfig;
