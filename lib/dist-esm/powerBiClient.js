import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { DatasetsImpl, GatewaysImpl, ImportsImpl, ReportsImpl, DashboardsImpl, TilesImpl } from "./operations";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
export class PowerBiClient extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the PowerBiClient class.
     * @param options The parameter options
     */
    constructor(options) {
        var _a, _b, _c;
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8"
        };
        const packageDetails = `azsdk-js-power-bi-typescript-client/1.0.0-beta.1`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, endpoint: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://api.powerbi.com" });
        super(optionsWithDefaults);
        let bearerTokenAuthenticationPolicyFound = false;
        if ((options === null || options === void 0 ? void 0 : options.pipeline) && options.pipeline.getOrderedPolicies().length > 0) {
            const pipelinePolicies = options.pipeline.getOrderedPolicies();
            bearerTokenAuthenticationPolicyFound = pipelinePolicies.some((pipelinePolicy) => pipelinePolicy.name ===
                coreRestPipeline.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline.bearerTokenAuthenticationPolicyName
            });
            this.pipeline.addPolicy(coreRestPipeline.bearerTokenAuthenticationPolicy({
                credential: credentials,
                scopes: (_c = optionsWithDefaults.credentialScopes) !== null && _c !== void 0 ? _c : `${optionsWithDefaults.endpoint}/.default`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge
                }
            }));
        }
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://api.powerbi.com";
        this.datasets = new DatasetsImpl(this);
        this.gateways = new GatewaysImpl(this);
        this.imports = new ImportsImpl(this);
        this.reports = new ReportsImpl(this);
        this.dashboards = new DashboardsImpl(this);
        this.tiles = new TilesImpl(this);
    }
    /**
     * Generate an embed token for specified datasets, reports or workspaces
     * @param requestBody Request body for generating an embed token
     * @param options The options parameters.
     */
    generateToken(requestBody, options) {
        return this.sendOperationRequest({ requestBody, options }, generateTokenOperationSpec);
    }
    /**
     * Returns a list of groups
     * @param options The options parameters.
     */
    getGroups(options) {
        return this.sendOperationRequest({ options }, getGroupsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const generateTokenOperationSpec = {
    path: "/v1.0/myorg/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestBody,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getGroupsOperationSpec = {
    path: "/v1.0/myorg/groups",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListGroup
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=powerBiClient.js.map