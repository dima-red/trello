import { primary, secondary, ternary, decline } from '../../constants/color.constants';

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
    primaryButton: {
        "&:hover&:not([disabled])": {
            "border-color": secondary,
            "& $alertColor$buttonContent": {
                color: decline,
            },
            "& $buttonContent": {
                color: secondary,
            },
        },
    },
    secondaryButton: {
        "font-weight": "bold",
        "&:hover&:not([disabled])": {
            "border-color": primary,
            "& $alertColor$buttonContent": {
                color: decline,
            },
            "& $buttonContent": {
                color: primary,
            },
            "background-color": ternary,
        },
    },
    icon: {
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
    alertColor: {},
};

export default styles;

