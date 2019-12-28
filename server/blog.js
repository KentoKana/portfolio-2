const fs = require('fs');
const path = require('path');

class Blog {

    constructor() {
        this.pathToBlogDir = path.join(__dirname, '../blog/');
        this.postFileNames = this.getPostFileNames();
    }

    getPostFileNames = () => {
        let postFileNames = fs.readdirSync(this.pathToBlogDir, []).filter(f => f.includes(".md"));
        return postFileNames;
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

    getPostByID = (blogArray, id) => {
        return blogArray.find((obj) => { return obj.id === parseInt(id); });
    }

    buildBlogJSON = () => {

        let blogJSON = this.postFileNames.map((f, index) => {

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
                id: index,
                timeCreated: fileCreationTime,
                fileName: f,
                author: author,
                postName: postname,
                tags: tags,
                content: content
            };

        })
        return [...blogJSON]
    };
}

module.exports = {
    buildBlog: new Blog,
}

