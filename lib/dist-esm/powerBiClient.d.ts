import * as coreClient from "@azure/core-client";
import { Datasets, Gateways, Imports, Reports, Dashboards, Tiles } from "./operationsInterfaces";
import { PowerBiClientOptionalParams, GetGroupsOptionalParams, GetGroupsResponse } from "./models";
export declare class PowerBiClient extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the PowerBiClient class.
     * @param options The parameter options
     */
    constructor(options?: PowerBiClientOptionalParams);
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
//# sourceMappingURL=powerBiClient.d.ts.map