// stylesheet
import "./App.css";

// components
import Sidebar from "./Sidebar";

function App() {
    return (
        // BEM naming convention
        <div className="app">
            <div className="app__body">
                <Sidebar />
                {/* chats */}
            </div>
        </div>
    );
}

export default App;
