const {google} = require('googleapis');
const {authenticate} = require('@google-cloud/local-auth');
const path = require('path');

const ChannelID = "UC46zRme2Bk0iCdhT-3J-Sjw";
const APIKey = "AIzaSyDVf4Ym29FYv18xQlsaeYtyF3F8jwNQv5Y";

exports.onCreateNode = ({ node }) => {
  // console.log(node.internal.type)
}

let yt = google.youtube('v3');

exports.createPages = async ({ actions: { createPage } }) => {

  /* createPage({
    path: `/videos/`,
    component: require.resolve("./src/templates/videos.jsx"),
    context: { allVideos },
  }) */
}