
class Card extends egret.Sprite {

    public constructor(opt: pokerCard) {
        super();
        this.card = opt
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this)
    }

    private card: pokerCard

    private createView():void {
        let cardLabel = new egret.TextField();
        cardLabel.textColor = 0xffffff;
        // cardLabel.width = 50;
        cardLabel.textAlign = "center";
        cardLabel.text = this.card.color + this.card.point;
        this.addChild(cardLabel)
    }
}
