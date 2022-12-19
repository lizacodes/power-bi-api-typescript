import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Tiles operations. */
export class TilesImpl {
    /**
     * Initialize a new instance of the class Tiles class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Generate token to view the specified tile
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(dashboardKey, tileKey, requestParameters, options) {
        return this.client.sendOperationRequest({ dashboardKey, tileKey, requestParameters, options }, generateTokenOperationSpec);
    }
    /**
     * Generate token to view the specified tile
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId, dashboardKey, tileKey, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, dashboardKey, tileKey, requestParameters, options }, generateTokenInGroupOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const generateTokenOperationSpec = {
    path: "/dashboards/{dashboardKey}/tiles/{tileKey}/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [
        Parameters.$host,
        Parameters.dashboardKey,
        Parameters.tileKey
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const generateTokenInGroupOperationSpec = {
    path: "/groups/{groupId}/dashboards/{dashboardKey}/tiles/{tileKey}/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [
        Parameters.$host,
        Parameters.groupId,
        Parameters.dashboardKey,
        Parameters.tileKey
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=tiles.js.map