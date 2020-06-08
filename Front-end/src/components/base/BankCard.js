import React, {Component} from "react";
import PropTypes from "prop-types";
import {pickCard, setCards} from "../../actions/backCardsActions";
import {connect} from "react-redux";

class BankCard extends Component {

    handleClickCard() {
        const {props: {pickCard, type, pickedCard}} = this;

        const pick = type !== pickedCard ? type : "";
        pickCard(pick);
    }

    render() {
        const {props: {type, card, pickedCard}} = this;
        return (
            <div
                className={`BankCard ${type} ${pickedCard === type ? "picked" : ""}`}
                onClick={() => this.handleClickCard()}
            >
                <div className="BankCard__title">{type}</div>
                <div>
                    <div className="BankCard__amount">Amount: {card.amount}</div>
                    {type === "credit" && <div className="BankCard__limit">Credit limit: {card.currentLimit}</div>}
                </div>

            </div>
        );
    }
}

export const mapStateToProps = store => {
    return {
        pickedCard: store.bankCards.pickedCard,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        pickCard: (payload) => {
            dispatch(pickCard(payload));
        },
    };
};

BankCard.propTypes = {
    type: PropTypes.string,
    card: PropTypes.object,
    pickCard: PropTypes.func,
    pickedCard: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankCard);
