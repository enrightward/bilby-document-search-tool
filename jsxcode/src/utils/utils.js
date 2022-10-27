export const findMatches = (
    searchQuery,
    searchFieldName,
    searchData,
    autoCompleteLimit
) => {
    let result = searchData.filter((item) => {
        const searchTerm = searchQuery.toLowerCase()
        const fieldEntry = item[searchFieldName].toLowerCase()
        const boolFilter = searchTerm && fieldEntry.includes(searchTerm)
        // fieldEntry.includes(searchTerm) &&
        // fieldEntry !== searchTerm
        return boolFilter
    })
    console.log("len(matches): ", result.length)
    result = result.slice(0, autoCompleteLimit)
    return result
}
