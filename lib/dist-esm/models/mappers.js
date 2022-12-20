export const GenerateTokenForAnyRequest = {
    type: {
        name: "Composite",
        className: "GenerateTokenForAnyRequest",
        modelProperties: {
            datasets: {
                serializedName: "datasets",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Dictionary",
                            value: { type: { name: "any" } }
                        }
                    }
                }
            },
            datasourceIdentities: {
                serializedName: "datasourceIdentities",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Dictionary",
                            value: { type: { name: "any" } }
                        }
                    }
                }
            },
            identities: {
                serializedName: "identities",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Dictionary",
                            value: { type: { name: "any" } }
                        }
                    }
                }
            },
            lifetimeInMinutes: {
                serializedName: "lifetimeInMinutes",
                type: {
                    name: "Number"
                }
            },
            targetWorkspaces: {
                serializedName: "targetWorkspaces",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Dictionary",
                            value: { type: { name: "any" } }
                        }
                    }
                }
            },
            reports: {
                serializedName: "reports",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Dictionary",
                            value: { type: { name: "any" } }
                        }
                    }
                }
            }
        }
    }
};
export const EmbedToken = {
    type: {
        name: "Composite",
        className: "EmbedToken",
        modelProperties: {
            token: {
                serializedName: "token",
                type: {
                    name: "String"
                }
            },
            tokenId: {
                serializedName: "tokenId",
                type: {
                    name: "String"
                }
            },
            expiration: {
                serializedName: "expiration",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
export const CreateOrUpdateProfileRequest = {
    type: {
        name: "Composite",
        className: "CreateOrUpdateProfileRequest",
        modelProperties: {
            displayName: {
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ServicePrincipalProfile = {
    type: {
        name: "Composite",
        className: "ServicePrincipalProfile",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            displayName: {
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListDataset = {
    type: {
        name: "Composite",
        className: "ODataResponseListDataset",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Dataset"
                        }
                    }
                }
            }
        }
    }
};
export const Dataset = {
    type: {
        name: "Composite",
        className: "Dataset",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            defaultRetentionPolicy: {
                serializedName: "defaultRetentionPolicy",
                type: {
                    name: "String"
                }
            },
            tables: {
                serializedName: "tables",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Table"
                        }
                    }
                }
            },
            webUrl: {
                serializedName: "webUrl",
                type: {
                    name: "String"
                }
            },
            datasources: {
                serializedName: "datasources",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Datasource"
                        }
                    }
                }
            },
            defaultMode: {
                serializedName: "defaultMode",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const Table = {
    type: {
        name: "Composite",
        className: "Table",
        modelProperties: {
            name: {
                constraints: {
                    Pattern: new RegExp("^[\\x09\\x0A\\x0D\\x20\\x23\\x2D\\x30-\\x39\\x40-\\x5A\\x5E-\\x5F\\x61-\\x7A\\x7E-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]{1,100}$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            columns: {
                serializedName: "columns",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Column"
                        }
                    }
                }
            },
            rows: {
                serializedName: "rows",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Row"
                        }
                    }
                }
            }
        }
    }
};
export const Column = {
    type: {
        name: "Composite",
        className: "Column",
        modelProperties: {
            name: {
                constraints: {
                    Pattern: new RegExp("^[\\x09\\x0A\\x0D\\x20-\\uD7FF\\uE000-\\uFFFD\\u10000-\\u10FFFF]+$")
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            dataType: {
                serializedName: "dataType",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const Row = {
    type: {
        name: "Composite",
        className: "Row",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const Datasource = {
    type: {
        name: "Composite",
        className: "Datasource",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            connectionString: {
                serializedName: "connectionString",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListTable = {
    type: {
        name: "Composite",
        className: "ODataResponseListTable",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Table"
                        }
                    }
                }
            }
        }
    }
};
export const ODataResponseListRefresh = {
    type: {
        name: "Composite",
        className: "ODataResponseListRefresh",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Refresh"
                        }
                    }
                }
            }
        }
    }
};
export const Refresh = {
    type: {
        name: "Composite",
        className: "Refresh",
        modelProperties: {
            refreshType: {
                serializedName: "refreshType",
                type: {
                    name: "String"
                }
            },
            startTime: {
                serializedName: "startTime",
                type: {
                    name: "DateTime"
                }
            },
            endTime: {
                serializedName: "endTime",
                type: {
                    name: "DateTime"
                }
            },
            serviceExceptionJson: {
                serializedName: "serviceExceptionJson",
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListGatewayDatasource = {
    type: {
        name: "Composite",
        className: "ODataResponseListGatewayDatasource",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "GatewayDatasource"
                        }
                    }
                }
            }
        }
    }
};
export const GatewayDatasource = {
    type: {
        name: "Composite",
        className: "GatewayDatasource",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            gatewayId: {
                serializedName: "gatewayId",
                type: {
                    name: "String"
                }
            },
            datasourceName: {
                serializedName: "datasourceName",
                type: {
                    name: "String"
                }
            },
            datasourceType: {
                serializedName: "datasourceType",
                type: {
                    name: "String"
                }
            },
            connectionDetails: {
                serializedName: "connectionDetails",
                type: {
                    name: "String"
                }
            },
            credentialType: {
                serializedName: "credentialType",
                type: {
                    name: "String"
                }
            },
            basicCredentials: {
                serializedName: "basicCredentials",
                type: {
                    name: "Composite",
                    className: "BasicCredentials"
                }
            }
        }
    }
};
export const BasicCredentials = {
    type: {
        name: "Composite",
        className: "BasicCredentials",
        modelProperties: {
            username: {
                serializedName: "username",
                type: {
                    name: "String"
                }
            },
            password: {
                serializedName: "password",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListDatasource = {
    type: {
        name: "Composite",
        className: "ODataResponseListDatasource",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Datasource"
                        }
                    }
                }
            }
        }
    }
};
export const SetAllDatasetConnectionsRequest = {
    type: {
        name: "Composite",
        className: "SetAllDatasetConnectionsRequest",
        modelProperties: {
            connectionString: {
                serializedName: "connectionString",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const BindToGatewayRequest = {
    type: {
        name: "Composite",
        className: "BindToGatewayRequest",
        modelProperties: {
            gatewayObjectId: {
                serializedName: "gatewayObjectId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListGateway = {
    type: {
        name: "Composite",
        className: "ODataResponseListGateway",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Gateway"
                        }
                    }
                }
            }
        }
    }
};
export const Gateway = {
    type: {
        name: "Composite",
        className: "Gateway",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            gatewayAnnotation: {
                serializedName: "gatewayAnnotation",
                type: {
                    name: "String"
                }
            },
            publicKey: {
                serializedName: "publicKey",
                type: {
                    name: "Composite",
                    className: "GatewayPublicKey"
                }
            },
            gatewayStatus: {
                serializedName: "gatewayStatus",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const GatewayPublicKey = {
    type: {
        name: "Composite",
        className: "GatewayPublicKey",
        modelProperties: {
            exponent: {
                serializedName: "exponent",
                type: {
                    name: "String"
                }
            },
            modulus: {
                serializedName: "modulus",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const PublishDatasourceToGatewayRequest = {
    type: {
        name: "Composite",
        className: "PublishDatasourceToGatewayRequest",
        modelProperties: {
            dataSourceType: {
                serializedName: "dataSourceType",
                type: {
                    name: "String"
                }
            },
            connectionDetails: {
                serializedName: "connectionDetails",
                type: {
                    name: "String"
                }
            },
            credentialDetails: {
                serializedName: "credentialDetails",
                type: {
                    name: "Composite",
                    className: "CredentialDetails"
                }
            },
            dataSourceName: {
                serializedName: "dataSourceName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const CredentialDetails = {
    type: {
        name: "Composite",
        className: "CredentialDetails",
        modelProperties: {
            credentials: {
                serializedName: "credentials",
                type: {
                    name: "String"
                }
            },
            credentialType: {
                serializedName: "credentialType",
                type: {
                    name: "String"
                }
            },
            encryptedConnection: {
                serializedName: "encryptedConnection",
                type: {
                    name: "String"
                }
            },
            encryptionAlgorithm: {
                serializedName: "encryptionAlgorithm",
                type: {
                    name: "String"
                }
            },
            privacyLevel: {
                serializedName: "privacyLevel",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const UpdateDatasourceRequest = {
    type: {
        name: "Composite",
        className: "UpdateDatasourceRequest",
        modelProperties: {
            credentialDetails: {
                serializedName: "credentialDetails",
                type: {
                    name: "Composite",
                    className: "CredentialDetails"
                }
            }
        }
    }
};
export const ODataResponseListUserAccessRight = {
    type: {
        name: "Composite",
        className: "ODataResponseListUserAccessRight",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "UserAccessRight"
                        }
                    }
                }
            }
        }
    }
};
export const UserAccessRight = {
    type: {
        name: "Composite",
        className: "UserAccessRight",
        modelProperties: {
            accessRight: {
                serializedName: "accessRight",
                type: {
                    name: "String"
                }
            },
            emailAddress: {
                serializedName: "emailAddress",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListImport = {
    type: {
        name: "Composite",
        className: "ODataResponseListImport",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Import"
                        }
                    }
                }
            }
        }
    }
};
export const Import = {
    type: {
        name: "Composite",
        className: "Import",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            importState: {
                serializedName: "importState",
                type: {
                    name: "String"
                }
            },
            reports: {
                serializedName: "reports",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Report"
                        }
                    }
                }
            },
            datasets: {
                serializedName: "datasets",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Dataset"
                        }
                    }
                }
            }
        }
    }
};
export const Report = {
    type: {
        name: "Composite",
        className: "Report",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            webUrl: {
                serializedName: "webUrl",
                type: {
                    name: "String"
                }
            },
            embedUrl: {
                serializedName: "embedUrl",
                type: {
                    name: "String"
                }
            },
            datasetId: {
                serializedName: "datasetId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ImportInfo = {
    type: {
        name: "Composite",
        className: "ImportInfo",
        modelProperties: {
            filePath: {
                serializedName: "filePath",
                type: {
                    name: "String"
                }
            },
            connectionType: {
                serializedName: "connectionType",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListReport = {
    type: {
        name: "Composite",
        className: "ODataResponseListReport",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Report"
                        }
                    }
                }
            }
        }
    }
};
export const ODataResponseListDashboard = {
    type: {
        name: "Composite",
        className: "ODataResponseListDashboard",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Dashboard"
                        }
                    }
                }
            }
        }
    }
};
export const Dashboard = {
    type: {
        name: "Composite",
        className: "Dashboard",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            displayName: {
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            },
            isReadOnly: {
                serializedName: "isReadOnly",
                type: {
                    name: "Boolean"
                }
            },
            embedUrl: {
                serializedName: "embedUrl",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListTile = {
    type: {
        name: "Composite",
        className: "ODataResponseListTile",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Tile"
                        }
                    }
                }
            }
        }
    }
};
export const Tile = {
    type: {
        name: "Composite",
        className: "Tile",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            },
            rowSpan: {
                serializedName: "rowSpan",
                type: {
                    name: "Number"
                }
            },
            colSpan: {
                serializedName: "colSpan",
                type: {
                    name: "Number"
                }
            },
            embedUrl: {
                serializedName: "embedUrl",
                type: {
                    name: "String"
                }
            },
            embedData: {
                serializedName: "embedData",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const CloneReportRequest = {
    type: {
        name: "Composite",
        className: "CloneReportRequest",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            targetGroupId: {
                serializedName: "targetGroupId",
                type: {
                    name: "String"
                }
            },
            targetModelId: {
                serializedName: "targetModelId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const GenerateTokenRequest = {
    type: {
        name: "Composite",
        className: "GenerateTokenRequest",
        modelProperties: {
            accessLevel: {
                serializedName: "accessLevel",
                type: {
                    name: "String"
                }
            },
            datasetId: {
                serializedName: "datasetId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const RebindReportRequest = {
    type: {
        name: "Composite",
        className: "RebindReportRequest",
        modelProperties: {
            datasetId: {
                serializedName: "datasetId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const ODataResponseListGroup = {
    type: {
        name: "Composite",
        className: "ODataResponseListGroup",
        modelProperties: {
            odataContext: {
                serializedName: "odata\\.context",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Group"
                        }
                    }
                }
            }
        }
    }
};
export const Group = {
    type: {
        name: "Composite",
        className: "Group",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            isReadOnly: {
                serializedName: "isReadOnly",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
export const AddGroupUserRequest = {
    type: {
        name: "Composite",
        className: "AddGroupUserRequest",
        modelProperties: {
            groupUserAccessRight: {
                serializedName: "groupUserAccessRight",
                required: true,
                type: {
                    name: "String"
                }
            },
            identifier: {
                serializedName: "identifier",
                required: true,
                type: {
                    name: "String"
                }
            },
            principalType: {
                serializedName: "principalType",
                required: true,
                type: {
                    name: "String"
                }
            },
            displayName: {
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            },
            emailAddress: {
                serializedName: "emailAddress",
                type: {
                    name: "String"
                }
            },
            graphId: {
                serializedName: "graphId",
                type: {
                    name: "String"
                }
            },
            profile: {
                serializedName: "profile",
                type: {
                    name: "Composite",
                    className: "ServicePrincipalProfile"
                }
            },
            userType: {
                serializedName: "userType",
                type: {
                    name: "String"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map