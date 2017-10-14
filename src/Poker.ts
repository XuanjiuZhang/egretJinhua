interface pokerCard {
  point: number;
  color: string;
}

class Poker {
  public constructor() {
    this.init()
  }

  private cards: Array<pokerCard> = []

  private colors: Array<string> = ['B', 'H', 'C', 'D']

  private init():void {
    this.cards.length = 0
    // 初始化四种花色
    this.colors.forEach(color => {
      for (let point = 1; point <= 14; point++) {
        this.cards.push({color, point})
      }
    })
    this.cards = _.shuffle(this.cards)
  }

  public showCards() {
    return this.cards
  }

  public drawCards(count: number): Array<pokerCard> {
    return _.take(this.cards, count)
  }

}
