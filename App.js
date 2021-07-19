import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ExerciseOne from "./src/screens/Exercises/ExerciseOne";
import ExerciseTwo from "./src/screens/Exercises/ExerciseTwo";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreens from "./src/screens/imageScreens";
import ListScreen from "./src/screens/ListScreen";
import SquareScreenStateReducer from "./src/screens/SquareScreenReducer";
import SquareScreenState from "./src/screens/SquareScreenState";

const navigator = createStackNavigator( // Navegacion de React
  {
    Home: HomeScreen,
    Components: ComponentScreen, // Añadimos nuestro componente,
    ExerciseOne: ExerciseOne,
    List: ListScreen,
    ExerciseTwo: ExerciseTwo,
    ImageSreens: ImageScreens,
    Counter: CounterScreen,
    Color: ColorScreen,
    SquareState: SquareScreenState,
    SquareReducer: SquareScreenStateReducer
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
