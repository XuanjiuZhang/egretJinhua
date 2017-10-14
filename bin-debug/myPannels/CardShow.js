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
var CardShow = (function (_super) {
    __extends(CardShow, _super);
    function CardShow(opt) {
        var _this = _super.call(this) || this;
        _this.cards = opt;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    CardShow.prototype.createView = function () {
        var _this = this;
        this.cards.forEach(function (card, index) {
            var cardObj = new Card(card);
            cardObj.x = _this.stage.width / 5 * (index + 1);
            cardObj.width = _this.stage.width / 5;
            _this.addChild(cardObj);
        });
    };
    return CardShow;
}(egret.Sprite));
__reflect(CardShow.prototype, "CardShow");
//# sourceMappingURL=CardShow.js.map