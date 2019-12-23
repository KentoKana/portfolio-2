const fs = require('fs');
const path = require('path');

class Blog {

    constructor() {
        this.pathToBlogDir = path.join(__dirname, '../blog/');
        this.postFileNames = this.getPostFileNames();
    }

    getPostFileNames = () => {
        let postFileNames = fs.readdirSync(this.pathToBlogDir, []);
        return postFileNames
    }

    getPostFileCreationTime = (filePath) => {
        let fileStat = (fs.statSync(filePath));
        return fileStat.atimeMs;
    }

    getFileCreationTime = (postFileName) => {
        return this.getPostFileCreationTime(this.pathToBlogDir + "/" + postFileName);
    }

    getFileTextContent = (pathToFile) => {
        return fs.readFileSync(pathToFile).toString();
    }

    buildBlogJSON = () => {

        let blogJSON = this.postFileNames.map((f) => {

            // Get time at which file was created
            let fileCreationTime = this.getFileCreationTime(f);

            // Get File Content
            let rawText = this.getFileTextContent(this.pathToBlogDir + "/" + f);

            // Filter characters for author
            let author = rawText.substring(
                rawText.lastIndexOf("\r\nauthor--") + 11,
                rawText.lastIndexOf("\r\n--author")
            )

            // filter characters for content
            let content = rawText.substring(
                rawText.lastIndexOf("\r\ncontent--") + 13,
                rawText.lastIndexOf("\r\n--content")
            )

            // Filter Characters for tags
            let tags = rawText.substring(
                rawText.lastIndexOf("\r\ntags--") + 10,
                rawText.lastIndexOf("\r\n--tags")
            )
            tags = tags.replace(/(?:\\[rn]|[\r\n]+)+/g, "");;
            tags = tags.split(',');

            //Filter Characters for postname
            let postname = rawText.substring(
                rawText.lastIndexOf("\r\npostname--") + 14,
                rawText.lastIndexOf("\r\n--postname")
            )

            return {
                timeCreated: fileCreationTime,
                fileName: f,
                author: author,
                postname: postname,
                tags: tags,
                content: content,
                // rawText: rawText,
            };

        })

        return {
            posts: {
                ...blogJSON
            }
        };
    }
}

module.exports = {
    buildBlog: new Blog,
}



//Convert array into JSON 
// let blogJSON = file.reduce((acc, curr) => {
//     console.log(acc);
//     acc[curr] = {};
//     return acc
// }, {})
// console.log(blogJSON);
