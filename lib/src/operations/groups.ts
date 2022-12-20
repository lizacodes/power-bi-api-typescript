import { Groups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  AddGroupUserRequest,
  GroupsAddUserOptionalParams,
  GroupsAddUserResponse
} from "../models";

/** Class containing Groups operations. */
export class GroupsImpl implements Groups {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Groups class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Grants the specified user the specified permissions to the specified workspace.
   * @param groupId The group id
   * @param requestBody Request body for adding user to a group
   * @param options The options parameters.
   */
  addUser(
    groupId: string,
    requestBody: AddGroupUserRequest,
    options?: GroupsAddUserOptionalParams
  ): Promise<GroupsAddUserResponse> {
    return this.client.sendOperationRequest(
      { groupId, requestBody, options },
      addUserOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const addUserOperationSpec: coreClient.OperationSpec = {
  path: "/groups/{groupId}/users",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.requestBody3,
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
