import React, {Component} from "react";
import BankCard from "./BankCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ApiService from "../../ApiService/ApiService";
import {setCard, setCards} from "../../actions/backCardsActions";
import TransactionsTable from "./TransactionsTable";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
    }


    componentDidMount() {
        ApiService.get("/get-cards").then((resolve) => {
            this.props.setCards(resolve.data);
        });
    }

    handleSendTransaction() {
        const {props: {pickedCard, setCard}} = this;
        const {state: {amount}} = this;
        if (!pickedCard || !amount) {
            return;
        }

        ApiService.get(`/make-transaction/${pickedCard}?&amount=${amount}`).then((resolve) => {
            this.setState({
                amount: 0,
            });
            setCard(resolve.data);
        });
    }

    handleChangeAmount(e) {
        this.setState({
            amount: e.target.value,
        });
    }

    render() {
        const { props: { debit, credit, pickedCard }} = this;
        const { state: { amount }} = this;
        return (
            <div className="Layout">
                <div className="Layout__cards">
                    <BankCard type="debit" card={debit} />
                    <BankCard type="credit" card={credit} />
                </div>
                <div className="Layout__actions">
                    <input value={amount} type="number" onChange={(e) => this.handleChangeAmount(e)}/>
                    <button onClick={() => this.handleSendTransaction()}>Send Transaction</button>
                </div>
                {pickedCard && <TransactionsTable history={this.props[pickedCard].transactions}/>}
            </div>
        );
    }
}

export const mapStateToProps = store => {
    return {
        debit: store.bankCards.debit,
        credit: store.bankCards.credit,
        pickedCard: store.bankCards.pickedCard,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        setCards: (payload) => {
            dispatch(setCards(payload));
        },
        setCard: (payload) => {
            dispatch(setCard(payload));
        }
    };
};

Layout.propTypes = {
    debit: PropTypes.object,
    credit: PropTypes.object,
    setCards: PropTypes.func,
    setCard: PropTypes.func,
    pickedCard: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
