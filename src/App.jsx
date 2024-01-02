import CelsiusFaren from "./components/celsius-faren/CelsiusFaren";
import CircleArea from "./components/circle-area/CircleArea";
import FarenCelsius from "./components/faren-celsius/FarenCelsius";
import SayHello from "./components/sayhello/Sayhello";
import SquareArea from "./components/square-area/SquareArea";
import TotalPrice from "./components/total-price/TotalPrice";
import TriangleArea from "./components/triangle-area/TriangleArea";
import WriteMessage from "./components/write-message/WriteMessage";

const App = () => {
	return (
		<>
			<SayHello name='Adrian' />
			<SquareArea side='5' />
			<TriangleArea base='5' height={10} />
			<CircleArea radio={2} />
			<CelsiusFaren degrees={10} />
			<FarenCelsius degrees={20} />
			<TotalPrice price={20} />
			<WriteMessage name='Carlos' material='toallas' size='grandes' note='Pasara a recogerlas el sabado por la noche.' />
		</>
	)
};

export default App;
