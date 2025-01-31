const multer = require('multer');
const path = require('path');

// Memory storage for multer
const storage = multer.memoryStorage();

// File type and size filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    // Check for allowed file types
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error('Wrong file type');
        return cb(error, false); // Multer will handle the error
    }

    // Check for file size limit
    if (file.size > 5 * 1024 * 1024) { // 5MB
        const error = new Error('File size too large');
        return cb(error, false);
    }

    // If everything is fine, pass control to the next middleware
    cb(null, true);
};

// Export multer configuration
module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Max size set directly in multer limits
}).single('image');
