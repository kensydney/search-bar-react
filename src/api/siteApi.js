import axios from "axios";
import config from "../../config";

class SiteApi {
  static getAllSites() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const resp = await axios.get(
          `http://${config.host}:${config.port}/data`
        );
        resolve(Object.assign([], resp.data));
      }, 0);
    });
  }

  static getSearchList(searchTerm) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const resp = await axios.get(
          `http://${config.host}:${config.port}/data`
        );
        let searchResult = this.filterSearchResult(resp.data, searchTerm);
        resolve(Object.assign([], searchResult));
      }, 0);
    });
  }

  static filterSearchResult(data, searchTerm) {
    if (searchTerm.trim() == "") return null;

    let searchTermArr = searchTerm.split(",");
    return data.sites.filter(site => {
      for (let search of searchTermArr) {
        //for each site loop through all search terms which separated by comma
        let processResult = this.processfilter(data, site, search);
        //return the site if match one of search terms no need to finish them all
        if (processResult) return true;
      }
    });
  }

  static processfilter(data, site, search) {
    if (search.trim() == "") return false;

    const searchRE = new RegExp(search.trim(), "i");
    //match the search term with site name
    if (site.siteName.match(searchRE)) return true;

    if (site.categoryIds) {
      //match category description with search term
      for (let id of site.categoryIds) {        
        let foundCategory = data.categories.filter(category => {
          //site's category matches with search term
          if (category.description.match(searchRE) && category.id == id)
            return true;
        });

        //return immediately when one of categories of the site matches
        if (foundCategory.length > 0) return true;
      }
    }
  }
}

export default SiteApi;
