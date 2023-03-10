import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { Profiles, Datasets, Gateways, Imports, Reports, Dashboards, Tiles, Groups } from "./operationsInterfaces";
import { PowerBiClientOptionalParams, GenerateTokenForAnyRequest, GenerateTokenOptionalParams, GenerateTokenResponse, GetGroupsOptionalParams, GetGroupsResponse } from "./models";
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
    profiles: Profiles;
    datasets: Datasets;
    gateways: Gateways;
    imports: Imports;
    reports: Reports;
    dashboards: Dashboards;
    tiles: Tiles;
    groups: Groups;
}
//# sourceMappingURL=powerBiClient.d.ts.map