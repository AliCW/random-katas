const findIndex = (needle, haystack) => {
    return haystack.search(needle);
};

//return the first occurance index of the given needle in haystack - return -1 if not found

module.exports = { findIndex }

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/