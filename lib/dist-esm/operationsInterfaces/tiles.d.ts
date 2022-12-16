import { GenerateTokenRequest, TilesGenerateTokenOptionalParams, TilesGenerateTokenResponse, TilesGenerateTokenInGroupOptionalParams, TilesGenerateTokenInGroupResponse } from "../models";
/** Interface representing a Tiles. */
export interface Tiles {
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
//# sourceMappingURL=tiles.d.ts.map