import { primary, secondary, ternary} from '../../constants/style.constants';

export const styles = {
    summary: {
        "text-align": "center",
        "margin-bottom": "20px",
    },
    description: {
        "box-shadow": "0 1px 0 rgba(9, 30, 66, 0.25)",
        "background-color": ternary,
        "border-radius": "5px",
        width: "80%",
        margin: "0 auto 10px auto",
        "font-size": "15px",
        padding: "10px",
    },
    dateTime: {
        "font-size": "12px",
        "text-align": "right",
        "align-self": "center",
        display: "block",
    }
};

export default styles;
