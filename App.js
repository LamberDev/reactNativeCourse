import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BoxObjectModel from "./src/screens/BoxObjectModelScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterReducer from "./src/screens/Exercises/CounterReducer";
import ExerciseOne from "./src/screens/Exercises/ExerciseOne";
import ExerciseTwo from "./src/screens/Exercises/ExerciseTwo";
import StyleEx01 from "./src/screens/Exercises/StyleEx01";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreens from "./src/screens/imageScreens";
import ListScreen from "./src/screens/ListScreen";
import SquareScreenStateReducer from "./src/screens/SquareScreenReducer";
import SquareScreenState from "./src/screens/SquareScreenState";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator( // Navegacion de React
  {
    Home: HomeScreen,
    Components: ComponentScreen, // Añadimos nuestro componente,
    ExerciseOne: ExerciseOne,
    List: ListScreen,
    ExerciseTwo: ExerciseTwo,
    ImageSreens: ImageScreens,
    Counter: CounterScreen,
    CounterReducer: CounterReducer,
    Color: ColorScreen,
    SquareState: SquareScreenState,
    SquareReducer: SquareScreenStateReducer,
    TextScreen: TextScreen,
    BoxScreen: BoxObjectModel,
    StylesEx01: StyleEx01
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
