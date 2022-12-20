import { Groups } from "../operationsInterfaces";
import { PowerBiClient } from "../powerBiClient";
import { AddGroupUserRequest, GroupsAddUserOptionalParams, GroupsAddUserResponse } from "../models";
/** Class containing Groups operations. */
export declare class GroupsImpl implements Groups {
    private readonly client;
    /**
     * Initialize a new instance of the class Groups class.
     * @param client Reference to the service client
     */
    constructor(client: PowerBiClient);
    /**
     * Grants the specified user the specified permissions to the specified workspace.
     * @param groupId The group id
     * @param requestBody Request body for adding user to a group
     * @param options The options parameters.
     */
    addUser(groupId: string, requestBody: AddGroupUserRequest, options?: GroupsAddUserOptionalParams): Promise<GroupsAddUserResponse>;
}
//# sourceMappingURL=groups.d.ts.map