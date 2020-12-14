import { primary, secondary, ternary, white} from '../../constants/style.constants';

export const styles = {
    createTaskButton: {
        padding: "2px 6px",
        border: "1px solid grey",
        "align-self": "flex-end", // for cases when user will change the size of textarea
    },

    description: {
        display: "flex",
        margin: "0 auto 10px auto",
        width: "90%",
    },
};

export default styles;

