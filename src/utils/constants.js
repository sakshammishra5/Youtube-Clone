const GOOGLE_API_KEY = "AIzaSyDZL-Ylqg-02_SEjY6AW693PY9nKWwt3Cc"
export const YOUTUBE_VIDEO_API = "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const YOUTUBE_SEARCH_RESULTS_API=`https://corsproxy.io/?https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}
&part=snippet
&q=`

export const Comment_List_API=`https://corsproxy.io/?https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`

export const YOUTUBE_SEARCH_BAR_RESULT_API=`https://corsproxy.io/?https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=`