import { Reports } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBiClient } from "../powerBiClient";
import {
  ReportsGetReportsOptionalParams,
  ReportsGetReportsResponse,
  CloneReportRequest,
  ReportsCloneReportOptionalParams,
  ReportsCloneReportResponse,
  GenerateTokenRequest,
  ReportsGenerateTokenOptionalParams,
  ReportsGenerateTokenResponse,
  ReportsGenerateTokenForCreateOptionalParams,
  ReportsGenerateTokenForCreateResponse,
  ReportsGetReportOptionalParams,
  ReportsGetReportResponse,
  ReportsDeleteReportOptionalParams,
  ReportsDeleteReportResponse,
  RebindReportRequest,
  ReportsRebindReportOptionalParams,
  ReportsRebindReportResponse,
  ReportsGetReportsInGroupOptionalParams,
  ReportsGetReportsInGroupResponse,
  ReportsGetReportInGroupOptionalParams,
  ReportsGetReportInGroupResponse,
  ReportsDeleteReportInGroupOptionalParams,
  ReportsDeleteReportInGroupResponse,
  ReportsCloneReportInGroupOptionalParams,
  ReportsCloneReportInGroupResponse,
  ReportsGenerateTokenInGroupOptionalParams,
  ReportsGenerateTokenInGroupResponse,
  ReportsGenerateTokenForCreateInGroupOptionalParams,
  ReportsGenerateTokenForCreateInGroupResponse,
  ReportsRebindReportInGroupOptionalParams,
  ReportsRebindReportInGroupResponse
} from "../models";

/** Class containing Reports operations. */
export class ReportsImpl implements Reports {
  private readonly client: PowerBiClient;

  /**
   * Initialize a new instance of the class Reports class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBiClient) {
    this.client = client;
  }

  /**
   * Gets a list of reports
   * @param options The options parameters.
   */
  getReports(
    options?: ReportsGetReportsOptionalParams
  ): Promise<ReportsGetReportsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getReportsOperationSpec
    );
  }

  /**
   * Clones the specified report
   * @param reportKey The report id
   * @param requestParameters Clone report parameters
   * @param options The options parameters.
   */
  cloneReport(
    reportKey: string,
    requestParameters: CloneReportRequest,
    options?: ReportsCloneReportOptionalParams
  ): Promise<ReportsCloneReportResponse> {
    return this.client.sendOperationRequest(
      { reportKey, requestParameters, options },
      cloneReportOperationSpec
    );
  }

  /**
   * Generate token to view or edit the specified report
   * @param reportKey The report id
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateToken(
    reportKey: string,
    requestParameters: GenerateTokenRequest,
    options?: ReportsGenerateTokenOptionalParams
  ): Promise<ReportsGenerateTokenResponse> {
    return this.client.sendOperationRequest(
      { reportKey, requestParameters, options },
      generateTokenOperationSpec
    );
  }

  /**
   * Generate token to create a new report on a given dataset
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateTokenForCreate(
    requestParameters: GenerateTokenRequest,
    options?: ReportsGenerateTokenForCreateOptionalParams
  ): Promise<ReportsGenerateTokenForCreateResponse> {
    return this.client.sendOperationRequest(
      { requestParameters, options },
      generateTokenForCreateOperationSpec
    );
  }

  /**
   * Get the specified report
   * @param reportKey The report id
   * @param options The options parameters.
   */
  getReport(
    reportKey: string,
    options?: ReportsGetReportOptionalParams
  ): Promise<ReportsGetReportResponse> {
    return this.client.sendOperationRequest(
      { reportKey, options },
      getReportOperationSpec
    );
  }

  /**
   * Deletes the specified report
   * @param reportKey The report id
   * @param options The options parameters.
   */
  deleteReport(
    reportKey: string,
    options?: ReportsDeleteReportOptionalParams
  ): Promise<ReportsDeleteReportResponse> {
    return this.client.sendOperationRequest(
      { reportKey, options },
      deleteReportOperationSpec
    );
  }

  /**
   * Rebinds the specified report to requested dataset id
   * @param reportKey The report id
   * @param requestParameters Rebind report parameters
   * @param options The options parameters.
   */
  rebindReport(
    reportKey: string,
    requestParameters: RebindReportRequest,
    options?: ReportsRebindReportOptionalParams
  ): Promise<ReportsRebindReportResponse> {
    return this.client.sendOperationRequest(
      { reportKey, requestParameters, options },
      rebindReportOperationSpec
    );
  }

  /**
   * Gets a list of reports available within the specified group
   * @param groupId The group id
   * @param options The options parameters.
   */
  getReportsInGroup(
    groupId: string,
    options?: ReportsGetReportsInGroupOptionalParams
  ): Promise<ReportsGetReportsInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getReportsInGroupOperationSpec
    );
  }

  /**
   * Get the specified report
   * @param groupId The group id
   * @param reportKey The report id
   * @param options The options parameters.
   */
  getReportInGroup(
    groupId: string,
    reportKey: string,
    options?: ReportsGetReportInGroupOptionalParams
  ): Promise<ReportsGetReportInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, reportKey, options },
      getReportInGroupOperationSpec
    );
  }

  /**
   * Deletes the specified report
   * @param groupId The group id
   * @param reportKey The report id
   * @param options The options parameters.
   */
  deleteReportInGroup(
    groupId: string,
    reportKey: string,
    options?: ReportsDeleteReportInGroupOptionalParams
  ): Promise<ReportsDeleteReportInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, reportKey, options },
      deleteReportInGroupOperationSpec
    );
  }

  /**
   * Clones the specified report
   * @param groupId The group id
   * @param reportKey The report id
   * @param requestParameters Clone report parameters
   * @param options The options parameters.
   */
  cloneReportInGroup(
    groupId: string,
    reportKey: string,
    requestParameters: CloneReportRequest,
    options?: ReportsCloneReportInGroupOptionalParams
  ): Promise<ReportsCloneReportInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, reportKey, requestParameters, options },
      cloneReportInGroupOperationSpec
    );
  }

  /**
   * Generate token to view or edit the specified report
   * @param groupId The group id
   * @param reportKey The report id
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateTokenInGroup(
    groupId: string,
    reportKey: string,
    requestParameters: GenerateTokenRequest,
    options?: ReportsGenerateTokenInGroupOptionalParams
  ): Promise<ReportsGenerateTokenInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, reportKey, requestParameters, options },
      generateTokenInGroupOperationSpec
    );
  }

  /**
   * Generate token to create a new report on a given dataset
   * @param groupId The group id
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateTokenForCreateInGroup(
    groupId: string,
    requestParameters: GenerateTokenRequest,
    options?: ReportsGenerateTokenForCreateInGroupOptionalParams
  ): Promise<ReportsGenerateTokenForCreateInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, requestParameters, options },
      generateTokenForCreateInGroupOperationSpec
    );
  }

  /**
   * Rebinds the specified report to requested dataset id
   * @param groupId The group id
   * @param reportKey The report id
   * @param requestParameters Rebind report parameters
   * @param options The options parameters.
   */
  rebindReportInGroup(
    groupId: string,
    reportKey: string,
    requestParameters: RebindReportRequest,
    options?: ReportsRebindReportInGroupOptionalParams
  ): Promise<ReportsRebindReportInGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, reportKey, requestParameters, options },
      rebindReportInGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getReportsOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ODataResponseListReport
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const cloneReportOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/{reportKey}/Clone",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Report
    }
  },
  requestBody: Parameters.requestParameters,
  urlParameters: [Parameters.$host, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/{reportKey}/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [Parameters.$host, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenForCreateOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getReportOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/{reportKey}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Report
    }
  },
  urlParameters: [Parameters.$host, Parameters.reportKey],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteReportOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/{reportKey}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  urlParameters: [Parameters.$host, Parameters.reportKey],
  headerParameters: [Parameters.accept],
  serializer
};
const rebindReportOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/reports/{reportKey}/Rebind",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.requestParameters2,
  urlParameters: [Parameters.$host, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getReportsInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ODataResponseListReport
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const getReportInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Report
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteReportInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
  headerParameters: [Parameters.accept],
  serializer
};
const cloneReportInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}/Clone",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Report
    }
  },
  requestBody: Parameters.requestParameters,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateTokenForCreateInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/GenerateToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EmbedToken
    }
  },
  requestBody: Parameters.requestParameters1,
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const rebindReportInGroupOperationSpec: coreClient.OperationSpec = {
  path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}/Rebind",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    }
  },
  requestBody: Parameters.requestParameters2,
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
