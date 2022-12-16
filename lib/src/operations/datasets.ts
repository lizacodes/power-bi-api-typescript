import { Datasets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  DatasetsGetDatasetsOptionalParams,
  DatasetsGetDatasetsResponse,
  Dataset,
  DatasetsPostDatasetOptionalParams,
  DatasetsPostDatasetResponse,
  DatasetsPostRowsOptionalParams,
  DatasetsPostRowsResponse,
  DatasetsDeleteRowsOptionalParams,
  DatasetsDeleteRowsResponse,
  DatasetsGetTablesOptionalParams,
  DatasetsGetTablesResponse,
  DatasetsPutTableOptionalParams,
  DatasetsPutTableResponse,
  DatasetsGetDatasetByIdOptionalParams,
  DatasetsGetDatasetByIdResponse,
  DatasetsDeleteDatasetByIdOptionalParams,
  DatasetsDeleteDatasetByIdResponse,
  DatasetsGetRefreshHistoryOptionalParams,
  DatasetsGetRefreshHistoryResponse,
  DatasetsRefreshDatasetOptionalParams,
  DatasetsRefreshDatasetResponse,
  DatasetsGetGatewayDatasourcesOptionalParams,
  DatasetsGetGatewayDatasourcesResponse,
  DatasetsGetDatasourcesOptionalParams,
  DatasetsGetDatasourcesResponse,
  SetAllDatasetConnectionsRequest,
  DatasetsSetAllConnectionsOptionalParams,
  DatasetsSetAllConnectionsResponse,
  BindToGatewayRequest,
  DatasetsBindToGatewayOptionalParams,
  DatasetsBindToGatewayResponse,
  DatasetsGetDatasetsInGroupOptionalParams,
  DatasetsGetDatasetsInGroupResponse,
  DatasetsPostDatasetInGroupOptionalParams,
  DatasetsPostDatasetInGroupResponse,
  DatasetsPostRowsInGroupOptionalParams,
  DatasetsPostRowsInGroupResponse,
  DatasetsDeleteRowsInGroupOptionalParams,
  DatasetsDeleteRowsInGroupResponse,
  DatasetsGetTablesInGroupOptionalParams,
  DatasetsGetTablesInGroupResponse,
  DatasetsPutTableInGroupOptionalParams,
  DatasetsPutTableInGroupResponse,
  DatasetsGetDatasetByIdInGroupOptionalParams,
  DatasetsGetDatasetByIdInGroupResponse,
  DatasetsDeleteDatasetByIdInGroupOptionalParams,
  DatasetsDeleteDatasetByIdInGroupResponse,
  DatasetsGetRefreshHistoryInGroupOptionalParams,
  DatasetsGetRefreshHistoryInGroupResponse,
  DatasetsRefreshDatasetInGroupOptionalParams,
  DatasetsRefreshDatasetInGroupResponse,
  DatasetsGetGatewayDatasourcesInGroupOptionalParams,
  DatasetsGetGatewayDatasourcesInGroupResponse,
  DatasetsGetDatasourcesInGroupOptionalParams,
  DatasetsGetDatasourcesInGroupResponse,
  DatasetsSetAllConnectionsInGroupOptionalParams,
  DatasetsSetAllConnectionsInGroupResponse,
  DatasetsBindToGatewayInGroupOptionalParams,
  DatasetsBindToGatewayInGroupResponse,
  DatasetsTakeOverInGroupOptionalParams,
  DatasetsTakeOverInGroupResponse
} from "../models";

/** Class containing Datasets operations. */
export class DatasetsImpl implements Datasets {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Datasets class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Returns the datasets
   * @param options The options parameters.
   */
  getDatasets(
    options?: DatasetsGetDatasetsOptionalParams
  ): Promise<DatasetsGetDatasetsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDatasetsOperationSpec
    );
  }

  /**
   * Post a new entity to datasets
   * @param dataset Create dataset parameters
   * @param options The options parameters.
   */
  postDataset(
    dataset: Dataset,
    options?: DatasetsPostDatasetOptionalParams
  ): Promise<DatasetsPostDatasetResponse> {
    return this.client.sendOperationRequest(
      { dataset, options },
      postDatasetOperationSpec
    );
  }

  /**
   * Posts new data rows into the specified table
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param requestMessage The request message
   * @param options The options parameters.
   */
  postRows(
    datasetKey: string,
    tableName: string,
    requestMessage: Record<string, unknown>,
    options?: DatasetsPostRowsOptionalParams
  ): Promise<DatasetsPostRowsResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, tableName, requestMessage, options },
      postRowsOperationSpec
    );
  }

  /**
   * Deletes all rows from the specified table
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param options The options parameters.
   */
  deleteRows(
    datasetKey: string,
    tableName: string,
    options?: DatasetsDeleteRowsOptionalParams
  ): Promise<DatasetsDeleteRowsResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, tableName, options },
      deleteRowsOperationSpec
    );
  }

  /**
   * Gets all tables within the specified dataset
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getTables(
    datasetKey: string,
    options?: DatasetsGetTablesOptionalParams
  ): Promise<DatasetsGetTablesResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      getTablesOperationSpec
    );
  }

  /**
   * Updates a schema and metadata for the specified table
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param requestMessage The request message
   * @param options The options parameters.
   */
  putTable(
    datasetKey: string,
    tableName: string,
    requestMessage: Record<string, unknown>,
    options?: DatasetsPutTableOptionalParams
  ): Promise<DatasetsPutTableResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, tableName, requestMessage, options },
      putTableOperationSpec
    );
  }

  /**
   * Gets the dataset metadata for the specifeid dataset id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getDatasetById(
    datasetKey: string,
    options?: DatasetsGetDatasetByIdOptionalParams
  ): Promise<DatasetsGetDatasetByIdResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      getDatasetByIdOperationSpec
    );
  }

  /**
   * Deletes the dataset with the specified id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  deleteDatasetById(
    datasetKey: string,
    options?: DatasetsDeleteDatasetByIdOptionalParams
  ): Promise<DatasetsDeleteDatasetByIdResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      deleteDatasetByIdOperationSpec
    );
  }

  /**
   * Gets the dataset refresh history
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getRefreshHistory(
    datasetKey: string,
    options?: DatasetsGetRefreshHistoryOptionalParams
  ): Promise<DatasetsGetRefreshHistoryResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      getRefreshHistoryOperationSpec
    );
  }

  /**
   * Start a dataset refresh
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  refreshDataset(
    datasetKey: string,
    options?: DatasetsRefreshDatasetOptionalParams
  ): Promise<DatasetsRefreshDatasetResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      refreshDatasetOperationSpec
    );
  }

  /**
   * Gets a list of bound gateway datasources for the specified dataset
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getGatewayDatasources(
    datasetKey: string,
    options?: DatasetsGetGatewayDatasourcesOptionalParams
  ): Promise<DatasetsGetGatewayDatasourcesResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      getGatewayDatasourcesOperationSpec
    );
  }

  /**
   * Gets a list of datasource for the specified dataset
   * @param datasetKey
   * @param options The options parameters.
   */
  getDatasources(
    datasetKey: string,
    options?: DatasetsGetDatasourcesOptionalParams
  ): Promise<DatasetsGetDatasourcesResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, options },
      getDatasourcesOperationSpec
    );
  }

  /**
   * Sets all connections for the specified dataset
   * @param datasetKey The dataset id
   * @param parameters The body
   * @param options The options parameters.
   */
  setAllConnections(
    datasetKey: string,
    parameters: SetAllDatasetConnectionsRequest,
    options?: DatasetsSetAllConnectionsOptionalParams
  ): Promise<DatasetsSetAllConnectionsResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, parameters, options },
      setAllConnectionsOperationSpec
    );
  }

  /**
   * Bind dataset to gateway
   * @param datasetKey The dataset id
   * @param bindToGatewayRequest The bind to gateway request
   * @param options The options parameters.
   */
  bindToGateway(
    datasetKey: string,
    bindToGatewayRequest: BindToGatewayRequest,
    options?: DatasetsBindToGatewayOptionalParams
  ): Promise<DatasetsBindToGatewayResponse> {
    return this.client.sendOperationRequest(
      { datasetKey, bindToGatewayRequest, options },
      bindToGatewayOperationSpec
    );
  }

  /**
   * Returns the datasets
   * @param groupId The group id
   * @param options The options parameters.
   */
  getDatasetsInGroup(
    groupId: string,
    options?: DatasetsGetDatasetsInGroupOptionalParams
  ): Promise<DatasetsGetDatasetsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getDatasetsInGroupOperationSpec
    );
  }

  /**
   * Post a new entity to datasets
   * @param groupId The group id
   * @param dataset Create dataset parameters
   * @param options The options parameters.
   */
  postDatasetInGroup(
    groupId: string,
    dataset: Dataset,
    options?: DatasetsPostDatasetInGroupOptionalParams
  ): Promise<DatasetsPostDatasetInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, dataset, options },
      postDatasetInGroupOperationSpec
    );
  }

  /**
   * Posts new data rows into the specified table
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param requestMessage The request message
   * @param options The options parameters.
   */
  postRowsInGroup(
    groupId: string,
    datasetKey: string,
    tableName: string,
    requestMessage: Record<string, unknown>,
    options?: DatasetsPostRowsInGroupOptionalParams
  ): Promise<DatasetsPostRowsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, tableName, requestMessage, options },
      postRowsInGroupOperationSpec
    );
  }

  /**
   * Deletes all rows from the specified table
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param options The options parameters.
   */
  deleteRowsInGroup(
    groupId: string,
    datasetKey: string,
    tableName: string,
    options?: DatasetsDeleteRowsInGroupOptionalParams
  ): Promise<DatasetsDeleteRowsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, tableName, options },
      deleteRowsInGroupOperationSpec
    );
  }

  /**
   * Gets all tables within the specified dataset
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getTablesInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsGetTablesInGroupOptionalParams
  ): Promise<DatasetsGetTablesInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      getTablesInGroupOperationSpec
    );
  }

  /**
   * Updates a schema and metadata for the specified table
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param tableName The table name
   * @param requestMessage The request message
   * @param options The options parameters.
   */
  putTableInGroup(
    groupId: string,
    datasetKey: string,
    tableName: string,
    requestMessage: Record<string, unknown>,
    options?: DatasetsPutTableInGroupOptionalParams
  ): Promise<DatasetsPutTableInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, tableName, requestMessage, options },
      putTableInGroupOperationSpec
    );
  }

  /**
   * Gets the dataset metadata for the specifeid dataset id
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getDatasetByIdInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsGetDatasetByIdInGroupOptionalParams
  ): Promise<DatasetsGetDatasetByIdInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      getDatasetByIdInGroupOperationSpec
    );
  }

  /**
   * Deletes the dataset with the specified id
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  deleteDatasetByIdInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsDeleteDatasetByIdInGroupOptionalParams
  ): Promise<DatasetsDeleteDatasetByIdInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      deleteDatasetByIdInGroupOperationSpec
    );
  }

  /**
   * Gets the dataset refresh history
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getRefreshHistoryInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsGetRefreshHistoryInGroupOptionalParams
  ): Promise<DatasetsGetRefreshHistoryInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      getRefreshHistoryInGroupOperationSpec
    );
  }

  /**
   * Start a dataset refresh
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  refreshDatasetInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsRefreshDatasetInGroupOptionalParams
  ): Promise<DatasetsRefreshDatasetInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      refreshDatasetInGroupOperationSpec
    );
  }

  /**
   * Gets a list of bound gateway datasources for the specified dataset
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  getGatewayDatasourcesInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsGetGatewayDatasourcesInGroupOptionalParams
  ): Promise<DatasetsGetGatewayDatasourcesInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      getGatewayDatasourcesInGroupOperationSpec
    );
  }

  /**
   * Gets a list of datasource for the specified dataset
   * @param groupId The group id
   * @param datasetKey
   * @param options The options parameters.
   */
  getDatasourcesInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsGetDatasourcesInGroupOptionalParams
  ): Promise<DatasetsGetDatasourcesInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      getDatasourcesInGroupOperationSpec
    );
  }

  /**
   * Sets all connections for the specified dataset
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param parameters The body
   * @param options The options parameters.
   */
  setAllConnectionsInGroup(
    groupId: string,
    datasetKey: string,
    parameters: SetAllDatasetConnectionsRequest,
    options?: DatasetsSetAllConnectionsInGroupOptionalParams
  ): Promise<DatasetsSetAllConnectionsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, parameters, options },
      setAllConnectionsInGroupOperationSpec
    );
  }

  /**
   * Bind dataset to gateway
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param bindToGatewayRequest The bind to gateway request
   * @param options The options parameters.
   */
  bindToGatewayInGroup(
    groupId: string,
    datasetKey: string,
    bindToGatewayRequest: BindToGatewayRequest,
    options?: DatasetsBindToGatewayInGroupOptionalParams
  ): Promise<DatasetsBindToGatewayInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, bindToGatewayRequest, options },
      bindToGatewayInGroupOperationSpec
    );
  }

  /**
   * Take Over a dataset
   * @param groupId The group id
   * @param datasetKey The dataset id
   * @param options The options parameters.
   */
  takeOverInGroup(
    groupId: string,
    datasetKey: string,
    options?: DatasetsTakeOverInGroupOptionalParams
  ): Promise<DatasetsTakeOverInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetKey, options },
      takeOverInGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDatasetsOperationSpec: coreClient.OperationSpec = {
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
const postDatasetOperationSpec: coreClient.OperationSpec = {
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
const postRowsOperationSpec: coreClient.OperationSpec = {
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
const deleteRowsOperationSpec: coreClient.OperationSpec = {
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
const getTablesOperationSpec: coreClient.OperationSpec = {
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
const putTableOperationSpec: coreClient.OperationSpec = {
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
const getDatasetByIdOperationSpec: coreClient.OperationSpec = {
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
const deleteDatasetByIdOperationSpec: coreClient.OperationSpec = {
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
const getRefreshHistoryOperationSpec: coreClient.OperationSpec = {
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
const refreshDatasetOperationSpec: coreClient.OperationSpec = {
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
const getGatewayDatasourcesOperationSpec: coreClient.OperationSpec = {
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
const getDatasourcesOperationSpec: coreClient.OperationSpec = {
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
const setAllConnectionsOperationSpec: coreClient.OperationSpec = {
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
const bindToGatewayOperationSpec: coreClient.OperationSpec = {
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
const getDatasetsInGroupOperationSpec: coreClient.OperationSpec = {
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
const postDatasetInGroupOperationSpec: coreClient.OperationSpec = {
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
const postRowsInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables/{tableName}/rows",
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
const deleteRowsInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/tables/{tableName}/rows",
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
const getTablesInGroupOperationSpec: coreClient.OperationSpec = {
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
const putTableInGroupOperationSpec: coreClient.OperationSpec = {
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
const getDatasetByIdInGroupOperationSpec: coreClient.OperationSpec = {
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
const deleteDatasetByIdInGroupOperationSpec: coreClient.OperationSpec = {
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
const getRefreshHistoryInGroupOperationSpec: coreClient.OperationSpec = {
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
const refreshDatasetInGroupOperationSpec: coreClient.OperationSpec = {
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
const getGatewayDatasourcesInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.GetBoundGatewayDatasources",
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
const getDatasourcesInGroupOperationSpec: coreClient.OperationSpec = {
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
const setAllConnectionsInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.SetAllConnections",
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
const bindToGatewayInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/datasets/{datasetKey}/Default.BindToGateway",
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
const takeOverInGroupOperationSpec: coreClient.OperationSpec = {
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
