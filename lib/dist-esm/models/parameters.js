import { GenerateTokenForAnyRequest as GenerateTokenForAnyRequestMapper, CreateOrUpdateProfileRequest as CreateOrUpdateProfileRequestMapper, Dataset as DatasetMapper, SetAllDatasetConnectionsRequest as SetAllDatasetConnectionsRequestMapper, BindToGatewayRequest as BindToGatewayRequestMapper, PublishDatasourceToGatewayRequest as PublishDatasourceToGatewayRequestMapper, UpdateDatasourceRequest as UpdateDatasourceRequestMapper, UserAccessRight as UserAccessRightMapper, ImportInfo as ImportInfoMapper, CloneReportRequest as CloneReportRequestMapper, GenerateTokenRequest as GenerateTokenRequestMapper, RebindReportRequest as RebindReportRequestMapper, AddGroupUserRequest as AddGroupUserRequestMapper } from "../models/mappers";
export const contentType = {
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
export const requestBody = {
    parameterPath: "requestBody",
    mapper: GenerateTokenForAnyRequestMapper
};
export const accept = {
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
export const $host = {
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
export const requestBody1 = {
    parameterPath: "requestBody",
    mapper: CreateOrUpdateProfileRequestMapper
};
export const dataset = {
    parameterPath: "dataset",
    mapper: DatasetMapper
};
export const requestMessage = {
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
export const datasetKey = {
    parameterPath: "datasetKey",
    mapper: {
        serializedName: "datasetKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const tableName = {
    parameterPath: "tableName",
    mapper: {
        serializedName: "tableName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const parameters = {
    parameterPath: "parameters",
    mapper: SetAllDatasetConnectionsRequestMapper
};
export const bindToGatewayRequest = {
    parameterPath: "bindToGatewayRequest",
    mapper: BindToGatewayRequestMapper
};
export const groupId = {
    parameterPath: "groupId",
    mapper: {
        serializedName: "groupId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const gatewayId = {
    parameterPath: "gatewayId",
    mapper: {
        serializedName: "gatewayId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const datasourceToGatewayRequest = {
    parameterPath: "datasourceToGatewayRequest",
    mapper: PublishDatasourceToGatewayRequestMapper
};
export const datasourceId = {
    parameterPath: "datasourceId",
    mapper: {
        serializedName: "datasourceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const updateDatasourceRequest = {
    parameterPath: "updateDatasourceRequest",
    mapper: UpdateDatasourceRequestMapper
};
export const addUserToDatasourceRequest = {
    parameterPath: "addUserToDatasourceRequest",
    mapper: UserAccessRightMapper
};
export const emailAdress = {
    parameterPath: "emailAdress",
    mapper: {
        serializedName: "emailAdress",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const importInfo = {
    parameterPath: "importInfo",
    mapper: ImportInfoMapper
};
export const datasetDisplayName = {
    parameterPath: "datasetDisplayName",
    mapper: {
        serializedName: "datasetDisplayName",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const nameConflict = {
    parameterPath: ["options", "nameConflict"],
    mapper: {
        serializedName: "nameConflict",
        type: {
            name: "String"
        }
    }
};
export const importId = {
    parameterPath: "importId",
    mapper: {
        serializedName: "importId",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const requestParameters = {
    parameterPath: "requestParameters",
    mapper: CloneReportRequestMapper
};
export const reportKey = {
    parameterPath: "reportKey",
    mapper: {
        serializedName: "reportKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const requestParameters1 = {
    parameterPath: "requestParameters",
    mapper: GenerateTokenRequestMapper
};
export const requestParameters2 = {
    parameterPath: "requestParameters",
    mapper: RebindReportRequestMapper
};
export const requestBody2 = {
    parameterPath: "requestBody",
    mapper: GenerateTokenRequestMapper
};
export const dashboardKey = {
    parameterPath: "dashboardKey",
    mapper: {
        serializedName: "dashboardKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const tileKey = {
    parameterPath: "tileKey",
    mapper: {
        serializedName: "tileKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const requestBody3 = {
    parameterPath: "requestBody",
    mapper: AddGroupUserRequestMapper
};
//# sourceMappingURL=parameters.js.map