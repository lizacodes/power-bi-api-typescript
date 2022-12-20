import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ProfilesImpl,
  DatasetsImpl,
  GatewaysImpl,
  ImportsImpl,
  ReportsImpl,
  DashboardsImpl,
  TilesImpl,
  GroupsImpl
} from "./operations";
import {
  Profiles,
  Datasets,
  Gateways,
  Imports,
  Reports,
  Dashboards,
  Tiles,
  Groups
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  PowerBiClientOptionalParams,
  GenerateTokenForAnyRequest,
  GenerateTokenOptionalParams,
  GenerateTokenResponse,
  GetGroupsOptionalParams,
  GetGroupsResponse
} from "./models";

export class PowerBiClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the PowerBiClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: PowerBiClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PowerBiClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-power-bi-typescript-client/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ??
        options.baseUri ??
        "https://api.powerbi.com/v1.0/myorg"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://api.powerbi.com/v1.0/myorg";
    this.profiles = new ProfilesImpl(this);
    this.datasets = new DatasetsImpl(this);
    this.gateways = new GatewaysImpl(this);
    this.imports = new ImportsImpl(this);
    this.reports = new ReportsImpl(this);
    this.dashboards = new DashboardsImpl(this);
    this.tiles = new TilesImpl(this);
    this.groups = new GroupsImpl(this);
  }

  /**
   * Generate an embed token for specified datasets, reports or workspaces
   * @param requestBody Request body for generating an embed token
   * @param options The options parameters.
   */
  generateToken(
    requestBody: GenerateTokenForAnyRequest,
    options?: GenerateTokenOptionalParams
  ): Promise<GenerateTokenResponse> {
    return this.sendOperationRequest(
      { requestBody, options },
      generateTokenOperationSpec
    );
  }

  /**
   * Returns a list of groups
   * @param options The options parameters.
   */
  getGroups(options?: GetGroupsOptionalParams): Promise<GetGroupsResponse> {
    return this.sendOperationRequest({ options }, getGroupsOperationSpec);
  }

  profiles: Profiles;
  datasets: Datasets;
  gateways: Gateways;
  imports: Imports;
  reports: Reports;
  dashboards: Dashboards;
  tiles: Tiles;
  groups: Groups;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const generateTokenOperationSpec: coreClient.OperationSpec = {
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
const getGroupsOperationSpec: coreClient.OperationSpec = {
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
