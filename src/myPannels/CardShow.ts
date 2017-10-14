
class CardShow extends egret.Sprite {

    public constructor(opt: Array<pokerCard>) {
        super();
        this.cards = opt;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private cards: Array<pokerCard>
    
    private createView():void {
        this.cards.forEach((card, index) => {
            const cardObj = new Card(card)
            cardObj.x = this.stage.width / 5 * (index + 1)
            cardObj.width = this.stage.width / 5
            this.addChild(cardObj)
        })
    }
}
