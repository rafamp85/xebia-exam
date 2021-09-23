import { useState } from "react";

import TopicsProvider from "./context/TopicsContext";
import Header from "./header/components/Header";
import Topic from "./topic/components/Topic";
import Topics from "./topic/components/Topics";

function App() {

  const [selectedTopic, setSelectTopic] = useState({
    id: '',
    name: ''
  });

  return (
    <TopicsProvider>
      <Header
        title='My Topic Explorer App'
      />

      <div className="container-topics">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Topics setSelectTopic={setSelectTopic}/>
            </div>

            <div className="col m6 s12">
              <Topic selectedTopic={selectedTopic}/>
            </div> 

          </div>
        </div>
      </div>
    </TopicsProvider>
  );
}

export default App;
