input.onButtonPressed(Button.A, function () {
    Draw = Deck.shift()
    Discard.push(Draw)
    basic.showString("" + (Draw))
})
function Shuffle_Deck () {
    CreateDeck()
    for (let index = 0; index < 999; index++) {
        Draw = Deck.removeAt(randint(0, Deck.length - 1))
        Deck.push(Draw)
    }
}
input.onButtonPressed(Button.B, function () {
    CreateDeck()
})
input.onGesture(Gesture.Shake, function () {
    Shuffle_Deck()
})
function CreateDeck () {
    Deck = []
    for (let value of Suits) {
        for (let Face of Card) {
            Deck.push("" + Face + value)
        }
    }
    Discard = []
}
let Deck: string[] = []
let Draw = ""
let Discard: string[] = []
let Card: string[] = []
let Suits: string[] = []
Suits = ["D", "C", "H", "S"]
Card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
CreateDeck()
Discard = []
