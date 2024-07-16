/** @type {import('beachball').BeachballConfig} */
module.exports = {
    bumpDeps: true,
    access: 'public',
    branch: 'origin/main',
    registries: {
        default: {
            npmRegistryUrl: "https://registry.npmjs.org",
            npmAuthToken: process.env.NPM_TOKEN,
        },
    },
};