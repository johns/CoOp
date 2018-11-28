import React, {
    Component
} from "react";
import {
    StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import {
    View,
    Text,
    Button,
} from 'react-native';
import colors from '../../../lib/colors';
import Dimensions from 'Dimensions';



class ChatBubble extends Component {
    static propTypes = {
        isSelf: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired,
        user: PropTypes.string,
    }

    render = () => {
        const {
            isSelf,
            user,
            content,
        } = this.props;


        const styles = StyleSheet.create({

            user: {
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
            },
            bubble: {
                backgroundColor: isSelf ? colors.primaryBlue : 'white',
                alignItems: 'stretch',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 15,
                marginTop: 2,
                marginBottom: 5,
            },
        });

        return (
            <View style={styles.container}>
                <View style={styles.userSide}>
                    <Text style={styles.user}>{user}</Text>
                </View>
                <View style={styles.bubble}>
                    <Text>{content}</Text>
                </View>
            </View>

        );
    }
}

export default ChatBubble;
