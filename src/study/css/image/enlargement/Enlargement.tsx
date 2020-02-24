import * as React from "react";
import "../../util.scss";
import "./Enlargement.scss"

export default class Enlargement extends React.Component {

    render() {
        return (
          <div className="Enlargement-container">
              <h1>hover됬을 때 이미지 확대 2가지방법</h1>
              <div className="grid-container">
                  <div className="hover-container">
                      <div className="background-image-default hover-item-scale" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrYLqm52KIn6zAH25GbsJDnYEkuEgkIYwLxPz0uEpot0UgxGIr)"}}></div>
                  </div>

                  <div className="hover-container">
                      <img className="hover-item-scale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrYLqm52KIn6zAH25GbsJDnYEkuEgkIYwLxPz0uEpot0UgxGIr"/>
                  </div>
              </div>
          </div>
        );
    }
}
