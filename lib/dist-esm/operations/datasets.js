import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Datasets operations. */
export class DatasetsImpl {
    /**
     * Initialize a new instance of the class Datasets class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns the datasets
     * @param options The options parameters.
     */
    getDatasets(options) {
        return this.client.sendOperationRequest({ options }, getDatasetsOperationSpec);
    }
    /**
     * Post a new entity to datasets
     * @param dataset Create dataset parameters
     * @param options The options parameters.
     */
    postDataset(dataset, options) {
        return this.client.sendOperationRequest({ dataset, options }, postDatasetOperationSpec);
    }
    /**
     * Posts new data rows into the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    postRows(datasetKey, tableName, requestMessage, options) {
        return this.client.sendOperationRequest({ datasetKey, tableName, requestMessage, options }, postRowsOperationSpec);
    }
    /**
     * Deletes all rows from the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param options The options parameters.
     */
    deleteRows(datasetKey, tableName, options) {
        return this.client.sendOperationRequest({ datasetKey, tableName, options }, deleteRowsOperationSpec);
    }
    /**
     * Gets all tables within the specified dataset
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getTables(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, getTablesOperationSpec);
    }
    /**
     * Updates a schema and metadata for the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    putTable(datasetKey, tableName, requestMessage, options) {
        return this.client.sendOperationRequest({ datasetKey, tableName, requestMessage, options }, putTableOperationSpec);
    }
    /**
     * Gets the dataset metadata for the specifeid dataset id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getDatasetById(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, getDatasetByIdOperationSpec);
    }
    /**
     * Deletes the dataset with the specified id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    deleteDatasetById(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, deleteDatasetByIdOperationSpec);
    }
    /**
     * Gets the dataset refresh history
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getRefreshHistory(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, getRefreshHistoryOperationSpec);
    }
    /**
     * Start a dataset refresh
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    refreshDataset(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, refreshDatasetOperationSpec);
    }
    /**
     * Gets a list of bound gateway datasources for the specified dataset
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getGatewayDatasources(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, getGatewayDatasourcesOperationSpec);
    }
    /**
     * Gets a list of datasource for the specified dataset
     * @param datasetKey
     * @param options The options parameters.
     */
    getDatasources(datasetKey, options) {
        return this.client.sendOperationRequest({ datasetKey, options }, getDatasourcesOperationSpec);
    }
    /**
     * Sets all connections for the specified dataset
     * @param datasetKey The dataset id
     * @param parameters The body
     * @param options The options parameters.
     */
    setAllConnections(datasetKey, parameters, options) {
        return this.client.sendOperationRequest({ datasetKey, parameters, options }, setAllConnectionsOperationSpec);
    }
    /**
     * Bind dataset to gateway
     * @param datasetKey The dataset id
     * @param bindToGatewayRequest The bind to gateway request
     * @param options The options parameters.
     */
    bindToGateway(datasetKey, bindToGatewayRequest, options) {
        return this.client.sendOperationRequest({ datasetKey, bindToGatewayRequest, options }, bindToGatewayOperationSpec);
    }
    /**
     * Returns the datasets
     * @param groupId The group id
     * @param options The options parameters.
     */
    getDatasetsInGroup(groupId, options) {
        return this.client.sendOperationRequest({ groupId, options }, getDatasetsInGroupOperationSpec);
    }
    /**
     * Post a new entity to datasets
     * @param groupId The group id
     * @param dataset Create dataset parameters
     * @param options The options parameters.
     */
    postDatasetInGroup(groupId, dataset, options) {
        return this.client.sendOperationRequest({ groupId, dataset, options }, postDatasetInGroupOperationSpec);
    }
    /**
     * Posts new data rows into the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    postRowsInGroup(groupId, datasetKey, tableName, requestMessage, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, tableName, requestMessage, options }, postRowsInGroupOperationSpec);
    }
    /**
     * Deletes all rows from the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param options The options parameters.
     */
    deleteRowsInGroup(groupId, datasetKey, tableName, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, tableName, options }, deleteRowsInGroupOperationSpec);
    }
    /**
     * Gets all tables within the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getTablesInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, getTablesInGroupOperationSpec);
    }
    /**
     * Updates a schema and metadata for the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    putTableInGroup(groupId, datasetKey, tableName, requestMessage, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, tableName, requestMessage, options }, putTableInGroupOperationSpec);
    }
    /**
     * Gets the dataset metadata for the specifeid dataset id
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getDatasetByIdInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, getDatasetByIdInGroupOperationSpec);
    }
    /**
     * Deletes the dataset with the specified id
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    deleteDatasetByIdInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, deleteDatasetByIdInGroupOperationSpec);
    }
    /**
     * Gets the dataset refresh history
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getRefreshHistoryInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, getRefreshHistoryInGroupOperationSpec);
    }
    /**
     * Start a dataset refresh
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    refreshDatasetInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, refreshDatasetInGroupOperationSpec);
    }
    /**
     * Gets a list of bound gateway datasources for the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getGatewayDatasourcesInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, getGatewayDatasourcesInGroupOperationSpec);
    }
    /**
     * Gets a list of datasource for the specified dataset
     * @param groupId The group id
     * @param datasetKey
     * @param options The options parameters.
     */
    getDatasourcesInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, getDatasourcesInGroupOperationSpec);
    }
    /**
     * Sets all connections for the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param parameters The body
     * @param options The options parameters.
     */
    setAllConnectionsInGroup(groupId, datasetKey, parameters, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, parameters, options }, setAllConnectionsInGroupOperationSpec);
    }
    /**
     * Bind dataset to gateway
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param bindToGatewayRequest The bind to gateway request
     * @param options The options parameters.
     */
    bindToGatewayInGroup(groupId, datasetKey, bindToGatewayRequest, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, bindToGatewayRequest, options }, bindToGatewayInGroupOperationSpec);
    }
    /**
     * Take Over a dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    takeOverInGroup(groupId, datasetKey, options) {
        return this.client.sendOperationRequest({ groupId, datasetKey, options }, takeOverInGroupOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getDatasetsOperationSpec = {
    path: "/v1.0/myorg/datasets",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDataset
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const postDatasetOperationSpec = {
    path: "/v1.0/myorg/datasets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        },
        202: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.dataset,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const postRowsOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/tables/{tableName}/rows",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.requestMessage,
    urlParameters: [
        Parameters.$host,
        Parameters.datasetKey,
        Parameters.tableName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const deleteRowsOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/tables/{tableName}/rows",
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
        Parameters.datasetKey,
        Parameters.tableName
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getTablesOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/tables",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListTable
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const putTableOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/tables/{tableName}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.requestMessage,
    urlParameters: [
        Parameters.$host,
        Parameters.datasetKey,
        Parameters.tableName
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const getDatasetByIdOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Dataset
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteDatasetByIdOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const getRefreshHistoryOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/refreshes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListRefresh
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const refreshDatasetOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/refreshes",
    httpMethod: "POST",
    responses: {
        202: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const getGatewayDatasourcesOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/Default.GetBoundGatewayDatasources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListGatewayDatasource
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const getDatasourcesOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/datasources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDatasource
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept],
    serializer
};
const setAllConnectionsOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/Default.SetAllConnections",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.parameters,
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const bindToGatewayOperationSpec = {
    path: "/v1.0/myorg/datasets/{datasetKey}/Default.BindToGateway",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.bindToGatewayRequest,
    urlParameters: [Parameters.$host, Parameters.datasetKey],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const getDatasetsInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDataset
        }
    },
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const postDatasetInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        },
        202: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.dataset,
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const postRowsInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables/{tableName}/rows",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.requestMessage,
    urlParameters: [
        Parameters.$host,
        Parameters.datasetKey,
        Parameters.tableName,
        Parameters.groupId
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const deleteRowsInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables/{tableName}/rows",
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
        Parameters.datasetKey,
        Parameters.tableName,
        Parameters.groupId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getTablesInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListTable
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const putTableInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables/{tableName}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.requestMessage,
    urlParameters: [
        Parameters.$host,
        Parameters.datasetKey,
        Parameters.tableName,
        Parameters.groupId
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const getDatasetByIdInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Dataset
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const deleteDatasetByIdInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}",
    httpMethod: "DELETE",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const getRefreshHistoryInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/refreshes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListRefresh
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const refreshDatasetInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/refreshes",
    httpMethod: "POST",
    responses: {
        202: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const getGatewayDatasourcesInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.GetBoundGatewayDatasources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListGatewayDatasource
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const getDatasourcesInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/datasources",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListDatasource
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const setAllConnectionsInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.SetAllConnections",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.parameters,
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const bindToGatewayInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.BindToGateway",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    requestBody: Parameters.bindToGatewayRequest,
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const takeOverInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.TakeOver",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
            }
        }
    },
    urlParameters: [Parameters.$host, Parameters.datasetKey, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=datasets.js.map