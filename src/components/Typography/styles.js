import { ternary } from '../../constants/color.constants';

export const styles = {
    summary: {
        "text-align": "center",
        "margin-bottom": "10px",
        "padding": "0 5px",
        display: "flex",
        "justify-content": "space-between",
        "white-space": "nowrap",
        "& $typographyChildren": {
            display: "block",
        }
    },
    description: {
        "box-shadow": "0 1px 0 rgba(9, 30, 66, 0.25)",
        "background-color": ternary,
        "border-radius": "5px",
        "margin-bottom": "10px",
        "font-size": "15px",
        padding: "10px",
        cursor: "grab",
        display: "flex",
        "justify-content": "space-between",
        "white-space": "nowrap",
        "&:active": {
            cursor: "grabbing",
        },
        "&:hover": {
            "& $typographyChildren": {
                display: "block",
            }
        },
    },
    dateTime: {
        "font-size": "12px",
        "text-align": "right",
        "align-self": "center",
        display: "block",
    },
    text: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "block",
        "white-space": "nowrap",
    },
    typographyChildren: {
        display: "none",
    },
    icon: {},
};

export default styles;
