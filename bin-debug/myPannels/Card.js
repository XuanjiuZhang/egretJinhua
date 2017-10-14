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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(opt) {
        var _this = _super.call(this) || this;
        _this.card = opt;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        return _this;
    }
    Card.prototype.createView = function () {
        var cardLabel = new egret.TextField();
        cardLabel.textColor = 0xffffff;
        // cardLabel.width = 50;
        cardLabel.textAlign = "center";
        cardLabel.text = this.card.color + this.card.point;
        this.addChild(cardLabel);
    };
    return Card;
}(egret.Sprite));
__reflect(Card.prototype, "Card");
//# sourceMappingURL=Card.js.map