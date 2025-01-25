import { View , Text } from 'react-native';
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {Colors} from "@/constants/Colors";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@/styles/global-styles";


const RootLayout = () => {

        const [loaded] = useFonts({
            SpaceMono2: require("../assets/fonts/SpaceMono-Regular.ttf"),
        });

        if(!loaded ){
            return null;
        }

      return(
          <View style={ globalStyles.background }>
                <Text>Hello World!</Text>
                <Slot />
                <StatusBar style="light" />
          </View>
      )
}

export default RootLayout