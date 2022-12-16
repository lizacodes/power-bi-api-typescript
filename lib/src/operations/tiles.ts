import { Tiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  GenerateTokenRequest,
  TilesGenerateTokenOptionalParams,
  TilesGenerateTokenResponse,
  TilesGenerateTokenInGroupOptionalParams,
  TilesGenerateTokenInGroupResponse
} from "../models";

/** Class containing Tiles operations. */
export class TilesImpl implements Tiles {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Tiles class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Generate token to view the specified tile
   * @param dashboardKey The dashboard id
   * @param tileKey The tile id
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateToken(
    dashboardKey: string,
    tileKey: string,
    requestParameters: GenerateTokenRequest,
    options?: TilesGenerateTokenOptionalParams
  ): Promise<TilesGenerateTokenResponse> {
    return this.client.sendOperationRequest(
      { dashboardKey, tileKey, requestParameters, options },
      generateTokenOperationSpec
    );
  }

  /**
   * Generate token to view the specified tile
   * @param groupId The group id
   * @param dashboardKey The dashboard id
   * @param tileKey The tile id
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateTokenInGroup(
    groupId: string,
    dashboardKey: string,
    tileKey: string,
    requestParameters: GenerateTokenRequest,
    options?: TilesGenerateTokenInGroupOptionalParams
  ): Promise<TilesGenerateTokenInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, dashboardKey, tileKey, requestParameters, options },
      generateTokenInGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const generateTokenOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/dashboards/{dashboardKey}/tiles/{tileKey}/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [
    Parameters.$host,
    Parameters.dashboardKey,
    Parameters.tileKey
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenInGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/groups/{groupId}/dashboards/{dashboardKey}/tiles/{tileKey}/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.dashboardKey,
    Parameters.tileKey
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
