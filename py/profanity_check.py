import urllib


def read_text(path):
    file = open(path)
    contents_of_file = file.read()
    file.close()
    message_output(check_profanity(contents_of_file))


def check_profanity(text_to_check):
    connection = urllib.urlopen("http://www.wdylike.appspot.com/?q=" + text_to_check)
    output = connection.read()
    connection.close()
    print(text_to_check)
    return output


def message_output(status):
    if status == "true":
        print("Profanity found")
    elif status == "false":
        print("Text free of curse words")
    else:
        print("Error scanning the document")

read_text("../sample_text.txt")