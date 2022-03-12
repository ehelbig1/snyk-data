export default {
    preset: 'ts-jest/presets/default-esm',
    globals: {
        'ts-jest': {
            useESM: true
        }
    },
    testEnvironment: 'node',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
