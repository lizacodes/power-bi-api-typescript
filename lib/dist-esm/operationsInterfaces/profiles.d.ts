import { CreateOrUpdateProfileRequest, ProfilesPostProfilesOptionalParams, ProfilesPostProfilesResponse } from "../models";
/** Interface representing a Profiles. */
export interface Profiles {
    /**
     * Creates a new profile that belongs to the service principal
     * @param requestBody The request body
     * @param options The options parameters.
     */
    postProfiles(requestBody: CreateOrUpdateProfileRequest, options?: ProfilesPostProfilesOptionalParams): Promise<ProfilesPostProfilesResponse>;
}
//# sourceMappingURL=profiles.d.ts.map