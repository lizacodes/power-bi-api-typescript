import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Profiles operations. */
export class ProfilesImpl {
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
    postProfiles(requestBody, options) {
        return this.client.sendOperationRequest({ requestBody, options }, postProfilesOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const postProfilesOperationSpec = {
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