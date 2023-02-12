"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnownAddGroupUserRequestPrincipalType = exports.KnownAddGroupUserRequestGroupUserAccessRight = exports.KnownGenerateTokenRequestAccessLevel = exports.KnownDatasetDefaultMode = void 0;
/** Known values of {@link DatasetDefaultMode} that the service accepts. */
var KnownDatasetDefaultMode;
(function (KnownDatasetDefaultMode) {
    /** AsAzure */
    KnownDatasetDefaultMode["AsAzure"] = "AsAzure";
    /** AsOnPrem */
    KnownDatasetDefaultMode["AsOnPrem"] = "AsOnPrem";
    /** Push */
    KnownDatasetDefaultMode["Push"] = "Push";
    /** Streaming */
    KnownDatasetDefaultMode["Streaming"] = "Streaming";
    /** PushStreaming */
    KnownDatasetDefaultMode["PushStreaming"] = "PushStreaming";
})(KnownDatasetDefaultMode = exports.KnownDatasetDefaultMode || (exports.KnownDatasetDefaultMode = {}));
/** Known values of {@link GenerateTokenRequestAccessLevel} that the service accepts. */
var KnownGenerateTokenRequestAccessLevel;
(function (KnownGenerateTokenRequestAccessLevel) {
    /** View */
    KnownGenerateTokenRequestAccessLevel["View"] = "View";
    /** Edit */
    KnownGenerateTokenRequestAccessLevel["Edit"] = "Edit";
})(KnownGenerateTokenRequestAccessLevel = exports.KnownGenerateTokenRequestAccessLevel || (exports.KnownGenerateTokenRequestAccessLevel = {}));
/** Known values of {@link AddGroupUserRequestGroupUserAccessRight} that the service accepts. */
var KnownAddGroupUserRequestGroupUserAccessRight;
(function (KnownAddGroupUserRequestGroupUserAccessRight) {
    /** Admin */
    KnownAddGroupUserRequestGroupUserAccessRight["Admin"] = "Admin";
    /** Contributor */
    KnownAddGroupUserRequestGroupUserAccessRight["Contributor"] = "Contributor";
    /** Member */
    KnownAddGroupUserRequestGroupUserAccessRight["Member"] = "Member";
    /** None */
    KnownAddGroupUserRequestGroupUserAccessRight["None"] = "None";
    /** Viewer */
    KnownAddGroupUserRequestGroupUserAccessRight["Viewer"] = "Viewer";
})(KnownAddGroupUserRequestGroupUserAccessRight = exports.KnownAddGroupUserRequestGroupUserAccessRight || (exports.KnownAddGroupUserRequestGroupUserAccessRight = {}));
/** Known values of {@link AddGroupUserRequestPrincipalType} that the service accepts. */
var KnownAddGroupUserRequestPrincipalType;
(function (KnownAddGroupUserRequestPrincipalType) {
    /** App */
    KnownAddGroupUserRequestPrincipalType["App"] = "App";
    /** Group */
    KnownAddGroupUserRequestPrincipalType["Group"] = "Group";
    /** None */
    KnownAddGroupUserRequestPrincipalType["None"] = "None";
    /** User */
    KnownAddGroupUserRequestPrincipalType["User"] = "User";
})(KnownAddGroupUserRequestPrincipalType = exports.KnownAddGroupUserRequestPrincipalType || (exports.KnownAddGroupUserRequestPrincipalType = {}));
//# sourceMappingURL=index.js.map