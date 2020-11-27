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
function Stack_Deck () {
    Deck = []
    for (let value of Suits) {
        for (let Face of DCHS) {
            Deck.push("" + Face + value)
        }
    }
    Discard = []
}
input.onButtonPressed(Button.AB, function () {
    Stack_Deck()
})
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
let DCHS: string[] = []
let Card: string[] = []
let Suits: string[] = []
Suits = ["D", "C", "H", "S"]
Card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
DCHS = ["A", "4", "7", "10", "K", "3", "6", "9", "Q", "2", "5", "8", "J"]
CreateDeck()
Discard = []
