require('dotenv').config();
const { S3Client, PutObjectCommand,DeleteObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
// Initialize AWS S3 client
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Upload file to S3
exports.uploadFileToS3 = async (buffer, filename, mimetype) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `Productimages/${filename}`, // File will be uploaded to 'images/' folder in S3
        Body: buffer, // Use the file buffer from memory
        ContentType: mimetype, // Set the content type based on the file's mimetype
    };

    try {
        const data = await s3Client.send(new PutObjectCommand(params));
        return data;
    } catch (err) {
        console.error('Error uploading image to S3:', err);
        throw new Error('Error uploading image');
    }
};

exports. deleteFileFromS3 = async (key) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key, // The key of the file to be deleted
    };

    try {
        const data = await s3Client.send(new DeleteObjectCommand(params));
        return data;
    } catch (err) {
        console.error('Error deleting image from S3:', err);
        throw new Error('Error deleting image');
    }
};
