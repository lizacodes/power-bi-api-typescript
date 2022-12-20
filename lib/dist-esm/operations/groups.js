import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Groups operations. */
export class GroupsImpl {
    /**
     * Initialize a new instance of the class Groups class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Grants the specified user the specified permissions to the specified workspace.
     * @param groupId The group id
     * @param requestBody Request body for adding user to a group
     * @param options The options parameters.
     */
    addGroupUser(groupId, requestBody, options) {
        return this.client.sendOperationRequest({ groupId, requestBody, options }, addGroupUserOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const addGroupUserOperationSpec = {
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
//# sourceMappingURL=groups.js.map