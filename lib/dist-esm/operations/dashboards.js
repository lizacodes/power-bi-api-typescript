import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Dashboards operations. */
export class DashboardsImpl {
    /**
     * Initialize a new instance of the class Dashboards class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Gets a list of dashboards
     * @param options The options parameters.
     */
    getDashboards(options) {
        return this.client.sendOperationRequest({ options }, getDashboardsOperationSpec);
    }
    /**
     * Gets a list of dashboards in a group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getDashboardsInGroup(groupId, options) {
        return this.client.sendOperationRequest({ groupId, options }, getDashboardsInGroupOperationSpec);
    }
    /**
     * Get the specified dashboard
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getDashboard(dashboardKey, options) {
        return this.client.sendOperationRequest({ dashboardKey, options }, getDashboardOperationSpec);
    }
    /**
     * Get tiles in the specified dashboard
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getTiles(dashboardKey, options) {
        return this.client.sendOperationRequest({ dashboardKey, options }, getTilesOperationSpec);
    }
    /**
     * Get tiles in the specified dashboard in a group
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getTilesInGroup(groupId, dashboardKey, options) {
        return this.client.sendOperationRequest({ groupId, dashboardKey, options }, getTilesInGroupOperationSpec);
    }
    /**
     * Get a specified tile in a specified dashboard
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param options The options parameters.
     */
    getTile(dashboardKey, tileKey, options) {
        return this.client.sendOperationRequest({ dashboardKey, tileKey, options }, getTileOperationSpec);
    }
    /**
     * Get a specified tile in a specified dashboard in a group
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param options The options parameters.
     */
    getTileInGroup(groupId, dashboardKey, tileKey, options) {
        return this.client.sendOperationRequest({ groupId, dashboardKey, tileKey, options }, getTileInGroupOperationSpec);
    }
    /**
     * Generate token to view the specified dashboard
     * @param dashboardKey The dashboard id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(dashboardKey, requestParameters, options) {
        return this.client.sendOperationRequest({ dashboardKey, requestParameters, options }, generateTokenOperationSpec);
    }
    /**
     * Generate token to view the specified dashboard
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId, dashboardKey, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, dashboardKey, requestParameters, options }, generateTokenInGroupOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getDashboardsOperationSpec = {
    path: "/v1.0/myorg/dashboards",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDashboard
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const getDashboardsInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/dashboards",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDashboard
        }
    },
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const getDashboardOperationSpec = {
    path: "/v1.0/myorg/dashboards/{dashboardKey}",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Dashboard
        }
    },
    urlParameters: [Parameters.$host, Parameters.dashboardKey],
    headerParameters: [Parameters.accept],
    serializer
};
const getTilesOperationSpec = {
    path: "/v1.0/myorg/dashboards/{dashboardKey}/tiles",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListTile
        }
    },
    urlParameters: [Parameters.$host, Parameters.dashboardKey],
    headerParameters: [Parameters.accept],
    serializer
};
const getTilesInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/dashboards/{dashboardKey}/tiles",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListTile
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.groupId,
        Parameters.dashboardKey
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getTileOperationSpec = {
    path: "/v1.0/myorg/dashboards/{dashboardKey}/tiles/{tileKey}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Tile
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.dashboardKey,
        Parameters.tileKey
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getTileInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/dashboards/{dashboardKey}/tiles/{tileKey}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Tile
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.groupId,
        Parameters.dashboardKey,
        Parameters.tileKey
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const generateTokenOperationSpec = {
    path: "/v1.0/myorg/dashboards/{dashboardKey}/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [Parameters.$host, Parameters.dashboardKey],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const generateTokenInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/dashboards/{dashboardKey}/GenerateToken",
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
        Parameters.dashboardKey
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=dashboards.js.map