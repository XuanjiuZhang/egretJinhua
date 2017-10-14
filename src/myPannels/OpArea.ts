
class OpArea extends egret.Sprite {

    public constructor(opt: MyCardOpt) {
        super();
        this.createView(opt);
    }

    private textField:egret.TextField;

    private myCards: Array<pokerCard>;

    private createView(opt: MyCardOpt):void {
        this.height = 500
        this.width = 500
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 0;
        this.textField.text = "这是一个文本";
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        let stageW = opt.stageW;
        let stageH = opt.stageH;
        this.myCards = opt.myCards;
        this.x = (stageW - this.width) / 2
        this.y = stageH - this.height
        
        console.log('myCards', this.myCards);
    }
}
