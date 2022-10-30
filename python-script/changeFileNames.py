import os
import re

def isDir(file_folder_name):
    return '.' not in file_folder_name

def filterNonImageDir(directory):
    incorrects = ['css', 'python-script']
    return directory not in incorrects

def getAllImages(directory):
    files = os.listdir(directory)
    files_number_name = []
    files_string_name = []
    for filename in files:
        if(filename.endswith('.jpg')):
            if(filename[:-4].isdigit()):
                files_number_name.append(filename)
            else:
                files_string_name.append(filename)
    files_string_name.sort()
    files_number_name.sort(key=lambda f: int(re.sub('\D', '', f)))
    return files_number_name + files_string_name

def changeFiles(directory_path, filenames):
    for i in range(len(filenames)):
        os.rename(os.path.join(directory_path, filenames[i]), os.path.join(directory_path, str(i+1) + ".jpg"))



IMAGE_PATH = "./src/assets/"
files_directories = os.listdir(IMAGE_PATH)
directories = list(filter(isDir, files_directories))
image_directories = list(filter(filterNonImageDir, directories))

for image_directory in image_directories:
    path = os.path.join(IMAGE_PATH,image_directory)
    filenames = getAllImages(path)
    changeFiles(path, filenames)
