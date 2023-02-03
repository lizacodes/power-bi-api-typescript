"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesImpl = void 0;
const tslib_1 = require("tslib");
const coreClient = tslib_1.__importStar(require("@azure/core-client"));
const Mappers = tslib_1.__importStar(require("../models/mappers"));
const Parameters = tslib_1.__importStar(require("../models/parameters"));
/** Class containing Profiles operations. */
class ProfilesImpl {
    /**
     * Initialize a new instance of the class Profiles class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new profile that belongs to the service principal
     * @param requestBody The request body
     * @param options The options parameters.
     */
    createProfile(requestBody, options) {
        return this.client.sendOperationRequest({ requestBody, options }, createProfileOperationSpec);
    }
}
exports.ProfilesImpl = ProfilesImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const createProfileOperationSpec = {
    path: "/profiles",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.ServicePrincipalProfile
        }
    },
    requestBody: Parameters.requestBody1,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=profiles.js.map