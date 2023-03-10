import {
  AddGroupUserRequest,
  GroupsAddGroupUserOptionalParams,
  GroupsAddGroupUserResponse
} from "../models";

/** Interface representing a Groups. */
export interface Groups {
  /**
   * Grants the specified user the specified permissions to the specified workspace.
   * @param groupId The group id
   * @param requestBody Request body for adding user to a group
   * @param options The options parameters.
   */
  addGroupUser(
    groupId: string,
    requestBody: AddGroupUserRequest,
    options?: GroupsAddGroupUserOptionalParams
  ): Promise<GroupsAddGroupUserResponse>;
}
