module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        './app/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: { extend: {} },
    plugins: [],
};
