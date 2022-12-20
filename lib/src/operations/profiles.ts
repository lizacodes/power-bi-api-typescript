import { Profiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  CreateOrUpdateProfileRequest,
  ProfilesPostProfilesOptionalParams,
  ProfilesPostProfilesResponse
} from "../models";

/** Class containing Profiles operations. */
export class ProfilesImpl implements Profiles {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Profiles class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Creates a new profile that belongs to the service principal
   * @param requestBody The request body
   * @param options The options parameters.
   */
  postProfiles(
    requestBody: CreateOrUpdateProfileRequest,
    options?: ProfilesPostProfilesOptionalParams
  ): Promise<ProfilesPostProfilesResponse> {
    return this.client.sendOperationRequest(
      { requestBody, options },
      postProfilesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postProfilesOperationSpec: coreClient.OperationSpec = {
  path: "/profiles",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalProfile
    }
  },
  requestBody: Parameters.requestBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
