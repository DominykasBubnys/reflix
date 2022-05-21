import classes from "./Modal.module.css";
import  ReactDOM from "react-dom";
import Backdrop from "./backdrop";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react";

const ModalOverlay = props => {
    const content = (
        <div className={`${classes.modal} ${props.className}`} style={props.style}>
            {/* <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header> */}

            <form className="modal-form" onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`${classes.modal__content} ${props.contentClass}`}>
                    {props.children}
                </div>
{/* 
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer> */}
            </form>
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

const Modal = props => {
    return <Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames={classes.modal}
        >
            <ModalOverlay {...props} />
        </CSSTransition>
    </Fragment>
}

export default Modal;