const ChannelID = "UC46zRme2Bk0iCdhT-3J-Sjw";
const APIKey = "AIzaSyCcQioG7YFXwKykkv1QIPr4eUdEuoIBYAs";
const APIEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${ChannelID}&part=snippet,id&order=date`;

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}