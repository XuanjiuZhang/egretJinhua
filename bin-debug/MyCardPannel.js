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
var MyCardPannel = (function (_super) {
    __extends(MyCardPannel, _super);
    function MyCardPannel(opt) {
        var _this = _super.call(this) || this;
        _this.myCards = opt.myCards;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    MyCardPannel.prototype.createView = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.height = stageH / 3;
        this.x = 0;
        this.y = stageH - this.height;
        var cardShow = new CardShow(this.myCards);
        cardShow.x = 0;
        cardShow.y = this.height / 2;
        cardShow.width = this.width;
        cardShow.height = this.height / 2;
        this.addChild(cardShow);
        console.log('myCards', this.myCards);
    };
    return MyCardPannel;
}(egret.Sprite));
__reflect(MyCardPannel.prototype, "MyCardPannel");
//# sourceMappingURL=MyCardPannel.js.map