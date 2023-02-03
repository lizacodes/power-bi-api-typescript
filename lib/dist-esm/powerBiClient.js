"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerBiClient = void 0;
const tslib_1 = require("tslib");
const coreClient = tslib_1.__importStar(require("@azure/core-client"));
const coreRestPipeline = tslib_1.__importStar(require("@azure/core-rest-pipeline"));
const operations_1 = require("./operations");
const Parameters = tslib_1.__importStar(require("./models/parameters"));
const Mappers = tslib_1.__importStar(require("./models/mappers"));
class PowerBiClient extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the PowerBiClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        var _a, _b, _c;
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-power-bi-typescript-client/1.0.0-beta.1`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const optionsWithDefaults = {
            ...defaults,
            ...options,
            userAgentOptions: {
                userAgentPrefix
            },
            endpoint: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://api.powerbi.com/v1.0/myorg"
        };
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
        this.$host = options.$host || "https://api.powerbi.com/v1.0/myorg";
        this.profiles = new operations_1.ProfilesImpl(this);
        this.datasets = new operations_1.DatasetsImpl(this);
        this.gateways = new operations_1.GatewaysImpl(this);
        this.imports = new operations_1.ImportsImpl(this);
        this.reports = new operations_1.ReportsImpl(this);
        this.dashboards = new operations_1.DashboardsImpl(this);
        this.tiles = new operations_1.TilesImpl(this);
        this.groups = new operations_1.GroupsImpl(this);
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
exports.PowerBiClient = PowerBiClient;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const generateTokenOperationSpec = {
    path: "/GenerateToken",
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
    path: "/groups",
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