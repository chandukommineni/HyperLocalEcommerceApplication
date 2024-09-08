import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.memoryStorage(),  // Store file in memory temporarily
  // limits: {fileSize: 1000000},
  fileFilter: async function (req, file, cb){
    checkFileType(file, cb);
  }
});

const checkFileType = (file, cb) =>{
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if(mimeType && extName){
        return cb(null, true);
    }else{
        return cb("Error: Images Only!");
    }
}

export {upload}