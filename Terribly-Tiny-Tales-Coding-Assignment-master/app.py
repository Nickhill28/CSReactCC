from flask import Flask, render_template, Response, request, redirect, url_for
app = Flask(__name__)
import urllib3
import operator
from itertools import islice


@app.route("/")
def index():
    return render_template('index.html');

@app.route("/get", methods=['POST'])
def get():
    text = request.form['number']
    text = int(text)
    response = urllib3.urlopen('http://terriblytinytales.com/test.txt')
    html = response.read()
    words = html.split()
    wordfreq = {}
    for word in words:
        if word not in wordfreq:
            wordfreq[word] = 0
        wordfreq[word] += 1
    sorted_x = sorted(wordfreq.items(), key=operator.itemgetter(1), reverse=True)
    ans = (list(islice(sorted_x,text)))
    message = []
    for key in ans:
        message.append(key)
    return render_template('index.html',message=message)

if __name__ == "__main__":
    app.run()
