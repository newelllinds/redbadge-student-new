import React, { Component } from 'react';

class ClassDeckFetch extends Component {

    constructor(props){
        super(props);
        this.state = {deckID: "", cardImage: ""}
    }

    fetchDeck(){
        //What's the URL that we're going to go fetch?
        //Store the data from the fetch
        const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({deckID: json.deck_id}));
    }

    fetchCard(){
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`

        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({cardImage: json.cards[0].image}));
    }

    componentDidMount() {
        this.fetchDeck(); //invokes the fetchDeck on the page load
    }

    componentDidUpdate(prevProps, prevState) { //shortcut is cdu tab
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard()
        }
        
    }
    render() {
        return(
            <div>
                Hello from Class Deck Fetch
                <img src ={this.state.cardImage} alt="" />

            </div>
        )
    }
}

export default ClassDeckFetch;
