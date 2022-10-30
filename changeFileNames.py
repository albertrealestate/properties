import os
import re
import random
import string

def isDir(file_folder_name):
    return '.' not in file_folder_name

def filterNonImageDir(directory):
    incorrects = ['css', 'python-script']
    return directory not in incorrects

def getAllImages(directory):
    files = os.listdir(directory)
    files_name = []
    for filename in files:
        if(filename.endswith('.jpg')):
            files_name.append(filename)
    files_name.sort(key=lambda f: int(re.sub('\D', '', f)))
    return files_name

def generateRandomName():
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(10))

def changeFiles(directory_path, filenames):
    random_names = [generateRandomName() for _ in range(len(filenames))]
    #give it a fake name
    for i in range(len(filenames)):
        os.rename(os.path.join(directory_path, filenames[i]), os.path.join(directory_path, random_names[i] + ".jpg"))

    #give it the real name
    for i in range(len(random_names)):
        os.rename(os.path.join(directory_path, random_names[i]+ ".jpg"), os.path.join(directory_path, str(i+1) + ".jpg"))

def main():
    IMAGE_PATH = "./src/assets/"
    files_directories = os.listdir(IMAGE_PATH)
    directories = list(filter(isDir, files_directories))
    image_directories = list(filter(filterNonImageDir, directories))
    for image_directory in image_directories:
        path = os.path.join(IMAGE_PATH,image_directory)
        filenames = getAllImages(path)
        changeFiles(path, filenames)

main()
input("Done !\n")
