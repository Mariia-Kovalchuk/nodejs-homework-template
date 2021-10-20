const usersHendlers = require('../../services/users')
const path = require('path')
const fs = require("fs/promises");
var Jimp = require('jimp');


const updateAvatar = async (req, res, next) => {
  const { path: tempDir, filename } = req.file;
  const { user: { _id } } = req;

  const uploadDir = path.join(process.cwd(), "public\\avatars", filename);
  try {
    const img = await Jimp.read(tempDir)
    img.resize(250, 250).writeAsync(tempDir)
    await fs.rename(tempDir, uploadDir);
    const user = await usersHendlers.updateAvatar(_id, uploadDir);
    if (user) {
      res.json({ avatarURL: user.avatarURL })
    }
  } catch (err) {
    await fs.unlink(tempDir)
    return next(err)
  }

}

module.exports = updateAvatar
