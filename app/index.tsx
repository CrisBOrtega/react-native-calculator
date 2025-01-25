import { View , Text } from 'react-native';
import {globalStyles} from "@/styles/global-styles";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
           <Text style={ globalStyles.mainResult  }
                 numberOfLines={1}
                 adjustsFontSizeToFit
           >
                50 x 5000000000000000
           </Text>
            <Text style={ globalStyles.subResult }>
                250
            </Text>
        </View>
    )
}

export default CalculatorApp;