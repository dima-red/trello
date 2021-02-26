import { primary, ternary, } from '../../constants/color.constants';

const styles = {
    button: {
        "background-color": primary,
        color: ternary,
        border: `1px solid ${ternary}`,
        padding: "10px 20px",
        "border-radius": "5px",
        "font-size": "20px",
        cursor: "pointer",
        "&[disabled]": {
            opacity: 0.6,
        },
        "&:focus": {
            outline: "none",
        },
    },
    secondaryButton: {
        "font-weight": "bold",
        "&:hover&:not([disabled])": {
            "border-color": primary,
            "& $buttonContent": {
                color: primary,
            },
            "& $fIcon": {
                color: primary,
            },
            "background-color": ternary,
        },
    },
    icon: {
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        color: primary,
        border: "initial",
        cursor: "pointer",
        padding: 0,
        "border-radius": "initial",
        "background-color": "initial",
        "padding-left": "5px",
        "&:hover&$animate": {
            animation: "iconMovement 0.2s linear",
        },
        "&:hover&.addBtn": {
            "background-color": "#868077",
        },
        "&:focus": {
            outline: "none",
        },
    },
    animate: {},
    iconSmall: {
        "font-size": "14px",
    },
    iconMedium: {
        "font-size": "18px",
    },
    iconLarge: {
        "font-size": "20px",
    },
    visible: {
        opacity: '1',
    },
    hidden: {
        opacity: '0.2',
        "&:hover": {
            opacity: '1',
        },
    },
    buttonContent: {},
    buttonText: {
        "margin-left": "5px",
    },
    alertColor: {},
    fIcon: {},
};

export default styles;

