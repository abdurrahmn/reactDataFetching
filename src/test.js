import React from 'react';

export default class dataFetch extends React.Component {
    state = {
        yukleniyor: true,
        birey: null,
    };

    async componentDidMount() {
        const link = "https://api.randomuser.me";
        const donut = await fetch(link);
        const veri = await donut.json();
        this.setState({ birey: veri.results[0], yukleniyor: false });
    }

    render() {
        if (this.state.yukleniyor) {
            return <div>Yükleniyor</div>;
        }

        if (!this.state.birey) {
            return <div>Kişiler Yüklendi</div>;
        }
        return (
            <div>
                <div>{this.state.birey.login.password} </div>
                <img src={this.state.birey.picture.large} />
            </div>
        );
    }
}