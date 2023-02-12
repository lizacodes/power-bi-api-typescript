"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsImpl = void 0;
const tslib_1 = require("tslib");
const coreClient = tslib_1.__importStar(require("@azure/core-client"));
const Mappers = tslib_1.__importStar(require("../models/mappers"));
const Parameters = tslib_1.__importStar(require("../models/parameters"));
/** Class containing Groups operations. */
class GroupsImpl {
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
exports.GroupsImpl = GroupsImpl;
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