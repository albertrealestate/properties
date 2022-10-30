import os

def removeBreak(s):
	return s[:-1]

f = open("wow.txt", "r")
data = list(map(removeBreak, f.readlines()))

for i in range(len(data)-1, -1, -1):
	if data[i] != str(i+1) + ".jpg":
		command = "mv " + data[i] + " " + str(i + 1) + ".jpg"
		os.system(command)
		print(command)
