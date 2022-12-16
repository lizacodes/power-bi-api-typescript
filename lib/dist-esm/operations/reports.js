import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Reports operations. */
export class ReportsImpl {
    /**
     * Initialize a new instance of the class Reports class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Gets a list of reports
     * @param options The options parameters.
     */
    getReports(options) {
        return this.client.sendOperationRequest({ options }, getReportsOperationSpec);
    }
    /**
     * Clones the specified report
     * @param reportKey The report id
     * @param requestParameters Clone report parameters
     * @param options The options parameters.
     */
    cloneReport(reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ reportKey, requestParameters, options }, cloneReportOperationSpec);
    }
    /**
     * Generate token to view or edit the specified report
     * @param reportKey The report id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateToken(reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ reportKey, requestParameters, options }, generateTokenOperationSpec);
    }
    /**
     * Generate token to create a new report on a given dataset
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenForCreate(requestParameters, options) {
        return this.client.sendOperationRequest({ requestParameters, options }, generateTokenForCreateOperationSpec);
    }
    /**
     * Get the specified report
     * @param reportKey The report id
     * @param options The options parameters.
     */
    getReport(reportKey, options) {
        return this.client.sendOperationRequest({ reportKey, options }, getReportOperationSpec);
    }
    /**
     * Deletes the specified report
     * @param reportKey The report id
     * @param options The options parameters.
     */
    deleteReport(reportKey, options) {
        return this.client.sendOperationRequest({ reportKey, options }, deleteReportOperationSpec);
    }
    /**
     * Rebinds the specified report to requested dataset id
     * @param reportKey The report id
     * @param requestParameters Rebind report parameters
     * @param options The options parameters.
     */
    rebindReport(reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ reportKey, requestParameters, options }, rebindReportOperationSpec);
    }
    /**
     * Gets a list of reports available within the specified group
     * @param groupId The group id
     * @param options The options parameters.
     */
    getReportsInGroup(groupId, options) {
        return this.client.sendOperationRequest({ groupId, options }, getReportsInGroupOperationSpec);
    }
    /**
     * Get the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param options The options parameters.
     */
    getReportInGroup(groupId, reportKey, options) {
        return this.client.sendOperationRequest({ groupId, reportKey, options }, getReportInGroupOperationSpec);
    }
    /**
     * Deletes the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param options The options parameters.
     */
    deleteReportInGroup(groupId, reportKey, options) {
        return this.client.sendOperationRequest({ groupId, reportKey, options }, deleteReportInGroupOperationSpec);
    }
    /**
     * Clones the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Clone report parameters
     * @param options The options parameters.
     */
    cloneReportInGroup(groupId, reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, reportKey, requestParameters, options }, cloneReportInGroupOperationSpec);
    }
    /**
     * Generate token to view or edit the specified report
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenInGroup(groupId, reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, reportKey, requestParameters, options }, generateTokenInGroupOperationSpec);
    }
    /**
     * Generate token to create a new report on a given dataset
     * @param groupId The group id
     * @param requestParameters Generate token parameters
     * @param options The options parameters.
     */
    generateTokenForCreateInGroup(groupId, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, requestParameters, options }, generateTokenForCreateInGroupOperationSpec);
    }
    /**
     * Rebinds the specified report to requested dataset id
     * @param groupId The group id
     * @param reportKey The report id
     * @param requestParameters Rebind report parameters
     * @param options The options parameters.
     */
    rebindReportInGroup(groupId, reportKey, requestParameters, options) {
        return this.client.sendOperationRequest({ groupId, reportKey, requestParameters, options }, rebindReportInGroupOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getReportsOperationSpec = {
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
const cloneReportOperationSpec = {
    path: "/v1.0/myorg/reports/{reportKey}/Clone",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Report
        }
    },
    requestBody: Parameters.requestParameters,
    urlParameters: [Parameters.$host, Parameters.reportKey],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const generateTokenOperationSpec = {
    path: "/v1.0/myorg/reports/{reportKey}/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [Parameters.$host, Parameters.reportKey],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const generateTokenForCreateOperationSpec = {
    path: "/v1.0/myorg/reports/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getReportOperationSpec = {
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
const deleteReportOperationSpec = {
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
const rebindReportOperationSpec = {
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
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const getReportsInGroupOperationSpec = {
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
const getReportInGroupOperationSpec = {
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
const deleteReportInGroupOperationSpec = {
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
const cloneReportInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}/Clone",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.Report
        }
    },
    requestBody: Parameters.requestParameters,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const generateTokenInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/reports/{reportKey}/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [Parameters.$host, Parameters.groupId, Parameters.reportKey],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const generateTokenForCreateInGroupOperationSpec = {
    path: "/v1.0/myorg/groups/{groupId}/reports/GenerateToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: Mappers.EmbedToken
        }
    },
    requestBody: Parameters.requestParameters1,
    urlParameters: [Parameters.$host, Parameters.groupId],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
const rebindReportInGroupOperationSpec = {
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
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=reports.js.map