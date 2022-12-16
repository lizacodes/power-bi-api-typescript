import { GatewaysGetGatewaysOptionalParams, GatewaysGetGatewaysResponse, GatewaysGetGatewayByIdOptionalParams, GatewaysGetGatewayByIdResponse, GatewaysGetDatasourcesOptionalParams, GatewaysGetDatasourcesResponse, PublishDatasourceToGatewayRequest, GatewaysCreateDatasourceOptionalParams, GatewaysCreateDatasourceResponse, GatewaysGetDatasourceByIdOptionalParams, GatewaysGetDatasourceByIdResponse, GatewaysDeleteDatasourceOptionalParams, GatewaysDeleteDatasourceResponse, UpdateDatasourceRequest, GatewaysUpdateDatasourceOptionalParams, GatewaysUpdateDatasourceResponse, GatewaysGetDatasourceStatusByIdOptionalParams, GatewaysGetDatasourceStatusByIdResponse, GatewaysGetDatasourceUsersOptionalParams, GatewaysGetDatasourceUsersResponse, UserAccessRight, GatewaysAddDatasourceUserOptionalParams, GatewaysAddDatasourceUserResponse, GatewaysDeleteDatasourceUserOptionalParams, GatewaysDeleteDatasourceUserResponse } from "../models";
/** Interface representing a Gateways. */
export interface Gateways {
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
//# sourceMappingURL=gateways.d.ts.map