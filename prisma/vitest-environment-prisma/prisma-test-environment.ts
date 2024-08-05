import { Environment } from "vitest";

const prismaEnvironment: Environment = {
    name: 'prisma',
    async setup() {
        console.log('Executou');

        return {
            async teardown() {},
        };
    },
    transformMode: 'ssr', // ou 'web', dependendo do que você precisar
};

export default prismaEnvironment;
