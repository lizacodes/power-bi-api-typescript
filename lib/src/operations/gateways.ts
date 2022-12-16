import { Gateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  GatewaysGetGatewaysOptionalParams,
  GatewaysGetGatewaysResponse,
  GatewaysGetGatewayByIdOptionalParams,
  GatewaysGetGatewayByIdResponse,
  GatewaysGetDatasourcesOptionalParams,
  GatewaysGetDatasourcesResponse,
  PublishDatasourceToGatewayRequest,
  GatewaysCreateDatasourceOptionalParams,
  GatewaysCreateDatasourceResponse,
  GatewaysGetDatasourceByIdOptionalParams,
  GatewaysGetDatasourceByIdResponse,
  GatewaysDeleteDatasourceOptionalParams,
  GatewaysDeleteDatasourceResponse,
  UpdateDatasourceRequest,
  GatewaysUpdateDatasourceOptionalParams,
  GatewaysUpdateDatasourceResponse,
  GatewaysGetDatasourceStatusByIdOptionalParams,
  GatewaysGetDatasourceStatusByIdResponse,
  GatewaysGetDatasourceUsersOptionalParams,
  GatewaysGetDatasourceUsersResponse,
  UserAccessRight,
  GatewaysAddDatasourceUserOptionalParams,
  GatewaysAddDatasourceUserResponse,
  GatewaysDeleteDatasourceUserOptionalParams,
  GatewaysDeleteDatasourceUserResponse
} from "../models";

/** Class containing Gateways operations. */
export class GatewaysImpl implements Gateways {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Gateways class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Returns a list of gateways
   * @param options The options parameters.
   */
  getGateways(
    options?: GatewaysGetGatewaysOptionalParams
  ): Promise<GatewaysGetGatewaysResponse> {
    return this.client.sendOperationRequest(
      { options },
      getGatewaysOperationSpec
    );
  }

  /**
   * Returns the specified gateway
   * @param gatewayId The gateway id
   * @param options The options parameters.
   */
  getGatewayById(
    gatewayId: string,
    options?: GatewaysGetGatewayByIdOptionalParams
  ): Promise<GatewaysGetGatewayByIdResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, options },
      getGatewayByIdOperationSpec
    );
  }

  /**
   * Get all datasources of specific gateway
   * @param gatewayId The gateway id
   * @param options The options parameters.
   */
  getDatasources(
    gatewayId: string,
    options?: GatewaysGetDatasourcesOptionalParams
  ): Promise<GatewaysGetDatasourcesResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, options },
      getDatasourcesOperationSpec
    );
  }

  /**
   * Create a datasource
   * @param gatewayId The gateway id
   * @param datasourceToGatewayRequest The datasource requested to create
   * @param options The options parameters.
   */
  createDatasource(
    gatewayId: string,
    datasourceToGatewayRequest: PublishDatasourceToGatewayRequest,
    options?: GatewaysCreateDatasourceOptionalParams
  ): Promise<GatewaysCreateDatasourceResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceToGatewayRequest, options },
      createDatasourceOperationSpec
    );
  }

  /**
   * Get a datasource by id
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param options The options parameters.
   */
  getDatasourceById(
    gatewayId: string,
    datasourceId: string,
    options?: GatewaysGetDatasourceByIdOptionalParams
  ): Promise<GatewaysGetDatasourceByIdResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, options },
      getDatasourceByIdOperationSpec
    );
  }

  /**
   * Delete a datasource
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param options The options parameters.
   */
  deleteDatasource(
    gatewayId: string,
    datasourceId: string,
    options?: GatewaysDeleteDatasourceOptionalParams
  ): Promise<GatewaysDeleteDatasourceResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, options },
      deleteDatasourceOperationSpec
    );
  }

  /**
   * Update a datasource credentials
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param updateDatasourceRequest The update datasource request
   * @param options The options parameters.
   */
  updateDatasource(
    gatewayId: string,
    datasourceId: string,
    updateDatasourceRequest: UpdateDatasourceRequest,
    options?: GatewaysUpdateDatasourceOptionalParams
  ): Promise<GatewaysUpdateDatasourceResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, updateDatasourceRequest, options },
      updateDatasourceOperationSpec
    );
  }

  /**
   * Get a datasource status by id
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param options The options parameters.
   */
  getDatasourceStatusById(
    gatewayId: string,
    datasourceId: string,
    options?: GatewaysGetDatasourceStatusByIdOptionalParams
  ): Promise<GatewaysGetDatasourceStatusByIdResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, options },
      getDatasourceStatusByIdOperationSpec
    );
  }

  /**
   * Get a datasource users list
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param options The options parameters.
   */
  getDatasourceUsers(
    gatewayId: string,
    datasourceId: string,
    options?: GatewaysGetDatasourceUsersOptionalParams
  ): Promise<GatewaysGetDatasourceUsersResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, options },
      getDatasourceUsersOperationSpec
    );
  }

  /**
   * Get a datasource user
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param addUserToDatasourceRequest The add user to datasource request
   * @param options The options parameters.
   */
  addDatasourceUser(
    gatewayId: string,
    datasourceId: string,
    addUserToDatasourceRequest: UserAccessRight,
    options?: GatewaysAddDatasourceUserOptionalParams
  ): Promise<GatewaysAddDatasourceUserResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, addUserToDatasourceRequest, options },
      addDatasourceUserOperationSpec
    );
  }

  /**
   * Delete a datasource user
   * @param gatewayId The gateway id
   * @param datasourceId The datasource id
   * @param emailAdress The user's email address
   * @param options The options parameters.
   */
  deleteDatasourceUser(
    gatewayId: string,
    datasourceId: string,
    emailAdress: string,
    options?: GatewaysDeleteDatasourceUserOptionalParams
  ): Promise<GatewaysDeleteDatasourceUserResponse> {
    return this.client.sendOperationRequest(
      { gatewayId, datasourceId, emailAdress, options },
      deleteDatasourceUserOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getGatewaysOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ODataResponseListGateway
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getGatewayByIdOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Gateway
    }
  },
  urlParameters: [Parameters.$host, Parameters.gatewayId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDatasourcesOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ODataResponseListGatewayDatasource
    }
  },
  urlParameters: [Parameters.$host, Parameters.gatewayId],
  headerParameters: [Parameters.accept],
  serializer
};
const createDatasourceOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.datasourceToGatewayRequest,
  urlParameters: [Parameters.$host, Parameters.gatewayId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDatasourceByIdOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayDatasource
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteDatasourceOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateDatasourceOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.updateDatasourceRequest,
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDatasourceStatusByIdOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDatasourceUsersOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}/users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ODataResponseListUserAccessRight
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addDatasourceUserOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}/users",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.addUserToDatasourceRequest,
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteDatasourceUserOperationSpec: coreClient.OperationSpec = {
  path:
    "/v1.0/myorg/gateways/{gatewayId}/datasources/{datasourceId}/users/{emailAdress}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.gatewayId,
    Parameters.datasourceId,
    Parameters.emailAdress
  ],
  headerParameters: [Parameters.accept],
  serializer
};
