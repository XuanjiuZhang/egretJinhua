var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Poker = (function () {
    function Poker() {
        this.cards = [];
        this.colors = ['B', 'H', 'C', 'D'];
        this.init();
    }
    Poker.prototype.init = function () {
        var _this = this;
        this.cards.length = 0;
        // 初始化四种花色
        this.colors.forEach(function (color) {
            for (var point = 1; point <= 14; point++) {
                _this.cards.push({ color: color, point: point });
            }
        });
        this.cards = _.shuffle(this.cards);
    };
    Poker.prototype.showCards = function () {
        return this.cards;
    };
    Poker.prototype.drawCards = function (count) {
        return _.take(this.cards, count);
    };
    return Poker;
}());
__reflect(Poker.prototype, "Poker");
//# sourceMappingURL=Poker.js.map