"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBody3 = exports.tileKey = exports.dashboardKey = exports.requestBody2 = exports.requestParameters2 = exports.requestParameters1 = exports.reportKey = exports.requestParameters = exports.importId = exports.nameConflict = exports.datasetDisplayName = exports.importInfo = exports.emailAdress = exports.addUserToDatasourceRequest = exports.updateDatasourceRequest = exports.datasourceId = exports.datasourceToGatewayRequest = exports.gatewayId = exports.groupId = exports.bindToGatewayRequest = exports.parameters = exports.tableName = exports.datasetKey = exports.requestMessage = exports.dataset = exports.requestBody1 = exports.$host = exports.accept = exports.requestBody = exports.contentType = void 0;
const mappers_1 = require("../models/mappers");
exports.contentType = {
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
exports.requestBody = {
    parameterPath: "requestBody",
    mapper: mappers_1.GenerateTokenForAnyRequest
};
exports.accept = {
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
exports.$host = {
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
exports.requestBody1 = {
    parameterPath: "requestBody",
    mapper: mappers_1.CreateOrUpdateProfileRequest
};
exports.dataset = {
    parameterPath: "dataset",
    mapper: mappers_1.Dataset
};
exports.requestMessage = {
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
exports.datasetKey = {
    parameterPath: "datasetKey",
    mapper: {
        serializedName: "datasetKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.tableName = {
    parameterPath: "tableName",
    mapper: {
        serializedName: "tableName",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.parameters = {
    parameterPath: "parameters",
    mapper: mappers_1.SetAllDatasetConnectionsRequest
};
exports.bindToGatewayRequest = {
    parameterPath: "bindToGatewayRequest",
    mapper: mappers_1.BindToGatewayRequest
};
exports.groupId = {
    parameterPath: "groupId",
    mapper: {
        serializedName: "groupId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.gatewayId = {
    parameterPath: "gatewayId",
    mapper: {
        serializedName: "gatewayId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.datasourceToGatewayRequest = {
    parameterPath: "datasourceToGatewayRequest",
    mapper: mappers_1.PublishDatasourceToGatewayRequest
};
exports.datasourceId = {
    parameterPath: "datasourceId",
    mapper: {
        serializedName: "datasourceId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.updateDatasourceRequest = {
    parameterPath: "updateDatasourceRequest",
    mapper: mappers_1.UpdateDatasourceRequest
};
exports.addUserToDatasourceRequest = {
    parameterPath: "addUserToDatasourceRequest",
    mapper: mappers_1.UserAccessRight
};
exports.emailAdress = {
    parameterPath: "emailAdress",
    mapper: {
        serializedName: "emailAdress",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.importInfo = {
    parameterPath: "importInfo",
    mapper: mappers_1.ImportInfo
};
exports.datasetDisplayName = {
    parameterPath: "datasetDisplayName",
    mapper: {
        serializedName: "datasetDisplayName",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.nameConflict = {
    parameterPath: ["options", "nameConflict"],
    mapper: {
        serializedName: "nameConflict",
        type: {
            name: "String"
        }
    }
};
exports.importId = {
    parameterPath: "importId",
    mapper: {
        serializedName: "importId",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.requestParameters = {
    parameterPath: "requestParameters",
    mapper: mappers_1.CloneReportRequest
};
exports.reportKey = {
    parameterPath: "reportKey",
    mapper: {
        serializedName: "reportKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.requestParameters1 = {
    parameterPath: "requestParameters",
    mapper: mappers_1.GenerateTokenRequest
};
exports.requestParameters2 = {
    parameterPath: "requestParameters",
    mapper: mappers_1.RebindReportRequest
};
exports.requestBody2 = {
    parameterPath: "requestBody",
    mapper: mappers_1.GenerateTokenRequest
};
exports.dashboardKey = {
    parameterPath: "dashboardKey",
    mapper: {
        serializedName: "dashboardKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.tileKey = {
    parameterPath: "tileKey",
    mapper: {
        serializedName: "tileKey",
        required: true,
        type: {
            name: "String"
        }
    }
};
exports.requestBody3 = {
    parameterPath: "requestBody",
    mapper: mappers_1.AddGroupUserRequest
};
//# sourceMappingURL=parameters.js.map