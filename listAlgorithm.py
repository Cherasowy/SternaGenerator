#IMPORTS
import sys

# FUNCTION DEFINITIONS
def findSmallReadyandDue(tasks):
    
    return tasks[0]["number"]

def makeOrder(tasks,numberOfTasks):
    currentTime = 0
    p1End = 0
    p2End = 0
    p3End = 0
    p4End = 0
    p1 = []
    p2 = []
    p3 = []
    p4 = []
    for i in range(numberOfTasks):
        #assign empty processes fast
        if p1End == 0:
            numberOfTaskToMake = findSmallReadyandDue(tasks)
            p1.append(numberOfTaskToMake)
            p1End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            continue
        if p2End == 0:
            numberOfTaskToMake = findSmallReadyandDue(tasks)
            p2.append(numberOfTaskToMake)
            p2End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            continue
        if p3End == 0:
            numberOfTaskToMake = findSmallReadyandDue(tasks)
            p3.append(numberOfTaskToMake)
            p3End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            continue
        if p4End == 0:
            numberOfTaskToMake = findSmallReadyandDue(tasks)
            p4.append(numberOfTaskToMake)
            p4End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            continue
        else:
            smallestTime = min([p1End,p2End,p3End,p4End])
            if(smallestTime == p1End):
                numberOfTaskToMake = findSmallReadyandDue(tasks)
                p1.append(numberOfTaskToMake)
                p1End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            elif(smallestTime == p2End):
                numberOfTaskToMake = findSmallReadyandDue(tasks)
                p2.append(numberOfTaskToMake)
                p2End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            elif(smallestTime == p3End):
                numberOfTaskToMake = findSmallReadyandDue(tasks)
                p3.append(numberOfTaskToMake)
                p3End += tasks.pop(numberOfTaskToMake - 1)["duration"]
            elif(smallestTime == p4End):            
                numberOfTaskToMake = findSmallReadyandDue(tasks)
                p4.append(numberOfTaskToMake)
                p4End += tasks.pop(numberOfTaskToMake - 1)["duration"]
    return [p1,p2,p3,p4]
    

def produceTask(data):
    idx, el = data
    task = {
        "duration" : int(el.split(" ")[0]),
        "ready" : int(el.split(" ")[1]),
        "due" : int(el.split(" ")[2]),
        "number": idx
    }
    return task

folder = sys.argv[1]
filesArray = ["test_50.txt","test_100.txt","test_150.txt","test_200.txt","test_250.txt","test_300.txt","test_350.txt","test_400.txt","test_450.txt","test_500.txt"]

for file in filesArray:
    fileIO = open(folder + "/" + file,"r")
    fileLines = fileIO.readlines()
    numberOfTasks = int(fileLines[0])
    tasksText = fileLines[1:]
    tasks = list(map(produceTask, enumerate(tasksText)))
    print(numberOfTasks)
    print(tasks[0]["duration"])
    print(tasks[0]["ready"])
    print(tasks[0]["due"])
    processOrders = makeOrder(tasks,numberOfTasks)
    print(processOrders)
    print("____________________________NEXT_________________________")
    # delay = countDelay(processOrders, )





