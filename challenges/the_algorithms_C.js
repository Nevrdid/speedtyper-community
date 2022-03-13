const the_algorithms_c = {
	"twoSum",
	"addTwoNumbers",
	"longestSubStr",
	"medianOfTwoArrays",
	"zigZagConv",
	"RevInt",
	"atoi",
	"palindromeNb",
	"containerWithMost",
	"intToRoman",
	"romanToInt",
	"validParentheses",
	"mergeTwoLists",
	"swapNodesInPairs",
	"removDupFromArrays",
	"removElement",
	"strStr",
	"divideTwoInt",
	"searchInsertPos",
	"countAndSay",
	"maxSubarray",
	"plusOne",
	"removDupFromListII",
	"removDuFromList",
	"binTreeInorderTransv",
	"symmTree",
	"maxDepthOfBST",
	"convArrayToBST",
	"convListToBST",
	"balancedBST",
	"pathSum",
	"bestTimeToBnS",
	"validPalindrome",
	"singleNumber",
	"linkCycleList",
	"linkCycleListII",
	"findMinInRotSortArray",
	"interOfTwoLinkLists",
	"majElem",
	"bSTIterator",
	"rotArray",
	"revBits",
	"nbOfOneBits",
	"bitwiseAndOfNbRange",
	"rmLinkedListElem",
	"rmLinkedList",
	"kthLargestElem",
	"containDup",
	"invertBST",
	"powerTwo",
	"palindLinkList",
	"validAnagram",
	"missingNb",
	"firstBadVersion",
	"moveZeroes",
	"findDupNb",
	"revStr",
	"validPerfSqr",
	"firstUniqChInStr",
	"findTheDiff",
	"sumOfLeftLeaves",
	"findAllDupInArray",
	"hammingDist",
	"nbComplement",
	"fibonacciNb",
	"detectCap",
	"arrayPart",
	"mergeTwoBST",
	"palindSubStr",
	"longestContIncrSubseq",
	"seachInBST",
	"insertInBST",
	"binSearch",
	"toLowCase",
	"jewAndStones",
	"peakIdInMountainArray",
	"midOfLinkList",
	"sortArrayByParity",
	"revOnlyLetters",
	"rangeSumOfBST",
	"univaluedBST",
	"sqrOfSortedArray",
	"dupZeros",
	"distBetweenStops",
	"maxNbOfBaloons",
	"uniqNbOfOccurences",
}

const ids = {
	"twoSum": 1,
	"addTwoNumbers": 2,
	"longestSubStr": 3,
	"medianOfTwoArrays": 4,
	"zigZagConv": 6,
	"RevInt": 7,
	"atoi": 8,
	"palindromeNb": 9,
	"containerWithMost": 11,
	"intToRoman": 12,
	"romanToInt": 13,
	"validParentheses": 20,
	"mergeTwoLists": 21,
	"swapNodesInPairs": 24,
	"removDupFromArrays": 26,
	"removElement": 27,
	"strStr": 28,
	"divideTwoInt": 29,
	"searchInsertPos": 35,
	"countAndSay": 38,
	"maxSubarray": 53,
	"plusOne": 66,
	"removDupFromListII": 82,
	"removDuFromList": 83,
	"binTreeInorderTransv": 94,
	"symmTree": 101,
	"maxDepthOfBST": 104,
	"convArrayToBST": 108,
	"convListToBST": 109,
	"balancedBST": 110,
	"pathSum": 112,
	"bestTimeToBnS": 121,
	"validPalindrome": 125,
	"singleNumber": 136,
	"linkCycleList": 141,
	"linkCycleListII": 142,
	"findMinInRotSortArray": 153,
	"interOfTwoLinkLists": 160,
	"majElem": 169,
	"bSTIterator": 173,
	"rotArray": 189,
	"revBits": 190,
	"nbOfOneBits": 191,
	"bitwiseAndOfNbRange": 201,
	"rmLinkedListElem": 203,
	"rmLinkedList": 206,
	"kthLargestElem": 215,
	"containDup": 217,
	"invertBST": 226,
	"powerTwo": 231,
	"palindLinkList": 234,
	"validAnagram": 242,
	"missingNb": 268,
	"firstBadVersion": 278,
	"moveZeroes": 283,
	"findDupNb": 287,
	"revStr": 344,
	"validPerfSqr": 367,
	"firstUniqChInStr": 387,
	"findTheDiff": 389,
	"sumOfLeftLeaves": 404,
	"findAllDupInArray": 442,
	"hammingDist": 461,
	"nbComplement": 476,
	"fibonacciNb": 509,
	"detectCap": 520,
	"arrayPart": 561,
	"mergeTwoBST": 617,
	"palindSubStr": 647,
	"longestContIncrSubseq": 674,
	"seachInBST": 700,
	"insertInBST": 701,
	"binSearch": 704,
	"toLowCase": 709,
	"jewAndStones": 771,
	"peakIdInMountainArray": 852,
	"midOfLinkList": 876,
	"sortArrayByParity": 905,
	"revOnlyLetters": 917,
	"rangeSumOfBST": 938,
	"univaluedBST": 965,
	"sqrOfSortedArray": 977,
	"dupZeros": 1089,
	"distBetweenStops": 1184,
	"maxNbOfBaloons": 1189,
	"uniqNbOfOccurences": 1207,
}
module.exports = the_algo_c.map((name) => ({
  name,
  project: "The_Algorithms_C",
  projectUrl: "https://github.com/TheAlgorithms/C",
  license: "GPL-3.0",
  licenseUrl: "https://github.com/TheAlgorithms/C/blob/master/LICENSE",
  source: `https://raw.githubusercontent.com/TheAlgorithms/C/master/leetcode/src/${id[${name}]}.c`,
  language: "C",
}));
