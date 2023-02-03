"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewaysImpl = void 0;
const tslib_1 = require("tslib");
const coreClient = tslib_1.__importStar(require("@azure/core-client"));
const Mappers = tslib_1.__importStar(require("../models/mappers"));
const Parameters = tslib_1.__importStar(require("../models/parameters"));
/** Class containing Gateways operations. */
class GatewaysImpl {
    /**
     * Initialize a new instance of the class Gateways class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns a list of gateways
     * @param options The options parameters.
     */
    getGateways(options) {
        return this.client.sendOperationRequest({ options }, getGatewaysOperationSpec);
    }
    /**
     * Returns the specified gateway
     * @param gatewayId The gateway id
     * @param options The options parameters.
     */
    getGatewayById(gatewayId, options) {
        return this.client.sendOperationRequest({ gatewayId, options }, getGatewayByIdOperationSpec);
    }
    /**
     * Get all datasources of specific gateway
     * @param gatewayId The gateway id
     * @param options The options parameters.
     */
    getDatasources(gatewayId, options) {
        return this.client.sendOperationRequest({ gatewayId, options }, getDatasourcesOperationSpec);
    }
    /**
     * Create a datasource
     * @param gatewayId The gateway id
     * @param datasourceToGatewayRequest The datasource requested to create
     * @param options The options parameters.
     */
    createDatasource(gatewayId, datasourceToGatewayRequest, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceToGatewayRequest, options }, createDatasourceOperationSpec);
    }
    /**
     * Get a datasource by id
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceById(gatewayId, datasourceId, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, options }, getDatasourceByIdOperationSpec);
    }
    /**
     * Delete a datasource
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    deleteDatasource(gatewayId, datasourceId, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, options }, deleteDatasourceOperationSpec);
    }
    /**
     * Update a datasource credentials
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param updateDatasourceRequest The update datasource request
     * @param options The options parameters.
     */
    updateDatasource(gatewayId, datasourceId, updateDatasourceRequest, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, updateDatasourceRequest, options }, updateDatasourceOperationSpec);
    }
    /**
     * Get a datasource status by id
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceStatusById(gatewayId, datasourceId, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, options }, getDatasourceStatusByIdOperationSpec);
    }
    /**
     * Get a datasource users list
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceUsers(gatewayId, datasourceId, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, options }, getDatasourceUsersOperationSpec);
    }
    /**
     * Get a datasource user
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param addUserToDatasourceRequest The add user to datasource request
     * @param options The options parameters.
     */
    addDatasourceUser(gatewayId, datasourceId, addUserToDatasourceRequest, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, addUserToDatasourceRequest, options }, addDatasourceUserOperationSpec);
    }
    /**
     * Delete a datasource user
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param emailAdress The user's email address
     * @param options The options parameters.
     */
    deleteDatasourceUser(gatewayId, datasourceId, emailAdress, options) {
        return this.client.sendOperationRequest({ gatewayId, datasourceId, emailAdress, options }, deleteDatasourceUserOperationSpec);
    }
}
exports.GatewaysImpl = GatewaysImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getGatewaysOperationSpec = {
    path: "/gateways",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListGateway
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const getGatewayByIdOperationSpec = {
    path: "/gateways/{gatewayId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Gateway
        }
    },
    urlParameters: [Parameters.$host, Parameters.gatewayId],
    headerParameters: [Parameters.accept],
    serializer
};
const getDatasourcesOperationSpec = {
    path: "/gateways/{gatewayId}/datasources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListGatewayDatasource
        }
    },
    urlParameters: [Parameters.$host, Parameters.gatewayId],
    headerParameters: [Parameters.accept],
    serializer
};
const createDatasourceOperationSpec = {
    path: "/gateways/{gatewayId}/datasources",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.datasourceToGatewayRequest,
    urlParameters: [Parameters.$host, Parameters.gatewayId],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getDatasourceByIdOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.GatewayDatasource
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteDatasourceOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const updateDatasourceOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.updateDatasourceRequest,
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getDatasourceStatusByIdOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}/status",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getDatasourceUsersOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}/users",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListUserAccessRight
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const addDatasourceUserOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}/users",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.addUserToDatasourceRequest,
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId
    ],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const deleteDatasourceUserOperationSpec = {
    path: "/gateways/{gatewayId}/datasources/{datasourceId}/users/{emailAdress}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.gatewayId,
        Parameters.datasourceId,
        Parameters.emailAdress
    ],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=gateways.js.map