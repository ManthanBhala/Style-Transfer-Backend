const express = require('express');
const router = express.Router();
const multer  = require('multer');
const { exec } = require('child_process');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../style-transfer-frontend/src/database/inputs/')
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "content") {
        cb(null, 'content.png');
    }
    else if (file.fieldname === "style") {
        cb(null, 'style.png');
    }
    else if (file.fieldname === "style1") {
        cb(null, 'style1.png');
    }
    else if (file.fieldname === "style2") {
        cb(null, 'style2.png');
    }
  }
});

const upload = multer({ storage: storage });

router.post('/queryaddstyle', upload.fields([{name: 'content', maxCount: 1}, {name: 'style', maxCount: 1}]), (req, res) => {
    exec('sh ./query-service/addStyleService.sh', (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        };
    });
});

router.post('/querycustomizedstyle', upload.fields([{name: 'content', maxCount: 1}, {name: 'style', maxCount: 1}]), (req, res) => {
    exec('sh ./query-service/customizedStyleService.sh ' + req.body.alpha, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        };
    });
});

router.post('/querymultiplestyles', upload.fields([{name: 'content', maxCount: 1}, {name: 'style1', maxCount: 1}, {name: 'style2', maxCount: 1}]), (req, res) => {
    exec('sh ./query-service/multipleStylesService.sh ' + req.body.alpha + ' ' + req.body.beta, (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        };
    });
});

module.exports = router;