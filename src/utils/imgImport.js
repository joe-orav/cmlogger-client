function imgImport(r) {
    var imgFiles = {};

    r.keys().forEach(key => {
        imgFiles[key.match(/[\w|-|\s]+(?=\.[png|jpg|svg])/)] = r(key);
    });

    return imgFiles;
}

export default imgImport;