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

/** Interface representing a Reports. */
export interface Reports {
  /**
   * Gets a list of reports
   * @param options The options parameters.
   */
  getReports(
    options?: ReportsGetReportsOptionalParams
  ): Promise<ReportsGetReportsResponse>;
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
  ): Promise<ReportsCloneReportResponse>;
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
  ): Promise<ReportsGenerateTokenResponse>;
  /**
   * Generate token to create a new report on a given dataset
   * @param requestParameters Generate token parameters
   * @param options The options parameters.
   */
  generateTokenForCreate(
    requestParameters: GenerateTokenRequest,
    options?: ReportsGenerateTokenForCreateOptionalParams
  ): Promise<ReportsGenerateTokenForCreateResponse>;
  /**
   * Get the specified report
   * @param reportKey The report id
   * @param options The options parameters.
   */
  getReport(
    reportKey: string,
    options?: ReportsGetReportOptionalParams
  ): Promise<ReportsGetReportResponse>;
  /**
   * Deletes the specified report
   * @param reportKey The report id
   * @param options The options parameters.
   */
  deleteReport(
    reportKey: string,
    options?: ReportsDeleteReportOptionalParams
  ): Promise<ReportsDeleteReportResponse>;
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
  ): Promise<ReportsRebindReportResponse>;
  /**
   * Gets a list of reports available within the specified group
   * @param groupId The group id
   * @param options The options parameters.
   */
  getReportsInGroup(
    groupId: string,
    options?: ReportsGetReportsInGroupOptionalParams
  ): Promise<ReportsGetReportsInGroupResponse>;
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
  ): Promise<ReportsGetReportInGroupResponse>;
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
  ): Promise<ReportsDeleteReportInGroupResponse>;
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
  ): Promise<ReportsCloneReportInGroupResponse>;
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
  ): Promise<ReportsGenerateTokenInGroupResponse>;
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
  ): Promise<ReportsGenerateTokenForCreateInGroupResponse>;
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
  ): Promise<ReportsRebindReportInGroupResponse>;
}
