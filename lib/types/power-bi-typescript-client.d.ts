import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

/** Object representing basic authentication credentials */
export declare interface BasicCredentials {
    /** Username required to access the datasource */
    username?: string;
    /** Password required to access the datasource */
    password?: string;
}

/** The Bind dataset to gateway request */
export declare interface BindToGatewayRequest {
    /** The gateway id */
    gatewayObjectId?: string;
}

/** Power BI Clone Report Request */
export declare interface CloneReportRequest {
    /** The requested report name */
    name?: string;
    /** Optional parameter for specifying the target group id */
    targetGroupId?: string;
    /** Optional parameter for specifying the target associated model (dataset) id */
    targetModelId?: string;
}

/** A Power BI Column */
export declare interface Column {
    /** The column name */
    name: string;
    /** The column data type */
    dataType: string;
}

/** The credential details */
export declare interface CredentialDetails {
    /** The credentials */
    credentials?: string;
    /** The connection type */
    credentialType?: string;
    /** The encrypted connection */
    encryptedConnection?: string;
    /** The encryption algorithm */
    encryptionAlgorithm?: string;
    /** The privacy level */
    privacyLevel?: string;
}

/** A Power BI Dashboard */
export declare interface Dashboard {
    /** The dashboard id */
    id?: string;
    /** The dashboard display name */
    displayName?: string;
    /** Is ReadOnly dashboard */
    isReadOnly?: boolean;
    /** The dashboard embed url */
    embedUrl?: string;
}

/** Interface representing a Dashboards. */
export declare interface Dashboards {
    /**
     * Gets a list of dashboards
     * @param options The options parameters.
     */
    getDashboards(options?: DashboardsGetDashboardsOptionalParams): Promise<DashboardsGetDashboardsResponse>;
    /**
     * Gets a list of dashboards in a group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getDashboardsInGroup(groupId: string, options?: DashboardsGetDashboardsInGroupOptionalParams): Promise<DashboardsGetDashboardsInGroupResponse>;
    /**
     * Get the specified dashboard
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getDashboard(dashboardKey: string, options?: DashboardsGetDashboardOptionalParams): Promise<DashboardsGetDashboardResponse>;
    /**
     * Get tiles in the specified dashboard
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getTiles(dashboardKey: string, options?: DashboardsGetTilesOptionalParams): Promise<DashboardsGetTilesResponse>;
    /**
     * Get tiles in the specified dashboard in a group
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param options The options parameters.
     */
    getTilesInGroup(groupId: string, dashboardKey: string, options?: DashboardsGetTilesInGroupOptionalParams): Promise<DashboardsGetTilesInGroupResponse>;
    /**
     * Get a specified tile in a specified dashboard
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param options The options parameters.
     */
    getTile(dashboardKey: string, tileKey: string, options?: DashboardsGetTileOptionalParams): Promise<DashboardsGetTileResponse>;
    /**
     * Get a specified tile in a specified dashboard in a group
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param options The options parameters.
     */
    getTileInGroup(groupId: string, dashboardKey: string, tileKey: string, options?: DashboardsGetTileInGroupOptionalParams): Promise<DashboardsGetTileInGroupResponse>;
    /**
     * Generate token to view the specified dashboard
     * @param dashboardKey The dashboard id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(dashboardKey: string, requestParameters: GenerateTokenRequest, options?: DashboardsGenerateTokenOptionalParams): Promise<DashboardsGenerateTokenResponse>;
    /**
     * Generate token to view the specified dashboard
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId: string, dashboardKey: string, requestParameters: GenerateTokenRequest, options?: DashboardsGenerateTokenInGroupOptionalParams): Promise<DashboardsGenerateTokenInGroupResponse>;
}

/** Optional parameters. */
export declare interface DashboardsGenerateTokenInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateTokenInGroup operation. */
export declare type DashboardsGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export declare interface DashboardsGenerateTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateToken operation. */
export declare type DashboardsGenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export declare interface DashboardsGetDashboardOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDashboard operation. */
export declare type DashboardsGetDashboardResponse = Dashboard;

/** Optional parameters. */
export declare interface DashboardsGetDashboardsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDashboardsInGroup operation. */
export declare type DashboardsGetDashboardsInGroupResponse = ODataResponseListDashboard;

/** Optional parameters. */
export declare interface DashboardsGetDashboardsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDashboards operation. */
export declare type DashboardsGetDashboardsResponse = ODataResponseListDashboard;

/** Optional parameters. */
export declare interface DashboardsGetTileInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTileInGroup operation. */
export declare type DashboardsGetTileInGroupResponse = Tile;

/** Optional parameters. */
export declare interface DashboardsGetTileOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTile operation. */
export declare type DashboardsGetTileResponse = Tile;

/** Optional parameters. */
export declare interface DashboardsGetTilesInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTilesInGroup operation. */
export declare type DashboardsGetTilesInGroupResponse = ODataResponseListTile;

/** Optional parameters. */
export declare interface DashboardsGetTilesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTiles operation. */
export declare type DashboardsGetTilesResponse = ODataResponseListTile;

/** A Power BI Dataset */
export declare interface Dataset {
    /** The dataset id */
    id?: string;
    /** The dataset name */
    name: string;
    /** The dataset default data retention policy */
    defaultRetentionPolicy?: string;
    /** The dataset tables */
    tables: Table[];
    /** The dataset web url */
    webUrl?: string;
    /** The datasources associated with this dataset */
    datasources?: Datasource[];
    /** The dataset mode or type */
    defaultMode?: DatasetDefaultMode;
}

/**
 * Defines values for DatasetDefaultMode. \
 * {@link KnownDatasetDefaultMode} can be used interchangeably with DatasetDefaultMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AsAzure** \
 * **AsOnPrem** \
 * **Push** \
 * **Streaming** \
 * **PushStreaming**
 */
export declare type DatasetDefaultMode = string;

/** Interface representing a Datasets. */
export declare interface Datasets {
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

/** Optional parameters. */
export declare interface DatasetsBindToGatewayInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the bindToGatewayInGroup operation. */
export declare type DatasetsBindToGatewayInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsBindToGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the bindToGateway operation. */
export declare type DatasetsBindToGatewayResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsDeleteDatasetByIdInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteDatasetByIdInGroup operation. */
export declare type DatasetsDeleteDatasetByIdInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsDeleteDatasetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteDatasetById operation. */
export declare type DatasetsDeleteDatasetByIdResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsDeleteRowsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteRowsInGroup operation. */
export declare type DatasetsDeleteRowsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsDeleteRowsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteRows operation. */
export declare type DatasetsDeleteRowsResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsGetDatasetByIdInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasetByIdInGroup operation. */
export declare type DatasetsGetDatasetByIdInGroupResponse = Dataset;

/** Optional parameters. */
export declare interface DatasetsGetDatasetByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasetById operation. */
export declare type DatasetsGetDatasetByIdResponse = Dataset;

/** Optional parameters. */
export declare interface DatasetsGetDatasetsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasetsInGroup operation. */
export declare type DatasetsGetDatasetsInGroupResponse = ODataResponseListDataset;

/** Optional parameters. */
export declare interface DatasetsGetDatasetsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasets operation. */
export declare type DatasetsGetDatasetsResponse = ODataResponseListDataset;

/** Optional parameters. */
export declare interface DatasetsGetDatasourcesInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasourcesInGroup operation. */
export declare type DatasetsGetDatasourcesInGroupResponse = ODataResponseListDatasource;

/** Optional parameters. */
export declare interface DatasetsGetDatasourcesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasources operation. */
export declare type DatasetsGetDatasourcesResponse = ODataResponseListDatasource;

/** Optional parameters. */
export declare interface DatasetsGetGatewayDatasourcesInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGatewayDatasourcesInGroup operation. */
export declare type DatasetsGetGatewayDatasourcesInGroupResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export declare interface DatasetsGetGatewayDatasourcesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGatewayDatasources operation. */
export declare type DatasetsGetGatewayDatasourcesResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export declare interface DatasetsGetRefreshHistoryInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRefreshHistoryInGroup operation. */
export declare type DatasetsGetRefreshHistoryInGroupResponse = ODataResponseListRefresh;

/** Optional parameters. */
export declare interface DatasetsGetRefreshHistoryOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getRefreshHistory operation. */
export declare type DatasetsGetRefreshHistoryResponse = ODataResponseListRefresh;

/** Optional parameters. */
export declare interface DatasetsGetTablesInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTablesInGroup operation. */
export declare type DatasetsGetTablesInGroupResponse = ODataResponseListTable;

/** Optional parameters. */
export declare interface DatasetsGetTablesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTables operation. */
export declare type DatasetsGetTablesResponse = ODataResponseListTable;

/** Optional parameters. */
export declare interface DatasetsPostDatasetInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the postDatasetInGroup operation. */
export declare type DatasetsPostDatasetInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsPostDatasetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the postDataset operation. */
export declare type DatasetsPostDatasetResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsPostRowsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the postRowsInGroup operation. */
export declare type DatasetsPostRowsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsPostRowsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the postRows operation. */
export declare type DatasetsPostRowsResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsPutTableInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the putTableInGroup operation. */
export declare type DatasetsPutTableInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsPutTableOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the putTable operation. */
export declare type DatasetsPutTableResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsRefreshDatasetInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the refreshDatasetInGroup operation. */
export declare type DatasetsRefreshDatasetInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsRefreshDatasetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the refreshDataset operation. */
export declare type DatasetsRefreshDatasetResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsSetAllConnectionsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setAllConnectionsInGroup operation. */
export declare type DatasetsSetAllConnectionsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsSetAllConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the setAllConnections operation. */
export declare type DatasetsSetAllConnectionsResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface DatasetsTakeOverInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the takeOverInGroup operation. */
export declare type DatasetsTakeOverInGroupResponse = Record<string, unknown>;

/** A Power BI datasource */
export declare interface Datasource {
    /** The datasource name */
    name?: string;
    /** The datasource connection string */
    connectionString?: string;
}

/** Power BI Embed Token */
export declare interface EmbedToken {
    /** Embed token. */
    token?: string;
    /** Unique token Id. */
    tokenId?: string;
    /** Expiration time of token - in UTC. */
    expiration?: Date;
}

/** A Power BI Gateway */
export declare interface Gateway {
    /** The gateway id */
    id?: string;
    /** The gateway name */
    name?: string;
    /** The gateway type */
    type?: string;
    /** The gateway annotation */
    gatewayAnnotation?: string;
    /** The gateway public key */
    publicKey?: GatewayPublicKey;
    /** The gateway connectivity status */
    gatewayStatus?: string;
}

/** A Power BI gateway datasource */
export declare interface GatewayDatasource {
    /** The unique id for this gateway datasource */
    id?: string;
    /** The associated gateway id */
    gatewayId?: string;
    /** The datasource name */
    datasourceName?: string;
    /** The datasource type */
    datasourceType?: string;
    /** The datasource connection details */
    connectionDetails?: string;
    /** The datasource credential type */
    credentialType?: string;
    /** The datasource basic credential */
    basicCredentials?: BasicCredentials;
}

/** A Power BI Gateway Public Key */
export declare interface GatewayPublicKey {
    /** The public key exponent */
    exponent?: string;
    /** The public key  modulus */
    modulus?: string;
}

/** Interface representing a Gateways. */
export declare interface Gateways {
    /**
     * Returns a list of gateways
     * @param options The options parameters.
     */
    getGateways(options?: GatewaysGetGatewaysOptionalParams): Promise<GatewaysGetGatewaysResponse>;
    /**
     * Returns the specified gateway
     * @param gatewayId The gateway id
     * @param options The options parameters.
     */
    getGatewayById(gatewayId: string, options?: GatewaysGetGatewayByIdOptionalParams): Promise<GatewaysGetGatewayByIdResponse>;
    /**
     * Get all datasources of specific gateway
     * @param gatewayId The gateway id
     * @param options The options parameters.
     */
    getDatasources(gatewayId: string, options?: GatewaysGetDatasourcesOptionalParams): Promise<GatewaysGetDatasourcesResponse>;
    /**
     * Create a datasource
     * @param gatewayId The gateway id
     * @param datasourceToGatewayRequest The datasource requested to create
     * @param options The options parameters.
     */
    createDatasource(gatewayId: string, datasourceToGatewayRequest: PublishDatasourceToGatewayRequest, options?: GatewaysCreateDatasourceOptionalParams): Promise<GatewaysCreateDatasourceResponse>;
    /**
     * Get a datasource by id
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceById(gatewayId: string, datasourceId: string, options?: GatewaysGetDatasourceByIdOptionalParams): Promise<GatewaysGetDatasourceByIdResponse>;
    /**
     * Delete a datasource
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    deleteDatasource(gatewayId: string, datasourceId: string, options?: GatewaysDeleteDatasourceOptionalParams): Promise<GatewaysDeleteDatasourceResponse>;
    /**
     * Update a datasource credentials
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param updateDatasourceRequest The update datasource request
     * @param options The options parameters.
     */
    updateDatasource(gatewayId: string, datasourceId: string, updateDatasourceRequest: UpdateDatasourceRequest, options?: GatewaysUpdateDatasourceOptionalParams): Promise<GatewaysUpdateDatasourceResponse>;
    /**
     * Get a datasource status by id
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceStatusById(gatewayId: string, datasourceId: string, options?: GatewaysGetDatasourceStatusByIdOptionalParams): Promise<GatewaysGetDatasourceStatusByIdResponse>;
    /**
     * Get a datasource users list
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param options The options parameters.
     */
    getDatasourceUsers(gatewayId: string, datasourceId: string, options?: GatewaysGetDatasourceUsersOptionalParams): Promise<GatewaysGetDatasourceUsersResponse>;
    /**
     * Get a datasource user
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param addUserToDatasourceRequest The add user to datasource request
     * @param options The options parameters.
     */
    addDatasourceUser(gatewayId: string, datasourceId: string, addUserToDatasourceRequest: UserAccessRight, options?: GatewaysAddDatasourceUserOptionalParams): Promise<GatewaysAddDatasourceUserResponse>;
    /**
     * Delete a datasource user
     * @param gatewayId The gateway id
     * @param datasourceId The datasource id
     * @param emailAdress The user's email address
     * @param options The options parameters.
     */
    deleteDatasourceUser(gatewayId: string, datasourceId: string, emailAdress: string, options?: GatewaysDeleteDatasourceUserOptionalParams): Promise<GatewaysDeleteDatasourceUserResponse>;
}

/** Optional parameters. */
export declare interface GatewaysAddDatasourceUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the addDatasourceUser operation. */
export declare type GatewaysAddDatasourceUserResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GatewaysCreateDatasourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createDatasource operation. */
export declare type GatewaysCreateDatasourceResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GatewaysDeleteDatasourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteDatasource operation. */
export declare type GatewaysDeleteDatasourceResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GatewaysDeleteDatasourceUserOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteDatasourceUser operation. */
export declare type GatewaysDeleteDatasourceUserResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GatewaysGetDatasourceByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasourceById operation. */
export declare type GatewaysGetDatasourceByIdResponse = GatewayDatasource;

/** Optional parameters. */
export declare interface GatewaysGetDatasourcesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasources operation. */
export declare type GatewaysGetDatasourcesResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export declare interface GatewaysGetDatasourceStatusByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasourceStatusById operation. */
export declare type GatewaysGetDatasourceStatusByIdResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface GatewaysGetDatasourceUsersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getDatasourceUsers operation. */
export declare type GatewaysGetDatasourceUsersResponse = ODataResponseListUserAccessRight;

/** Optional parameters. */
export declare interface GatewaysGetGatewayByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGatewayById operation. */
export declare type GatewaysGetGatewayByIdResponse = Gateway;

/** Optional parameters. */
export declare interface GatewaysGetGatewaysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGateways operation. */
export declare type GatewaysGetGatewaysResponse = ODataResponseListGateway;

/** Optional parameters. */
export declare interface GatewaysUpdateDatasourceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateDatasource operation. */
export declare type GatewaysUpdateDatasourceResponse = Record<string, unknown>;

/** Power BI Generate Token Request */
export declare interface GenerateTokenForAnyRequest {
    /** Datasets */
    datasets?: Record<string, unknown>[];
    /** Target workspaces */
    targetWorkspaces?: Record<string, unknown>[];
    /** Reports */
    reports?: Record<string, unknown>[];
}

/** Optional parameters. */
export declare interface GenerateTokenOptionalParams extends coreClient.OperationOptions {
}

/** Power BI Generate Token Request */
export declare interface GenerateTokenRequest {
    /** The dataset mode or type */
    accessLevel?: GenerateTokenRequestAccessLevel;
    /** The new dataset of the rebinded report */
    datasetId?: string;
}

/**
 * Defines values for GenerateTokenRequestAccessLevel. \
 * {@link KnownGenerateTokenRequestAccessLevel} can be used interchangeably with GenerateTokenRequestAccessLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **View** \
 * **Edit**
 */
export declare type GenerateTokenRequestAccessLevel = string;

/** Contains response data for the generateToken operation. */
export declare type GenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export declare interface GetGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGroups operation. */
export declare type GetGroupsResponse = ODataResponseListGroup;

/** A Power BI Group */
export declare interface Group {
    /** The group id */
    id?: string;
    /** The group name */
    name?: string;
    /** Is ReadOnly group */
    isReadOnly?: boolean;
}

/** The import object */
export declare interface Import {
    /** The import id */
    id?: string;
    /** The import name name */
    name?: string;
    /** The import upload state */
    importState?: string;
    /** The reports associated with this import */
    reports?: Report[];
    /** The datasets associated with this import */
    datasets?: Dataset[];
}

/** The import info */
export declare interface ImportInfo {
    /** The file path to import */
    filePath?: string;
    /** The import connection type */
    connectionType?: string;
}

/** Interface representing a Imports. */
export declare interface Imports {
    /**
     * Returns a list of imports
     * @param options The options parameters.
     */
    getImports(options?: ImportsGetImportsOptionalParams): Promise<ImportsGetImportsResponse>;
    /**
     * Creates a new import using the specified import info
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImport(datasetDisplayName: string, importInfo: ImportInfo, options?: ImportsPostImportOptionalParams): Promise<ImportsPostImportResponse>;
    /**
     * Gets the import metadata for the specifed import id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportById(importId: string, options?: ImportsGetImportByIdOptionalParams): Promise<ImportsGetImportByIdResponse>;
    /**
     * Returns a list of imports for the specified group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getImportsInGroup(groupId: string, options?: ImportsGetImportsInGroupOptionalParams): Promise<ImportsGetImportsInGroupResponse>;
    /**
     * Creates a new import using the specified import info
     * @param groupId The group id
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImportInGroup(groupId: string, datasetDisplayName: string, importInfo: ImportInfo, options?: ImportsPostImportInGroupOptionalParams): Promise<ImportsPostImportInGroupResponse>;
    /**
     * Gets the import metadata for the specifed import id
     * @param groupId The group id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportByIdInGroup(groupId: string, importId: string, options?: ImportsGetImportByIdInGroupOptionalParams): Promise<ImportsGetImportByIdInGroupResponse>;
}

/** Optional parameters. */
export declare interface ImportsGetImportByIdInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getImportByIdInGroup operation. */
export declare type ImportsGetImportByIdInGroupResponse = Import;

/** Optional parameters. */
export declare interface ImportsGetImportByIdOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getImportById operation. */
export declare type ImportsGetImportByIdResponse = Import;

/** Optional parameters. */
export declare interface ImportsGetImportsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getImportsInGroup operation. */
export declare type ImportsGetImportsInGroupResponse = ODataResponseListImport;

/** Optional parameters. */
export declare interface ImportsGetImportsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getImports operation. */
export declare type ImportsGetImportsResponse = ODataResponseListImport;

/** Optional parameters. */
export declare interface ImportsPostImportInGroupOptionalParams extends coreClient.OperationOptions {
    /** Determines what to do if a dataset with the same name already exists */
    nameConflict?: string;
}

/** Contains response data for the postImportInGroup operation. */
export declare type ImportsPostImportInGroupResponse = Import;

/** Optional parameters. */
export declare interface ImportsPostImportOptionalParams extends coreClient.OperationOptions {
    /** Determines what to do if a dataset with the same name already exists */
    nameConflict?: string;
}

/** Contains response data for the postImport operation. */
export declare type ImportsPostImportResponse = Import;

/** Known values of {@link DatasetDefaultMode} that the service accepts. */
export declare enum KnownDatasetDefaultMode {
    /** AsAzure */
    AsAzure = "AsAzure",
    /** AsOnPrem */
    AsOnPrem = "AsOnPrem",
    /** Push */
    Push = "Push",
    /** Streaming */
    Streaming = "Streaming",
    /** PushStreaming */
    PushStreaming = "PushStreaming"
}

/** Known values of {@link GenerateTokenRequestAccessLevel} that the service accepts. */
export declare enum KnownGenerateTokenRequestAccessLevel {
    /** View */
    View = "View",
    /** Edit */
    Edit = "Edit"
}

/** Odata response wrapper for a Power BI Dashboard collection */
export declare interface ODataResponseListDashboard {
    /** OData context */
    odataContext?: string;
    /** The dashboard collection */
    value?: Dashboard[];
}

/** A dataset odata list wrapper */
export declare interface ODataResponseListDataset {
    /** OData context */
    odataContext?: string;
    /** The datasets */
    value?: Dataset[];
}

/** Odata response wrapper for a Power BI datasource collection */
export declare interface ODataResponseListDatasource {
    /** OData context */
    odataContext?: string;
    /** The datasource collection */
    value?: Datasource[];
}

/** Odata response wrapper for a Power BI Gateways list */
export declare interface ODataResponseListGateway {
    odataContext?: string;
    /** The Gateways */
    value?: Gateway[];
}

/** Odata response wrapper for a Power BI Gateway datasource collection */
export declare interface ODataResponseListGatewayDatasource {
    /** OData context */
    odataContext?: string;
    /** The gateway datasources */
    value?: GatewayDatasource[];
}

/** Odata response wrapper for a Power BI Group list */
export declare interface ODataResponseListGroup {
    /** OData context */
    odataContext?: string;
    /** The groups */
    value?: Group[];
}

/** Odata response wrapper for a Power BI Import collection */
export declare interface ODataResponseListImport {
    /** OData context */
    odataContext?: string;
    /** The imports collection */
    value?: Import[];
}

/** Odata response wrapper for a Power BI Refresh history */
export declare interface ODataResponseListRefresh {
    odataContext?: string;
    /** The Refresh history list */
    value?: Refresh[];
}

/** Odata response wrapper for a Power BI Report collection */
export declare interface ODataResponseListReport {
    /** OData context */
    odataContext?: string;
    /** The report collection */
    value?: Report[];
}

/** Odata response wrapper for a Power BI Table collection */
export declare interface ODataResponseListTable {
    /** OData context */
    odataContext?: string;
    /** The Power BI tables */
    value?: Table[];
}

/** Odata response wrapper for a Power BI Tile collection */
export declare interface ODataResponseListTile {
    /** OData context */
    odataContext?: string;
    /** The tile collection */
    value?: Tile[];
}

/** Odata response wrapper for a Power BI user Access Right List */
export declare interface ODataResponseListUserAccessRight {
    odataContext?: string;
    /** The user Access Right List */
    value?: UserAccessRight[];
}

export declare class PowerBiClient extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the PowerBiClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: PowerBiClientOptionalParams);
    /**
     * Generate an embed token for specified datasets, reports or workspaces
     * @param requestBody Request body for generating an embed token
     * @param options The options parameters.
     */
    generateToken(requestBody: GenerateTokenForAnyRequest, options?: GenerateTokenOptionalParams): Promise<GenerateTokenResponse>;
    /**
     * Returns a list of groups
     * @param options The options parameters.
     */
    getGroups(options?: GetGroupsOptionalParams): Promise<GetGroupsResponse>;
    datasets: Datasets;
    gateways: Gateways;
    imports: Imports;
    reports: Reports;
    dashboards: Dashboards;
    tiles: Tiles;
}

/** Optional parameters. */
export declare interface PowerBiClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** A Publish Datasource To Gateway Request */
export declare interface PublishDatasourceToGatewayRequest {
    /** The datasource type */
    dataSourceType?: string;
    /** The connection details */
    connectionDetails?: string;
    /** The credential details */
    credentialDetails?: CredentialDetails;
    /** The datasource name */
    dataSourceName?: string;
}

/** Power BI Rebind Report Request */
export declare interface RebindReportRequest {
    /** The new dataset of the rebinded report */
    datasetId?: string;
}

/** A Power BI refresh history entry */
export declare interface Refresh {
    refreshType?: string;
    startTime?: Date;
    endTime?: Date;
    serviceExceptionJson?: string;
    status?: string;
}

/** A Power BI Report */
export declare interface Report {
    /** The report id */
    id?: string;
    /** The report name */
    name?: string;
    /** The report web url */
    webUrl?: string;
    /** The report embed url */
    embedUrl?: string;
}

/** Interface representing a Reports. */
export declare interface Reports {
    /**
     * Gets a list of reports
     * @param options The options parameters.
     */
    getReports(options?: ReportsGetReportsOptionalParams): Promise<ReportsGetReportsResponse>;
    /**
     * Clones the specified report
     * @param reportKey The report id
     * @param requestParameters Clone report parameters
     * @param options The options parameters.
     */
    cloneReport(reportKey: string, requestParameters: CloneReportRequest, options?: ReportsCloneReportOptionalParams): Promise<ReportsCloneReportResponse>;
    /**
     * Generate token to view or edit the specified report
     * @param reportKey The report id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(reportKey: string, requestParameters: GenerateTokenRequest, options?: ReportsGenerateTokenOptionalParams): Promise<ReportsGenerateTokenResponse>;
    /**
     * Generate token to create a new report on a given dataset
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenForCreate(requestParameters: GenerateTokenRequest, options?: ReportsGenerateTokenForCreateOptionalParams): Promise<ReportsGenerateTokenForCreateResponse>;
    /**
     * Get the specified report
     * @param reportKey The report id
     * @param options The options parameters.
     */
    getReport(reportKey: string, options?: ReportsGetReportOptionalParams): Promise<ReportsGetReportResponse>;
    /**
     * Deletes the specified report
     * @param reportKey The report id
     * @param options The options parameters.
     */
    deleteReport(reportKey: string, options?: ReportsDeleteReportOptionalParams): Promise<ReportsDeleteReportResponse>;
    /**
     * Rebinds the specified report to requested dataset id
     * @param reportKey The report id
     * @param requestParameters Rebind report parameters
     * @param options The options parameters.
     */
    rebindReport(reportKey: string, requestParameters: RebindReportRequest, options?: ReportsRebindReportOptionalParams): Promise<ReportsRebindReportResponse>;
    /**
     * Gets a list of reports available within the specified group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getReportsInGroup(groupId: string, options?: ReportsGetReportsInGroupOptionalParams): Promise<ReportsGetReportsInGroupResponse>;
    /**
     * Get the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param options The options parameters.
     */
    getReportInGroup(groupId: string, reportKey: string, options?: ReportsGetReportInGroupOptionalParams): Promise<ReportsGetReportInGroupResponse>;
    /**
     * Deletes the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param options The options parameters.
     */
    deleteReportInGroup(groupId: string, reportKey: string, options?: ReportsDeleteReportInGroupOptionalParams): Promise<ReportsDeleteReportInGroupResponse>;
    /**
     * Clones the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Clone report parameters
     * @param options The options parameters.
     */
    cloneReportInGroup(groupId: string, reportKey: string, requestParameters: CloneReportRequest, options?: ReportsCloneReportInGroupOptionalParams): Promise<ReportsCloneReportInGroupResponse>;
    /**
     * Generate token to view or edit the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId: string, reportKey: string, requestParameters: GenerateTokenRequest, options?: ReportsGenerateTokenInGroupOptionalParams): Promise<ReportsGenerateTokenInGroupResponse>;
    /**
     * Generate token to create a new report on a given dataset
     * @param groupId The group id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenForCreateInGroup(groupId: string, requestParameters: GenerateTokenRequest, options?: ReportsGenerateTokenForCreateInGroupOptionalParams): Promise<ReportsGenerateTokenForCreateInGroupResponse>;
    /**
     * Rebinds the specified report to requested dataset id
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Rebind report parameters
     * @param options The options parameters.
     */
    rebindReportInGroup(groupId: string, reportKey: string, requestParameters: RebindReportRequest, options?: ReportsRebindReportInGroupOptionalParams): Promise<ReportsRebindReportInGroupResponse>;
}

/** Optional parameters. */
export declare interface ReportsCloneReportInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the cloneReportInGroup operation. */
export declare type ReportsCloneReportInGroupResponse = Report;

/** Optional parameters. */
export declare interface ReportsCloneReportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the cloneReport operation. */
export declare type ReportsCloneReportResponse = Report;

/** Optional parameters. */
export declare interface ReportsDeleteReportInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteReportInGroup operation. */
export declare type ReportsDeleteReportInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface ReportsDeleteReportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the deleteReport operation. */
export declare type ReportsDeleteReportResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface ReportsGenerateTokenForCreateInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateTokenForCreateInGroup operation. */
export declare type ReportsGenerateTokenForCreateInGroupResponse = EmbedToken;

/** Optional parameters. */
export declare interface ReportsGenerateTokenForCreateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateTokenForCreate operation. */
export declare type ReportsGenerateTokenForCreateResponse = EmbedToken;

/** Optional parameters. */
export declare interface ReportsGenerateTokenInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateTokenInGroup operation. */
export declare type ReportsGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export declare interface ReportsGenerateTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateToken operation. */
export declare type ReportsGenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export declare interface ReportsGetReportInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReportInGroup operation. */
export declare type ReportsGetReportInGroupResponse = Report;

/** Optional parameters. */
export declare interface ReportsGetReportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReport operation. */
export declare type ReportsGetReportResponse = Report;

/** Optional parameters. */
export declare interface ReportsGetReportsInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReportsInGroup operation. */
export declare type ReportsGetReportsInGroupResponse = ODataResponseListReport;

/** Optional parameters. */
export declare interface ReportsGetReportsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReports operation. */
export declare type ReportsGetReportsResponse = ODataResponseListReport;

/** Optional parameters. */
export declare interface ReportsRebindReportInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the rebindReportInGroup operation. */
export declare type ReportsRebindReportInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export declare interface ReportsRebindReportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the rebindReport operation. */
export declare type ReportsRebindReportResponse = Record<string, unknown>;

/** A Power BI data row */
export declare interface Row {
    /** The unique row id */
    id?: string;
}

export declare interface SetAllDatasetConnectionsRequest {
    /** A dataset connection string */
    connectionString: string;
}

/** A dataset table */
export declare interface Table {
    /** The table name */
    name: string;
    /** The column schema for this table */
    columns: Column[];
    /** The data rows within this tabe */
    rows?: Row[];
}

/** A Power BI Tile */
export declare interface Tile {
    /** The tile id */
    id?: string;
    /** The dashboard display name */
    title?: string;
    /** number of rows a tile should span */
    rowSpan?: number;
    /** number of columns a tile should span */
    colSpan?: number;
    /** The tile embed url */
    embedUrl?: string;
    /** The tile embed data */
    embedData?: string;
}

/** Interface representing a Tiles. */
export declare interface Tiles {
    /**
     * Generate token to view the specified tile
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(dashboardKey: string, tileKey: string, requestParameters: GenerateTokenRequest, options?: TilesGenerateTokenOptionalParams): Promise<TilesGenerateTokenResponse>;
    /**
     * Generate token to view the specified tile
     * @param groupId The group id
     * @param dashboardKey The dashboard id
     * @param tileKey The tile id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId: string, dashboardKey: string, tileKey: string, requestParameters: GenerateTokenRequest, options?: TilesGenerateTokenInGroupOptionalParams): Promise<TilesGenerateTokenInGroupResponse>;
}

/** Optional parameters. */
export declare interface TilesGenerateTokenInGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateTokenInGroup operation. */
export declare type TilesGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export declare interface TilesGenerateTokenOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateToken operation. */
export declare type TilesGenerateTokenResponse = EmbedToken;

/** An Update Datasource To Gateway Request */
export declare interface UpdateDatasourceRequest {
    /** The credential details */
    credentialDetails?: CredentialDetails;
}

/** A Power BI user Access Right entry */
export declare interface UserAccessRight {
    accessRight?: string;
    emailAddress?: string;
}

export { }
