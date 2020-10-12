import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const response = await fetchData();
    this.setState({
      data: response,
    });
  }
  handleCountryChange = async (country) => {
    const response = await fetchData(country);
    this.setState({
      data: response,
      country:country
    });
  };
  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src={coronaImage}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
