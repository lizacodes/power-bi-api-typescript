import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  DatasetsImpl,
  GatewaysImpl,
  ImportsImpl,
  ReportsImpl,
  DashboardsImpl,
  TilesImpl
} from "./operations";
import {
  Datasets,
  Gateways,
  Imports,
  Reports,
  Dashboards,
  Tiles
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  PowerBiClientOptionalParams,
  GetGroupsOptionalParams,
  GetGroupsResponse
} from "./models";

export class PowerBiClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the PowerBiClient class.
   * @param options The parameter options
   */
  constructor(options?: PowerBiClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PowerBiClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
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
      endpoint: options.endpoint ?? options.baseUri ?? "https://api.powerbi.com"
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
    this.$host = options.$host || "https://api.powerbi.com";
    this.datasets = new DatasetsImpl(this);
    this.gateways = new GatewaysImpl(this);
    this.imports = new ImportsImpl(this);
    this.reports = new ReportsImpl(this);
    this.dashboards = new DashboardsImpl(this);
    this.tiles = new TilesImpl(this);
  }

  /**
   * Returns a list of groups
   * @param options The options parameters.
   */
  getGroups(options?: GetGroupsOptionalParams): Promise<GetGroupsResponse> {
    return this.sendOperationRequest({ options }, getGroupsOperationSpec);
  }

  datasets: Datasets;
  gateways: Gateways;
  imports: Imports;
  reports: Reports;
  dashboards: Dashboards;
  tiles: Tiles;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getGroupsOperationSpec: coreClient.OperationSpec = {
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