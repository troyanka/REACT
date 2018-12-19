export default class CountriesService{

   baseUrlApi = 'https://restcountries.eu/rest/v2/';

   getData(endPoint){
      return fetch(this.baseUrlApi + endPoint).then(res => res.json());
   }

    getCountries(){
        return this.getData('all');
    }

    searchCapital(capital, countries){
        return countries.find( country => {
            if(country.capital){
                return country.capital.toLowerCase() === capital.toLowerCase();
            }
        } );
    }

    getCapitalsByBorders(borders, countries){
        let capitals = [];
        borders.forEach(border => {
            countries.forEach(country=>{
                if( country.alpha3Code === border){
                    capitals.push(country.capital);
                }
            });
        });
        return capitals;
    }
}
