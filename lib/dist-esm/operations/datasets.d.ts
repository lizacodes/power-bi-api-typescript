import { Datasets } from "../operationsInterfaces";
import { PowerBiClient } from "../powerBiClient";
import { DatasetsGetDatasetsOptionalParams, DatasetsGetDatasetsResponse, Dataset, DatasetsPostDatasetOptionalParams, DatasetsPostDatasetResponse, DatasetsPostRowsOptionalParams, DatasetsPostRowsResponse, DatasetsDeleteRowsOptionalParams, DatasetsDeleteRowsResponse, DatasetsGetTablesOptionalParams, DatasetsGetTablesResponse, DatasetsPutTableOptionalParams, DatasetsPutTableResponse, DatasetsGetDatasetByIdOptionalParams, DatasetsGetDatasetByIdResponse, DatasetsDeleteDatasetByIdOptionalParams, DatasetsDeleteDatasetByIdResponse, DatasetsGetRefreshHistoryOptionalParams, DatasetsGetRefreshHistoryResponse, DatasetsRefreshDatasetOptionalParams, DatasetsRefreshDatasetResponse, DatasetsGetGatewayDatasourcesOptionalParams, DatasetsGetGatewayDatasourcesResponse, DatasetsGetDatasourcesOptionalParams, DatasetsGetDatasourcesResponse, SetAllDatasetConnectionsRequest, DatasetsSetAllConnectionsOptionalParams, DatasetsSetAllConnectionsResponse, BindToGatewayRequest, DatasetsBindToGatewayOptionalParams, DatasetsBindToGatewayResponse, DatasetsGetDatasetsInGroupOptionalParams, DatasetsGetDatasetsInGroupResponse, DatasetsPostDatasetInGroupOptionalParams, DatasetsPostDatasetInGroupResponse, DatasetsPostRowsInGroupOptionalParams, DatasetsPostRowsInGroupResponse, DatasetsDeleteRowsInGroupOptionalParams, DatasetsDeleteRowsInGroupResponse, DatasetsGetTablesInGroupOptionalParams, DatasetsGetTablesInGroupResponse, DatasetsPutTableInGroupOptionalParams, DatasetsPutTableInGroupResponse, DatasetsGetDatasetByIdInGroupOptionalParams, DatasetsGetDatasetByIdInGroupResponse, DatasetsDeleteDatasetByIdInGroupOptionalParams, DatasetsDeleteDatasetByIdInGroupResponse, DatasetsGetRefreshHistoryInGroupOptionalParams, DatasetsGetRefreshHistoryInGroupResponse, DatasetsRefreshDatasetInGroupOptionalParams, DatasetsRefreshDatasetInGroupResponse, DatasetsGetGatewayDatasourcesInGroupOptionalParams, DatasetsGetGatewayDatasourcesInGroupResponse, DatasetsGetDatasourcesInGroupOptionalParams, DatasetsGetDatasourcesInGroupResponse, DatasetsSetAllConnectionsInGroupOptionalParams, DatasetsSetAllConnectionsInGroupResponse, DatasetsBindToGatewayInGroupOptionalParams, DatasetsBindToGatewayInGroupResponse, DatasetsTakeOverInGroupOptionalParams, DatasetsTakeOverInGroupResponse } from "../models";
/** Class containing Datasets operations. */
export declare class DatasetsImpl implements Datasets {
    private readonly client;
    /**
     * Initialize a new instance of the class Datasets class.
     * @param client Reference to the service client
     */
    constructor(client: PowerBiClient);
    /**
     * Returns the datasets
     * @param options The options parameters.
     */
    getDatasets(options?: DatasetsGetDatasetsOptionalParams): Promise<DatasetsGetDatasetsResponse>;
    /**
     * Post a new entity to datasets
     * @param dataset Create dataset parameters
     * @param options The options parameters.
     */
    postDataset(dataset: Dataset, options?: DatasetsPostDatasetOptionalParams): Promise<DatasetsPostDatasetResponse>;
    /**
     * Posts new data rows into the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    postRows(datasetKey: string, tableName: string, requestMessage: Record<string, unknown>, options?: DatasetsPostRowsOptionalParams): Promise<DatasetsPostRowsResponse>;
    /**
     * Deletes all rows from the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param options The options parameters.
     */
    deleteRows(datasetKey: string, tableName: string, options?: DatasetsDeleteRowsOptionalParams): Promise<DatasetsDeleteRowsResponse>;
    /**
     * Gets all tables within the specified dataset
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getTables(datasetKey: string, options?: DatasetsGetTablesOptionalParams): Promise<DatasetsGetTablesResponse>;
    /**
     * Updates a schema and metadata for the specified table
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    putTable(datasetKey: string, tableName: string, requestMessage: Record<string, unknown>, options?: DatasetsPutTableOptionalParams): Promise<DatasetsPutTableResponse>;
    /**
     * Gets the dataset metadata for the specifeid dataset id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getDatasetById(datasetKey: string, options?: DatasetsGetDatasetByIdOptionalParams): Promise<DatasetsGetDatasetByIdResponse>;
    /**
     * Deletes the dataset with the specified id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    deleteDatasetById(datasetKey: string, options?: DatasetsDeleteDatasetByIdOptionalParams): Promise<DatasetsDeleteDatasetByIdResponse>;
    /**
     * Gets the dataset refresh history
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getRefreshHistory(datasetKey: string, options?: DatasetsGetRefreshHistoryOptionalParams): Promise<DatasetsGetRefreshHistoryResponse>;
    /**
     * Start a dataset refresh
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    refreshDataset(datasetKey: string, options?: DatasetsRefreshDatasetOptionalParams): Promise<DatasetsRefreshDatasetResponse>;
    /**
     * Gets a list of bound gateway datasources for the specified dataset
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getGatewayDatasources(datasetKey: string, options?: DatasetsGetGatewayDatasourcesOptionalParams): Promise<DatasetsGetGatewayDatasourcesResponse>;
    /**
     * Gets a list of datasource for the specified dataset
     * @param datasetKey
     * @param options The options parameters.
     */
    getDatasources(datasetKey: string, options?: DatasetsGetDatasourcesOptionalParams): Promise<DatasetsGetDatasourcesResponse>;
    /**
     * Sets all connections for the specified dataset
     * @param datasetKey The dataset id
     * @param parameters The body
     * @param options The options parameters.
     */
    setAllConnections(datasetKey: string, parameters: SetAllDatasetConnectionsRequest, options?: DatasetsSetAllConnectionsOptionalParams): Promise<DatasetsSetAllConnectionsResponse>;
    /**
     * Bind dataset to gateway
     * @param datasetKey The dataset id
     * @param bindToGatewayRequest The bind to gateway request
     * @param options The options parameters.
     */
    bindToGateway(datasetKey: string, bindToGatewayRequest: BindToGatewayRequest, options?: DatasetsBindToGatewayOptionalParams): Promise<DatasetsBindToGatewayResponse>;
    /**
     * Returns the datasets
     * @param groupId The group id
     * @param options The options parameters.
     */
    getDatasetsInGroup(groupId: string, options?: DatasetsGetDatasetsInGroupOptionalParams): Promise<DatasetsGetDatasetsInGroupResponse>;
    /**
     * Post a new entity to datasets
     * @param groupId The group id
     * @param dataset Create dataset parameters
     * @param options The options parameters.
     */
    postDatasetInGroup(groupId: string, dataset: Dataset, options?: DatasetsPostDatasetInGroupOptionalParams): Promise<DatasetsPostDatasetInGroupResponse>;
    /**
     * Posts new data rows into the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    postRowsInGroup(groupId: string, datasetKey: string, tableName: string, requestMessage: Record<string, unknown>, options?: DatasetsPostRowsInGroupOptionalParams): Promise<DatasetsPostRowsInGroupResponse>;
    /**
     * Deletes all rows from the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param options The options parameters.
     */
    deleteRowsInGroup(groupId: string, datasetKey: string, tableName: string, options?: DatasetsDeleteRowsInGroupOptionalParams): Promise<DatasetsDeleteRowsInGroupResponse>;
    /**
     * Gets all tables within the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getTablesInGroup(groupId: string, datasetKey: string, options?: DatasetsGetTablesInGroupOptionalParams): Promise<DatasetsGetTablesInGroupResponse>;
    /**
     * Updates a schema and metadata for the specified table
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param tableName The table name
     * @param requestMessage The request message
     * @param options The options parameters.
     */
    putTableInGroup(groupId: string, datasetKey: string, tableName: string, requestMessage: Record<string, unknown>, options?: DatasetsPutTableInGroupOptionalParams): Promise<DatasetsPutTableInGroupResponse>;
    /**
     * Gets the dataset metadata for the specifeid dataset id
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getDatasetByIdInGroup(groupId: string, datasetKey: string, options?: DatasetsGetDatasetByIdInGroupOptionalParams): Promise<DatasetsGetDatasetByIdInGroupResponse>;
    /**
     * Deletes the dataset with the specified id
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    deleteDatasetByIdInGroup(groupId: string, datasetKey: string, options?: DatasetsDeleteDatasetByIdInGroupOptionalParams): Promise<DatasetsDeleteDatasetByIdInGroupResponse>;
    /**
     * Gets the dataset refresh history
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getRefreshHistoryInGroup(groupId: string, datasetKey: string, options?: DatasetsGetRefreshHistoryInGroupOptionalParams): Promise<DatasetsGetRefreshHistoryInGroupResponse>;
    /**
     * Start a dataset refresh
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    refreshDatasetInGroup(groupId: string, datasetKey: string, options?: DatasetsRefreshDatasetInGroupOptionalParams): Promise<DatasetsRefreshDatasetInGroupResponse>;
    /**
     * Gets a list of bound gateway datasources for the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    getGatewayDatasourcesInGroup(groupId: string, datasetKey: string, options?: DatasetsGetGatewayDatasourcesInGroupOptionalParams): Promise<DatasetsGetGatewayDatasourcesInGroupResponse>;
    /**
     * Gets a list of datasource for the specified dataset
     * @param groupId The group id
     * @param datasetKey
     * @param options The options parameters.
     */
    getDatasourcesInGroup(groupId: string, datasetKey: string, options?: DatasetsGetDatasourcesInGroupOptionalParams): Promise<DatasetsGetDatasourcesInGroupResponse>;
    /**
     * Sets all connections for the specified dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param parameters The body
     * @param options The options parameters.
     */
    setAllConnectionsInGroup(groupId: string, datasetKey: string, parameters: SetAllDatasetConnectionsRequest, options?: DatasetsSetAllConnectionsInGroupOptionalParams): Promise<DatasetsSetAllConnectionsInGroupResponse>;
    /**
     * Bind dataset to gateway
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param bindToGatewayRequest The bind to gateway request
     * @param options The options parameters.
     */
    bindToGatewayInGroup(groupId: string, datasetKey: string, bindToGatewayRequest: BindToGatewayRequest, options?: DatasetsBindToGatewayInGroupOptionalParams): Promise<DatasetsBindToGatewayInGroupResponse>;
    /**
     * Take Over a dataset
     * @param groupId The group id
     * @param datasetKey The dataset id
     * @param options The options parameters.
     */
    takeOverInGroup(groupId: string, datasetKey: string, options?: DatasetsTakeOverInGroupOptionalParams): Promise<DatasetsTakeOverInGroupResponse>;
}
//# sourceMappingURL=datasets.d.ts.map