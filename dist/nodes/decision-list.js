"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decision_1 = require("./decision");
var index_1 = require("./index");
var DecisionList = /** @class */ (function (_super) {
    __extends(DecisionList, _super);
    function DecisionList(localId) {
        var _this = _super.call(this) || this;
        _this.localId = localId;
        _this.content = new index_1.ContentNode('decisionList');
        return _this;
    }
    DecisionList.prototype.decision = function (localId, state) {
        return this.content.add(new decision_1.Decision(localId, state));
    };
    DecisionList.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId
            } });
    };
    return DecisionList;
}(index_1.TopLevelNode));
exports.DecisionList = DecisionList;
//# sourceMappingURL=decision-list.js.map