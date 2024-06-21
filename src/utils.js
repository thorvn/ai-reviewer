import * as fs from "fs";
import * as path from "path";
import * as os from "os";

const WORK_FOLDER_PATH = ".reviewer";
const FILE_NAME = "diff.txt";

const getDiffData = () => {
  const a = fs.readFileSync(path.join(os.homedir(), WORK_FOLDER_PATH, FILE_NAME), "utf8");
  return a;
};

const isFileExist = () => {
  try {
    if (!fs.existsSync(path.join(os.homedir(), WORK_FOLDER_PATH))) {
      fs.mkdirSync(path.join(os.homedir(), WORK_FOLDER_PATH));
    }

    if (!fs.existsSync(path.join(os.homedir(), WORK_FOLDER_PATH, FILE_NAME))) {
      console.log("Plz provide changes file");
      return false;
    }
    return true;
  } catch (err) {
    console.log('hihi')
    console.error(err);
    return false;
  }
};

export { getDiffData, isFileExist };
