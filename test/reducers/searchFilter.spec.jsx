import searchFilter from '../../src/reducers/searchFilter.reducer';


describe("searchFilter reducer actions ", () => {

    it("testing default action", () => {
        const action = { type: "default" }
        const result = searchFilter('', action);

        expect(result).toEqual('');
    });

    it("testing default action", () => {
        const action = { type: "SEARCH", searchString:'searchString' }
        const result = searchFilter('', action);

        expect(result).toEqual('searchString');
    });

});