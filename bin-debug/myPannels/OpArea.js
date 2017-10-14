var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
var OpArea = (function (_super) {
    __extends(OpArea, _super);
    function OpArea(opt) {
        var _this = _super.call(this) || this;
        _this.createView(opt);
        return _this;
    }
    OpArea.prototype.createView = function (opt) {
        this.height = 500;
        this.width = 500;
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 0;
        this.textField.text = "这是一个文本";
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        var stageW = opt.stageW;
        var stageH = opt.stageH;
        this.myCards = opt.myCards;
        this.x = (stageW - this.width) / 2;
        this.y = stageH - this.height;
        console.log('myCards', this.myCards);
    };
    return OpArea;
}(egret.Sprite));
__reflect(OpArea.prototype, "OpArea");
//# sourceMappingURL=OpArea.js.map