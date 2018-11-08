import React, {
    Component
} from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
    Text,
    Button,
} from 'react-native'



class HeadingCentral extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        color: PropTypes.string,
    }

    render = () => {
        const {
            children,
            color
        } = this.props;

        const styles = StyleSheet.create({
            headingCentral: {
                marginTop: 20,
                marginBottom: 20,
                textAlign: 'center',
                color: color ? color : 'black',
                fontWeight: 'bold',
                fontSize: 32
            }
        });

        return ( <
            Text style = {
                styles.headingCentral
            } > {
                children
            } <
            /Text>
        );
    }
}

export default HeadingCentral;
