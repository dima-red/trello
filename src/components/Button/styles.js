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
    buttonContent: {},
    alertColor: {},
};

export default styles;

