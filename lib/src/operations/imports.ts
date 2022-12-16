import { Imports } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  ImportsGetImportsOptionalParams,
  ImportsGetImportsResponse,
  ImportInfo,
  ImportsPostImportOptionalParams,
  ImportsPostImportResponse,
  ImportsGetImportByIdOptionalParams,
  ImportsGetImportByIdResponse,
  ImportsGetImportsInGroupOptionalParams,
  ImportsGetImportsInGroupResponse,
  ImportsPostImportInGroupOptionalParams,
  ImportsPostImportInGroupResponse,
  ImportsGetImportByIdInGroupOptionalParams,
  ImportsGetImportByIdInGroupResponse
} from "../models";

/** Class containing Imports operations. */
export class ImportsImpl implements Imports {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Imports class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Returns a list of imports
   * @param options The options parameters.
   */
  getImports(
    options?: ImportsGetImportsOptionalParams
  ): Promise<ImportsGetImportsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getImportsOperationSpec
    );
  }

  /**
   * Creates a new import using the specified import info
   * @param datasetDisplayName The display name of the dataset
   * @param importInfo The import to post
   * @param options The options parameters.
   */
  postImport(
    datasetDisplayName: string,
    importInfo: ImportInfo,
    options?: ImportsPostImportOptionalParams
  ): Promise<ImportsPostImportResponse> {
    return this.client.sendOperationRequest(
      { datasetDisplayName, importInfo, options },
      postImportOperationSpec
    );
  }

  /**
   * Gets the import metadata for the specifed import id
   * @param importId The import id
   * @param options The options parameters.
   */
  getImportById(
    importId: string,
    options?: ImportsGetImportByIdOptionalParams
  ): Promise<ImportsGetImportByIdResponse> {
    return this.client.sendOperationRequest(
      { importId, options },
      getImportByIdOperationSpec
    );
  }

  /**
   * Returns a list of imports for the specified group
   * @param groupId The group id
   * @param options The options parameters.
   */
  getImportsInGroup(
    groupId: string,
    options?: ImportsGetImportsInGroupOptionalParams
  ): Promise<ImportsGetImportsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getImportsInGroupOperationSpec
    );
  }

  /**
   * Creates a new import using the specified import info
   * @param groupId The group id
   * @param datasetDisplayName The display name of the dataset
   * @param importInfo The import to post
   * @param options The options parameters.
   */
  postImportInGroup(
    groupId: string,
    datasetDisplayName: string,
    importInfo: ImportInfo,
    options?: ImportsPostImportInGroupOptionalParams
  ): Promise<ImportsPostImportInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, datasetDisplayName, importInfo, options },
      postImportInGroupOperationSpec
    );
  }

  /**
   * Gets the import metadata for the specifed import id
   * @param groupId The group id
   * @param importId The import id
   * @param options The options parameters.
   */
  getImportByIdInGroup(
    groupId: string,
    importId: string,
    options?: ImportsGetImportByIdInGroupOptionalParams
  ): Promise<ImportsGetImportByIdInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, importId, options },
      getImportByIdInGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getImportsOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/imports",
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
const postImportOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/imports",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Import
    }
  },
  requestBody: Parameters.importInfo,
  queryParameters: [Parameters.datasetDisplayName, Parameters.nameConflict],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getImportByIdOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/imports/{importId}",
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
const getImportsInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/imports",
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
const postImportInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/imports",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Import
    }
  },
  requestBody: Parameters.importInfo,
  queryParameters: [Parameters.datasetDisplayName, Parameters.nameConflict],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getImportByIdInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/imports/{importId}",
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
