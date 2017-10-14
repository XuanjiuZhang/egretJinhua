interface MyCardOpt {
  stageW: number;
  stageH: number;
  myCards: Array<pokerCard>;
}

class MyCardPannel extends egret.Sprite {

    public constructor(opt: MyCardOpt) {
        super();
        this.myCards = opt.myCards;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private myCards: Array<pokerCard>;

    private createView():void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        this.height = stageH / 3
        this.x = 0
        this.y = stageH - this.height

        const cardShow = new CardShow(this.myCards)
        cardShow.x = 0
        cardShow.y = this.height / 2
        cardShow.width = this.width
        cardShow.height = this.height / 2
        this.addChild(cardShow)
        
        console.log('myCards', this.myCards);
    }
}
