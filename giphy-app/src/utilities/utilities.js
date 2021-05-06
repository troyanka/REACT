export const buildURLSearchParamsByValue = (paramName, paramValue) => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);

    if (params.has(paramName)) {
        params.set(paramName, paramValue);
    }
    else {
        params.append(paramName, paramValue);
    }

    window.location.hash = `?${params.toString()}`;
}

export const getURLSearchParams = () => {
    const paramsPart = new URLSearchParams(window.location.hash.split("?")[1]);
    return Array.from(paramsPart.entries()).reduce((resultsHash, item) => (
        {
            ...resultsHash,
            [item[0]]: item[1]
        }
    ), {});
}

export const sortByField = (results, sortValue) => {

    if (!sortValue) {
        return results;
    }
    // TODO: check how to make in enums
    switch (sortValue) {
        case 'imported_date_asc': {
            return results?.sort((a, b) => new Date(a.import_datetime) > new Date(b.import_datetime) ? 1 : -1);
        }
        case 'imported_date_desc': {
            return results?.sort((a, b) => new Date(a.import_datetime) > new Date(b.import_datetime) ? -1 : 1);
        }
        case 'title_asc': {
            return results?.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        }
        case 'title_desc': {
            return results?.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1);
        }
        default:
            return results;
    }
}