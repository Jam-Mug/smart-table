import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const comparator = createComparison(
        [rules.skipEmptyTargetValues],
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        if (action && action.name === 'search') {
            return comparator(data, action.payload?.value || '');
        }
        return data;
    };
}
