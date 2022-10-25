"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactRelationsResolver = exports.UserRelationsResolver = exports.PaticipantsRelationsResolver = exports.MessageRelationsResolver = exports.ConversationRelationsResolver = void 0;
var ConversationRelationsResolver_1 = require("./Conversation/ConversationRelationsResolver");
Object.defineProperty(exports, "ConversationRelationsResolver", { enumerable: true, get: function () { return ConversationRelationsResolver_1.ConversationRelationsResolver; } });
var MessageRelationsResolver_1 = require("./Message/MessageRelationsResolver");
Object.defineProperty(exports, "MessageRelationsResolver", { enumerable: true, get: function () { return MessageRelationsResolver_1.MessageRelationsResolver; } });
var PaticipantsRelationsResolver_1 = require("./Paticipants/PaticipantsRelationsResolver");
Object.defineProperty(exports, "PaticipantsRelationsResolver", { enumerable: true, get: function () { return PaticipantsRelationsResolver_1.PaticipantsRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });
var UserContactRelationsResolver_1 = require("./UserContact/UserContactRelationsResolver");
Object.defineProperty(exports, "UserContactRelationsResolver", { enumerable: true, get: function () { return UserContactRelationsResolver_1.UserContactRelationsResolver; } });