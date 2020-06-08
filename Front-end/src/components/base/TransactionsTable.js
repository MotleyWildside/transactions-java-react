import React, {Component} from "react";
import PropTypes from "prop-types";
import {pickCard, setCards} from "../../actions/backCardsActions";
import {connect} from "react-redux";

class TransactionsTable extends Component {

    creditHeaders() {
        return <div className="TransactionsTable__Headers credit">
            <div>Date</div>
            <div>Amount</div>
            <div>CurrentLimit</div>
            <div>Left</div>
            <div>Type</div>
        </div>;
    }

    creditRow(item) {
        return <div className="TransactionsTable__Headers credit">
            <div>{new Date(`${item.date}`).toLocaleDateString()}</div>
            <div>{item.amount}</div>
            <div>{item.currentLimit}</div>
            <div>{item.left}</div>
            <div>{item.type}</div>
        </div>;
    }

    debitHeaders() {
        return <div className="TransactionsTable__Headers debit">
            <div>Date</div>
            <div>Amount</div>
            <div>Left</div>
            <div>Type</div>
        </div>;
    }


    //Bad crunch with date, i know, but i dont have a time for optimisation
    debitRow(item) {
        return <div className="TransactionsTable__cells debit">
            <div>{new Date(`${item.date}`).toLocaleDateString()}</div>
            <div>{item.amount}</div>
            <div>{item.left}</div>
            <div>{item.type}</div>
        </div>;
    }

    render() {
        const {props: {pickedCard, history}} = this;
        return (
            <div className="TransactionsTable">
                {pickedCard === "debit" ? this.debitHeaders() : this.creditHeaders()}
                {history.map((item) => pickedCard === "debit" ? this.debitRow(item) : this.creditRow(item))}
            </div>
        );
    }

}

export const mapStateToProps = store => {
    return {
        pickedCard: store.bankCards.pickedCard,
    };
};

TransactionsTable.propTypes = {
    history: PropTypes.array,
    pickedCard: PropTypes.string,
};

export default connect(mapStateToProps, null)(TransactionsTable);
