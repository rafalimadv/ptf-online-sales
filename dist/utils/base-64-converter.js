"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationToLoginPayload = void 0;
const authorizationToLoginPayload = (authorization) => {
    const authorizationSplited = authorization.split('.');
    if (authorizationSplited.length < 3 || !authorizationSplited[1]) {
        return undefined;
    }
    return JSON.parse(Buffer.from(authorizationSplited[1], 'base64').toString('ascii'));
};
exports.authorizationToLoginPayload = authorizationToLoginPayload;
//# sourceMappingURL=base-64-converter.js.map