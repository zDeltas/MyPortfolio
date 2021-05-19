import json
import os
from typing import Dict, List


def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)

def get_file(path):
    return os.path.join(*path)

def jsonParse(path):
    return json.load(open(get_static_file(path), encoding="utf-8"))

def posProject(projects):
    try:
        return int(projects["pos"])
    except KeyError:
        return 0

def removeDupliFromDict(inputList : list):
    result = [i for n, i in enumerate(inputList) if i not in inputList[n + 1:]]
    return result

def removeDupliFromList(inputList):
    result = list()
    for i in inputList:
        for d in i:
            if d not in result:
                result.append(d)
                
    return result