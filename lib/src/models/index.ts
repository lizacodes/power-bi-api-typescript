import * as coreClient from "@azure/core-client";

/** A dataset odata list wrapper */
export interface ODataResponseListDataset {
  /** OData context */
  odataContext?: string;
  /** The datasets */
  value?: Dataset[];
}

/** A Power BI Dataset */
export interface Dataset {
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

/** A dataset table */
export interface Table {
  /** The table name */
  name: string;
  /** The column schema for this table */
  columns: Column[];
  /** The data rows within this tabe */
  rows?: Row[];
}

/** A Power BI Column */
export interface Column {
  /** The column name */
  name: string;
  /** The column data type */
  dataType: string;
}

/** A Power BI data row */
export interface Row {
  /** The unique row id */
  id?: string;
}

/** A Power BI datasource */
export interface Datasource {
  /** The datasource name */
  name?: string;
  /** The datasource connection string */
  connectionString?: string;
}

/** Odata response wrapper for a Power BI Table collection */
export interface ODataResponseListTable {
  /** OData context */
  odataContext?: string;
  /** The Power BI tables */
  value?: Table[];
}

/** Odata response wrapper for a Power BI Refresh history */
export interface ODataResponseListRefresh {
  odataContext?: string;
  /** The Refresh history list */
  value?: Refresh[];
}

/** A Power BI refresh history entry */
export interface Refresh {
  refreshType?: string;
  startTime?: Date;
  endTime?: Date;
  serviceExceptionJson?: string;
  status?: string;
}

/** Odata response wrapper for a Power BI Gateway datasource collection */
export interface ODataResponseListGatewayDatasource {
  /** OData context */
  odataContext?: string;
  /** The gateway datasources */
  value?: GatewayDatasource[];
}

/** A Power BI gateway datasource */
export interface GatewayDatasource {
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

/** Object representing basic authentication credentials */
export interface BasicCredentials {
  /** Username required to access the datasource */
  username?: string;
  /** Password required to access the datasource */
  password?: string;
}

/** Odata response wrapper for a Power BI datasource collection */
export interface ODataResponseListDatasource {
  /** OData context */
  odataContext?: string;
  /** The datasource collection */
  value?: Datasource[];
}

export interface SetAllDatasetConnectionsRequest {
  /** A dataset connection string */
  connectionString: string;
}

/** The Bind dataset to gateway request */
export interface BindToGatewayRequest {
  /** The gateway id */
  gatewayObjectId?: string;
}

/** Odata response wrapper for a Power BI Gateways list */
export interface ODataResponseListGateway {
  odataContext?: string;
  /** The Gateways */
  value?: Gateway[];
}

/** A Power BI Gateway */
export interface Gateway {
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

/** A Power BI Gateway Public Key */
export interface GatewayPublicKey {
  /** The public key exponent */
  exponent?: string;
  /** The public key  modulus */
  modulus?: string;
}

/** A Publish Datasource To Gateway Request */
export interface PublishDatasourceToGatewayRequest {
  /** The datasource type */
  dataSourceType?: string;
  /** The connection details */
  connectionDetails?: string;
  /** The credential details */
  credentialDetails?: CredentialDetails;
  /** The datasource name */
  dataSourceName?: string;
}

/** The credential details */
export interface CredentialDetails {
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

/** An Update Datasource To Gateway Request */
export interface UpdateDatasourceRequest {
  /** The credential details */
  credentialDetails?: CredentialDetails;
}

/** Odata response wrapper for a Power BI user Access Right List */
export interface ODataResponseListUserAccessRight {
  odataContext?: string;
  /** The user Access Right List */
  value?: UserAccessRight[];
}

/** A Power BI user Access Right entry */
export interface UserAccessRight {
  accessRight?: string;
  emailAddress?: string;
}

/** Odata response wrapper for a Power BI Import collection */
export interface ODataResponseListImport {
  /** OData context */
  odataContext?: string;
  /** The imports collection */
  value?: Import[];
}

/** The import object */
export interface Import {
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

/** A Power BI Report */
export interface Report {
  /** The report id */
  id?: string;
  /** The report name */
  name?: string;
  /** The report web url */
  webUrl?: string;
  /** The report embed url */
  embedUrl?: string;
}

/** The import info */
export interface ImportInfo {
  /** The file path to import */
  filePath?: string;
  /** The import connection type */
  connectionType?: string;
}

/** Odata response wrapper for a Power BI Report collection */
export interface ODataResponseListReport {
  /** OData context */
  odataContext?: string;
  /** The report collection */
  value?: Report[];
}

/** Odata response wrapper for a Power BI Dashboard collection */
export interface ODataResponseListDashboard {
  /** OData context */
  odataContext?: string;
  /** The dashboard collection */
  value?: Dashboard[];
}

/** A Power BI Dashboard */
export interface Dashboard {
  /** The dashboard id */
  id?: string;
  /** The dashboard display name */
  displayName?: string;
  /** Is ReadOnly dashboard */
  isReadOnly?: boolean;
  /** The dashboard embed url */
  embedUrl?: string;
}

/** Odata response wrapper for a Power BI Tile collection */
export interface ODataResponseListTile {
  /** OData context */
  odataContext?: string;
  /** The tile collection */
  value?: Tile[];
}

/** A Power BI Tile */
export interface Tile {
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

/** Power BI Clone Report Request */
export interface CloneReportRequest {
  /** The requested report name */
  name?: string;
  /** Optional parameter for specifying the target group id */
  targetGroupId?: string;
  /** Optional parameter for specifying the target associated model (dataset) id */
  targetModelId?: string;
}

/** Power BI Generate Token Request */
export interface GenerateTokenRequest {
  /** The dataset mode or type */
  accessLevel?: GenerateTokenRequestAccessLevel;
  /** The new dataset of the rebinded report */
  datasetId?: string;
}

/** Power BI Embed Token */
export interface EmbedToken {
  /** Embed token. */
  token?: string;
  /** Unique token Id. */
  tokenId?: string;
  /** Expiration time of token - in UTC. */
  expiration?: Date;
}

/** Power BI Rebind Report Request */
export interface RebindReportRequest {
  /** The new dataset of the rebinded report */
  datasetId?: string;
}

/** Odata response wrapper for a Power BI Group list */
export interface ODataResponseListGroup {
  /** OData context */
  odataContext?: string;
  /** The groups */
  value?: Group[];
}

/** A Power BI Group */
export interface Group {
  /** The group id */
  id?: string;
  /** The group name */
  name?: string;
  /** Is ReadOnly group */
  isReadOnly?: boolean;
}

/** Known values of {@link DatasetDefaultMode} that the service accepts. */
export enum KnownDatasetDefaultMode {
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
export type DatasetDefaultMode = string;

/** Known values of {@link GenerateTokenRequestAccessLevel} that the service accepts. */
export enum KnownGenerateTokenRequestAccessLevel {
  /** View */
  View = "View",
  /** Edit */
  Edit = "Edit"
}

/**
 * Defines values for GenerateTokenRequestAccessLevel. \
 * {@link KnownGenerateTokenRequestAccessLevel} can be used interchangeably with GenerateTokenRequestAccessLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **View** \
 * **Edit**
 */
export type GenerateTokenRequestAccessLevel = string;

/** Optional parameters. */
export interface DatasetsGetDatasetsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasets operation. */
export type DatasetsGetDatasetsResponse = ODataResponseListDataset;

/** Optional parameters. */
export interface DatasetsPostDatasetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the postDataset operation. */
export type DatasetsPostDatasetResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsPostRowsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the postRows operation. */
export type DatasetsPostRowsResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsDeleteRowsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteRows operation. */
export type DatasetsDeleteRowsResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetTablesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTables operation. */
export type DatasetsGetTablesResponse = ODataResponseListTable;

/** Optional parameters. */
export interface DatasetsPutTableOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the putTable operation. */
export type DatasetsPutTableResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetDatasetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasetById operation. */
export type DatasetsGetDatasetByIdResponse = Dataset;

/** Optional parameters. */
export interface DatasetsDeleteDatasetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteDatasetById operation. */
export type DatasetsDeleteDatasetByIdResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetRefreshHistoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRefreshHistory operation. */
export type DatasetsGetRefreshHistoryResponse = ODataResponseListRefresh;

/** Optional parameters. */
export interface DatasetsRefreshDatasetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the refreshDataset operation. */
export type DatasetsRefreshDatasetResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetGatewayDatasourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGatewayDatasources operation. */
export type DatasetsGetGatewayDatasourcesResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export interface DatasetsGetDatasourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasources operation. */
export type DatasetsGetDatasourcesResponse = ODataResponseListDatasource;

/** Optional parameters. */
export interface DatasetsSetAllConnectionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the setAllConnections operation. */
export type DatasetsSetAllConnectionsResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsBindToGatewayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the bindToGateway operation. */
export type DatasetsBindToGatewayResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetDatasetsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasetsInGroup operation. */
export type DatasetsGetDatasetsInGroupResponse = ODataResponseListDataset;

/** Optional parameters. */
export interface DatasetsPostDatasetInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the postDatasetInGroup operation. */
export type DatasetsPostDatasetInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsPostRowsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the postRowsInGroup operation. */
export type DatasetsPostRowsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsDeleteRowsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteRowsInGroup operation. */
export type DatasetsDeleteRowsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetTablesInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTablesInGroup operation. */
export type DatasetsGetTablesInGroupResponse = ODataResponseListTable;

/** Optional parameters. */
export interface DatasetsPutTableInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the putTableInGroup operation. */
export type DatasetsPutTableInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetDatasetByIdInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasetByIdInGroup operation. */
export type DatasetsGetDatasetByIdInGroupResponse = Dataset;

/** Optional parameters. */
export interface DatasetsDeleteDatasetByIdInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteDatasetByIdInGroup operation. */
export type DatasetsDeleteDatasetByIdInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetRefreshHistoryInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getRefreshHistoryInGroup operation. */
export type DatasetsGetRefreshHistoryInGroupResponse = ODataResponseListRefresh;

/** Optional parameters. */
export interface DatasetsRefreshDatasetInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the refreshDatasetInGroup operation. */
export type DatasetsRefreshDatasetInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsGetGatewayDatasourcesInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGatewayDatasourcesInGroup operation. */
export type DatasetsGetGatewayDatasourcesInGroupResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export interface DatasetsGetDatasourcesInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasourcesInGroup operation. */
export type DatasetsGetDatasourcesInGroupResponse = ODataResponseListDatasource;

/** Optional parameters. */
export interface DatasetsSetAllConnectionsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the setAllConnectionsInGroup operation. */
export type DatasetsSetAllConnectionsInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsBindToGatewayInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the bindToGatewayInGroup operation. */
export type DatasetsBindToGatewayInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DatasetsTakeOverInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the takeOverInGroup operation. */
export type DatasetsTakeOverInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysGetGatewaysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGateways operation. */
export type GatewaysGetGatewaysResponse = ODataResponseListGateway;

/** Optional parameters. */
export interface GatewaysGetGatewayByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGatewayById operation. */
export type GatewaysGetGatewayByIdResponse = Gateway;

/** Optional parameters. */
export interface GatewaysGetDatasourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasources operation. */
export type GatewaysGetDatasourcesResponse = ODataResponseListGatewayDatasource;

/** Optional parameters. */
export interface GatewaysCreateDatasourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createDatasource operation. */
export type GatewaysCreateDatasourceResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysGetDatasourceByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasourceById operation. */
export type GatewaysGetDatasourceByIdResponse = GatewayDatasource;

/** Optional parameters. */
export interface GatewaysDeleteDatasourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteDatasource operation. */
export type GatewaysDeleteDatasourceResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysUpdateDatasourceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateDatasource operation. */
export type GatewaysUpdateDatasourceResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysGetDatasourceStatusByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasourceStatusById operation. */
export type GatewaysGetDatasourceStatusByIdResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysGetDatasourceUsersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDatasourceUsers operation. */
export type GatewaysGetDatasourceUsersResponse = ODataResponseListUserAccessRight;

/** Optional parameters. */
export interface GatewaysAddDatasourceUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addDatasourceUser operation. */
export type GatewaysAddDatasourceUserResponse = Record<string, unknown>;

/** Optional parameters. */
export interface GatewaysDeleteDatasourceUserOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteDatasourceUser operation. */
export type GatewaysDeleteDatasourceUserResponse = Record<string, unknown>;

/** Optional parameters. */
export interface ImportsGetImportsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getImports operation. */
export type ImportsGetImportsResponse = ODataResponseListImport;

/** Optional parameters. */
export interface ImportsPostImportOptionalParams
  extends coreClient.OperationOptions {
  /** Determines what to do if a dataset with the same name already exists */
  nameConflict?: string;
}

/** Contains response data for the postImport operation. */
export type ImportsPostImportResponse = Import;

/** Optional parameters. */
export interface ImportsGetImportByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getImportById operation. */
export type ImportsGetImportByIdResponse = Import;

/** Optional parameters. */
export interface ImportsGetImportsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getImportsInGroup operation. */
export type ImportsGetImportsInGroupResponse = ODataResponseListImport;

/** Optional parameters. */
export interface ImportsPostImportInGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Determines what to do if a dataset with the same name already exists */
  nameConflict?: string;
}

/** Contains response data for the postImportInGroup operation. */
export type ImportsPostImportInGroupResponse = Import;

/** Optional parameters. */
export interface ImportsGetImportByIdInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getImportByIdInGroup operation. */
export type ImportsGetImportByIdInGroupResponse = Import;

/** Optional parameters. */
export interface ReportsGetReportsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReports operation. */
export type ReportsGetReportsResponse = ODataResponseListReport;

/** Optional parameters. */
export interface ReportsCloneReportOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the cloneReport operation. */
export type ReportsCloneReportResponse = Report;

/** Optional parameters. */
export interface ReportsGenerateTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateToken operation. */
export type ReportsGenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export interface ReportsGenerateTokenForCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateTokenForCreate operation. */
export type ReportsGenerateTokenForCreateResponse = EmbedToken;

/** Optional parameters. */
export interface ReportsGetReportOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReport operation. */
export type ReportsGetReportResponse = Report;

/** Optional parameters. */
export interface ReportsDeleteReportOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteReport operation. */
export type ReportsDeleteReportResponse = Record<string, unknown>;

/** Optional parameters. */
export interface ReportsRebindReportOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the rebindReport operation. */
export type ReportsRebindReportResponse = Record<string, unknown>;

/** Optional parameters. */
export interface ReportsGetReportsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReportsInGroup operation. */
export type ReportsGetReportsInGroupResponse = ODataResponseListReport;

/** Optional parameters. */
export interface ReportsGetReportInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReportInGroup operation. */
export type ReportsGetReportInGroupResponse = Report;

/** Optional parameters. */
export interface ReportsDeleteReportInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteReportInGroup operation. */
export type ReportsDeleteReportInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface ReportsCloneReportInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the cloneReportInGroup operation. */
export type ReportsCloneReportInGroupResponse = Report;

/** Optional parameters. */
export interface ReportsGenerateTokenInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateTokenInGroup operation. */
export type ReportsGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export interface ReportsGenerateTokenForCreateInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateTokenForCreateInGroup operation. */
export type ReportsGenerateTokenForCreateInGroupResponse = EmbedToken;

/** Optional parameters. */
export interface ReportsRebindReportInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the rebindReportInGroup operation. */
export type ReportsRebindReportInGroupResponse = Record<string, unknown>;

/** Optional parameters. */
export interface DashboardsGetDashboardsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDashboards operation. */
export type DashboardsGetDashboardsResponse = ODataResponseListDashboard;

/** Optional parameters. */
export interface DashboardsGetDashboardsInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDashboardsInGroup operation. */
export type DashboardsGetDashboardsInGroupResponse = ODataResponseListDashboard;

/** Optional parameters. */
export interface DashboardsGetDashboardOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDashboard operation. */
export type DashboardsGetDashboardResponse = Dashboard;

/** Optional parameters. */
export interface DashboardsGetTilesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTiles operation. */
export type DashboardsGetTilesResponse = ODataResponseListTile;

/** Optional parameters. */
export interface DashboardsGetTilesInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTilesInGroup operation. */
export type DashboardsGetTilesInGroupResponse = ODataResponseListTile;

/** Optional parameters. */
export interface DashboardsGetTileOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTile operation. */
export type DashboardsGetTileResponse = Tile;

/** Optional parameters. */
export interface DashboardsGetTileInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTileInGroup operation. */
export type DashboardsGetTileInGroupResponse = Tile;

/** Optional parameters. */
export interface DashboardsGenerateTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateToken operation. */
export type DashboardsGenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export interface DashboardsGenerateTokenInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateTokenInGroup operation. */
export type DashboardsGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export interface TilesGenerateTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateToken operation. */
export type TilesGenerateTokenResponse = EmbedToken;

/** Optional parameters. */
export interface TilesGenerateTokenInGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the generateTokenInGroup operation. */
export type TilesGenerateTokenInGroupResponse = EmbedToken;

/** Optional parameters. */
export interface GetGroupsOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getGroups operation. */
export type GetGroupsResponse = ODataResponseListGroup;

/** Optional parameters. */
export interface PowerBiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
