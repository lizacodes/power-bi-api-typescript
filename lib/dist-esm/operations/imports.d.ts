import { Imports } from "../operationsInterfaces";
import { PowerBiClient } from "../powerBiClient";
import { ImportsGetImportsOptionalParams, ImportsGetImportsResponse, ImportInfo, ImportsPostImportOptionalParams, ImportsPostImportResponse, ImportsGetImportByIdOptionalParams, ImportsGetImportByIdResponse, ImportsGetImportsInGroupOptionalParams, ImportsGetImportsInGroupResponse, ImportsPostImportInGroupOptionalParams, ImportsPostImportInGroupResponse, ImportsGetImportByIdInGroupOptionalParams, ImportsGetImportByIdInGroupResponse } from "../models";
/** Class containing Imports operations. */
export declare class ImportsImpl implements Imports {
    private readonly client;
    /**
     * Initialize a new instance of the class Imports class.
     * @param client Reference to the service client
     */
    constructor(client: PowerBiClient);
    /**
     * Returns a list of imports
     * @param options The options parameters.
     */
    getImports(options?: ImportsGetImportsOptionalParams): Promise<ImportsGetImportsResponse>;
    /**
     * Creates a new import using the specified import info
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImport(datasetDisplayName: string, importInfo: ImportInfo, options?: ImportsPostImportOptionalParams): Promise<ImportsPostImportResponse>;
    /**
     * Gets the import metadata for the specifed import id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportById(importId: string, options?: ImportsGetImportByIdOptionalParams): Promise<ImportsGetImportByIdResponse>;
    /**
     * Returns a list of imports for the specified group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getImportsInGroup(groupId: string, options?: ImportsGetImportsInGroupOptionalParams): Promise<ImportsGetImportsInGroupResponse>;
    /**
     * Creates a new import using the specified import info
     * @param groupId The group id
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImportInGroup(groupId: string, datasetDisplayName: string, importInfo: ImportInfo, options?: ImportsPostImportInGroupOptionalParams): Promise<ImportsPostImportInGroupResponse>;
    /**
     * Gets the import metadata for the specifed import id
     * @param groupId The group id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportByIdInGroup(groupId: string, importId: string, options?: ImportsGetImportByIdInGroupOptionalParams): Promise<ImportsGetImportByIdInGroupResponse>;
}
//# sourceMappingURL=imports.d.ts.map