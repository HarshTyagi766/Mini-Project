from email.mime.text import MIMEText
import os
import smtplib
import pickle
import random
from email.mime.multipart import MIMEMultipart
from email.message import EmailMessage
import sys


email_id = "secustore609@gmail.com"
email_password = "zszayshdkumnhuhx"


def mainmenu():
    menu = '''{}
         1.) CREATE A NEW DIRECTORY (PRESS 1) :
         {}  
         2.) ACCESS EXISTING DIRECTORY (PRESS 2) : 
         {}
         3.) CHANGE PASSWORD (PRESS 3) : 
         {}
         4.) CREDITS (PRESS 4) : 
         {}
         5.) DELETE YOUR DIRECTORY (PRESS 5) : 
         {}'''

    menu = menu.format("\n", "\n", "\n", "\n", "\n", "\n")
    print(menu)


def createwritebi():
    with open("backup_directory.txt", "w") as createbi:
        createbi.write("\n")


def writebi(name, number):
    with open("backup_directory.txt", "a") as backup_directory:
        backup_directory.write(name + "-")
        backup_directory.write(number + "\n")


def readirec():
    with open("backup_directory.txt", "r") as backup_directory:
        print(backup_directory.read())

# login and register space


print('''1.) PRESS 1 TO REGISTER : 

2.) PRESS 2 TO LOGIN : ''')

print()

choice1 = int(input("ENTER YOUR CHOICE : "))

print()

if choice1 == 1:
    emailr = str(input("ENTER YOUR EMAIL : "))
    pdr = str(input("ENTER YOUR PASSWORD : "))

    with open("userpwd.dat", "wb") as bipfi:
        pickle.dump(pdr, bipfi)
    with open("useremailfile.dat", "wb") as biefi:
        pickle.dump(emailr, biefi)
    with open("emailforotp.dat", "wb") as emotp:
        pickle.dump(emailr, emotp)

    print()

    print("RESTART THE PROGRAM, AND LOG IN WITH NEW INFORMATION!!")

    sys.exit()
elif choice1 == 2:
    logemail = input("ENTER YOUR EMAIL ID : ")
    logpassword = input("ENTER THE PASSWORD : ")
    with open("useremailfile.dat", "rb") as checkmail:
        em = pickle.load(checkmail)

    checkpd = open("userpwd.dat", "rb")
    pd = pickle.load(checkpd)
    checkpd.close()

    if logemail == em and logpassword == pd:
        mainmenu()

    else:
        print()
        print("USER EMAIL ID OR PASSWORD IS WRONG !!!!")

        print()

        retry = input("PRESS 'Y' TO RETRY !!! OR RESTART THE PROGRAM !!!")

        print()

        if retry == "y" or retry == 'Y':
            for i in range(0, 3):
                logemail = input("ENTER YOUR EMAIL ID : ")
                logpassword = input("ENTER THE PASSWORD : ")
                print()
                with open("useremailfile.dat", "rb") as checkmail:
                    em = pickle.load(checkmail)

                checkpd = open("userpwd.dat", "rb")
                pd = pickle.load(checkpd)
                checkpd.close()

                if logemail == em and logpassword == pd:
                    mainmenu()
                    break

                else:
                    print("WRONG AGAIN !!!")
                    print(
                        "TRY AGAIN OR RESTART THE PROGRAM BEFORE DATA-BASE SELF-DISTRUCTS. ")
                    print()
                    continue
            else:
                print('''               FAILED LOG IN ATTEMPT !!!!
               INTRUDER SPOTTED
               CLEARING THE DATABASE.''')

                with open("useremailfile.dat", "rb") as bck:
                    bckupmail = pickle.load(bck)

                msg = MIMEMultipart()  # mailing the backup directory
                msg["from"] = email_id
                msg["to"] = bckupmail
                msg['subject'] = "Here is your backup directory!!!!"

                with open('backup_directory.txt', 'r') as backup_directory:
                    data = backup_directory.read()

                attachment = MIMEText(open("backup_directory.txt", "r").read())
                attachment.add_header('Content-Disposition', 'attachment', filename="backup_directory.txt")
                msg.attach(attachment)

                with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
                    smtp.ehlo()
                    smtp.starttls()
                    smtp.login(email_id,email_password)
                    smtp.send_message(msg)

                print()
                print("THE BACKUP FOR THE DATABASE HAS BEEN SENT.")
                os.remove("backup_directory.txt")
                sys.exit()
        else:
                print("INVALID SELECTION RESTART THE PROGRAM.")
                sys.exit()

# after a succesful login further operations


phonebook = dict()
backupdata = dict()

choice2 = int(input("ENTER YOUR CHOICE : "))

if choice2 == 1:
    createwritebi()
    print()
    numberofrecords = int(
        input("NO OF RECORDS YOU WANT TO INPUT IN THE NUMBER DIRECTORY : "))
    print()

    for i in range(1, numberofrecords+1):  # (entering records into the phone book)
        Name = input("ENTER THE NAME : ")
        Number = int(input("ENTER THE NUMBER : "))

        if len(str(Number)) > 10:
            print("INVALID NUMBER ENTRY!!! aborting operation")
            break
        else:
            phonebook[Name] = Number
            writebi(Name, str(Number))

    print()

    choicebck = input(
        "PRESS 2 TO ACCESS ANY DIRECTORY OR PRESS ANY KEY TO ABORT THE PROGRAM!! : ")

    if choicebck == str(2):
        print("THE EXISTING DIRECTORY :- ")
        print()

        readirec()

    else:
        print()
        print("YOUR DIRECTORY HAS BEEN SAVED AND IS ENABLED FOR ACCESS.")
        print()
        print("*------- ENDING THE PROGRAM -------*")


elif choice2 == 2:
    print()
    print("THE EXISTING DIRECTORY :- ")
    print()
    readirec()
    print()
    q = input("PRESS ANY KEY TO QUIT : ")

    if q != "":
        print()
        print("*------- ENDING THE PROGRAM -------*")

elif choice2 == 3:
    print('''IN ORDER TO CHANGE YOUR PASSWORD AN OTP HAS BEEN SENT TO YOUR REGISTERED EMAIL ADDRESS :- ''')
    print()
    e = ""
    for i in range(0, 5):
        e += str(random.randint(0, 9))

    with open("emailforotp.dat", "rb") as emotp:
        otpemailid = pickle.load(emotp)

    msg = EmailMessage()  # mailing the otp
    msg['subject'] = "PASSWORD CHANGE OTP..."
    msg["from"] = email_id
    msg["to"] = otpemailid
    msg.set_content("OTP : ")

    msg.add_attachment(e)

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(email_id, email_password)
        smtp.send_message(msg)

    otp = input("ENTER THE OTP : ")

    if e == otp:
        print()
        newpdw = input("ENTER YOUR NEW PASSWORD : ")
        with open("userpwd.dat", "wb") as bipfi:
            pickle.dump(newpdw, bipfi)

        print()
        print("YOUR PASSWORD HAS BEEN CHANGED RESTART THE PROGRAM AND LOG IN WITH THE NEW PASSWORD.")
        print()
        l = input("PRESS ANY KEY TO QUIT : ")

        if l != "":
            print()
            print("*------- ENDING THE PROGRAM -------*")

    else:
        print("WRONG OTP, CLOSE THE PROGRAM AND TRY AGAIN !!!")
elif choice2 == 4:
    print()
    print('''JATIN SINGH 2100320130087 
HARSH TYAGI 2100320130078
HARSH PANDEY 2100320130076

PROJECT NAME SECU-STORE''')

    print()
    k = input("PRESS ANY KEY TO QUIT : ")

    if k != "":
        print()
        print("*------- ENDING THE PROGRAM -------*")

elif choice2 == 5:
    os.remove("backup_directory.txt")
    print("THE DIRECTORY IS DELETED : ")
    print()

    j = input("PRESS ANY KEY TO QUIT : ")

    if j != "":
        print()
        print("*------- ENDING THE PROGRAM -------*")
