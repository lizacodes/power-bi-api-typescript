import { CreateOrUpdateProfileRequest, ProfilesCreateProfileOptionalParams, ProfilesCreateProfileResponse } from "../models";
/** Interface representing a Profiles. */
export interface Profiles {
    /**
     * Creates a new profile that belongs to the service principal
     * @param requestBody The request body
     * @param options The options parameters.
     */
    createProfile(requestBody: CreateOrUpdateProfileRequest, options?: ProfilesCreateProfileOptionalParams): Promise<ProfilesCreateProfileResponse>;
}
//# sourceMappingURL=profiles.d.ts.map