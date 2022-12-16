import { DashboardsGetDashboardsOptionalParams, DashboardsGetDashboardsResponse, DashboardsGetDashboardsInGroupOptionalParams, DashboardsGetDashboardsInGroupResponse, DashboardsGetDashboardOptionalParams, DashboardsGetDashboardResponse, DashboardsGetTilesOptionalParams, DashboardsGetTilesResponse, DashboardsGetTilesInGroupOptionalParams, DashboardsGetTilesInGroupResponse, DashboardsGetTileOptionalParams, DashboardsGetTileResponse, DashboardsGetTileInGroupOptionalParams, DashboardsGetTileInGroupResponse, GenerateTokenRequest, DashboardsGenerateTokenOptionalParams, DashboardsGenerateTokenResponse, DashboardsGenerateTokenInGroupOptionalParams, DashboardsGenerateTokenInGroupResponse } from "../models";
/** Interface representing a Dashboards. */
export interface Dashboards {
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
//# sourceMappingURL=dashboards.d.ts.map