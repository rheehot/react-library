import * as React from "react";
import "../../study/css/util.scss";

export default class CssMain extends React.Component {

    render() {
        return (
          <div style={{display: "block"}}>
              <h1>hover됬을 때 이미지 확대 2가지방법</h1>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px"}}>
                  <div className="hover-container" style={{width: "200px", "height": "200px", border: "5px solid gray"}}>
                      <div className="background-image-default hover-item-scale" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrYLqm52KIn6zAH25GbsJDnYEkuEgkIYwLxPz0uEpot0UgxGIr)"}}></div>
                  </div>

                  <div className="hover-container" style={{width: "200px", "height": "200px", border: "5px solid gray"}}>
                      <img className="hover-item-scale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrYLqm52KIn6zAH25GbsJDnYEkuEgkIYwLxPz0uEpot0UgxGIr"/>
                  </div>
              </div>
          </div>
        );
    }
}
