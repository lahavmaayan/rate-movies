module.exports = {
    verbose: true,
    testURL: 'http://localhost/',
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'frontend/src'],
    modulePaths: ['<rootDir>frontend/src', '<rootDir>node_modules'],
    moduleNameMapper: {
        '^src(.*)$': '<rootDir>frontend//src$1',
        '^resources(.*)$': '<rootDir>frontend/resources$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$':
            '<rootDir>frontend/src/common/utils/fileTransformer.js'
    }
};
