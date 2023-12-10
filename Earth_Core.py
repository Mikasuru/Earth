#----------------------------------------------------------------------------------------------------------------

import time, os
from termcolor import colored
import PySimpleGUI as sg


clear = lambda: os.system('cls')

def create (msg, color, num, m1):
    print(colored("["+m1+"]: "+"Creating: "+msg, color))
    time.sleep(num)

GENERATE = 0

def Log(msg, col):
    print(colored("[System]: "+msg, col))

def s(n):
    time.sleep(n)

def generate_earth_structure():
    for layer, color in [
        ("Crust", "red"),
        ("Mantle", "yellow"),
        ("Outer Core", "yellow"),
        ("Inner Core", "yellow"),
    ]:
        create(f"- {layer}", color, 1, "Loading")

def checking():
    folder_path = "database"
    file_path = os.path.join(folder_path, "earth_data.txt")

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    if not os.path.exists(file_path):
        with open(file_path, "w") as f:
            pass

    with open(file_path, "r") as f:# Here, We will read the file
        content = f.read()

    found = "Generated Earth Structure" in content # Write file
    is_empty = os.stat(file_path).st_size == 0 # If the file empty

    if is_empty:
        with open(file_path, "w") as f:
            f.write("Generated structure successfully\n") # Write file
    else:
        pass

    #--Logging result
    if found:
        GENERATE = 1




if GENERATE == 1:
    #       ---Loading Earth Structure
    generate_earth_structure()
else:
    Log("You already create the structure.", "green")
    s(1)
    Log("Skipping...", "green")
    s(1)
    os.system("CLS")
    pass

sg.change_look_and_feel('Dark Blue 3')
layout = [
         [sg.Text('Earth Create Successfully!!')]]      
window = sg.Window(f'Earth by Mikasuru', layout)    
event, values = window.read() 
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED or event == 'Cancel': # if user closes window or clicks cancel
        break 


#time.sleep(5)
os._exit()



#--------------------------------------------------------  --------------------------------------------------------
