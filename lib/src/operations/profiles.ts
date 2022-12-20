import { Profiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  CreateOrUpdateProfileRequest,
  ProfilesCreateProfileOptionalParams,
  ProfilesCreateProfileResponse
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
  createProfile(
    requestBody: CreateOrUpdateProfileRequest,
    options?: ProfilesCreateProfileOptionalParams
  ): Promise<ProfilesCreateProfileResponse> {
    return this.client.sendOperationRequest(
      { requestBody, options },
      createProfileOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createProfileOperationSpec: coreClient.OperationSpec = {
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
