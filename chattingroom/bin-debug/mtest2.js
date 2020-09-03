var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var mtest2 = (function (_super) {
    __extends(mtest2, _super);
    function mtest2() {
        var _this = _super.call(this) || this;
        console.log('mtest2 is called');
        return _this;
    }
    mtest2.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    mtest2.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return mtest2;
}(eui.Component));
__reflect(mtest2.prototype, "mtest2", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=mtest2.js.map