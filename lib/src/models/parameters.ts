import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Dataset as DatasetMapper,
  SetAllDatasetConnectionsRequest as SetAllDatasetConnectionsRequestMapper,
  BindToGatewayRequest as BindToGatewayRequestMapper,
  PublishDatasourceToGatewayRequest as PublishDatasourceToGatewayRequestMapper,
  UpdateDatasourceRequest as UpdateDatasourceRequestMapper,
  UserAccessRight as UserAccessRightMapper,
  ImportInfo as ImportInfoMapper,
  CloneReportRequest as CloneReportRequestMapper,
  GenerateTokenRequest as GenerateTokenRequestMapper,
  RebindReportRequest as RebindReportRequestMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const dataset: OperationParameter = {
  parameterPath: "dataset",
  mapper: DatasetMapper
};

export const requestMessage: OperationParameter = {
  parameterPath: "requestMessage",
  mapper: {
    serializedName: "requestMessage",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const datasetKey: OperationURLParameter = {
  parameterPath: "datasetKey",
  mapper: {
    serializedName: "datasetKey",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tableName: OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    serializedName: "tableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: SetAllDatasetConnectionsRequestMapper
};

export const bindToGatewayRequest: OperationParameter = {
  parameterPath: "bindToGatewayRequest",
  mapper: BindToGatewayRequestMapper
};

export const groupId: OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    serializedName: "groupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const gatewayId: OperationURLParameter = {
  parameterPath: "gatewayId",
  mapper: {
    serializedName: "gatewayId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const datasourceToGatewayRequest: OperationParameter = {
  parameterPath: "datasourceToGatewayRequest",
  mapper: PublishDatasourceToGatewayRequestMapper
};

export const datasourceId: OperationURLParameter = {
  parameterPath: "datasourceId",
  mapper: {
    serializedName: "datasourceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const updateDatasourceRequest: OperationParameter = {
  parameterPath: "updateDatasourceRequest",
  mapper: UpdateDatasourceRequestMapper
};

export const addUserToDatasourceRequest: OperationParameter = {
  parameterPath: "addUserToDatasourceRequest",
  mapper: UserAccessRightMapper
};

export const emailAdress: OperationURLParameter = {
  parameterPath: "emailAdress",
  mapper: {
    serializedName: "emailAdress",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const importInfo: OperationParameter = {
  parameterPath: "importInfo",
  mapper: ImportInfoMapper
};

export const datasetDisplayName: OperationQueryParameter = {
  parameterPath: "datasetDisplayName",
  mapper: {
    serializedName: "datasetDisplayName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nameConflict: OperationQueryParameter = {
  parameterPath: ["options", "nameConflict"],
  mapper: {
    serializedName: "nameConflict",
    type: {
      name: "String"
    }
  }
};

export const importId: OperationURLParameter = {
  parameterPath: "importId",
  mapper: {
    serializedName: "importId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requestParameters: OperationParameter = {
  parameterPath: "requestParameters",
  mapper: CloneReportRequestMapper
};

export const reportKey: OperationURLParameter = {
  parameterPath: "reportKey",
  mapper: {
    serializedName: "reportKey",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requestParameters1: OperationParameter = {
  parameterPath: "requestParameters",
  mapper: GenerateTokenRequestMapper
};

export const requestParameters2: OperationParameter = {
  parameterPath: "requestParameters",
  mapper: RebindReportRequestMapper
};

export const dashboardKey: OperationURLParameter = {
  parameterPath: "dashboardKey",
  mapper: {
    serializedName: "dashboardKey",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tileKey: OperationURLParameter = {
  parameterPath: "tileKey",
  mapper: {
    serializedName: "tileKey",
    required: true,
    type: {
      name: "String"
    }
  }
};
