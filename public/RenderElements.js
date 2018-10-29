class Logo extends React.Component {
    onClickEvent = () => {
        this.props._HomePage();
    }
    render() {
        return (
            <div className="trademarkz d-flex align-items-start" onClick={this.onClickEvent} >
                <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 28 28">
                    <g>
                        <path id="path1" transform="rotate(0,14,14) translate(8.34465026855469E-07,0) scale(0.875,0.875)  " fill="#FF6600" d="M15.530994,27.095991L16.530994,27.095991 16.530994,32 15.530994,32z M7.8219934,23.514999L8.5289917,24.222 5.0620008,27.689003 4.3550024,26.982002z M24.222001,23.470993L27.688991,26.937996 26.981994,27.644997 23.515002,24.177994z M0,15.530994L4.9040084,15.530994 4.9040084,16.530994 0,16.530994z M27.095992,15.469006L31.999999,15.469006 31.999999,16.469006 27.095992,16.469006z M15.998987,6.474987C21.259971,6.4749874 25.524007,10.739986 25.524007,15.99998 25.524007,21.259989 21.259971,25.524986 15.998987,25.524986 10.739011,25.524986 6.4750061,21.259989 6.4750061,15.99998 6.4750061,10.739986 10.739011,6.4749874 15.998987,6.474987z M5.0179954,4.355001L8.4850121,7.8220043 7.778008,8.5290051 4.3109918,5.0620012z M26.93797,4.3110037L27.644969,5.018002 24.177978,8.484993 23.470981,7.7779946z M15.469006,0L16.469006,0 16.469006,4.9039931 15.469006,4.9039931z" />
                    </g>
                </svg>

                <h4 className="d-none logozz d-sm-inline" >WEATHER</h4>
            </div>
        );
    }
}





class InputSearch extends React.Component {
    inputz = (e) => {
        this.props.inputt(e.target.value);
    }
    enterz = (e) => {
        this.props._enterz(e.key);
    }
    render() {
        return (
            <input id="Search" className=" searcharea mr-0" onChange={this.inputz} onKeyPress={this.enterz} placeholder="Search" aria-label="Search" style={this.props.styleInput} type="text" />
        );
    }
}




class ButtonSearch extends React.Component {
    onClickEvent = () => {
        this.props.onClickNoEvent();
    }
    render() {
        return (
            <button onClick={this.onClickEvent} className="searchbutton py-1 " data-toggle="collapse" data-target="#searchbar" aria-controls="searchbar"
                aria-expanded="false" >
                {this.props.buttonz}
            </button >
        );
    }
}





class SearchDetails extends React.Component {
    pickCity = (value) => {
        this.props._pickCity(value)
    }
    render() {
        if (this.props._citySearch == []) {
            return (<div></div>);
        }
        else {
            var _searchDetail = this.props._citySearch.map(e => {
                return (<SearchItem key={e.key} _pickCity={this.pickCity} city={e.LocalizedName} country={e.Country.ID} />);
            })
            return (<div className="  dropdown-content">
                {_searchDetail}
            </div>);
        }
    }
}


class SearchItem extends React.Component {
    pickCity = () => {
        this.props._pickCity(this.props);
    }
    render() {
        return (<div className="CityItem" onClick={this.pickCity}>{this.props.city},&nbsp;{this.props.country}</div>);
    }
}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ isClick: false })
    }
    onClickNoEvent = () => {
        this.setState({
            isClick: !this.state.isClick
        });
        this.props.buttonz(this.state.isClick);
    }
    inputzz = (value) => {
        this.props.getInput(value);
    }
    onEnterz = (value) => {
        this.props.confirmSearch(value);
    }
    pickCity = (value) => {
        this.props._pickCity(value)
    }
    render() {
        const _isClick = this.state.isClick;
        const styleInput = _isClick ? { visibility: "visible" } : { visibility: "hidden" };
        const buttonz = _isClick ? (<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
            <g>
                <path id="path1" transform="rotate(0,12,12) translate(0.00187468539921554,0) scale(0.750000044703486,0.750000044703486)  " fill="#FF6600" d="M10.661012,7.5689991L7.5990001,10.650999 12.939089,15.997999 7.5990001,21.336999 10.661012,24.405 16.007082,19.065 21.369997,24.405 24.430058,21.336999 24.429081,21.336 19.088991,15.998999 24.429081,10.662001 21.345095,7.5819996 16.007082,12.919001z M15.997072,0C24.828983,0 31.994999,7.1770013 31.994999,15.999998 31.994999,24.826997 24.828007,31.999999 15.997072,31.999999 7.1569835,31.999999 1.5270052E-07,24.826997 0,15.999998 1.5270052E-07,7.1799997 7.1569835,0 15.997072,0z" />
            </g>
        </svg>
        ) : (<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
            <g>
                <path id="path1" transform="rotate(0,12,12) translate(0.000414120088390035,0) scale(0.749976486704826,0.749976486704826)  "
                    fill="#FF6600" d="M11.170988,2.0000026C6.1139962,2.0000026 1.9999944,6.1120075 1.9999944,11.16603 1.9999944,16.219991 6.1139962,20.331996 11.170988,20.331996 16.227981,20.331996 20.341006,16.219991 20.341006,11.16603 20.341006,6.1120075 16.227981,2.0000026 11.170988,2.0000026z M11.170988,0C17.33003,0 22.341001,5.0089787 22.341001,11.16603 22.341001,13.76351 21.449155,16.156669 19.95551,18.055608L19.942527,18.071714 31.999898,30.615001 30.5589,32.001003 18.567029,19.525854 18.476871,19.605846C16.516895,21.303544 13.961804,22.332 11.170988,22.332 5.0119487,22.332 1.6168633E-07,17.32302 0,11.16603 1.6168633E-07,5.0089787 5.0119487,0 11.170988,0z" />
            </g>
        </svg>)
            ;
        return (
            <div>
                <div className="form-inline my-2 my-lg-0 searchz mr-3">
                    <InputSearch styleInput={styleInput} inputt={this.inputzz} _enterz={this.onEnterz} />
                    <ButtonSearch onClickNoEvent={this.onClickNoEvent} buttonz={buttonz} isClick={this.state.isClick} />
                </div>
                <SearchDetails _citySearch={this.props.citySearch} _pickCity={this.pickCity} enter={this.onEnterz} />
            </div>
        );
    };
}

class NavBar extends React.Component {
    inputzz = (value) => {
        this.props.searchz(value);
    }
    onEnterz = (value) => {
        this.props.enter(value);
    }
    Homez = () => {
        this.props.HomePage();
    }
    pickCity = (value) => {
        this.props._pickCity(value)
    }
    _button = (value) =>{
        this.props.buttonz(value);
    }
    render() {
        return (<div className="navbar topbarz ">
            <Logo _HomePage={this.Homez} />
            <Search getInput={this.inputzz} _pickCity={this.pickCity} buttonz={this._button} confirmSearch={this.onEnterz} citySearch={this.props._citySearch} />
        </div>);
    }
}





class Weather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = ({
            searchcity: "",
            city: "hanoi",
            weather: [],
            weathermain: {},
            noti: "",
            currentid: "",
            preid: "",
            cities: [],
            CF: ""
        })
    }


    HomePage = () => {
        this.setState({ city: "hanoi" });
    }


    componentDidMount() {

        var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.city + "&key=4aa70bd602ba4d12842da8391046399f";

        fetch(url).then(response => {
            if (response.status == 200) {
                return response.json()
            }
            else {
                this.setState({ noti: "Something went wrong, sorry about that!" })
            }
        }).then(weatherres => {
            this.setState({
                weather: weatherres,
                weathermain: weatherres.data[0],
                currentid: weatherres.data[0].valid_date
            });


            if (this.state.weathermain.weather.code == 200 || this.state.weathermain.weather.code == 201 || this.state.weathermain.weather.code == 202) {
                document.body.style.backgroundImage = "url('200.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 501 || this.state.weathermain.weather.code == 500 || this.state.weathermain.weather.code == 502) {
                document.body.style.backgroundImage = "url('501.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 230 || this.state.weathermain.weather.code == 231 || this.state.weathermain.weather.code == 232) {
                document.body.style.backgroundImage = "url('230.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 233) {
                document.body.style.backgroundImage = "url('233.png')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 300 || this.state.weathermain.weather.code == 301 || this.state.weathermain.weather.code == 302) {
                document.body.style.backgroundImage = "url('300.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 511) {
                document.body.style.backgroundImage = "url('511.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 520 || this.state.weathermain.weather.code == 521 || this.state.weathermain.weather.code == 522) {
                document.body.style.backgroundImage = "url('520.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 600 || this.state.weathermain.weather.code == 601 || this.state.weathermain.weather.code == 602) {
                document.body.style.backgroundImage = "url('600.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 610 || this.state.weathermain.weather.code == 611 || this.state.weathermain.weather.code == 612) {
                document.body.style.backgroundImage = "url('610.jpg')"
                document.body.style.color = "#ffdb3a";
            } else if (this.state.weathermain.weather.code == 621 || this.state.weathermain.weather.code == 622 || this.state.weathermain.weather.code == 623) {
                document.body.style.backgroundImage = "url('621.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 700 || this.state.weathermain.weather.code == 711 || this.state.weathermain.weather.code == 721 || this.state.weathermain.weather.code == 731 || this.state.weathermain.weather.code == 741 || this.state.weathermain.weather.code == 751) {
                document.body.style.backgroundImage = "url('700.jpg')"
                document.body.style.color = "#4bff90";
            }
            else if (this.state.weathermain.weather.code == 800) {
                document.body.style.backgroundImage = "url('800.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 801 || this.state.weathermain.weather.code == 802 || this.state.weathermain.weather.code == 803) {
                document.body.style.backgroundImage = "url('801.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 804) {
                document.body.style.backgroundImage = "url('804.jpg')"
                document.body.style.color = "#ffffff";
            }

            document.getElementById(this.state.currentid).className = "live__scroll--box align-self-baseline daychoose";

        })
    }
    componentDidUpdate(prevProps, prevState) {

        if (this.state.CF != prevState.CF) {
            var weathermain = this.state.weathermain;
            var weather = this.state.weather;


            if (this.state.CF == "F") {
                for (var i = 0; i < 16; i++) {
                    weather.data[i].temp = parseFloat((weather.data[i].temp * 1.8) + 32).toFixed(1);
                    weather.data[i].min_temp = parseFloat((weather.data[i].min_temp * 1.8) + 32).toFixed(1);
                    weather.data[i].max_temp = parseFloat((weather.data[i].max_temp * 1.8) + 32).toFixed(1);
                }
            }
            else if (this.state.CF == "C") {
                for (var i = 0; i < 16; i++) {
                    weather.data[i].temp = parseFloat((weather.data[i].temp - 32) / 1.8).toFixed(1);
                    weather.data[i].min_temp = parseFloat((weather.data[i].min_temp - 32) / 1.8).toFixed(1);
                    weather.data[i].max_temp = parseFloat((weather.data[i].max_temp - 32) / 1.8).toFixed(1);
                }
            }


            this.setState({
                weather: weather,
                weathermain: weathermain
            });
        }


        if (this.state.searchcity != prevState.searchcity) {

            if (this.state.searchcity == "") {
                this.setState({ cities: [] });
            }

            var url2 = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=NApTOGvM4b6sxddiIKmPGjBFr8VABQx6&q=" + this.state.searchcity;
            fetch(url2).then(response2 => {
                if (response2.status == 200) {
                    return response2.json()
                }
                else {
                    alert("error " + response2.statusText)
                }
            }).then(listcity => {
                this.setState({ cities: listcity })
            })
        }


        if (this.state.city !== prevState.city) {
            var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.city + "&key=4aa70bd602ba4d12842da8391046399f";

            fetch(url).then(response => {
                if (response.status == 200) {
                    this.setState({ noti: "" });
                    return response.json()
                }
                else {
                    this.setState({ noti: "Can not find country" })
                }
            }).then(weatherres => {
                this.setState({
                    weather: weatherres,
                    weathermain: weatherres.data[0],
                    currentid: weatherres.data[0].valid_date,
                    searchcity: ""
                });

                var weathermain = this.state.weathermain;
                var weather = this.state.weather;

                if (this.state.CF == "F") {
                    for (var i = 0; i < 16; i++) {
                        weather.data[i].temp = parseFloat((weather.data[i].temp * 1.8) + 32).toFixed(1);
                        weather.data[i].min_temp = parseFloat((weather.data[i].min_temp * 1.8) + 32).toFixed(1);
                        weather.data[i].max_temp = parseFloat((weather.data[i].max_temp * 1.8) + 32).toFixed(1);
                    }
                }

                this.setState({
                    weather: weather,
                    weathermain: weathermain
                });

                document.getElementById(this.state.currentid.toString()).className = "live__scroll--box align-self-baseline daychoose";

                try {
                } catch (error) {

                }
                this.setState({ preid: this.state.currentid });
            })
        }


        if (this.state.weathermain != prevState.weathermain) {
            document.getElementById(this.state.currentid).className = "live__scroll--box align-self-baseline daychoose";
            try {
                document.getElementById(this.state.preid).className = "live__scroll--box align-self-baseline";
            } catch (error) {

            }


            this.setState({ preid: this.state.currentid })


            if (this.state.weathermain.weather.code == 200 || this.state.weathermain.weather.code == 201 || this.state.weathermain.weather.code == 202) {
                document.body.style.backgroundImage = "url('200.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 501 || this.state.weathermain.weather.code == 500 || this.state.weathermain.weather.code == 502) {
                document.body.style.backgroundImage = "url('501.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 230 || this.state.weathermain.weather.code == 231 || this.state.weathermain.weather.code == 232) {
                document.body.style.backgroundImage = "url('230.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 233) {
                document.body.style.backgroundImage = "url('233.png')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 300 || this.state.weathermain.weather.code == 301 || this.state.weathermain.weather.code == 302) {
                document.body.style.backgroundImage = "url('300.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 511) {
                document.body.style.backgroundImage = "url('511.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 520 || this.state.weathermain.weather.code == 521 || this.state.weathermain.weather.code == 522) {
                document.body.style.backgroundImage = "url('520.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 600 || this.state.weathermain.weather.code == 601 || this.state.weathermain.weather.code == 602) {
                document.body.style.backgroundImage = "url('600.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 610 || this.state.weathermain.weather.code == 611 || this.state.weathermain.weather.code == 612) {
                document.body.style.backgroundImage = "url('610.jpg')"
                document.body.style.color = "#ffdb3a";
            } else if (this.state.weathermain.weather.code == 621 || this.state.weathermain.weather.code == 622 || this.state.weathermain.weather.code == 623) {
                document.body.style.backgroundImage = "url('621.jpg')"
                document.body.style.color = "#ffdb3a";
            }
            else if (this.state.weathermain.weather.code == 700 || this.state.weathermain.weather.code == 711 || this.state.weathermain.weather.code == 721 || this.state.weathermain.weather.code == 731 || this.state.weathermain.weather.code == 741 || this.state.weathermain.weather.code == 751) {
                document.body.style.backgroundImage = "url('700.jpg')"
                document.body.style.color = "#4bff90";
            }
            else if (this.state.weathermain.weather.code == 800) {
                document.body.style.backgroundImage = "url('800.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 801 || this.state.weathermain.weather.code == 802 || this.state.weathermain.weather.code == 803) {
                document.body.style.backgroundImage = "url('801.jpg')"
                document.body.style.color = "#ffffff";
            }
            else if (this.state.weathermain.weather.code == 804) {
                document.body.style.backgroundImage = "url('804.jpg')"
                document.body.style.color = "#ffffff";
            }
        }
    }


    searchz = (value) => {
        this.setState({ presearchcity: this.state.searchcity });
        this.setState({ searchcity: value });
    }


    enter = (value) => {
        if (value === "Enter") {
            this.setState({ city: this.state.searchcity });
            document.getElementById('Search').value = "";
        }
    }


    selectItem = (value) => {
        this.setState({ preid: this.state.currentid });
        this.setState({ currentid: value.valid_date.toString() });
        this.setState({
            weathermain: value,
            searchcity: ""
        });

    }


    onClickHandle = (value) => {
        var t = value ? "F" : "C";
        this.setState({
            CF: t,
            searchcity: ""
        });
    }


    pickCity = (value) => {
        this.setState({
            city: value.city + ", " + value.country,
            searchcity: ""
        });
        document.getElementById('Search').value = ""
    }

    _button = (value) =>
    {
        if (value == true) {
            this.setState({searchcity: ""});
            document.getElementById('Search').value = ""
        }
    }

    render() {
        return (
            <div>
                <NavBar searchz={this.searchz} buttonz={this._button}_pickCity={this.pickCity} HomePage={this.HomePage} enter={this.enter} _citySearch={this.state.cities} _onClickHandle={this.onClickHandle} />
                <ShowWeather CF={this.state.CF} noti={this.state.noti} weather={this.state.weather} _country={this.state.weather.country_code} _city={this.state.weather.city_name} weatherm={this.state.weathermain} _onClickHandle={this.onClickHandle} _selectItem={this.selectItem} />
            </div>
        );
    }
}


class ShowWeather extends React.Component {
    selectItem = (value) => {
        this.props._selectItem(value);
    }
    onClickHandle = (value) => {
        this.props._onClickHandle(value);
    }
    render() {
        if (this.props.weather.length == 0) {
            return <div></div>;
        }
        var weatherm = this.props.weatherm;
        var _city = this.props._city;
        var _country = this.props._country;
        var noti = this.props.noti;
        var _daily = this.props.weather;
        return (<div>
            <MainWeather value={weatherm} country={_country} noti={noti} city={_city} _onClickHandle={this.onClickHandle} />
            <Daily dailyData={_daily} _noti={noti} _selectItem={this.selectItem} />
        </div>);
    }

}



class DailyItem extends React.Component {
    selectItem = () => {
        this.props._selectItem(this.props._data);
    }
    render() {
        return (
            <div id={this.props._data.valid_date} className="live__scroll--box align-self-baseline" onClick={this.selectItem}>
                <div>{this.props._date}</div>
                <img className="d-inline" height="40" width="40" src={this.props._src} />
                <div>
                    <h5 className="d-inline">{this.props.maxtemp}<sup>o</sup></h5>
                    &nbsp;&nbsp;&nbsp; <span>{this.props.mintemp}<sup>o</sup></span>
                </div>
                <p class="descr">{this.props.description}</p>
            </div>
        );
    }
}




class Daily extends React.Component {
    selectItem = (value) => {
        this.props._selectItem(value);
    }
    _scrollLeft = () => {
        var elmnt = document.getElementById("horizon");
        elmnt.scrollLeft = elmnt.scrollLeft - 100;
    }
    _scrollRight = () => {
        var elmnt = document.getElementById("horizon");
        elmnt.scrollLeft = elmnt.scrollLeft + 100;
    }
    render() {
        if (this.props._noti == "") {
            var dailyWeathersz = this.props.dailyData.data.map(e => {
                var _src = "https://www.weatherbit.io/static/img/icons/" + e.weather.icon + ".png";
                var d = new Date(e.valid_date);
                var day = new Array();
                day[0] = "Sun";
                day[1] = "Mon";
                day[2] = "Tue";
                day[3] = "Wed";
                day[4] = "Thu";
                day[5] = "Fri";
                day[6] = "Sat";
                var _date = (day[d.getDay()] + " " + d.getDate()).toString();
                return (<DailyItem key={e.valid_date} _data={e} _date={_date} _src={_src} _selectItem={this.selectItem} maxtemp={e.max_temp} mintemp={e.min_temp} description={e.weather.description} />);
            });
            return (
                <div className="row d-flex align-items-center d-flex justify-content-center mx-auto px-auto">
                    <svg className="d-none d-md-inline col-2 buttonscr px-0 py-0 mx-0 py-0" xmlns="http://www.w3.org/2000/svg" onClick={this._scrollLeft} height="24" width="24" viewBox="0 0 24 24">
                        <g>
                            <path id="path1" transform="rotate(0,12,12) translate(2.50499939918518,0) scale(0.75,0.75)  " fill="#FFFFFF" d="M25.320001,0L25.320001,32 0,16z" />
                        </g>
                    </svg>
                    <div className="col-8 my-4 col-xs-10 px-0 my-0 dailyz"><h5>Daily</h5>
                        <div className="live__scroll no-gutters" id="horizon">
                            <div className="row text-center justify-content-center no-gutters">
                                <div className="row">
                                    {dailyWeathersz}
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg className="d-none d-md-inline col-2 buttonscr px-0 py-0 mx-0 py-0" xmlns="http://www.w3.org/2000/svg" onClick={this._scrollRight} height="24" width="24" viewBox="0 0 24 24">
                        <g>
                            <path id="path1" transform="rotate(0,12,12) translate(2.55224990844727,0) scale(0.75,0.75)  " fill="#FFFFFF" d="M0,0L25.194,16 0,32z" />
                        </g>
                    </svg>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }
}





class MainWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            isClick: true
        })
    }
    onClickHandle = () => {
        this.setState({ isClick: !this.state.isClick })
        this.props._onClickHandle(this.state.isClick);
    }
    num2 = (number) => {
        number = "0" + number;
        return number.substr(number.length - 2);
    }
    render() {
        var speedw = parseFloat(this.props.value.wind_spd * 3600 / 1000).toFixed(1);
        var imgz = "https://www.weatherbit.io/static/img/icons/" + this.props.value.weather.icon + ".png";
        var temps = this.state.isClick ? "C" : "F";
        var tempb = this.state.isClick ? "F" : "C";
        var d = new Date();
        var timez = this.num2(d.getHours())+":"+this.num2(d.getMinutes())
        if (this.props.noti == "") {
            return (
                <div className="row mx-auto px-auto">
                    <div className="mx-auto currentweatherz align-content-center justify-content-center">
                        <div className="px-auto mx-auto">
                            <h3>{this.props.city}, {this.props.country}</h3>
                        </div>
                        <h5 className="mx-auto px-auto">{this.props.value.valid_date}</h5>
                        <div className="d-inline"><div className="mx-auto px-auto tempz d-inline">
                            <img className="d-inline" height="70" width="70" src={imgz} />{this.props.value.temp}<sup>o</sup>{temps}
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;<span><h2 className="d-inline swapz" onClick={this.onClickHandle} >{tempb}</h2></span></div>
                        <div className="mx-auto px-auto"><h3>{this.props.value.weather.description}</h3></div>
                        <div className="mx-auto px-auto">Update as of {timez}</div>
                        <div className="mx-auto px-auto">Feel Like {this.props.value.temp}<sup>o</sup>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span> Wind {speedw} km/h</span>
                            &nbsp;&nbsp;&nbsp;&nbsp; <span className="d-block">Visibility {parseFloat(this.props.value.vis).toFixed(1)} km</span>
                        </div>
                        <div className="d-block" >
                            <div className="d-inline">Barometer {this.props.value.pres}mb</div>
                            &nbsp;&nbsp;&nbsp;&nbsp; <div className="d-inline">Humidity {this.props.value.rh}%</div>
                            &nbsp;&nbsp;&nbsp;&nbsp; <div className="d-xs-block">Dew Point {this.props.value.dewpt}<sup>o</sup>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div className="row px-auto mx-auto">
                <h1 className="mx-auto currentweatherz align-content-center justify-content-center">{this.props.noti}</h1>
            </div>);
        }
    }
}

ReactDOM.render(
    <Weather />,
    document.getElementById("root")
)