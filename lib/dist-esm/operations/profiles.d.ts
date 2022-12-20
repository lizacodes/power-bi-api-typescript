import { Profiles } from "../operationsInterfaces";
import { PowerBiClient } from "../powerBiClient";
import { CreateOrUpdateProfileRequest, ProfilesCreateProfileOptionalParams, ProfilesCreateProfileResponse } from "../models";
/** Class containing Profiles operations. */
export declare class ProfilesImpl implements Profiles {
    private readonly client;
    /**
     * Initialize a new instance of the class Profiles class.
     * @param client Reference to the service client
     */
    constructor(client: PowerBiClient);
    /**
     * Creates a new profile that belongs to the service principal
     * @param requestBody The request body
     * @param options The options parameters.
     */
    createProfile(requestBody: CreateOrUpdateProfileRequest, options?: ProfilesCreateProfileOptionalParams): Promise<ProfilesCreateProfileResponse>;
}
//# sourceMappingURL=profiles.d.ts.map