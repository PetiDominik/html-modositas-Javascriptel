import os

fileEnds: list[str] = [".py", ".txt"]
files: list[str] = os.listdir(os.getcwd())


str: str = "["
for file in files:
    for fileEnd in fileEnds:
        if fileEnd not in file:
            str +=f"\"{file}\", "

with open("ki.txt", "w", encoding="utf-8") as ki:
    ki.write(f"{str}]\n")