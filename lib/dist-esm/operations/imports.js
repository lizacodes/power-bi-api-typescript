"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportsImpl = void 0;
const tslib_1 = require("tslib");
const coreClient = tslib_1.__importStar(require("@azure/core-client"));
const Mappers = tslib_1.__importStar(require("../models/mappers"));
const Parameters = tslib_1.__importStar(require("../models/parameters"));
/** Class containing Imports operations. */
class ImportsImpl {
    /**
     * Initialize a new instance of the class Imports class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns a list of imports
     * @param options The options parameters.
     */
    getImports(options) {
        return this.client.sendOperationRequest({ options }, getImportsOperationSpec);
    }
    /**
     * Creates a new import using the specified import info
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImport(datasetDisplayName, importInfo, options) {
        return this.client.sendOperationRequest({ datasetDisplayName, importInfo, options }, postImportOperationSpec);
    }
    /**
     * Gets the import metadata for the specifed import id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportById(importId, options) {
        return this.client.sendOperationRequest({ importId, options }, getImportByIdOperationSpec);
    }
    /**
     * Returns a list of imports for the specified group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getImportsInGroup(groupId, options) {
        return this.client.sendOperationRequest({ groupId, options }, getImportsInGroupOperationSpec);
    }
    /**
     * Creates a new import using the specified import info
     * @param groupId The group id
     * @param datasetDisplayName The display name of the dataset
     * @param importInfo The import to post
     * @param options The options parameters.
     */
    postImportInGroup(groupId, datasetDisplayName, importInfo, options) {
        return this.client.sendOperationRequest({ groupId, datasetDisplayName, importInfo, options }, postImportInGroupOperationSpec);
    }
    /**
     * Gets the import metadata for the specifed import id
     * @param groupId The group id
     * @param importId The import id
     * @param options The options parameters.
     */
    getImportByIdInGroup(groupId, importId, options) {
        return this.client.sendOperationRequest({ groupId, importId, options }, getImportByIdInGroupOperationSpec);
    }
}
exports.ImportsImpl = ImportsImpl;
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getImportsOperationSpec = {
    path: "/imports",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListImport
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const postImportOperationSpec = {
    path: "/imports",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Import
        }
    },
    requestBody: Parameters.importInfo,
    queryParameters: [Parameters.datasetDisplayName, Parameters.nameConflict],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getImportByIdOperationSpec = {
    path: "/imports/{importId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Import
        }
    },
    urlParameters: [Parameters.$host, Parameters.importId],
    headerParameters: [Parameters.accept],
    serializer
};
const getImportsInGroupOperationSpec = {
    path: "/groups/{groupId}/imports",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ODataResponseListImport
        }
    },
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.accept],
    serializer
};
const postImportInGroupOperationSpec = {
    path: "/groups/{groupId}/imports",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Import
        }
    },
    requestBody: Parameters.importInfo,
    queryParameters: [Parameters.datasetDisplayName, Parameters.nameConflict],
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getImportByIdInGroupOperationSpec = {
    path: "/groups/{groupId}/imports/{importId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Import
        }
    },
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.importId],
    headerParameters: [Parameters.accept],
    serializer
};
//# sourceMappingURL=imports.js.map