import pyautogui
import sys
import time

def send_print_job(file_path):
    # Open KXSoftware
    pyautogui.hotkey('win', 'r')
    pyautogui.typewrite('KXSoftware.exe')
    pyautogui.press('enter')
    time.sleep(5)  # Wait for the application to open

    # Interact with the KXSoftware to load the file
    pyautogui.click(x=100, y=200)  # Coordinates of the open file button/menu
    pyautogui.typewrite(file_path)
    pyautogui.press('enter')
    time.sleep(1)  # Adjust timing as needed

    # Send the print command
    pyautogui.click(x=200, y=300)  # Coordinates of the print button
    time.sleep(2)  # Adjust timing as needed

    # Close the application if necessary
    pyautogui.hotkey('alt', 'f4')

if __name__ == "__main__":
    file_path = sys.argv[1]
    send_print_job(file_path)
